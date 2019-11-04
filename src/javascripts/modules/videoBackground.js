import $ from 'jquery';
export default class videoBackground {
    constructor(element) {
        this.element = $(element);
        this.element.find('.video-img').on('click', function(ev) {
            $(this).parents('.video-lightbox').find('.video-img').addClass('play-video');
            $(this).parents('.video-lightbox').find('.embed-responsive-item')[0].src += "&autoplay=1";
            ev.preventDefault();
        });


    }

}