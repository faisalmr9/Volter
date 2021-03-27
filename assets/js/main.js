//first slider script//

var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        effect: 'fade',
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + '.' + '</span>';
        },
    },
    //	autoplay: {
    //		delay: 3000,
    //		disableOnInteraction: false
    //	}

});


//2nd slider script//

var swiper = new Swiper('.swiper-container_2', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
        el: '.swiper-pagination_2',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + '.' + '</span>';
        },
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    }
});