webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/sass/main.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/sass/main.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_PURE_IMPORT_0___ = __webpack_require__(/*! ../static/svgs/who-am-i.svg */ "./src/static/svgs/who-am-i.svg");
var ___CSS_LOADER_URL_PURE_IMPORT_1___ = __webpack_require__(/*! ../static/svgs/wanna-go-home.svg */ "./src/static/svgs/wanna-go-home.svg");
var ___CSS_LOADER_URL_PURE_IMPORT_2___ = __webpack_require__(/*! ../static/svgs/you-like-magic.svg */ "./src/static/svgs/you-like-magic.svg");
var ___CSS_LOADER_URL_PURE_IMPORT_3___ = __webpack_require__(/*! ../static/svgs/like-my-stuff.svg */ "./src/static/svgs/like-my-stuff.svg");
var ___CSS_LOADER_URL_PURE_IMPORT_4___ = __webpack_require__(/*! ../static/svgs/call-me-maybe.svg */ "./src/static/svgs/call-me-maybe.svg");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap);"]);
var ___CSS_LOADER_URL_IMPORT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_0___);
var ___CSS_LOADER_URL_IMPORT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_1___);
var ___CSS_LOADER_URL_IMPORT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_2___);
var ___CSS_LOADER_URL_IMPORT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_3___);
var ___CSS_LOADER_URL_IMPORT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_4___);
// Module
exports.push([module.i, ":root {\n  --main-theme-color: #ffffff;\n  --main-text-color: #000000;\n}\n\nhtml,\nbody {\n  margin: 0;\n  background-color: var(--main-theme-color);\n  font-family: \"Anton\", sans-serif;\n}\n\nhtml {\n  width: 100vw;\n  height: 100vh;\n}\n@media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {\n  html {\n    transform: rotate(-90deg);\n    transform-origin: left top;\n    width: 100vh;\n    height: 100vw;\n    overflow-x: hidden;\n    position: absolute;\n    top: 100%;\n    left: 0;\n  }\n}\n\nbody {\n  width: 100%;\n  height: 100%;\n}\n\nbutton,\ninput {\n  font-family: \"Arvo\", serif;\n  color: var(--main-text-color);\n}\n\na,\na:active,\na:visited {\n  color: inherit;\n  text-decoration: none;\n}\n\n@media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {\n  .hidden-on-landscape {\n    width: 100%;\n    height: 100%;\n    display: block;\n    box-sizing: border-box;\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .hidden-on-landscape__container {\n    transform: rotate(90deg);\n  }\n  .hidden-on-landscape__heading {\n    margin: 0;\n    line-height: 1;\n  }\n  .hidden-on-landscape__helper-text {\n    font-size: 12px;\n    margin: 0;\n  }\n}\n.pointer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  mix-blend-mode: difference;\n  transform: translate(-10px, -10px);\n}\n.pointer--no-blend {\n  mix-blend-mode: normal;\n}\n.pointer__cursor {\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: var(--main-theme-color);\n  transition-property: top, left, width, height;\n  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;\n}\n.pointer__cursor--is-on-title {\n  width: 30px;\n  height: 30px;\n  top: -15px;\n  left: -15px;\n  -webkit-animation: pulse 1.5s infinite;\n          animation: pulse 1.5s infinite;\n  transform: scale(1);\n}\n.pointer__cursor--is-on-title::after {\n  content: \"\";\n  position: absolute;\n  top: -8px;\n  left: -8px;\n  height: 30px;\n  width: 30px;\n  padding: 4px;\n  border: 4px solid var(--main-theme-color);\n  border-radius: 50%;\n  -webkit-animation: pulse 1.5s infinite;\n          animation: pulse 1.5s infinite;\n  transform: scale(1);\n}\n.pointer__cursor--is-on-link {\n  width: 50px;\n  height: 50px;\n  top: -25px;\n  left: -25px;\n}\n.pointer__cursor--is-on-link::after {\n  content: \"click me\";\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  top: 10px;\n  left: 0px;\n  text-align: center;\n  font-size: 0.5em;\n  line-height: 1;\n}\n.pointer__cursor--is-on-nav {\n  width: 50px;\n  height: 50px;\n  top: -25px;\n  left: -25px;\n  background-color: rgba(128, 128, 128, 0.5);\n}\n.pointer__cursor--on-about-page::after {\n  content: \"\";\n  position: absolute;\n  width: 80px;\n  height: 80px;\n  top: -15px;\n  left: -15px;\n  background: url(" + ___CSS_LOADER_URL_IMPORT_0___ + ");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: contain;\n  -webkit-animation: spin 8s linear infinite;\n          animation: spin 8s linear infinite;\n}\n.pointer__cursor--on-home-page::after {\n  content: \"\";\n  position: absolute;\n  width: 80px;\n  height: 80px;\n  top: -15px;\n  left: -15px;\n  background: url(" + ___CSS_LOADER_URL_IMPORT_1___ + ");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: contain;\n  -webkit-animation: spin 8s linear infinite;\n          animation: spin 8s linear infinite;\n}\n.pointer__cursor--on-skills-page::after {\n  content: \"\";\n  position: absolute;\n  width: 80px;\n  height: 80px;\n  top: -15px;\n  left: -15px;\n  background: url(" + ___CSS_LOADER_URL_IMPORT_2___ + ");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: contain;\n  -webkit-animation: spin 8s linear infinite;\n          animation: spin 8s linear infinite;\n}\n.pointer__cursor--on-portfolio-page::after {\n  content: \"\";\n  position: absolute;\n  width: 80px;\n  height: 80px;\n  top: -15px;\n  left: -15px;\n  background: url(" + ___CSS_LOADER_URL_IMPORT_3___ + ");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: contain;\n  -webkit-animation: spin 8s linear infinite;\n          animation: spin 8s linear infinite;\n}\n.pointer__cursor--on-contact-page::after {\n  content: \"\";\n  position: absolute;\n  width: 80px;\n  height: 80px;\n  top: -15px;\n  left: -15px;\n  background: url(" + ___CSS_LOADER_URL_IMPORT_4___ + ");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: contain;\n  -webkit-animation: spin 8s linear infinite;\n          animation: spin 8s linear infinite;\n}\n\n@-webkit-keyframes pulse {\n  0% {\n    transform: scale(0.95);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(0.95);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(0.95);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(0.95);\n  }\n}\n@-webkit-keyframes spin {\n  0% {\n    transform: rotateZ(0);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotateZ(0);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}", "",{"version":3,"sources":["_common.scss","main.scss","_base.scss","../elements/mouse-tracker/mouse-tracker.scss"],"names":[],"mappings":"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","file":"main.scss","sourcesContent":[":root {\n  --main-theme-color: #ffffff;\n  --main-text-color: #000000;\n}\n\nhtml,\nbody {\n  margin: 0;\n  background-color: var(--main-theme-color);\n  font-family: 'Anton', sans-serif;\n}\n\nhtml {\n  width: 100vw;\n  height: 100vh;\n\n  @include for-size(landscape-mode-only) {\n    transform: rotate(-90deg);\n    transform-origin: left top;\n    width: 100vh;\n    height: 100vw;\n    overflow-x: hidden;\n    position: absolute;\n    top: 100%;\n    left: 0;\n  }\n}\n\nbody {\n  width: 100%;\n  height: 100%;\n}\n\nbutton,\ninput {\n  font-family: 'Arvo', serif;\n  color: var(--main-text-color);\n}\n\na,\na:active,\na:visited {\n  color: inherit;\n  text-decoration: none;\n}\n\n@include for-size(landscape-mode-only) {\n  .hidden-on-landscape {\n    width: 100%;\n    height: 100%;\n    display: block;\n    box-sizing: border-box;\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &__container {\n      transform: rotate(90deg);\n    }\n\n    &__heading {\n      margin: 0;\n      line-height: 1;\n    }\n\n    &__helper-text {\n      font-size: 12px;\n      margin: 0;\n    }\n  }\n}\n","@import url(\"https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap\");\n:root {\n  --main-theme-color: #ffffff;\n  --main-text-color: #000000;\n}\n\nhtml,\nbody {\n  margin: 0;\n  background-color: var(--main-theme-color);\n  font-family: \"Anton\", sans-serif;\n}\n\nhtml {\n  width: 100vw;\n  height: 100vh;\n}\n@media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {\n  html {\n    transform: rotate(-90deg);\n    transform-origin: left top;\n    width: 100vh;\n    height: 100vw;\n    overflow-x: hidden;\n    position: absolute;\n    top: 100%;\n    left: 0;\n  }\n}\n\nbody {\n  width: 100%;\n  height: 100%;\n}\n\nbutton,\ninput {\n  font-family: \"Arvo\", serif;\n  color: var(--main-text-color);\n}\n\na,\na:active,\na:visited {\n  color: inherit;\n  text-decoration: none;\n}\n\n@media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {\n  .hidden-on-landscape {\n    width: 100%;\n    height: 100%;\n    display: block;\n    box-sizing: border-box;\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .hidden-on-landscape__container {\n    transform: rotate(90deg);\n  }\n  .hidden-on-landscape__heading {\n    margin: 0;\n    line-height: 1;\n  }\n  .hidden-on-landscape__helper-text {\n    font-size: 12px;\n    margin: 0;\n  }\n}\n.pointer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  mix-blend-mode: difference;\n  transform: translate(-10px, -10px);\n}\n.pointer--no-blend {\n  mix-blend-mode: normal;\n}\n.pointer__cursor {\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: var(--main-theme-color);\n  transition-property: top, left, width, height;\n  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;\n}\n.pointer__cursor--is-on-title {\n  width: 30px;\n  height: 30px;\n  top: -15px;\n  left: -15px;\n  animation: pulse 1.5s infinite;\n  transform: scale(1);\n}\n.pointer__cursor--is-on-title::after {\n  content: \"\";\n  position: absolute;\n  top: -8px;\n  left: -8px;\n  height: 30px;\n  width: 30px;\n  padding: 4px;\n  border: 4px solid var(--main-theme-color);\n  border-radius: 50%;\n  animation: pulse 1.5s infinite;\n  transform: scale(1);\n}\n.pointer__cursor--is-on-link {\n  width: 50px;\n  height: 50px;\n  top: -25px;\n  left: -25px;\n}\n.pointer__cursor--is-on-link::after {\n  content: \"click me\";\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  top: 10px;\n  left: 0px;\n  text-align: center;\n  font-size: 0.5em;\n  line-height: 1;\n}\n.pointer__cursor--is-on-nav {\n  width: 50px;\n  height: 50px;\n  top: -25px;\n  left: -25px;\n  background-color: rgba(128, 128, 128, 0.5);\n}\n.pointer__cursor--on-about-page::after {\n  content: \"\";\n  position: absolute;\n  width: 80px;\n  height: 80px;\n  top: -15px;\n  left: -15px;\n  background: url(\"../../static/svgs/who-am-i.svg\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: contain;\n  animation: spin 8s linear infinite;\n}\n.pointer__cursor--on-home-page::after {\n  content: \"\";\n  position: absolute;\n  width: 80px;\n  height: 80px;\n  top: -15px;\n  left: -15px;\n  background: url(\"../../static/svgs/wanna-go-home.svg\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: contain;\n  animation: spin 8s linear infinite;\n}\n.pointer__cursor--on-skills-page::after {\n  content: \"\";\n  position: absolute;\n  width: 80px;\n  height: 80px;\n  top: -15px;\n  left: -15px;\n  background: url(\"../../static/svgs/you-like-magic.svg\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: contain;\n  animation: spin 8s linear infinite;\n}\n.pointer__cursor--on-portfolio-page::after {\n  content: \"\";\n  position: absolute;\n  width: 80px;\n  height: 80px;\n  top: -15px;\n  left: -15px;\n  background: url(\"../../static/svgs/like-my-stuff.svg\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: contain;\n  animation: spin 8s linear infinite;\n}\n.pointer__cursor--on-contact-page::after {\n  content: \"\";\n  position: absolute;\n  width: 80px;\n  height: 80px;\n  top: -15px;\n  left: -15px;\n  background: url(\"../../static/svgs/call-me-maybe.svg\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: contain;\n  animation: spin 8s linear infinite;\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(0.95);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(0.95);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotateZ(0);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}","@import url('https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap');\n\n$breakpoint-mobile-landscape: 480px;\n$breakpoint-between-mobile-tablet: 628px;\n$breakpoint-tablet-portrait: 768px;\n$breakpoint-tablet-landscape: 992px;\n$breakpoint-desktop: 1200px;\n\n@mixin for-size($size) {\n  @if $size == phone-only {\n    @media (max-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == landscape-mode-only {\n    @media screen and (min-width: 320px) and (max-width: $breakpoint-tablet-portrait - 1px) and (orientation: landscape) {\n      @content;\n    }\n  } @else if $size == tablet-phone-only {\n    @media (max-width: $breakpoint-desktop) {\n      @content;\n    }\n  } @else if $size == mobile-landscape-up {\n    @media (min-width: $breakpoint-mobile-landscape) {\n      @content;\n    }\n  } @else if $size == between-mobile-tablet-up {\n    @media (min-width: $breakpoint-between-mobile-tablet) {\n      @content;\n    }\n  } @else if $size == tablet-portrait-up {\n    @media (min-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == tablet-landscape-up {\n    @media (min-width: $breakpoint-tablet-landscape) {\n      @content;\n    }\n  } @else if $size == desktop-up {\n    @media (min-width: $breakpoint-desktop) {\n      @content;\n    }\n  }\n}\n",".pointer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  mix-blend-mode: difference;\n  transform: translate(-10px, -10px);\n\n  &--no-blend {\n    mix-blend-mode: normal;\n  }\n\n  &__cursor {\n    position: absolute;\n    top: -5px;\n    left: -5px;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-color: var(--main-theme-color);\n    transition-property: top, left, width, height;\n    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;\n\n    &--is-on-title {\n      width: 30px;\n      height: 30px;\n      top: -15px;\n      left: -15px;\n      animation: pulse 1.5s infinite;\n      transform: scale(1);\n\n      &::after {\n        content: '';\n        position: absolute;\n        top: -8px;\n        left: -8px;\n        height: 30px;\n        width: 30px;\n        padding: 4px;\n        border: 4px solid var(--main-theme-color);\n        border-radius: 50%;\n        animation: pulse 1.5s infinite;\n        transform: scale(1);\n      }\n    }\n\n    &--is-on-link {\n      width: 50px;\n      height: 50px;\n      top: -25px;\n      left: -25px;\n\n      &::after {\n        content: 'click me';\n        position: absolute;\n        width: 50px;\n        height: 50px;\n        top: 10px;\n        left: 0px;\n        text-align: center;\n        font-size: 0.5em;\n        line-height: 1;\n      }\n    }\n\n    &--is-on-nav {\n      width: 50px;\n      height: 50px;\n      top: -25px;\n      left: -25px;\n      background-color: rgba(128, 128, 128, 0.5);\n    }\n\n    &--on-about-page {\n      &::after {\n        content: '';\n        position: absolute;\n        width: 80px;\n        height: 80px;\n        top: -15px;\n        left: -15px;\n        background: url('../../static/svgs/who-am-i.svg');\n        background-repeat: no-repeat;\n        background-position: center center;\n        background-size: contain;\n        animation: spin 8s linear infinite;\n      }\n    }\n\n    &--on-home-page {\n      &::after {\n        content: '';\n        position: absolute;\n        width: 80px;\n        height: 80px;\n        top: -15px;\n        left: -15px;\n        background: url('../../static/svgs/wanna-go-home.svg');\n        background-repeat: no-repeat;\n        background-position: center center;\n        background-size: contain;\n        animation: spin 8s linear infinite;\n      }\n    }\n\n    &--on-skills-page {\n      &::after {\n        content: '';\n        position: absolute;\n        width: 80px;\n        height: 80px;\n        top: -15px;\n        left: -15px;\n        background: url('../../static/svgs/you-like-magic.svg');\n        background-repeat: no-repeat;\n        background-position: center center;\n        background-size: contain;\n        animation: spin 8s linear infinite;\n      }\n    }\n\n    &--on-portfolio-page {\n      &::after {\n        content: '';\n        position: absolute;\n        width: 80px;\n        height: 80px;\n        top: -15px;\n        left: -15px;\n        background: url('../../static/svgs/like-my-stuff.svg');\n        background-repeat: no-repeat;\n        background-position: center center;\n        background-size: contain;\n        animation: spin 8s linear infinite;\n      }\n    }\n\n    &--on-contact-page {\n      &::after {\n        content: '';\n        position: absolute;\n        width: 80px;\n        height: 80px;\n        top: -15px;\n        left: -15px;\n        background: url('../../static/svgs/call-me-maybe.svg');\n        background-repeat: no-repeat;\n        background-position: center center;\n        background-size: contain;\n        animation: spin 8s linear infinite;\n      }\n    }\n  }\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(0.95);\n  }\n\n  50% {\n    transform: scale(1.2);\n  }\n\n  100% {\n    transform: scale(0.95);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotateZ(0);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n"]}]);


/***/ })

})
//# sourceMappingURL=_app.js.0189900776400a1bac60.hot-update.js.map