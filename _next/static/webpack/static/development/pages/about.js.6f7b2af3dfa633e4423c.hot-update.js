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
exports.push([module.i, ".about-section_stl__1mMBY {\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: minmax(400px, 600px);\n  grid-gap: 1em;\n  align-content: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  margin-top: 5em;\n}\n@media (min-width: 768px) {\n  .about-section_stl__1mMBY {\n    grid-template-rows: repeat(2, 300px);\n    margin-top: 0;\n  }\n}\n.about-section_stl__container__YXvR4 {\n  width: 100%;\n  padding-left: 1em;\n  padding-right: 1em;\n  box-sizing: border-box;\n}\n@media (min-width: 480px) {\n  .about-section_stl__container__YXvR4 {\n    width: 400px;\n  }\n}\n.about-section_stl__about-section__1eqbp {\n  justify-self: start;\n}\n.about-section_stl__hobbies-section__17l_O {\n  justify-self: end;\n  width: 400px;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n.about-section_stl__text__1RAm3 {\n  font-family: \"Arvo\", serif;\n}\n.about-section_stl__list__2aXx3 {\n  font-family: \"Arvo\", serif;\n}", "",{"version":3,"sources":["about-section.module.scss","../../sass/_base.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,kCAAA;EACA,2CAAA;EACA,aAAA;EACA,qBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;AAAF;ACmBI;ED5BJ;IAYI,oCAAA;IACA,aAAA;EACF;AACF;AACE;EACE,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,sBAAA;AACJ;ACDI;EDJF;IAOI,YAAA;EAEJ;AACF;AAAE;EACE,mBAAA;AAEJ;AACE;EACE,iBAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;AACJ;AAEE;EACE,0BAAA;AAAJ;AAGE;EACE,0BAAA;AADJ","file":"about-section.module.scss","sourcesContent":["@import '../../sass/base';\n\n.stl {\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: minmax(400px, 600px);\n  grid-gap: 1em;\n  align-content: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  margin-top: 5em;\n\n  @include for-size(tablet-portrait-up) {\n    grid-template-rows: repeat(2, 300px);\n    margin-top: 0;\n  }\n\n  &__container {\n    width: 100%;\n    padding-left: 1em;\n    padding-right: 1em;\n    box-sizing: border-box;\n\n    @include for-size(mobile-landscape-up) {\n      width: 400px;\n    }\n  }\n  &__about-section {\n    justify-self: start;\n  }\n\n  &__hobbies-section {\n    justify-self: end;\n    width: 400px;\n    padding-left: 1em;\n    padding-right: 1em;\n  }\n\n  &__text {\n    font-family: 'Arvo', serif;\n  }\n\n  &__list {\n    font-family: 'Arvo', serif;\n  }\n}\n","@import url('https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap');\n\n$breakpoint-mobile-landscape: 480px;\n$breakpoint-between-mobile-tablet: 628px;\n$breakpoint-tablet-portrait: 768px;\n$breakpoint-tablet-landscape: 992px;\n$breakpoint-desktop: 1200px;\n\n@mixin for-size($size) {\n  @if $size == phone-only {\n    @media (max-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == landscape-mode-only {\n    @media screen and (min-width: 320px) and (max-width: $breakpoint-tablet-portrait - 1px) and (orientation: landscape) {\n      @content;\n    }\n  } @else if $size == tablet-phone-only {\n    @media (max-width: $breakpoint-desktop) {\n      @content;\n    }\n  } @else if $size == mobile-landscape-up {\n    @media (min-width: $breakpoint-mobile-landscape) {\n      @content;\n    }\n  } @else if $size == between-mobile-tablet-up {\n    @media (min-width: $breakpoint-between-mobile-tablet) {\n      @content;\n    }\n  } @else if $size == tablet-portrait-up {\n    @media (min-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == tablet-landscape-up {\n    @media (min-width: $breakpoint-tablet-landscape) {\n      @content;\n    }\n  } @else if $size == desktop-up {\n    @media (min-width: $breakpoint-desktop) {\n      @content;\n    }\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"stl": "about-section_stl__1mMBY",
	"stl__container": "about-section_stl__container__YXvR4",
	"stl__about-section": "about-section_stl__about-section__1eqbp",
	"stl__hobbies-section": "about-section_stl__hobbies-section__17l_O",
	"stl__text": "about-section_stl__text__1RAm3",
	"stl__list": "about-section_stl__list__2aXx3"
};

/***/ }),

/***/ "./src/components/about-section/about-section.component.tsx":
/*!******************************************************************!*\
  !*** ./src/components/about-section/about-section.component.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _elements_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/heading */ "./src/elements/heading/index.tsx");
/* harmony import */ var _about_section_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-section.module.scss */ "./src/components/about-section/about-section.module.scss");
/* harmony import */ var _about_section_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_about_section_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/jickty/Documents/GitHub/nextjs-apps/jonnitg.github.io/src/components/about-section/about-section.component.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var AboutSection = function AboutSection() {
  var aboutTextClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(_about_section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.stl__container, _about_section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['stl__about-section']);
  var hobbiesTextClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(_about_section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.stl__container, _about_section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['stl__hobbies-section']);
  return __jsx("div", {
    className: _about_section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.stl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: aboutTextClasses,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(_elements_heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tag: "h2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "About me"), __jsx("p", {
    className: _about_section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.str__text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eligendi, neque repellat itaque ex esse temporibus. Quas quisquam neque velit fugit doloribus distinctio saepe veritatis maxime amet. Facere, iusto nam?")), __jsx("div", {
    className: hobbiesTextClasses,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_elements_heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tag: "h2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Hobbies"), __jsx("ul", {
    className: _about_section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.str__list,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Musician"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "Watch Anime"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Gamer"))));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutSection);

/***/ })

})
//# sourceMappingURL=about.js.6f7b2af3dfa633e4423c.hot-update.js.map