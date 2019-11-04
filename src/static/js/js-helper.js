// call slider slick
export default class sliderCasestudy {
    constructor(element) {
        this.element = $(element);
        this.initSlide();
    }

    initSlide(){
        if (this.element.length<2) {
            this.element.addClass('one-item');
        }

        this.element.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            slide: '.item',
            //appendArrows: 'name arrow', 
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>', 
            responsive: [
            {
                breakpoint: 768,
                settings: {
                    adaptiveHeight: true
                }
            }
            ]
        });
    }
}

// search header expand
export default class searchHeader {
    constructor(container) {
        this.container = $(container);
        $(window).resize(this.onResizeWindow.bind(this));
        this.callClick();

    }
    onResizeWindow(){
    }
    callClick(){
        let searchHeader = $('.search-header');
        searchHeader.find('.mod-search').click(function(event) {
            searchHeader.addClass('in');
            setTimeout(function() {
                $('.form-search').focus();
            }, 300);
            
        });
        searchHeader.find('.btn-close').click(function(event) {
            searchHeader.removeClass('in');
        });
        searchHeader.find('.mod-search').hover(function() {
            $(this).parents(searchHeader).addClass('hover');
        }, function() {
            searchHeader.removeClass('hover');
        });
        $(document).click(function(event){
            if(!$(event.target).is(".search-header, .search-header*, .search-block-form, .search-block-form *, .mod-search, .mod-search *")){
                if (searchHeader.hasClass('in')) {
                    console.log(event.target);
                    searchHeader.removeClass('in');
                }
            }
        });
    }
}

// run number
export default class runNumber {
    constructor(element) {
        this.element = $(element);
        this.runNumber();
    }
    runNumber(){
        var items = $('.number-done .counter');
        for (var i = 0; i < items.length; i++) {
            var element = $(items[i]);
            var max = parseInt(element.attr('data'));
            count(element, 0, max, 1000);
        }
        function count(element, startNum, endNum, time) {
            var curnum = startNum;
            element.text(curnum);
            var speed = time / (endNum - startNum);
            var timer = window.setInterval(function() {
                if (curnum < endNum) {
                    curnum++;
                    element.text(curnum);
                } else {
                    clearInterval(timer);
                }
            }, speed);
        }
        $('.mod-stats').removeClass('number-done');
    }
}

// click expand bio
export default class leaderShipMember {
    constructor(element) {
        this.element = $(element);
        this.collapeMember();
        $(window).resize(this.onResizeWindow.bind(this));
    }
    onResizeWindow(){
        if ( $(window).innerWidth()<767) {
            //$('.item-member').removeClass('active');
            //$('.folder-expaned').insertAfter('.slider-leadership');
        }
    }
    collapeMember(){
        var mod = $('.leadership-member');
        var items = mod.find('.item-col');
        var folder = mod.find('.folder-expaned');
        var slider;
        $('.close-expaned').click(function(event) {
            folder.removeClass('in');
            items.find('.item-member').removeClass('active');
        });
        items.on('click', function(event) {
            var index = $(this).find('.item-member').attr('item-member');
            items.find('.item-member').removeClass('active');
            $(this).find('.item-member').addClass('active');

            items = mod.find('.item-col');

            var selectedItem = $(this).position();
            var itemsSameTopValue = items.filter(function(i, item){
                if($(item).position().top === selectedItem.top){
                    return item;
                }
            });

            var lastItem = $(itemsSameTopValue[itemsSameTopValue.length - 1]);

            folder.removeClass('in');
            $('.folder-expaned[item-member="'+index+'"]').addClass('in').insertAfter(lastItem);
            $('html,body').animate({
                scrollTop: $(this).find('.item-member').offset().top - $('#header').innerHeight() - 20
            },'slow');
        });
    }
}

// animation-cicrle
export default class leaderShipBanner {
    constructor(element) {
        this.element = $(element);
        this.animation();
    }
    animation (item){
        if(item.hasClass('anim-done')) return;
        item.addClass('anim-done');

        console.log(1);
        var twoPi = Math.PI * 2;
        var piTwo = Math.PI / 2;

        var rad = n => n % 360 * Math.PI / 180;
        var deg = n => n * 180 / Math.PI % 360;

        function getPath(x, y, r, a1, a2) {

            var sweep = a2 - a1 <= 180 ? 0 : 1;

            a1 = rad(a1) - piTwo;
            a2 = rad(a2) - piTwo;

            var start = {
                x: x + r * Math.cos(a2),
                y: y + r * Math.sin(a2)
            };

            var end = {
                x: x + r * Math.cos(a1),
                y: y + r * Math.sin(a1)
            };

            var d = [
            "M", start.x, start.y,
            "A", r, r, 0, sweep, 0, end.x, end.y,
            "L", x, y,
            "z"
            ].join(" ");

            return d;
        }

        var complete = function () {
        };

        item.find('.leadership-circle .circle').each(function(index, el) {
            let elm = $(el);
            let elmClipArc = elm.find(".clipArc");
            let elmCouter = elm.find(".counter");
            let maxVal = parseInt(elm.attr('data-max'));
            let currentVal = parseInt(elm.attr('data-value'));
            let number = (360 / maxVal *  currentVal);
            let arc = {start: 0, end: 0, cx: 31, cy: 31, r: 31};
            let counter = { var: 0 };

            TweenMax.to(counter, 1, {
             var: currentVal,
             onUpdate: function () {
                elmCouter.text(Math.ceil(counter.var));
            },
            ease: Power0.easeNone
        });

            TweenMax.to(arc, 1, {
                start: 0,
                end: number,
                repeat:false,
                onUpdate: clipPath,
                ease: Power0.easeNone,
                onComplete: complete
            });

            function clipPath() {
                var d = getPath(arc.cx, arc.cy, arc.r, arc.start, arc.end - 0.01);
                elmClipArc.attr('d', d);
            }
        });
    }
}

