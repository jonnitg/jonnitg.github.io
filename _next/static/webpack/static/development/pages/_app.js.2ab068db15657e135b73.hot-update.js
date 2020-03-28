webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/sass/main.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/sass/main.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports

exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap);"]);
// Module
exports.push([module.i, "html,\nbody {\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  background-color: var(--main-theme-color);\n  font-family: \"Anton\", sans-serif;\n}\n\nbutton,\ninput {\n  font-family: \"Arvo\", serif;\n  color: var(--main-text-color);\n}\n\na,\na:active,\na:visited {\n  color: var(--main-text-color);\n  text-decoration: none;\n}\n\n:root {\n  --main-theme-color: #ffffff;\n}\n\n.pointer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  mix-blend-mode: difference;\n  transform: translate(-10px, -10px);\n}\n.pointer__cursor {\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: var(--main-theme-color);\n  transition-property: top, left, width, height;\n  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;\n}\n.pointer__cursor--is-on-title {\n  width: 30px;\n  height: 30px;\n  top: -15px;\n  left: -15px;\n  -webkit-animation: pulse 1.5s infinite;\n          animation: pulse 1.5s infinite;\n  transform: scale(1);\n}\n.pointer__cursor--is-on-title::after {\n  content: \"\";\n  position: absolute;\n  top: -8px;\n  left: -8px;\n  height: 30px;\n  width: 30px;\n  padding: 4px;\n  border: 4px solid var(--main-theme-color);\n  border-radius: 50%;\n  -webkit-animation: pulse 1.5s infinite;\n          animation: pulse 1.5s infinite;\n  transform: scale(1);\n}\n.pointer__cursor--is-on-link::before {\n  content: \"click me\";\n  position: absolute;\n  width: 20px;\n  height: 20px;\n}\n\n@-webkit-keyframes pulse {\n  0% {\n    transform: scale(0.95);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(0.95);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(0.95);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(0.95);\n  }\n}", "",{"version":3,"sources":["_common.scss","main.scss","../elements/mouse-tracker/mouse-tracker.scss"],"names":[],"mappings":"AAAA;;EAEE,YAAA;EACA,aAAA;EACA,SAAA;EACA,yCAAA;EACA,gCAAA;ACEF;;ADCA;;EAEE,0BAAA;EACA,6BAAA;ACEF;;ADCA;;;EAGE,6BAAA;EACA,qBAAA;ACEF;;ADCA;EACE,2BAAA;ACEF;;ACzBA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,oBAAA;EACA,0BAAA;EACA,kCAAA;AD4BF;AC1BE;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,yCAAA;EACA,6CAAA;EACA,0DAAA;AD4BJ;AC1BI;EACE,WAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;EACA,sCAAA;UAAA,8BAAA;EACA,mBAAA;AD4BN;AC1BM;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,yCAAA;EACA,kBAAA;EACA,sCAAA;UAAA,8BAAA;EACA,mBAAA;AD4BR;ACvBM;EACE,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;ADyBR;;ACnBA;EACE;IACE,sBAAA;EDsBF;ECnBA;IACE,qBAAA;EDqBF;EClBA;IACE,sBAAA;EDoBF;AACF;;AC/BA;EACE;IACE,sBAAA;EDsBF;ECnBA;IACE,qBAAA;EDqBF;EClBA;IACE,sBAAA;EDoBF;AACF","file":"main.scss","sourcesContent":["html,\nbody {\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  background-color: var(--main-theme-color);\n  font-family: 'Anton', sans-serif;\n}\n\nbutton,\ninput {\n  font-family: 'Arvo', serif;\n  color: var(--main-text-color);\n}\n\na,\na:active,\na:visited {\n  color: var(--main-text-color);\n  text-decoration: none;\n}\n\n:root {\n  --main-theme-color: #ffffff;\n}\n","@import url(\"https://fonts.googleapis.com/css?family=Anton|Arvo&display=swap\");\nhtml,\nbody {\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  background-color: var(--main-theme-color);\n  font-family: \"Anton\", sans-serif;\n}\n\nbutton,\ninput {\n  font-family: \"Arvo\", serif;\n  color: var(--main-text-color);\n}\n\na,\na:active,\na:visited {\n  color: var(--main-text-color);\n  text-decoration: none;\n}\n\n:root {\n  --main-theme-color: #ffffff;\n}\n\n.pointer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  mix-blend-mode: difference;\n  transform: translate(-10px, -10px);\n}\n.pointer__cursor {\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: var(--main-theme-color);\n  transition-property: top, left, width, height;\n  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;\n}\n.pointer__cursor--is-on-title {\n  width: 30px;\n  height: 30px;\n  top: -15px;\n  left: -15px;\n  animation: pulse 1.5s infinite;\n  transform: scale(1);\n}\n.pointer__cursor--is-on-title::after {\n  content: \"\";\n  position: absolute;\n  top: -8px;\n  left: -8px;\n  height: 30px;\n  width: 30px;\n  padding: 4px;\n  border: 4px solid var(--main-theme-color);\n  border-radius: 50%;\n  animation: pulse 1.5s infinite;\n  transform: scale(1);\n}\n.pointer__cursor--is-on-link::before {\n  content: \"click me\";\n  position: absolute;\n  width: 20px;\n  height: 20px;\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(0.95);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(0.95);\n  }\n}",".pointer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  mix-blend-mode: difference;\n  transform: translate(-10px, -10px);\n\n  &__cursor {\n    position: absolute;\n    top: -5px;\n    left: -5px;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-color: var(--main-theme-color);\n    transition-property: top, left, width, height;\n    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;\n\n    &--is-on-title {\n      width: 30px;\n      height: 30px;\n      top: -15px;\n      left: -15px;\n      animation: pulse 1.5s infinite;\n      transform: scale(1);\n\n      &::after {\n        content: '';\n        position: absolute;\n        top: -8px;\n        left: -8px;\n        height: 30px;\n        width: 30px;\n        padding: 4px;\n        border: 4px solid var(--main-theme-color);\n        border-radius: 50%;\n        animation: pulse 1.5s infinite;\n        transform: scale(1);\n      }\n    }\n\n    &--is-on-link {\n      &::before {\n        content: 'click me';\n        position: absolute;\n        width: 20px;\n        height: 20px;\n      }\n    }\n  }\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(0.95);\n  }\n\n  50% {\n    transform: scale(1.2);\n  }\n\n  100% {\n    transform: scale(0.95);\n  }\n}\n"]}]);


/***/ })

})
//# sourceMappingURL=_app.js.2ab068db15657e135b73.hot-update.js.map