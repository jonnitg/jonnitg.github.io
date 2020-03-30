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
exports.push([module.i, ".about-section_stl__1mMBY {\n  display: grid;\n  grid-template-rows: repeat(2, minmax(1fr, 300px));\n  grid-template-columns: minmax(400px, 600px);\n  grid-gap: 1em;\n  width: 100%;\n  height: 100%;\n  align-content: center;\n  justify-content: center;\n}\n.about-section_stl__container__YXvR4 {\n  width: 100%;\n  padding-left: 1em;\n  padding-right: 1em;\n  box-sizing: border-box;\n}\n@media (min-width: 480px) {\n  .about-section_stl__container__YXvR4 {\n    width: 400px;\n  }\n}\n.about-section_stl__about-text__1IJpf {\n  justify-self: start;\n}\n.about-section_stl__hobbies-text__1wPrB {\n  justify-self: end;\n  width: 400px;\n  padding-left: 1em;\n  padding-right: 1em;\n}", "",{"version":3,"sources":["about-section.module.scss","../../sass/_base.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,iDAAA;EACA,2CAAA;EACA,aAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,uBAAA;AAAF;AAEE;EACE,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,sBAAA;AAAJ;ACEI;EDNF;IAOI,YAAA;EACJ;AACF;AACE;EACE,mBAAA;AACJ;AAEE;EACE,iBAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;AAAJ","file":"about-section.module.scss","sourcesContent":["@import '../../sass/base';\n\n.stl {\n  display: grid;\n  grid-template-rows: repeat(2, minmax(1fr, 300px));\n  grid-template-columns: minmax(400px, 600px);\n  grid-gap: 1em;\n  width: 100%;\n  height: 100%;\n  align-content: center;\n  justify-content: center;\n\n  &__container {\n    width: 100%;\n    padding-left: 1em;\n    padding-right: 1em;\n    box-sizing: border-box;\n\n    @include for-size(mobile-landscape-up) {\n      width: 400px;\n    }\n  }\n  &__about-text {\n    justify-self: start;\n  }\n\n  &__hobbies-text {\n    justify-self: end;\n    width: 400px;\n    padding-left: 1em;\n    padding-right: 1em;\n  }\n}\n","@import url('https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap');\n\n$breakpoint-mobile-landscape: 480px;\n$breakpoint-between-mobile-tablet: 628px;\n$breakpoint-tablet-portrait: 768px;\n$breakpoint-tablet-landscape: 992px;\n$breakpoint-desktop: 1200px;\n\n@mixin for-size($size) {\n  @if $size == phone-only {\n    @media (max-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == tablet-phone-only {\n    @media (max-width: $breakpoint-desktop) {\n      @content;\n    }\n  } @else if $size == mobile-landscape-up {\n    @media (min-width: $breakpoint-mobile-landscape) {\n      @content;\n    }\n  } @else if $size == between-mobile-tablet-up {\n    @media (min-width: $breakpoint-between-mobile-tablet) {\n      @content;\n    }\n  } @else if $size == tablet-portrait-up {\n    @media (min-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == tablet-landscape-up {\n    @media (min-width: $breakpoint-tablet-landscape) {\n      @content;\n    }\n  } @else if $size == desktop-up {\n    @media (min-width: $breakpoint-desktop) {\n      @content;\n    }\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"stl": "about-section_stl__1mMBY",
	"stl__container": "about-section_stl__container__YXvR4",
	"stl__about-text": "about-section_stl__about-text__1IJpf",
	"stl__hobbies-text": "about-section_stl__hobbies-text__1wPrB"
};

/***/ })

})
//# sourceMappingURL=about.js.e34fc655dfe546d04d9d.hot-update.js.map