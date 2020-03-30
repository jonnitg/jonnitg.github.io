webpackHotUpdate("static/development/pages/about.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/about-section/about-section.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/postcss-loader/src??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./src/components/about-section/about-section.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports

exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap);"]);
// Module
exports.push([module.i, ".about-section_stl__1mMBY {\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: minmax(400px, 600px);\n  grid-gap: 1em;\n  width: 100%;\n  height: 100%;\n  align-content: center;\n  justify-content: center;\n}\n@media (min-width: 768px) {\n  .about-section_stl__1mMBY {\n    grid-template-rows: repeat(2, 300px);\n  }\n}\n.about-section_stl__container__YXvR4 {\n  width: 100%;\n  padding-left: 1em;\n  padding-right: 1em;\n  box-sizing: border-box;\n}\n@media (min-width: 480px) {\n  .about-section_stl__container__YXvR4 {\n    width: 400px;\n  }\n}\n.about-section_stl__about-text__1IJpf {\n  justify-self: start;\n}\n.about-section_stl__hobbies-text__1wPrB {\n  justify-self: end;\n  width: 400px;\n  padding-left: 1em;\n  padding-right: 1em;\n}", "",{"version":3,"sources":["about-section.module.scss","../../sass/_base.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,kCAAA;EACA,2CAAA;EACA,aAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,uBAAA;AAAF;ACoBI;ED5BJ;IAWI,oCAAA;EACF;AACF;AACE;EACE,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,sBAAA;AACJ;ACCI;EDNF;IAOI,YAAA;EAEJ;AACF;AAAE;EACE,mBAAA;AAEJ;AACE;EACE,iBAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;AACJ","file":"about-section.module.scss","sourcesContent":["@import '../../sass/base';\n\n.stl {\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: minmax(400px, 600px);\n  grid-gap: 1em;\n  width: 100%;\n  height: 100%;\n  align-content: center;\n  justify-content: center;\n\n  @include for-size(tablet-portrait-up) {\n    grid-template-rows: repeat(2, 300px);\n  }\n\n  &__container {\n    width: 100%;\n    padding-left: 1em;\n    padding-right: 1em;\n    box-sizing: border-box;\n\n    @include for-size(mobile-landscape-up) {\n      width: 400px;\n    }\n  }\n  &__about-text {\n    justify-self: start;\n  }\n\n  &__hobbies-text {\n    justify-self: end;\n    width: 400px;\n    padding-left: 1em;\n    padding-right: 1em;\n  }\n}\n","@import url('https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap');\n\n$breakpoint-mobile-landscape: 480px;\n$breakpoint-between-mobile-tablet: 628px;\n$breakpoint-tablet-portrait: 768px;\n$breakpoint-tablet-landscape: 992px;\n$breakpoint-desktop: 1200px;\n\n@mixin for-size($size) {\n  @if $size == phone-only {\n    @media (max-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == landscape-mode-only {\n    @media screen and (min-width: 320px) and (max-width: $breakpoint-tablet-portrait - 1px) and (orientation: landscape) {\n      @content;\n    }\n  } @else if $size == tablet-phone-only {\n    @media (max-width: $breakpoint-desktop) {\n      @content;\n    }\n  } @else if $size == mobile-landscape-up {\n    @media (min-width: $breakpoint-mobile-landscape) {\n      @content;\n    }\n  } @else if $size == between-mobile-tablet-up {\n    @media (min-width: $breakpoint-between-mobile-tablet) {\n      @content;\n    }\n  } @else if $size == tablet-portrait-up {\n    @media (min-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == tablet-landscape-up {\n    @media (min-width: $breakpoint-tablet-landscape) {\n      @content;\n    }\n  } @else if $size == desktop-up {\n    @media (min-width: $breakpoint-desktop) {\n      @content;\n    }\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"stl": "about-section_stl__1mMBY",
	"stl__container": "about-section_stl__container__YXvR4",
	"stl__about-text": "about-section_stl__about-text__1IJpf",
	"stl__hobbies-text": "about-section_stl__hobbies-text__1wPrB"
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
exports.push([module.i, ".heading_heading__2M5K0 {\n  margin: 0;\n}\n.heading_heading--is-h1__1ZdY6 {\n  font-size: 5em;\n  line-height: 1.1;\n  color: var(--main-text-color);\n}\n@media (min-width: 480px) {\n  .heading_heading--is-h1__1ZdY6 {\n    font-size: 6em;\n    line-height: 1.1;\n  }\n}\n.heading_heading--is-h2__Sr7FY {\n  font-size: 2em;\n  color: var(--main-text-color);\n}\n.heading_heading--is-h3__3mj2l {\n  font-size: 1.5em;\n  color: var(--main-text-color);\n}\n.heading_heading--is-h4__W_Eb- {\n  font-size: 1.2em;\n  color: var(--main-text-color);\n}", "",{"version":3,"sources":["heading.module.scss","../../sass/_base.scss"],"names":[],"mappings":"AAIA;EACE,SAAA;AAFF;AAKI;EAEI,cAAA;EACA,gBAAA;EACA,6BAAA;AAJR;ACcI;EDdA;IAOM,cAAA;IACA,gBAAA;EAHR;AACF;AANI;EAWI,cAAA;EACA,6BAAA;AAFR;AAVI;EAcI,gBAAA;EACA,6BAAA;AADR;AAdI;EAiBI,gBAAA;EACA,6BAAA;AAAR","file":"heading.module.scss","sourcesContent":["@import '../../sass/base';\n\n$all_headings: h1, h2, h3, h4;\n\n.heading {\n  margin: 0;\n\n  @each $heading in $all_headings {\n    &--is-#{$heading} {\n      @if $heading == h1 {\n        font-size: 5em;\n        line-height: 1.1;\n        color: var(--main-text-color);\n\n        @include for-size(mobile-landscape-up) {\n          font-size: 6em;\n          line-height: 1.1;\n        }\n      } @else if $heading == h2 {\n        font-size: 2em;\n        color: var(--main-text-color);\n      } @else if $heading == h3 {\n        font-size: 1.5em;\n        color: var(--main-text-color);\n      } @else if $heading == h4 {\n        font-size: 1.2em;\n        color: var(--main-text-color);\n      }\n    }\n  }\n}\n","@import url('https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap');\n\n$breakpoint-mobile-landscape: 480px;\n$breakpoint-between-mobile-tablet: 628px;\n$breakpoint-tablet-portrait: 768px;\n$breakpoint-tablet-landscape: 992px;\n$breakpoint-desktop: 1200px;\n\n@mixin for-size($size) {\n  @if $size == phone-only {\n    @media (max-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == landscape-mode-only {\n    @media screen and (min-width: 320px) and (max-width: $breakpoint-tablet-portrait - 1px) and (orientation: landscape) {\n      @content;\n    }\n  } @else if $size == tablet-phone-only {\n    @media (max-width: $breakpoint-desktop) {\n      @content;\n    }\n  } @else if $size == mobile-landscape-up {\n    @media (min-width: $breakpoint-mobile-landscape) {\n      @content;\n    }\n  } @else if $size == between-mobile-tablet-up {\n    @media (min-width: $breakpoint-between-mobile-tablet) {\n      @content;\n    }\n  } @else if $size == tablet-portrait-up {\n    @media (min-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == tablet-landscape-up {\n    @media (min-width: $breakpoint-tablet-landscape) {\n      @content;\n    }\n  } @else if $size == desktop-up {\n    @media (min-width: $breakpoint-desktop) {\n      @content;\n    }\n  }\n}\n"]}]);
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
//# sourceMappingURL=about.js.89055d88a9a1a43bab41.hot-update.js.map