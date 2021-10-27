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

function add(element) {

    $(element).parent().html('<div id="quantity" class="quantity buttons_added"> <input type="button" onclick="minus(' + 'input' + ')" value="-" class="minus"><input type="number" step="1" min="1" max="" name="quantity" id="input" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode=""><input type="button" onclick="plus(' + 'input' + ')" value="+"class="plus"></div></div>');
}

function remove(element) {
    $(element).parent().html('      <button class="btn" onclick="add(this)">Add +</button>')
}

function plus(element) {

    var a = document.getElementById('input').value
    if (Number(a) >= 10) {
        $('.quantity buttons_added').removeClass('buttons_added')
        $('.quantity ').addClass('red')
        $('#input').val(10)
    } else if (Number(a) < 0) {
        $('.quantity buttons_added').removeClass('buttons_added')
        $('.quantity ').addClass('red')
        $('#input').val(0)
    } else {
        $('#input').val(Number(a) + 1)
    }
}

function minus(element) {

    var a = document.getElementById('input').value

    if (Number(a) == 0) {
        remove(this)
    } else if (Number(a) < 0) {
        $('.quantity buttons_added').removeClass('buttons_added')
        $('.quantity ').addClass('red')
        $('#input').val(0)
    } else if (Number(a) > 10) {
        $('.quantity buttons_added').removeClass('buttons_added')
        $('.quantity ').addClass('red')
        $('#input').val(10)
    } else {
        $('#input').val(Number(a) - 1)
    }
}

// change add cart button