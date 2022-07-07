document.addEventListener('DOMContentLoaded', function() {
    let arrowRigth = document.querySelector(".slider__navigation__arrowRigth");
    let arrowLeft = document.querySelector(".slider__navigation__arrowLeft");



    $('.slider__cardBox').slick({
        prevArrow: arrowLeft,
        nextArrow: arrowRigth,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    check ();

    arrowLeft.addEventListener('click', check);
    arrowRigth.addEventListener('click', check);
    window.addEventListener('resize', check);
}, false);  

function check () {
    let currentSlide = $('.slider__cardBox').slick('slickCurrentSlide') + 1;
    let slideCount =  $('.slider__cardBox').slick("getSlick").slideCount;

    let posotionThis = 0;
    let posotionAll = 0;

    if(window.screen.width > 1024) {
        posotionThis = Math.ceil(currentSlide / 3);
        posotionAll = Math.ceil(slideCount / 3); 
    } else if ( window.screen.width > 480) {
        posotionThis = Math.ceil(currentSlide / 2);
        posotionAll = Math.ceil(slideCount / 2);
    } else {
        posotionThis = currentSlide;
        posotionAll = slideCount;
    }

    posotionThis = ('0' + posotionThis).slice(-2);
    posotionAll = "/ " + (('0' + posotionAll).slice(-2));

    document.getElementById("slideNavThis").innerHTML = posotionThis;
    document.getElementById("slideNavAll").innerHTML = posotionAll;
}