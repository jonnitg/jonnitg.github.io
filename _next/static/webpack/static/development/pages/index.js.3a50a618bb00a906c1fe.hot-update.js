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
exports.push([module.i, ".layout_stl__Yo8S1 {\n  width: 100vw;\n  min-width: 320px;\n  height: 100vh;\n  min-height: 480px;\n  -webkit-animation: layout_fadeIn__TNVuo 2s ease-in-out;\n          animation: layout_fadeIn__TNVuo 2s ease-in-out;\n}\n@media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {\n  .layout_stl__Yo8S1 {\n    background-color: red;\n    width: 100vh;\n    height: 100vw;\n    z-index: 1000;\n  }\n}\n\n@-webkit-keyframes layout_fadeIn__TNVuo {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes layout_fadeIn__TNVuo {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}", "",{"version":3,"sources":["layout.module.scss","../../sass/_base.scss"],"names":[],"mappings":"AAEA;EACE,YAAA;EACA,gBAAA;EACA,aAAA;EACA,iBAAA;EACA,sDAAA;UAAA,8CAAA;AAAF;ACOI;EDZJ;IAQI,qBAAA;IACA,YAAA;IACA,aAAA;IACA,aAAA;EACF;AACF;;AAEA;EACE;IACE,UAAA;EACF;EACA;IACE,UAAA;EACF;AACF;;AAPA;EACE;IACE,UAAA;EACF;EACA;IACE,UAAA;EACF;AACF","file":"layout.module.scss","sourcesContent":["@import '../../sass/base';\n\n.stl {\n  width: 100vw;\n  min-width: 320px;\n  height: 100vh;\n  min-height: 480px;\n  animation: fadeIn 2s ease-in-out;\n\n  @include for-size(landscape-mode-only) {\n    background-color: red;\n    width: 100vh;\n    height: 100vw;\n    z-index: 1000;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n","@import url('https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap');\n\n$breakpoint-mobile-landscape: 480px;\n$breakpoint-between-mobile-tablet: 628px;\n$breakpoint-tablet-portrait: 768px;\n$breakpoint-tablet-landscape: 992px;\n$breakpoint-desktop: 1200px;\n\n@mixin for-size($size) {\n  @if $size == phone-only {\n    @media (max-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == landscape-mode-only {\n    @media screen and (min-width: 320px) and (max-width: $breakpoint-tablet-portrait - 1px) and (orientation: landscape) {\n      @content;\n    }\n  } @else if $size == tablet-phone-only {\n    @media (max-width: $breakpoint-desktop) {\n      @content;\n    }\n  } @else if $size == mobile-landscape-up {\n    @media (min-width: $breakpoint-mobile-landscape) {\n      @content;\n    }\n  } @else if $size == between-mobile-tablet-up {\n    @media (min-width: $breakpoint-between-mobile-tablet) {\n      @content;\n    }\n  } @else if $size == tablet-portrait-up {\n    @media (min-width: $breakpoint-tablet-portrait) {\n      @content;\n    }\n  } @else if $size == tablet-landscape-up {\n    @media (min-width: $breakpoint-tablet-landscape) {\n      @content;\n    }\n  } @else if $size == desktop-up {\n    @media (min-width: $breakpoint-desktop) {\n      @content;\n    }\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"stl": "layout_stl__Yo8S1",
	"fadeIn": "layout_fadeIn__TNVuo"
};

/***/ })

})
//# sourceMappingURL=index.js.3a50a618bb00a906c1fe.hot-update.js.map