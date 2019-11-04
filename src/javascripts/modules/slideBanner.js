import $ from 'jquery';
import slick from 'slick-carousel';
export default class slideBanner {
    constructor(element) {
        this.element = $(element);
        this.sliderItem();
        this.sliderItemProduct();
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
    sliderItemProduct() {
        this.element.find('.list-banner-product').slick({
            lazyLoad: 'ondemand',
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 5,
            slidesToScroll: 1,
            rows: 0,
            infinite: true,
            dots: false,
            prevArrow: "<button type='button' class='slick-prev pull-left'><img class='img-fluid' src='/images/back-icon.png'></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><img class='img-fluid' src='/images/next-icon.png'></button>",
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