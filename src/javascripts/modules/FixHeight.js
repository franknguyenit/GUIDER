import matchHeight from 'jquery-match-height';
export default class FixHeight {

    constructor(container) {
        this.container = $(container);
        $(window).resize(this.onResizeWindow.bind(this));
        this.init();
        this.scrollMotion();

    }

    onResizeWindow() {
        this.init();
    }

    init() {
        this.convertHeight('.height-item-v2');
        $(this.container).find('.height-item').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });
        $(this.container).find('.card').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });
        $(this.container).find('.box-item h3').matchHeight({
            byRow: false,
            property: 'height',
            target: null,
            remove: false
        });
        $(this.container).find('.box-item .item-img').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });
        $(this.container).find('.box-item h2').matchHeight({
            byRow: false,
            property: 'height',
            target: null,
            remove: false
        });
        $(this.container).find('.box-item').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });

    }
    convertHeight(element) {
        var ele = this.container.find(element);
        $(ele).innerHeight('auto');
        var h1 = 0;
        var itemss = $(ele);
        itemss.each(function() {
            if (h1 < $(this).innerHeight()) {
                h1 = $(this).innerHeight();
            }
        });
        itemss.each(function() {
            $(this).innerHeight(h1);
        });
    }
    convertWidth(element) {
        var ele = this.container.find(element);
        $(ele).innerWidth('auto');
        var h1 = 0;
        var itemss = $(ele);
        itemss.each(function() {
            if (h1 < $(this).innerWidth()) {
                h1 = $(this).innerWidth();
            }
        });
        itemss.each(function() {
            $(this).innerWidth(h1);
        });
    }
}

new FixHeight();