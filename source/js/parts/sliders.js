function initSliderTop() {

    $('.js-slider-top').slick({
        lazyLoad: 'ondemand',
        infinite: false,
        dots: true,
        vertical: true,
        customPaging : function(slider, i) {
            var targetImage = slider.$slides.eq(i).find('img').data("image");
            return '<img src="'+targetImage+'" alt="Превью репродукций картин" role="tab"/>';
        },  
    });

}

function initSliderPopular() {
    $('.js-slider-popular').slick({
        lazyLoad: 'progressive',
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        centerPadding: '60px',
    });
}

function initShadowColor() {
    
    var images = $('.slider-popular__image');
    $.each(images, function () {
        var shadowColor = $(this).attr('data-shadow');
        $(this).css('color', shadowColor);
    })
   
}

export default function initSliders() {
    initSliderTop();
    initSliderPopular();
    initShadowColor();
  }
  