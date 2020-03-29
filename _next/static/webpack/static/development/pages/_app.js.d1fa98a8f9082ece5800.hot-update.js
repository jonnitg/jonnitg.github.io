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
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap);"]);
var ___CSS_LOADER_URL_IMPORT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_0___);
// Module
exports.push([module.i, ":root {\n  --main-theme-color: #ffffff;\n  --main-text-color: #000000;\n}\n\nhtml,\nbody {\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  background-color: var(--main-theme-color);\n  font-family: \"Anton\", sans-serif;\n}\n\nbutton,\ninput {\n  font-family: \"Arvo\", serif;\n  color: var(--main-text-color);\n}\n\na,\na:active,\na:visited {\n  color: var(--main-text-color);\n  text-decoration: none;\n}\n\n.pointer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  mix-blend-mode: difference;\n  transform: translate(-10px, -10px);\n}\n.pointer__cursor {\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: var(--main-theme-color);\n  transition-property: top, left, width, height;\n  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;\n}\n.pointer__cursor--is-on-title {\n  width: 30px;\n  height: 30px;\n  top: -15px;\n  left: -15px;\n  -webkit-animation: pulse 1.5s infinite;\n          animation: pulse 1.5s infinite;\n  transform: scale(1);\n}\n.pointer__cursor--is-on-title::after {\n  content: \"\";\n  position: absolute;\n  top: -8px;\n  left: -8px;\n  height: 30px;\n  width: 30px;\n  padding: 4px;\n  border: 4px solid var(--main-theme-color);\n  border-radius: 50%;\n  -webkit-animation: pulse 1.5s infinite;\n          animation: pulse 1.5s infinite;\n  transform: scale(1);\n}\n.pointer__cursor--is-on-link {\n  width: 50px;\n  height: 50px;\n  top: -25px;\n  left: -25px;\n}\n.pointer__cursor--is-on-link::after {\n  content: \"click me\";\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  top: 10px;\n  left: 0px;\n  text-align: center;\n  font-size: 0.5em;\n  line-height: 1;\n}\n\n@-webkit-keyframes pulse {\n  0% {\n    transform: scale(0.95);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(0.95);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(0.95);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(0.95);\n  }\n}\n.meh {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  top: 50px;\n  left: 25px;\n  color: red;\n  background: url(" + ___CSS_LOADER_URL_IMPORT_0___ + ");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: contain;\n}", "",{"version":3,"sources":["_common.scss","main.scss","../elements/mouse-tracker/mouse-tracker.scss"],"names":[],"mappings":"AAAA;EACE,2BAAA;EACA,0BAAA;ACEF;;ADCA;;EAEE,YAAA;EACA,aAAA;EACA,SAAA;EACA,yCAAA;EACA,gCAAA;ACEF;;ADCA;;EAEE,0BAAA;EACA,6BAAA;ACEF;;ADCA;;;EAGE,6BAAA;EACA,qBAAA;ACEF;;AC1BA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,oBAAA;EACA,0BAAA;EACA,kCAAA;AD6BF;AC3BE;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,yCAAA;EACA,6CAAA;EACA,0DAAA;AD6BJ;AC3BI;EACE,WAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;EACA,sCAAA;UAAA,8BAAA;EACA,mBAAA;AD6BN;AC3BM;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,yCAAA;EACA,kBAAA;EACA,sCAAA;UAAA,8BAAA;EACA,mBAAA;AD6BR;ACzBI;EACE,WAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AD2BN;ACzBM;EACE,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,SAAA;EACA,kBAAA;EACA,gBAAA;EACA,cAAA;AD2BR;;ACrBA;EACE;IACE,sBAAA;EDwBF;ECrBA;IACE,qBAAA;EDuBF;ECpBA;IACE,sBAAA;EDsBF;AACF;;ACjCA;EACE;IACE,sBAAA;EDwBF;ECrBA;IACE,qBAAA;EDuBF;ECpBA;IACE,sBAAA;EDsBF;AACF;ACnBA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,UAAA;EACA,8CAAA;EACA,4BAAA;EACA,kCAAA;EACA,wBAAA;ADqBF","file":"main.scss","sourcesContent":[":root {\n  --main-theme-color: #ffffff;\n  --main-text-color: #000000;\n}\n\nhtml,\nbody {\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  background-color: var(--main-theme-color);\n  font-family: 'Anton', sans-serif;\n}\n\nbutton,\ninput {\n  font-family: 'Arvo', serif;\n  color: var(--main-text-color);\n}\n\na,\na:active,\na:visited {\n  color: var(--main-text-color);\n  text-decoration: none;\n}\n","@import url(\"https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap\");\n:root {\n  --main-theme-color: #ffffff;\n  --main-text-color: #000000;\n}\n\nhtml,\nbody {\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  background-color: var(--main-theme-color);\n  font-family: \"Anton\", sans-serif;\n}\n\nbutton,\ninput {\n  font-family: \"Arvo\", serif;\n  color: var(--main-text-color);\n}\n\na,\na:active,\na:visited {\n  color: var(--main-text-color);\n  text-decoration: none;\n}\n\n.pointer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  mix-blend-mode: difference;\n  transform: translate(-10px, -10px);\n}\n.pointer__cursor {\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: var(--main-theme-color);\n  transition-property: top, left, width, height;\n  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;\n}\n.pointer__cursor--is-on-title {\n  width: 30px;\n  height: 30px;\n  top: -15px;\n  left: -15px;\n  animation: pulse 1.5s infinite;\n  transform: scale(1);\n}\n.pointer__cursor--is-on-title::after {\n  content: \"\";\n  position: absolute;\n  top: -8px;\n  left: -8px;\n  height: 30px;\n  width: 30px;\n  padding: 4px;\n  border: 4px solid var(--main-theme-color);\n  border-radius: 50%;\n  animation: pulse 1.5s infinite;\n  transform: scale(1);\n}\n.pointer__cursor--is-on-link {\n  width: 50px;\n  height: 50px;\n  top: -25px;\n  left: -25px;\n}\n.pointer__cursor--is-on-link::after {\n  content: \"click me\";\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  top: 10px;\n  left: 0px;\n  text-align: center;\n  font-size: 0.5em;\n  line-height: 1;\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(0.95);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(0.95);\n  }\n}\n.meh {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  top: 50px;\n  left: 25px;\n  color: red;\n  background: url(\"../../static/svgs/who-am-i.svg\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: contain;\n}",".pointer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  mix-blend-mode: difference;\n  transform: translate(-10px, -10px);\n\n  &__cursor {\n    position: absolute;\n    top: -5px;\n    left: -5px;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-color: var(--main-theme-color);\n    transition-property: top, left, width, height;\n    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;\n\n    &--is-on-title {\n      width: 30px;\n      height: 30px;\n      top: -15px;\n      left: -15px;\n      animation: pulse 1.5s infinite;\n      transform: scale(1);\n\n      &::after {\n        content: '';\n        position: absolute;\n        top: -8px;\n        left: -8px;\n        height: 30px;\n        width: 30px;\n        padding: 4px;\n        border: 4px solid var(--main-theme-color);\n        border-radius: 50%;\n        animation: pulse 1.5s infinite;\n        transform: scale(1);\n      }\n    }\n\n    &--is-on-link {\n      width: 50px;\n      height: 50px;\n      top: -25px;\n      left: -25px;\n\n      &::after {\n        content: 'click me';\n        position: absolute;\n        width: 50px;\n        height: 50px;\n        top: 10px;\n        left: 0px;\n        text-align: center;\n        font-size: 0.5em;\n        line-height: 1;\n      }\n    }\n  }\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(0.95);\n  }\n\n  50% {\n    transform: scale(1.2);\n  }\n\n  100% {\n    transform: scale(0.95);\n  }\n}\n\n.meh {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  top: 50px;\n  left: 25px;\n  color: red;\n  background: url('../../static/svgs/who-am-i.svg');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: contain;\n  // background-color: red;\n}\n\n// background: url(../imgs/common/view-video_txt.svg);\n//     background-repeat: no-repeat;\n//     background-position: center center;\n//     background-size: contain;\n//     -webkit-animation: spin 10s linear infinite;\n//     animation: spin 10s linear infinite\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/static/svgs/who-am-i.svg":
/*!**************************************!*\
  !*** ./src/static/svgs/who-am-i.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/who-am-i.33d07ae5f87cee16cd5376eb58a466f9.svg";

/***/ })

})
//# sourceMappingURL=_app.js.d1fa98a8f9082ece5800.hot-update.js.map