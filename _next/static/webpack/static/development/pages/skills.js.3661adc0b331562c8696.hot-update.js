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
exports.push([module.i, ".skills-section_stl__3FWaG {\n  display: grid;\n  grid-gap: 1em;\n  align-content: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n.skills-section_stl__container__1t0dA {\n  width: 100%;\n  padding-left: 1em;\n  padding-right: 1em;\n  box-sizing: border-box;\n  text-align: center;\n}\n@media (min-width: 480px) {\n  .skills-section_stl__container__1t0dA {\n    width: 400px;\n  }\n}", "",{"version":3,"sources":["skills-section.module.scss","../../sass/_base.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,aAAA;EACA,qBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;AAAF;AAEE;EACE,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;AAAJ;ACYI;EDjBF;IAQI,YAAA;EACJ;AACF","file":"skills-section.module.scss","sourcesContent":["@import '../../sass/base';\n\n.stl {\n  display: grid;\n  grid-gap: 1em;\n  align-content: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n\n  &__container {\n    width: 100%;\n    padding-left: 1em;\n    padding-right: 1em;\n    box-sizing: border-box;\n    text-align: center;\n\n    @include for-size(mobile-landscape-up) {\n      width: 400px;\n    }\n  }\n}\n","@import url('https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap');\n\n$breakpoint-mobile-portrait: 320px;\n$breakpoint-mobile-landscape: 480px;\n$breakpoint-between-mobile-tablet: 628px;\n$breakpoint-tablet-portrait: 768px;\n$breakpoint-tablet-landscape: 992px;\n$breakpoint-desktop: 1200px;\n\n@mixin for-size($size) {\n  @if $size == phone-only {\n    @media (max-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == phone-portrait-only {\n    @media (max-width: $breakpoint-mobile-portrait + 1px) {\n      @content;\n    }\n  } @else if $size == landscape-mode-only {\n    @media screen and (min-width: 320px) and (min-height: 300px) and (max-width: 823px) and (max-height: 415px) and (orientation: landscape) {\n      @content;\n    }\n  } @else if $size == tablet-phone-only {\n    @media (max-width: $breakpoint-desktop) {\n      @content;\n    }\n  } @else if $size == mobile-landscape-up {\n    @media (min-width: $breakpoint-mobile-landscape) {\n      @content;\n    }\n  } @else if $size == between-mobile-tablet-up {\n    @media (min-width: $breakpoint-between-mobile-tablet) {\n      @content;\n    }\n  } @else if $size == tablet-portrait-up {\n    @media (min-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == tablet-landscape-up {\n    @media (min-width: $breakpoint-tablet-landscape) {\n      @content;\n    }\n  } @else if $size == desktop-up {\n    @media (min-width: $breakpoint-desktop) {\n      @content;\n    }\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"stl": "skills-section_stl__3FWaG",
	"stl__container": "skills-section_stl__container__1t0dA"
};

/***/ })

})
//# sourceMappingURL=skills.js.3661adc0b331562c8696.hot-update.js.map