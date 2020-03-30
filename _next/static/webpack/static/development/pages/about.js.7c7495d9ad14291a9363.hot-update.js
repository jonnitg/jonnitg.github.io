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
exports.push([module.i, ".about-section_stl__1mMBY {\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: minmax(400px, 600px);\n  grid-gap: 1em;\n  align-content: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  margin-top: 5em;\n}\n@media (min-width: 768px) {\n  .about-section_stl__1mMBY {\n    grid-template-rows: auto;\n    margin-top: 0;\n  }\n}\n.about-section_stl__container__YXvR4 {\n  width: 100%;\n  padding-left: 1em;\n  padding-right: 1em;\n  box-sizing: border-box;\n}\n@media (min-width: 480px) {\n  .about-section_stl__container__YXvR4 {\n    width: 400px;\n  }\n}\n.about-section_stl__about-section__1eqbp {\n  justify-self: start;\n}\n.about-section_stl__hobbies-section__17l_O {\n  justify-self: end;\n  width: 200px;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n.about-section_stl__text__1RAm3 {\n  font-family: \"Arvo\", serif;\n}\n.about-section_stl__list__2aXx3 {\n  font-family: \"Arvo\", serif;\n}", "",{"version":3,"sources":["about-section.module.scss","../../sass/_base.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,kCAAA;EACA,2CAAA;EACA,aAAA;EACA,qBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;AAAF;ACmBI;ED5BJ;IAYI,wBAAA;IACA,aAAA;EACF;AACF;AACE;EACE,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,sBAAA;AACJ;ACDI;EDJF;IAOI,YAAA;EAEJ;AACF;AAAE;EACE,mBAAA;AAEJ;AACE;EACE,iBAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;AACJ;AAEE;EACE,0BAAA;AAAJ;AAGE;EACE,0BAAA;AADJ","file":"about-section.module.scss","sourcesContent":["@import '../../sass/base';\n\n.stl {\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: minmax(400px, 600px);\n  grid-gap: 1em;\n  align-content: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  margin-top: 5em;\n\n  @include for-size(tablet-portrait-up) {\n    grid-template-rows: auto;\n    margin-top: 0;\n  }\n\n  &__container {\n    width: 100%;\n    padding-left: 1em;\n    padding-right: 1em;\n    box-sizing: border-box;\n\n    @include for-size(mobile-landscape-up) {\n      width: 400px;\n    }\n  }\n  &__about-section {\n    justify-self: start;\n  }\n\n  &__hobbies-section {\n    justify-self: end;\n    width: 200px;\n    padding-left: 1em;\n    padding-right: 1em;\n  }\n\n  &__text {\n    font-family: 'Arvo', serif;\n  }\n\n  &__list {\n    font-family: 'Arvo', serif;\n  }\n}\n","@import url('https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap');\n\n$breakpoint-mobile-landscape: 480px;\n$breakpoint-between-mobile-tablet: 628px;\n$breakpoint-tablet-portrait: 768px;\n$breakpoint-tablet-landscape: 992px;\n$breakpoint-desktop: 1200px;\n\n@mixin for-size($size) {\n  @if $size == phone-only {\n    @media (max-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == landscape-mode-only {\n    @media screen and (min-width: 320px) and (max-width: $breakpoint-tablet-portrait - 1px) and (orientation: landscape) {\n      @content;\n    }\n  } @else if $size == tablet-phone-only {\n    @media (max-width: $breakpoint-desktop) {\n      @content;\n    }\n  } @else if $size == mobile-landscape-up {\n    @media (min-width: $breakpoint-mobile-landscape) {\n      @content;\n    }\n  } @else if $size == between-mobile-tablet-up {\n    @media (min-width: $breakpoint-between-mobile-tablet) {\n      @content;\n    }\n  } @else if $size == tablet-portrait-up {\n    @media (min-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == tablet-landscape-up {\n    @media (min-width: $breakpoint-tablet-landscape) {\n      @content;\n    }\n  } @else if $size == desktop-up {\n    @media (min-width: $breakpoint-desktop) {\n      @content;\n    }\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"stl": "about-section_stl__1mMBY",
	"stl__container": "about-section_stl__container__YXvR4",
	"stl__about-section": "about-section_stl__about-section__1eqbp",
	"stl__hobbies-section": "about-section_stl__hobbies-section__17l_O",
	"stl__text": "about-section_stl__text__1RAm3",
	"stl__list": "about-section_stl__list__2aXx3"
};

/***/ })

})
//# sourceMappingURL=about.js.7c7495d9ad14291a9363.hot-update.js.map