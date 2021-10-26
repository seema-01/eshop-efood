var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 1,

    loop: true,
    loopFillGroupWithBlank: true,


    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },

    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    breakpoints: {
        '@200': {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        500: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 10,
        }
    },
});



var swiper = new Swiper(".vertical", {
    direction: "vertical",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

});



var swiper = new Swiper(".our-customer", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false,
    // },
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});



// Sticky navbar

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 105) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});