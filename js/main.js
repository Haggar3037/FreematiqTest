document.addEventListener('DOMContentLoaded', function() {
    let levelRadio = document.querySelectorAll('.rating__selection__visualization__level__radio');
    let selectionElement = document.querySelector('.rating__selection__visualization');

    for(i = 0; i < levelRadio.length; i++) {
        levelRadio[i].addEventListener('click', levelCheck);
    }
    levelCheck ();

    selectionElement.addEventListener('mousedown', selectionDown);
    selectionElement.addEventListener('mousedown', transferCheck);
}, false);  

function selectionDown () {
    let selectionBlock = document.querySelector('.rating');
    selectionBlock.addEventListener('mousemove', transferCheck);
}

function  selectionUp () {
    let selectionElement = document.querySelector('.rating__selection__visualization');
    let selectionBlock = document.querySelector('.rating');
    let levelRadio = document.querySelectorAll('.rating__selection__visualization__level__radio');

    selectionBlock.removeEventListener('mousemove', transferCheck);
    selectionBlock.removeEventListener('mouseout', selectionUp);
    window.removeEventListener('mouseup', selectionUp);


    let position = parseInt(selectionElement.style.getPropertyValue('--selecti-position') + "px");
    let positionSum = levelRadio.length -1;
    let selectionWidth = selectionElement.offsetWidth;
    let positionNum = Math.round(position/(selectionWidth/positionSum));

    for(i = 0; i <= positionSum; i++) {
        if(levelRadio[i].checked) {
            if(i != positionNum) {
                levelRadio[i].checked = false;
            }
        } else {
            if (i == positionNum) {
                levelRadio[i].checked = true;
            }
        }
    }

    levelCheck ();
}

function transferCheck (e) {
    let position = 0;
    let selectionElement = document.querySelector('.rating__selection__visualization');
    let selectionElementPosition =  selectionElement.getBoundingClientRect();
    let selectionBlock = document.querySelector('.rating');


    position = e.pageX - selectionElementPosition.left;
    if(position>=0 && position <= selectionElement.offsetWidth) {
        selectionElement.style.setProperty('--selecti-position', position + "px");
        selectionElement.style.setProperty('--gardient-position',  selectionElement.offsetWidth - position + "px");
    }

    selectionBlock.addEventListener('mouseout', selectionUp);
    window.addEventListener('mouseup', selectionUp);
}

function levelCheck () {
    let levelRadio = document.querySelectorAll('.rating__selection__visualization__level__radio');
    let selectionElement = document.querySelector('.rating__selection__visualization');
    let position = 0;

    for (i = 0; i < levelRadio.length; i++) {
        if (levelRadio[i].checked) {
            position = 25*i;
        }
    }

    selectionElement.style.setProperty('--selecti-position', position + "%");
    selectionElement.style.setProperty('--gardient-position',  (100 - position) + "%");
}