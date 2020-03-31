webpackHotUpdate("static/development/pages/skills.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/skills-section/skills-section.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/postcss-loader/src??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./src/components/skills-section/skills-section.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports

exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap);"]);
// Module
exports.push([module.i, ".skills-section_stl__3FWaG {\n  display: grid;\n  position: fixed;\n  grid-gap: 1em;\n  align-content: center;\n  justify-content: center;\n  width: 100%;\n  height: calc(100% - 100px);\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n.skills-section_stl__container__1t0dA {\n  width: 100%;\n  padding-left: 1em;\n  padding-right: 1em;\n  box-sizing: border-box;\n}\n@media (min-width: 480px) {\n  .skills-section_stl__container__1t0dA {\n    width: 400px;\n  }\n}\n.skills-section_stl__heading__39aG2 {\n  text-align: center;\n}\n.skills-section_stl__text__1Mv0W {\n  font-family: \"Arvo\", serif;\n}", "",{"version":3,"sources":["skills-section.module.scss","../../sass/_base.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,eAAA;EACA,aAAA;EACA,qBAAA;EACA,uBAAA;EACA,WAAA;EACA,0BAAA;EACA,gBAAA;EACA,mBAAA;AAAF;AAEE;EACE,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,sBAAA;AAAJ;ACUI;EDdF;IAOI,YAAA;EACJ;AACF;AAEE;EACE,kBAAA;AAAJ;AAGE;EACE,0BAAA;AADJ","file":"skills-section.module.scss","sourcesContent":["@import '../../sass/base';\n\n.stl {\n  display: grid;\n  position: fixed;\n  grid-gap: 1em;\n  align-content: center;\n  justify-content: center;\n  width: 100%;\n  height: calc(100% - 100px);\n  margin-top: 50px;\n  margin-bottom: 50px;\n\n  &__container {\n    width: 100%;\n    padding-left: 1em;\n    padding-right: 1em;\n    box-sizing: border-box;\n\n    @include for-size(mobile-landscape-up) {\n      width: 400px;\n    }\n  }\n\n  &__heading {\n    text-align: center;\n  }\n\n  &__text {\n    font-family: 'Arvo', serif;\n  }\n}\n","@import url('https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap');\n\n$breakpoint-mobile-portrait: 320px;\n$breakpoint-mobile-landscape: 480px;\n$breakpoint-between-mobile-tablet: 628px;\n$breakpoint-tablet-portrait: 768px;\n$breakpoint-tablet-landscape: 992px;\n$breakpoint-desktop: 1200px;\n\n@mixin for-size($size) {\n  @if $size == phone-only {\n    @media (max-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == phone-portrait-only {\n    @media (max-width: $breakpoint-mobile-portrait + 1px) {\n      @content;\n    }\n  } @else if $size == landscape-mode-only {\n    @media screen and (min-width: 320px) and (min-height: 300px) and (max-width: 823px) and (max-height: 415px) and (orientation: landscape) {\n      @content;\n    }\n  } @else if $size == tablet-phone-only {\n    @media (max-width: $breakpoint-desktop) {\n      @content;\n    }\n  } @else if $size == mobile-landscape-up {\n    @media (min-width: $breakpoint-mobile-landscape) {\n      @content;\n    }\n  } @else if $size == between-mobile-tablet-up {\n    @media (min-width: $breakpoint-between-mobile-tablet) {\n      @content;\n    }\n  } @else if $size == tablet-portrait-up {\n    @media (min-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == tablet-landscape-up {\n    @media (min-width: $breakpoint-tablet-landscape) {\n      @content;\n    }\n  } @else if $size == desktop-up {\n    @media (min-width: $breakpoint-desktop) {\n      @content;\n    }\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"stl": "skills-section_stl__3FWaG",
	"stl__container": "skills-section_stl__container__1t0dA",
	"stl__heading": "skills-section_stl__heading__39aG2",
	"stl__text": "skills-section_stl__text__1Mv0W"
};

/***/ })

})
//# sourceMappingURL=skills.js.bc6c915378181d5f0866.hot-update.js.map