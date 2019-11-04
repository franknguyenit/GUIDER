import bowser from 'bowser';
import slick from 'slick-carousel';
import matchHeight from 'jquery-match-height';

class globalSite {

    a
    static showContentWhenPageLoadFinish() {
        setTimeout(function() {
            $('.over-loader').fadeOut('slow');
        }, 500);
    }

    static checkDevice() {
        let html = $('html');
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            html.addClass('touch');
        } else {
            html.addClass('no-touch');

        }
    }
    static detectBrowser() {
        var browserName = bowser.name;
        var browserVersion = bowser.version;
        var $body = $('html')
        if (browserName === 'Chrome') {
            $body.addClass('chrome');
        }
        if (browserName === 'Firefox') {
            $body.addClass('firefox');
        }
        if (browserName === 'Internet Explorer') {
            $body.addClass('ie');
        }
        if (browserName === 'Microsoft Edge') {
            $body.addClass('edge');
        }
        if (browserName === 'Safari') {
            $body.addClass('safari');
        }
    }
    static selectpicker() {
        $('.selectpicker').selectpicker({
            template: {
                caret: '<i class="fa fa-angle-down caret" aria-hidden="true"></i>'
            },
        });
    }
    static customJs() {}
    static showhidemap() {
        $(".btn-choose").click(function() {
            $(this).addClass("selected");
            $(".btn-choose").not(this).removeClass('selected');
            var mapvalue = $(this).attr("data-modules");
            $(".hieght-map").each(function() {
                $(this).collapse('hide');
            });
            $("#" + mapvalue).collapse('show');
        })
    }
    static scrollTop() {
        // Button back to top
        let scrollTop = $(".scrollTop");

        $(window).scroll(function() {
            // declare variable
            var topPos = $(this).scrollTop();

            // if user scrolls down - show scroll to top button
            if (topPos > 100) {
                $(scrollTop).css("opacity", "1");

            } else {
                $(scrollTop).css("opacity", "0");
            }

        });

        $(scrollTop).click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;

        });

    }
    static scrollDiv() {
        $(window).scroll(function() { // scroll event
            var $about = $('#about').height();
            var $founder = $('#founder').height();
            var $partner = $('#partner').height();
            var $sumheight = 770 + $about + $founder + $partner;
            var $sumbefore = $sumheight + $('#member').height();
            var y = $(this).scrollTop();
            if (y >= $sumheight) {
                $("#planeImages").animate({ right: '-396', top: '-430' }, 4000);
                setTimeout(function() { $(".card-member").css('opacity', '1'); }, 3000);
            }
        });
    }

    static playvideo() {

        $(".play-video").click(function() {
            var video = $('#video-about1').get(0);
            if (!video.paused) {
                $("#btnplay").fadeIn('slow');
                $('#video-about1').get(0).pause();
            } else {

                $("#btnplay").fadeOut('slow');
                $('#video-about1').get(0).play();
            }
        });
    }

}
export default globalSite;