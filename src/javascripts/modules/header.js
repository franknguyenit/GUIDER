import $ from 'jquery';
export default class header {
    constructor(element) {
        this.html = $('html');
        this.header = $(element);
        this.wrapper = $('#wrapper');
        this.menuBar = $('#open-menu');
        this.mainMenu = $('#main-menu');
        $(window).resize(this.onResizeWindow.bind(this));
        this.pinHeader();
        this.openMenuMobile();
        this.openSubMenu();
        this.openLinkMenu();
        this.element = element;
    }

    onResizeWindow() {
        this.pinHeader();
    }

    pinHeader() {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > 0) {
            this.header.addClass('fixed-menu');
        }
        $(window).scroll(function() {
            let scrollTop = $(window).scrollTop();
            if (scrollTop > 0) {
                this.header.addClass('fixed-menu');
            } else {
                this.header.removeClass('fixed-menu');
            }
        }.bind(this));
    }

    openMenuMobile() {
        this.menuBar.click(function(e) {
            const ele = e.currentTarget;
            if ($(ele).hasClass('open-menu')) {
                $(ele).removeClass('open-menu');
                this.mainMenu.removeClass('open-menu');
            } else {
                $(ele).addClass('open-menu');
                this.mainMenu.addClass('open-menu');
            }
        }.bind(this))
    }

    openLinkMenu() {
        $('.dropdown-menu>li>a').click(function() {
            if ($(window).innerWidth() < 768) {
                $('#open-menu').removeClass('open-menu');
                $('#main-menu').removeClass('open-menu');
            }
        })
    }

    openSubMenu() {
        this.header.find('#main-menu>li .icon-show').click(function(e) {
            if (!$(this).hasClass('open-submenu')) {
                $('.icon-show').removeClass('open-submenu');
                $('.dropdown-menu').removeClass('active', 3000);
                $(this).addClass('open-submenu');
                $(this).parent().find('.dropdown-menu').addClass('active', 3000);
            } else {
                $('.icon-show').removeClass('open-submenu');
                $('.dropdown-menu').removeClass('active', 3000);
            }
        })
    }
}