// Faq toggle
export default class FAQ {
    constructor(el) {
        this.el = el
        this.initFadeToggle();
    }
    initFadeToggle(){
        $('.item-faq h4').click(function () {
            var $heightH = $( '#header' );
            if ($(this).parent().hasClass('in')) {
                $(this).parent().removeClass('in').find('.text-faq').slideUp('fast');
            }else{
                $(this).parent().addClass('in').find('.text-faq').slideDown('fast');
                $('html, body').animate({
                    scrollTop: $(this).parent().offset().top - $heightH.innerHeight() -10
                }, 'slow');
            }
        })
    }
}

// masonry
import jQueryBridget from 'jquery-bridget';
import masonry from 'masonry-layout';
export default class getMasonry {
    constructor(el) {
        this.el = el;
        this.callMasory();
        this.callReadMore();
    }
    callMasory(){
        jQueryBridget( 'masonry', masonry, $ );
        $('.masonry').masonry({
            itemSelector: '.grid-item',
        });
    }
    callReadMore(){
        $(document).on('click', '.read-more-trigger', function(event) {
            if ($(this).parent().find('.read-more-target').hasClass('read-more-target-in')) {
                $(this).text($(this).attr('content-show'));
                
                $(this).parent().find('.three-dot').show();
                $(this).parent().find('.read-more-target').removeClass('read-more-target-in');
                $('.masonry').masonry({
                    itemSelector: '.grid-item',
                });
            }
            else{
                $(this).parent().find('.read-more-target').addClass('read-more-target-in');
                $(this).parent().find('.three-dot').hide();
                $(this).text($(this).attr('content-less'));
                $('.masonry').masonry({
                    itemSelector: '.grid-item',
                });
            }
        })
    }
}
// mCustomScrollbar 
import mouseWheel from 'jquery-mousewheel';
import mCustomScrollbar from 'malihu-custom-scrollbar-plugin';
export default class ScrollProduct {
    constructor(el) {
        this.el = el
        this.callScroll();
        $(window).resize(this.onResizeWindow.bind(this));
    }
    onResizeWindow(){
        var $height = $('.mod-image-gallery .slider-for-gallery');
        var $divScroll = $(".mod-image-gallery .nav-image");
        $divScroll.css('height', $height.innerHeight()+2);
    }
    callScroll(){
        var $height = $('.mod-image-gallery .slider-for-gallery');
        var $divScroll = $(".mod-image-gallery .nav-image");
        $divScroll.mCustomScrollbar({
            setHeight: $height.innerHeight(),
            theme:"dark-3"
        });
    }
}
// set width element
export default class SetWidth {
    constructor(element) {
        this.element = $(element);
        this.setWidthLi();
         $(window).resize(this.onResizeWindow.bind(this));
    }
     onResizeWindow(){
       this.setWidthLi();
    }
    setWidthLi() {
        $('element').each(function(index, el) {
            $(this).css({
                width: ''
            });
            $(this).each(function(index, el) {
                var $this = $(this);
                setTimeout(function() {
                    $this.css({
                        width: $this.innerWidth()
                    });
                }, 300);
            });
        });
    }
}
// click play-video
export default class VideoIfram {
    constructor(el) {
        this.el = el
        $('.icon-video').on('click', function(ev) {
            $(this).parents('.video-lightbox').find('.video-img').addClass('play-video');
            $(this).parents('.video-lightbox').find('.embed-responsive-item')[0].src += "&autoplay=1";
            ev.preventDefault();
        });
    }
}

import $ from 'jquery';
export default class menuSelect {
    constructor(element) {
        this.element = $(element);
        this.menuCoslapMB();
    }

    menuCoslapMB(){
        this.element.find('.active-li').click(function(event) {
            if ($(this).parent().hasClass('in')) {
                $(this).parent().removeClass('in');
            }else{
                $(this).parent().addClass('in');
            }
        });
        this.element.find('.nav-menu li a').click(function(event) {
            $('.main-nav li, .nav-menu li').removeClass('active');
            $(this).parent().addClass('active');
            $(this).parents('.nav-bar-home, .mod-sub-menu').removeClass('in');
            $(this).parents('.nav-bar-home, .mod-sub-menu').find('.active-li span').text($(this).text());
        });
        $(document).click(function(e){
            if(!$(e.target).is('.nav-bar-home, .nav-bar-home *, .mod-sub-menu, .mod-sub-menu *')){
                $('.nav-bar-home, .mod-sub-menu').removeClass('in');
            }
        })
        $('#main-content').css('min-height', $("#main-content .nav-bar-home").innerHeight());
    }

}