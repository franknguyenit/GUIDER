import 'popper.js';
import 'bootstrap';
import 'bootstrap-select';
import settings from 'settings';
__webpack_public_path__ = settings.jsPath;
const moduleElements = document.querySelectorAll('[data-module]')

import globalSite from 'modules/globalSite';



globalSite.checkDevice();

globalSite.showContentWhenPageLoadFinish();

globalSite.detectBrowser();

globalSite.selectpicker();

globalSite.scrollTop();

globalSite.customJs();

globalSite.showhidemap();
globalSite.playvideo();

//globalSite.scrollDiv();


for (var i = 0; i < moduleElements.length; i++) {
    const el = moduleElements[i]
    const name = el.getAttribute('data-module')
    const Module = require(`./modules/${name}`).default;
    new Module(el);
}