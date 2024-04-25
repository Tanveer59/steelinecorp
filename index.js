// Slider
function slider(sliderId, velocidade) {
    var sliderSelector = '#' + sliderId,
        activeClass = 'active',
        rotate = setInterval(rotateSlide, velocidade);

    $(sliderSelector + ' > :first').addClass(activeClass);

    $(sliderSelector).hover(function() {
        clearInterval(rotate);
    }, function() {
        rotate = setInterval(rotateSlide, velocidade);
    });

    function rotateSlide() {
        var activeSlide = $(sliderSelector + ' > .' + activeClass),
            nextSlide = activeSlide.next();

        if (nextSlide.length == 0) {
            nextSlide = $(sliderSelector + ' > :first');
        }
        activeSlide.removeClass(activeClass);
        nextSlide.addClass(activeClass);
    }
}
slider('contianer-product', 5000);