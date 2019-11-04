var controller = new ScrollMagic.Controller();
var h_window = $(window).height();
var w_window = $(window).innerWidth();
var $header = $('#header');
var $bannerHome = $('.mod-banner');
var $footer = $('#footer');
export default class animationPage {
    constructor(element) {
        this.$element = $(element);
        this.scrollShowContent();
        this.showContent();
    }
    showContent() {
        if (w_window > 1023) {
            if ($header.length) {
                $header.addClass('hide-menu-ani');
                var header = new TimelineMax({
                    onComplete: function() {
                        header.kill();
                        $header.removeClass('hide-menu-ani').find('#main-menu .ul-menu >li').css('transform', '');

                    }
                });
                header.staggerFrom($header.find('.logo-header'), 0.7, { delay: .2, y: "-=70px", opacity: 0, ease: Back.easeOut.config(1) }, 0.02)
                    .staggerFrom($header.find('#main-menu .ul-menu >li'), 0.7, { x: "+=70px", opacity: 0, ease: Back.easeOut.config(1) }, 0.1);
                var scene = new ScrollMagic.Scene({ triggerElement: $header, offset: 0 })
                    .setTween(header)
                    // .addIndicators()
                    .addTo(controller);
            }

            if ($bannerHome.length) {
                var bannerHome = new TimelineMax({
                    onComplete: function() {
                        bannerHome.kill();
                    }
                });
                bannerHome.staggerFrom($bannerHome.find('.swiper-pagination'), 0.7, { delay: .5, x: "-=70px", opacity: 0, ease: Back.easeOut.config(1) }, 0.2);
                var scene = new ScrollMagic.Scene({ triggerElement: $bannerHome, offset: 0 })
                    .setTween(bannerHome)
                    // .addIndicators()
                    .addTo(controller);
            }
        }
    }

    scrollShowContent() {
        var $sectionContent = $('section, #footer, .section-animation');
        if (w_window > 1023) {
            if ($sectionContent.length) {
                $sectionContent.each(function() {
                    var currentStrong = this;
                    var _this = $(this);
                    var sectionContent = new TimelineMax({
                        onComplete: function() {
                            sectionContent.kill();
                            //$('.section-map .form-field').css('transform', '');
                            _this.find('.ani-left,.ani-right,.ani-bottom,.ani-top').css('transform', '');
                        }
                    });
                    sectionContent.from(_this.find('.ani-left2'), 0.7, { scale: 0, opacity: 0, ease: Back.easeOut.config(1) }, 0.2)
                        .from(_this.find('.ani-left'), 0.7, { x: "-=70px", opacity: 0, ease: Back.easeOut.config(1) }, 0.2)
                        .from(_this.find('.ani-right'), 0.7, { delay: .5, x: "+=70px", opacity: 0, ease: Back.easeOut.config(1) }, 0.2)
                        .from(_this.find('.ani-bottom'), 0.7, { delay: .5, y: "+=40px", opacity: 0, ease: Back.easeOut.config(1) }, 0.2)
                        .from(_this.find('.ani-top'), 0.7, { delay: .5, y: "-=40px", opacity: 0, ease: Back.easeOut.config(1) }, 0.2)
                        .staggerFrom(_this.find('.ani-bottom-child >*'), 0.7, { y: "+=70px", opacity: 0, ease: Back.easeOut.config(1) }, 0.2)
                    var scene = new ScrollMagic.Scene({ triggerElement: currentStrong, offset: -(h_window / 3) })
                        .setTween(sectionContent)
                        //.addIndicators()
                        .addTo(controller);
                });  
            }
        }
    }
}