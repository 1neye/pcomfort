var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    items: 4,
    merge:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

