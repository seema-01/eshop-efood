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

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
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
        if (window.scrollY > 50) {
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

    $(element).parent().html(' <div id="quantity" class="quantity mt-3 buttons_added">' +
        '<button type="button" value="-" id="minus" onclick="minus(this)" class="minus">-</button>' +
        ' <input type="number" min="1" max="10" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" disabled  >' +
        '      <button type="button" value="+" id="plus" onclick="plus( this )" class="minus">+</button>' +
        '</div>').show('slow'.showNext);
}


var total = 0;


function minus(element) {
    var input = $(element).parent().find('input');
    if (Number(input.val()) <= 1) {
        var remove = $(element).parent();
        remove.parent().html('   <button class="btn px-4" onclick="add(this)">Add +</button>');
    } else {

        input.val(Number(input.val()) - 1);


    }
}

function plus(element) {
    var input = $(element).parent().find('input');
    if (Number(input.val()) >= 10) {
        input.val(10);
    } else if (Number(input.val()) < 1) {
        input.val(1);
    } else {

        input.val(Number(input.val()) + 1);

    }
}






// Cart page
var globalTotal = 0;
var itemCount = 0;

function minusQuantity(element) {
    var input = $(element).parent().find('input');
    if (Number(input.val()) <= 1) {
        var remove = $(element).parent().parent().parent();

        remove.html('');


    } else {

        input.val(Number(input.val()) - 1);


        var price = input.parent().parent().next();

        var total = input.val() * price.data('price');


        price.html('  <h5 class="mt-2"><b>$' + total + '</b></h5>');


    }
}

function plusQuantity(element) {
    var input = $(element).parent().find('input');
    if (Number(input.val()) >= 10) {
        input.val(10);

    } else if (Number(input.val()) < 1) {
        input.val(1);
    } else {

        input.val(Number(input.val()) + 1);

        var price = input.parent().parent().next();

        var total = price.data('price') * input.val();


        itemCount += 1;


        globalTotal += price.data('price') * itemCount;

        console.log(globalTotal, itemCount);

        $('#total').html(' <div class="col-4" id="total">$' + globalTotal + '</div>');


        price.html('  <h5 class="mt-2"><b>$' + total + '</b></h5>');


    }

}


$(document).ready(function() {
    $("#myTab a").each(function(index, element) {
        new bootstrap.Tab(element);
    })

    $("#myBtn").click(function() {
        var lastTab = bootstrap.Tab.getInstance($("#myTab a:first")[0]);
        console.log(lastTab);
    });
});

window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });

});