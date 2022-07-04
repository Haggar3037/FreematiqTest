document.addEventListener('DOMContentLoaded', function() {

    posotionEvent ();

    window.addEventListener('scroll', posotionEvent);

    let headerMenuButton =  document.querySelector(".header__container__button");

    headerMenuButton.addEventListener('click', menuEvent);

}, false);  

function posotionEvent () {
    let screenWidth = window.screen.width;
    let scrollDistanse = window.scrollY;
    let header = document.querySelector(".header");

    if (screenWidth > 768) {
        if (scrollDistanse <= 27) {
            let riseBlock = 32-scrollDistanse;
            header.style.paddingTop = riseBlock + "px";
        }

        if (scrollDistanse > 27) {
            header.style.paddingTop = "5px";
        }
    }

    if (scrollDistanse < 100) {
        let shadowOpacity = scrollDistanse/100;
        shadowValue = "0 1px 2px 2px rgba(227, 232, 239, " + shadowOpacity + "), inset  0 0 200px 200px rgba(255, 255, 255, " + shadowOpacity + ")";
        header.style.boxShadow = shadowValue;
    }

    if (scrollDistanse >= 100){
        shadowValue = "0 1px 2px 2px rgba(227, 232, 239, 1), inset  0 0 200px 200px rgba(255, 255, 255, 1)";
        header.style.boxShadow = shadowValue;
    }
}

function menuEvent () {
    let headerMenuButton =  document.querySelector(".header__container__button");
    let headerMenu = document.querySelector('.header__container__menu')
    
    if (headerMenuButton.classList.contains('header__container__button_activ')){
        headerMenuButton.classList.remove('header__container__button_activ');
        headerMenu.classList.remove('header__container__menu_activ');
    } else {
        headerMenuButton.classList.add('header__container__button_activ');
        headerMenu.classList.add('header__container__menu_activ');
    }
}