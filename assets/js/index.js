$(document).ready(function () {
    testimonialsSlide();
})

$(window).resize(function () {
    testimonialsSlide();
})

function testimonialsSlide() {
    var slides = 1;
    if ($(window).width() >= 768) {
        slides = 2;
    }
    var swiper = new Swiper(".testimonials_swiper", {
        cssMode: true,
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 40
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}