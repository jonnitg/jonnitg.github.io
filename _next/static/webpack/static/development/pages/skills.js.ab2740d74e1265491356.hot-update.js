webpackHotUpdate("static/development/pages/skills.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/skills-section/skills-section.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/postcss-loader/src??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./src/components/skills-section/skills-section.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".skills-section_stl__3FWaG {\n  display: grid;\n  grid-gap: 1em;\n  align-content: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}", "",{"version":3,"sources":["skills-section.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,aAAA;EACA,qBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;AACF","file":"skills-section.module.scss","sourcesContent":[".stl {\n  display: grid;\n  grid-gap: 1em;\n  align-content: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n"]}]);
// Exports
exports.locals = {
	"stl": "skills-section_stl__3FWaG"
};

/***/ }),

/***/ "./src/components/skills-section/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/skills-section/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _skills_section_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skills-section.component */ "./src/components/skills-section/skills-section.component.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _skills_section_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/skills-section/skills-section.component.tsx":
/*!********************************************************************!*\
  !*** ./src/components/skills-section/skills-section.component.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skills_section_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skills-section.module.scss */ "./src/components/skills-section/skills-section.module.scss");
/* harmony import */ var _skills_section_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_skills_section_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/jickty/Documents/GitHub/nextjs-apps/jonnitg.github.io/src/components/skills-section/skills-section.component.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var SkillsSection = function SkillsSection() {
  return __jsx("div", {
    className: _skills_section_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.stl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }, "Skills");
};

/* harmony default export */ __webpack_exports__["default"] = (SkillsSection);

/***/ }),

/***/ "./src/components/skills-section/skills-section.module.scss":
/*!******************************************************************!*\
  !*** ./src/components/skills-section/skills-section.module.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/postcss-loader/src??__nextjs_postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./skills-section.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/skills-section/skills-section.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/postcss-loader/src??__nextjs_postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./skills-section.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/skills-section/skills-section.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/postcss-loader/src??__nextjs_postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./skills-section.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/skills-section/skills-section.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/pages/skills.tsx":
/*!******************************!*\
  !*** ./src/pages/skills.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.tsx");
/* harmony import */ var _components_skills_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/skills-section */ "./src/components/skills-section/index.tsx");
var _this = undefined,
    _jsxFileName = "/Users/jickty/Documents/GitHub/nextjs-apps/jonnitg.github.io/src/pages/skills.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Skills = function Skills() {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "Skills | Web Developer | Jonat\xE1n Isaac Trevi\xF1o Galindo")), __jsx(_components_skills_section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ })

})
//# sourceMappingURL=skills.js.ab2740d74e1265491356.hot-update.js.map