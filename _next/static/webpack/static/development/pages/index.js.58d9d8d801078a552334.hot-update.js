webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/layout/layout.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/postcss-loader/src??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./src/components/layout/layout.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports

exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap);"]);
// Module
exports.push([module.i, ".layout_stl__Yo8S1 {\n  width: 100vw;\n  min-width: 320px;\n  height: 100vh;\n  min-height: 480px;\n  -webkit-animation: layout_fadeIn__TNVuo 2s ease-in-out;\n          animation: layout_fadeIn__TNVuo 2s ease-in-out;\n}\n@media screen and (min-width: 320px) and (min-height: 300px) and (max-width: 823px) and (max-height: 415px) and (orientation: landscape) {\n  .layout_stl__Yo8S1 {\n    display: none;\n  }\n}\n@media screen and (min-width: 320px) and (min-height: 300px) and (max-width: 823px) and (max-height: 415px) and (orientation: landscape) {\n  .layout_stl__Yo8S1 {\n    background-color: red;\n    width: 100vh;\n    height: 100vw;\n    z-index: 1000;\n  }\n}\n\n@-webkit-keyframes layout_fadeIn__TNVuo {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes layout_fadeIn__TNVuo {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}", "",{"version":3,"sources":["layout.module.scss","../../sass/_base.scss"],"names":[],"mappings":"AAEA;EACE,YAAA;EACA,gBAAA;EACA,aAAA;EACA,iBAAA;EACA,sDAAA;UAAA,8CAAA;AAAF;ACQI;EDbJ;IAQI,aAAA;EACF;AACF;ACGI;EDbJ;IAYI,qBAAA;IACA,YAAA;IACA,aAAA;IACA,aAAA;EAEF;AACF;;AACA;EACE;IACE,UAAA;EAEF;EAAA;IACE,UAAA;EAEF;AACF;;AARA;EACE;IACE,UAAA;EAEF;EAAA;IACE,UAAA;EAEF;AACF","file":"layout.module.scss","sourcesContent":["@import '../../sass/base';\n\n.stl {\n  width: 100vw;\n  min-width: 320px;\n  height: 100vh;\n  min-height: 480px;\n  animation: fadeIn 2s ease-in-out;\n\n  @include for-size(landscape-mode-only) {\n    display: none;\n  }\n\n  @include for-size(landscape-mode-only) {\n    background-color: red;\n    width: 100vh;\n    height: 100vw;\n    z-index: 1000;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n","@import url('https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap');\n\n$breakpoint-mobile-portrait: 320px;\n$breakpoint-mobile-landscape: 480px;\n$breakpoint-between-mobile-tablet: 628px;\n$breakpoint-tablet-portrait: 768px;\n$breakpoint-tablet-landscape: 992px;\n$breakpoint-desktop: 1200px;\n\n@mixin for-size($size) {\n  @if $size == phone-only {\n    @media (max-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == landscape-mode-only {\n    @media screen and (min-width: 320px) and (min-height: 300px) and (max-width: 823px) and (max-height: 415px) and (orientation: landscape) {\n      @content;\n    }\n  } @else if $size == tablet-phone-only {\n    @media (max-width: $breakpoint-desktop) {\n      @content;\n    }\n  } @else if $size == mobile-landscape-up {\n    @media (min-width: $breakpoint-mobile-landscape) {\n      @content;\n    }\n  } @else if $size == between-mobile-tablet-up {\n    @media (min-width: $breakpoint-between-mobile-tablet) {\n      @content;\n    }\n  } @else if $size == tablet-portrait-up {\n    @media (min-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == tablet-landscape-up {\n    @media (min-width: $breakpoint-tablet-landscape) {\n      @content;\n    }\n  } @else if $size == desktop-up {\n    @media (min-width: $breakpoint-desktop) {\n      @content;\n    }\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"stl": "layout_stl__Yo8S1",
	"fadeIn": "layout_fadeIn__TNVuo"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/main-section/main-section.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/postcss-loader/src??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./src/components/main-section/main-section.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports

exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap);"]);
// Module
exports.push([module.i, ".main-section_stl__1HSzU {\n  display: grid;\n  grid-template-rows: auto 50px;\n  width: 100%;\n  height: 100%;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n}\n.main-section_stl__container__2iACj {\n  position: relative;\n  min-height: 220px;\n  padding: 5px 0;\n  text-align: center;\n}\n.main-section_stl__container__animated-box__3o6t7 {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: var(--main-theme-color);\n  visibility: visible;\n  mix-blend-mode: difference;\n  -webkit-animation: main-section_clipPathAnimation__3PNmE 10s infinite;\n          animation: main-section_clipPathAnimation__3PNmE 10s infinite;\n}\n.main-section_stl__heading__3DG8N {\n  padding: 4px;\n}\n.main-section_stl__heading--hide-br-mobile__2079l {\n  display: none;\n}\n@media (min-width: 480px) {\n  .main-section_stl__heading--hide-br-mobile__2079l {\n    display: block;\n  }\n}\n\n@-webkit-keyframes main-section_clipPathAnimation__3PNmE {\n  0% {\n    -webkit-clip-path: inset(100% 100% 0 0);\n            clip-path: inset(100% 100% 0 0);\n  }\n  25% {\n    -webkit-clip-path: inset(0);\n            clip-path: inset(0);\n  }\n  50% {\n    -webkit-clip-path: inset(0 0 100% 100%);\n            clip-path: inset(0 0 100% 100%);\n  }\n  75% {\n    -webkit-clip-path: inset(0);\n            clip-path: inset(0);\n  }\n  100% {\n    -webkit-clip-path: inset(100% 100% 0 0);\n            clip-path: inset(100% 100% 0 0);\n  }\n}\n\n@keyframes main-section_clipPathAnimation__3PNmE {\n  0% {\n    -webkit-clip-path: inset(100% 100% 0 0);\n            clip-path: inset(100% 100% 0 0);\n  }\n  25% {\n    -webkit-clip-path: inset(0);\n            clip-path: inset(0);\n  }\n  50% {\n    -webkit-clip-path: inset(0 0 100% 100%);\n            clip-path: inset(0 0 100% 100%);\n  }\n  75% {\n    -webkit-clip-path: inset(0);\n            clip-path: inset(0);\n  }\n  100% {\n    -webkit-clip-path: inset(100% 100% 0 0);\n            clip-path: inset(100% 100% 0 0);\n  }\n}", "",{"version":3,"sources":["main-section.module.scss","../../sass/_base.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,6BAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,uBAAA;EACA,mBAAA;AAAF;AAEE;EACE,kBAAA;EACA,iBAAA;EACA,cAAA;EACA,kBAAA;AAAJ;AAEI;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,yCAAA;EACA,mBAAA;EACA,0BAAA;EACA,qEAAA;UAAA,6DAAA;AAAN;AAGE;EACE,YAAA;AADJ;AAGI;EACE,aAAA;AADN;ACTI;EDSA;IAII,cAAA;EAAN;AACF;;AAKA;EACE;IACE,uCAAA;YAAA,+BAAA;EAFF;EAIA;IACE,2BAAA;YAAA,mBAAA;EAFF;EAKA;IACE,uCAAA;YAAA,+BAAA;EAHF;EAKA;IACE,2BAAA;YAAA,mBAAA;EAHF;EAKA;IACE,uCAAA;YAAA,+BAAA;EAHF;AACF;;AAbA;EACE;IACE,uCAAA;YAAA,+BAAA;EAFF;EAIA;IACE,2BAAA;YAAA,mBAAA;EAFF;EAKA;IACE,uCAAA;YAAA,+BAAA;EAHF;EAKA;IACE,2BAAA;YAAA,mBAAA;EAHF;EAKA;IACE,uCAAA;YAAA,+BAAA;EAHF;AACF","file":"main-section.module.scss","sourcesContent":["@import '../../sass/base';\n\n.stl {\n  display: grid;\n  grid-template-rows: auto 50px;\n  width: 100%;\n  height: 100%;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n\n  &__container {\n    position: relative;\n    min-height: 220px;\n    padding: 5px 0;\n    text-align: center;\n\n    &__animated-box {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      background-color: var(--main-theme-color);\n      visibility: visible;\n      mix-blend-mode: difference;\n      animation: clipPathAnimation 10s infinite;\n    }\n  }\n  &__heading {\n    padding: 4px;\n\n    &--hide-br-mobile {\n      display: none;\n\n      @include for-size(mobile-landscape-up) {\n        display: block;\n      }\n    }\n  }\n}\n\n@keyframes clipPathAnimation {\n  0% {\n    clip-path: inset(100% 100% 0 0);\n  }\n  25% {\n    clip-path: inset(0);\n  }\n\n  50% {\n    clip-path: inset(0 0 100% 100%);\n  }\n  75% {\n    clip-path: inset(0);\n  }\n  100% {\n    clip-path: inset(100% 100% 0 0);\n  }\n}\n","@import url('https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap');\n\n$breakpoint-mobile-portrait: 320px;\n$breakpoint-mobile-landscape: 480px;\n$breakpoint-between-mobile-tablet: 628px;\n$breakpoint-tablet-portrait: 768px;\n$breakpoint-tablet-landscape: 992px;\n$breakpoint-desktop: 1200px;\n\n@mixin for-size($size) {\n  @if $size == phone-only {\n    @media (max-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == landscape-mode-only {\n    @media screen and (min-width: 320px) and (min-height: 300px) and (max-width: 823px) and (max-height: 415px) and (orientation: landscape) {\n      @content;\n    }\n  } @else if $size == tablet-phone-only {\n    @media (max-width: $breakpoint-desktop) {\n      @content;\n    }\n  } @else if $size == mobile-landscape-up {\n    @media (min-width: $breakpoint-mobile-landscape) {\n      @content;\n    }\n  } @else if $size == between-mobile-tablet-up {\n    @media (min-width: $breakpoint-between-mobile-tablet) {\n      @content;\n    }\n  } @else if $size == tablet-portrait-up {\n    @media (min-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == tablet-landscape-up {\n    @media (min-width: $breakpoint-tablet-landscape) {\n      @content;\n    }\n  } @else if $size == desktop-up {\n    @media (min-width: $breakpoint-desktop) {\n      @content;\n    }\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"stl": "main-section_stl__1HSzU",
	"stl__container": "main-section_stl__container__2iACj",
	"stl__container__animated-box": "main-section_stl__container__animated-box__3o6t7",
	"clipPathAnimation": "main-section_clipPathAnimation__3PNmE",
	"stl__heading": "main-section_stl__heading__3DG8N",
	"stl__heading--hide-br-mobile": "main-section_stl__heading--hide-br-mobile__2079l"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/social-media/social-media.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/postcss-loader/src??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./src/components/social-media/social-media.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports

exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap);"]);
// Module
exports.push([module.i, ".social-media_stl__3kiGL {\n  position: relative;\n  display: inline-grid;\n  width: 100%;\n  grid-auto-flow: column;\n  justify-items: stretch;\n  align-items: stretch;\n  height: 100%;\n}\n.social-media_stl__link__31ETY {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  line-height: 3;\n  box-sizing: border-box;\n  border: 2px solid var(--main-text-color);\n}\n@media (min-width: 628px) {\n  .social-media_stl__link__31ETY::after {\n    content: \"\";\n    position: absolute;\n    top: 30px;\n    left: 70px;\n    width: 50px;\n    height: 2px;\n    border-bottom: 2px solid var(--main-text-color);\n  }\n}\n.social-media_stl__link__31ETY:nth-child(2) {\n  border-left: none;\n  border-right: none;\n}\n.social-media_stl__link__31ETY:nth-child(2)::after {\n  width: 65px;\n}\n.social-media_stl__absolute_link__2nR4M {\n  display: none;\n}\n@media (min-width: 628px) {\n  .social-media_stl__absolute_link__2nR4M {\n    position: absolute;\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    font-size: 1.2em;\n    line-height: 2.8;\n    color: var(--main-theme-color);\n    background-color: var(--main-text-color);\n    border: 2px solid var(--main-text-color);\n    -webkit-animation: social-media_slideLeftIn__15Dca 0.2s ease-in-out;\n            animation: social-media_slideLeftIn__15Dca 0.2s ease-in-out;\n    box-sizing: border-box;\n  }\n}\n.social-media_stl__absolute_link__2nR4M:visited {\n  color: var(--main-theme-color);\n}\n\n@-webkit-keyframes social-media_slideLeftIn__15Dca {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes social-media_slideLeftIn__15Dca {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}", "",{"version":3,"sources":["social-media.module.scss","../../sass/_base.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;EACA,oBAAA;EACA,WAAA;EACA,sBAAA;EACA,sBAAA;EACA,oBAAA;EACA,YAAA;AAAF;AAEE;EACE,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;EACA,sBAAA;EACA,wCAAA;AAAJ;ACQI;EDLE;IACE,WAAA;IACA,kBAAA;IACA,SAAA;IACA,UAAA;IACA,WAAA;IACA,WAAA;IACA,+CAAA;EAAN;AACF;AAGI;EACE,iBAAA;EACA,kBAAA;AADN;AAEM;EACE,WAAA;AAAR;AAKE;EACE,aAAA;AAHJ;ACbI;EDeF;IAGI,kBAAA;IACA,qBAAA;IACA,WAAA;IACA,YAAA;IACA,kBAAA;IACA,gBAAA;IACA,gBAAA;IACA,8BAAA;IACA,wCAAA;IACA,wCAAA;IACA,mEAAA;YAAA,2DAAA;IACA,sBAAA;EADJ;AACF;AAGI;EACE,8BAAA;AADN;;AAMA;EACE;IACE,UAAA;EAHF;EAKA;IACE,UAAA;EAHF;AACF;;AAHA;EACE;IACE,UAAA;EAHF;EAKA;IACE,UAAA;EAHF;AACF","file":"social-media.module.scss","sourcesContent":["@import '../../sass/base';\n\n.stl {\n  position: relative;\n  display: inline-grid;\n  width: 100%;\n  grid-auto-flow: column;\n  justify-items: stretch;\n  align-items: stretch;\n  height: 100%;\n\n  &__link {\n    position: relative;\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    line-height: 3;\n    box-sizing: border-box;\n    border: 2px solid var(--main-text-color);\n\n    @include for-size(between-mobile-tablet-up) {\n      &::after {\n        content: '';\n        position: absolute;\n        top: 30px;\n        left: 70px;\n        width: 50px;\n        height: 2px;\n        border-bottom: 2px solid var(--main-text-color);\n      }\n    }\n\n    &:nth-child(2) {\n      border-left: none;\n      border-right: none;\n      &::after {\n        width: 65px;\n      }\n    }\n  }\n\n  &__absolute_link {\n    display: none;\n    @include for-size(between-mobile-tablet-up) {\n      position: absolute;\n      display: inline-block;\n      width: 100%;\n      height: 100%;\n      text-align: center;\n      font-size: 1.2em;\n      line-height: 2.8;\n      color: var(--main-theme-color);\n      background-color: var(--main-text-color);\n      border: 2px solid var(--main-text-color);\n      animation: slideLeftIn 0.2s ease-in-out;\n      box-sizing: border-box;\n    }\n\n    &:visited {\n      color: var(--main-theme-color);\n    }\n  }\n}\n\n@keyframes slideLeftIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n","@import url('https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap');\n\n$breakpoint-mobile-portrait: 320px;\n$breakpoint-mobile-landscape: 480px;\n$breakpoint-between-mobile-tablet: 628px;\n$breakpoint-tablet-portrait: 768px;\n$breakpoint-tablet-landscape: 992px;\n$breakpoint-desktop: 1200px;\n\n@mixin for-size($size) {\n  @if $size == phone-only {\n    @media (max-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == landscape-mode-only {\n    @media screen and (min-width: 320px) and (min-height: 300px) and (max-width: 823px) and (max-height: 415px) and (orientation: landscape) {\n      @content;\n    }\n  } @else if $size == tablet-phone-only {\n    @media (max-width: $breakpoint-desktop) {\n      @content;\n    }\n  } @else if $size == mobile-landscape-up {\n    @media (min-width: $breakpoint-mobile-landscape) {\n      @content;\n    }\n  } @else if $size == between-mobile-tablet-up {\n    @media (min-width: $breakpoint-between-mobile-tablet) {\n      @content;\n    }\n  } @else if $size == tablet-portrait-up {\n    @media (min-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == tablet-landscape-up {\n    @media (min-width: $breakpoint-tablet-landscape) {\n      @content;\n    }\n  } @else if $size == desktop-up {\n    @media (min-width: $breakpoint-desktop) {\n      @content;\n    }\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"stl": "social-media_stl__3kiGL",
	"stl__link": "social-media_stl__link__31ETY",
	"stl__absolute_link": "social-media_stl__absolute_link__2nR4M",
	"slideLeftIn": "social-media_slideLeftIn__15Dca"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/elements/heading/heading.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/postcss-loader/src??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./src/elements/heading/heading.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports

exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap);"]);
// Module
exports.push([module.i, ".heading_heading__2M5K0 {\n  margin: 0;\n}\n.heading_heading--is-h1__1ZdY6 {\n  font-size: 5em;\n  line-height: 1.1;\n  color: var(--main-text-color);\n}\n@media (min-width: 480px) {\n  .heading_heading--is-h1__1ZdY6 {\n    font-size: 6em;\n    line-height: 1.1;\n  }\n}\n.heading_heading--is-h2__Sr7FY {\n  font-size: 2em;\n  color: var(--main-text-color);\n}\n.heading_heading--is-h3__3mj2l {\n  font-size: 1.5em;\n  color: var(--main-text-color);\n}\n.heading_heading--is-h4__W_Eb- {\n  font-size: 1.2em;\n  color: var(--main-text-color);\n}", "",{"version":3,"sources":["heading.module.scss","../../sass/_base.scss"],"names":[],"mappings":"AAIA;EACE,SAAA;AAFF;AAKI;EAEI,cAAA;EACA,gBAAA;EACA,6BAAA;AAJR;ACeI;EDfA;IAOM,cAAA;IACA,gBAAA;EAHR;AACF;AANI;EAWI,cAAA;EACA,6BAAA;AAFR;AAVI;EAcI,gBAAA;EACA,6BAAA;AADR;AAdI;EAiBI,gBAAA;EACA,6BAAA;AAAR","file":"heading.module.scss","sourcesContent":["@import '../../sass/base';\n\n$all_headings: h1, h2, h3, h4;\n\n.heading {\n  margin: 0;\n\n  @each $heading in $all_headings {\n    &--is-#{$heading} {\n      @if $heading == h1 {\n        font-size: 5em;\n        line-height: 1.1;\n        color: var(--main-text-color);\n\n        @include for-size(mobile-landscape-up) {\n          font-size: 6em;\n          line-height: 1.1;\n        }\n      } @else if $heading == h2 {\n        font-size: 2em;\n        color: var(--main-text-color);\n      } @else if $heading == h3 {\n        font-size: 1.5em;\n        color: var(--main-text-color);\n      } @else if $heading == h4 {\n        font-size: 1.2em;\n        color: var(--main-text-color);\n      }\n    }\n  }\n}\n","@import url('https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap');\n\n$breakpoint-mobile-portrait: 320px;\n$breakpoint-mobile-landscape: 480px;\n$breakpoint-between-mobile-tablet: 628px;\n$breakpoint-tablet-portrait: 768px;\n$breakpoint-tablet-landscape: 992px;\n$breakpoint-desktop: 1200px;\n\n@mixin for-size($size) {\n  @if $size == phone-only {\n    @media (max-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == landscape-mode-only {\n    @media screen and (min-width: 320px) and (min-height: 300px) and (max-width: 823px) and (max-height: 415px) and (orientation: landscape) {\n      @content;\n    }\n  } @else if $size == tablet-phone-only {\n    @media (max-width: $breakpoint-desktop) {\n      @content;\n    }\n  } @else if $size == mobile-landscape-up {\n    @media (min-width: $breakpoint-mobile-landscape) {\n      @content;\n    }\n  } @else if $size == between-mobile-tablet-up {\n    @media (min-width: $breakpoint-between-mobile-tablet) {\n      @content;\n    }\n  } @else if $size == tablet-portrait-up {\n    @media (min-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == tablet-landscape-up {\n    @media (min-width: $breakpoint-tablet-landscape) {\n      @content;\n    }\n  } @else if $size == desktop-up {\n    @media (min-width: $breakpoint-desktop) {\n      @content;\n    }\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"heading": "heading_heading__2M5K0",
	"heading--is-h1": "heading_heading--is-h1__1ZdY6",
	"heading--is-h2": "heading_heading--is-h2__Sr7FY",
	"heading--is-h3": "heading_heading--is-h3__3mj2l",
	"heading--is-h4": "heading_heading--is-h4__W_Eb-"
};

/***/ })

})
//# sourceMappingURL=index.js.58d9d8d801078a552334.hot-update.js.map