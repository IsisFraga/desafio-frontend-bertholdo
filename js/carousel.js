; (function () {
    function shelfSlick() {
        console.log($('.imgs'))
        $('.imgs').slick({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }
    shelfSlick()
})()
