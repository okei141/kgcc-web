addEventListener('DOMContentLoaded', function () {
    var swiperMain = new Swiper('.banner .banner_main', {
        speed: 1500,
        effect: 'fade',
        pagination: '.swiper-pagination',
        paginationClickable: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var swiperThumb = new Swiper('.banner .thumbnail', {
        speed: 1500,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 4,
        slideToClickedSlide: true,
        controller: {
            control: swiperMain,
            inverse: false,
            by: 'slide'
        },
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            reverseDirection: false
        },
    });
    swiperThumb.params.control = swiperMain;
    swiperMain.params.control = swiperThumb;
}, false);
