import $ from 'jquery';
import slick from 'slick-carousel';
export default class slideBanner {
    constructor(element) {
        this.element = $(element);
        this.sliderItem();
        this.sliderItemProduct();
        this.sliderItemTeam();
    }
    sliderItem() {
        this.element.find('.list-banner').slick({
            lazyLoad: 'ondemand',
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 0,
            infinite: true,
            dots: false,
            prevArrow: "<button type='button' class='slick-prev'><img class='img-fluid' src='/images/back-icon.png'></button>",
            nextArrow: "<button type='button' class='slick-next'><img class='img-fluid' src='/images/next-icon.png'></button>",
        });
    }
    sliderItemTeam() {
        this.element.find('.list-team').slick({
            lazyLoad: 'ondemand',
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 3,
            slidesToScroll: 1,
            rows: 0,
            infinite: false,
            dots: true,
            arrows : false,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        });
    }
    sliderItemProduct() {
        this.element.find('.list-banner-product').slick({
            lazyLoad: 'ondemand',
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 3,
            slidesToScroll: 1,
            rows: 0,
            infinite: true,
            dots: true,
            prevArrow: "<button type='button' class='slick-prev'><span aria-hidden='true' class='arrow_carrot-left'></span></button>",
            nextArrow: "<button type='button' class='slick-next'><span aria-hidden='true' class='arrow_carrot-right'></span></button>",
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        });
    }

}