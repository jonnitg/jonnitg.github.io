webpackHotUpdate("static/development/pages/index.js",{

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
exports.push([module.i, ".social-media_stl__3kiGL {\n  position: relative;\n  display: inline-grid;\n  width: 100%;\n  grid-auto-flow: column;\n  justify-items: stretch;\n  align-items: stretch;\n  height: 100%;\n}\n.social-media_stl__link__31ETY {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  line-height: 3;\n  border: 2px solid var(--main-text-color);\n}\n.social-media_stl__link__31ETY::after {\n  content: \"\";\n  position: absolute;\n  top: 30px;\n  left: 70px;\n  width: 50px;\n  height: 2px;\n  border-bottom: 2px solid var(--main-text-color);\n}\n.social-media_stl__link__31ETY:nth-child(2)::after {\n  width: 70px;\n}\n.social-media_stl__absolute_link__2nR4M {\n  position: absolute;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  font-size: 1.2em;\n  line-height: 2.8;\n  color: var(--main-theme-color);\n  background-color: var(--main-text-color);\n  border: 2px solid var(--main-text-color);\n  -webkit-animation: social-media_slideLeftIn__15Dca 0.2s ease-in-out;\n          animation: social-media_slideLeftIn__15Dca 0.2s ease-in-out;\n}\n.social-media_stl__absolute_link__2nR4M:visited {\n  color: var(--main-theme-color);\n}\n\n@-webkit-keyframes social-media_slideLeftIn__15Dca {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes social-media_slideLeftIn__15Dca {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}", "",{"version":3,"sources":["social-media.module.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;EACA,oBAAA;EACA,WAAA;EACA,sBAAA;EACA,sBAAA;EACA,oBAAA;EACA,YAAA;AAAF;AAEE;EACE,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;EACA,wCAAA;AAAJ;AAEI;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,+CAAA;AAAN;AAIM;EACE,WAAA;AAFR;AAOE;EACE,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,8BAAA;EACA,wCAAA;EACA,wCAAA;EACA,mEAAA;UAAA,2DAAA;AALJ;AAOI;EACE,8BAAA;AALN;;AAUA;EACE;IACE,UAAA;EAPF;EASA;IACE,UAAA;EAPF;AACF;;AACA;EACE;IACE,UAAA;EAPF;EASA;IACE,UAAA;EAPF;AACF","file":"social-media.module.scss","sourcesContent":["@import '../../sass/base';\n\n.stl {\n  position: relative;\n  display: inline-grid;\n  width: 100%;\n  grid-auto-flow: column;\n  justify-items: stretch;\n  align-items: stretch;\n  height: 100%;\n\n  &__link {\n    position: relative;\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    line-height: 3;\n    border: 2px solid var(--main-text-color);\n\n    &::after {\n      content: '';\n      position: absolute;\n      top: 30px;\n      left: 70px;\n      width: 50px;\n      height: 2px;\n      border-bottom: 2px solid var(--main-text-color);\n    }\n\n    &:nth-child(2) {\n      &::after {\n        width: 70px;\n      }\n    }\n  }\n\n  &__absolute_link {\n    position: absolute;\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    font-size: 1.2em;\n    line-height: 2.8;\n    color: var(--main-theme-color);\n    background-color: var(--main-text-color);\n    border: 2px solid var(--main-text-color);\n    animation: slideLeftIn 0.2s ease-in-out;\n\n    &:visited {\n      color: var(--main-theme-color);\n    }\n  }\n}\n\n@keyframes slideLeftIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"stl": "social-media_stl__3kiGL",
	"stl__link": "social-media_stl__link__31ETY",
	"stl__absolute_link": "social-media_stl__absolute_link__2nR4M",
	"slideLeftIn": "social-media_slideLeftIn__15Dca"
};

/***/ })

})
//# sourceMappingURL=index.js.84cad5ceb0f43dcd7f75.hot-update.js.map