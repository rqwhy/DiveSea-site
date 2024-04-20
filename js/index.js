var swiper = new Swiper(".hero__slider", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
});

var swiper = new Swiper(".weekly__slider", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: 5.5,
    loop:true,

    breakpoints: {
        1800: {
            slidesPerView: 5.5,
        },

        1024: {
            slidesPerView: 4.5
        }
    }
});

var swiper = new Swiper(".wallet__slider", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
});