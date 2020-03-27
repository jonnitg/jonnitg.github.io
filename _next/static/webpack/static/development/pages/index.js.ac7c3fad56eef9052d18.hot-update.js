webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/main-section/main-section.component.tsx":
/*!****************************************************************!*\
  !*** ./src/components/main-section/main-section.component.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/heading */ "./src/elements/heading/index.tsx");
/* harmony import */ var _hooks_useMousePointer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useMousePointer */ "./src/hooks/useMousePointer.tsx");
/* harmony import */ var _main_section_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-section.module.scss */ "./src/components/main-section/main-section.module.scss");
/* harmony import */ var _main_section_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_main_section_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/jickty/Documents/GitHub/nextjs-apps/jonnitg.github.io/src/components/main-section/main-section.component.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var MainSection = function MainSection() {
  var headingRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();

  var _useMousePointer = Object(_hooks_useMousePointer__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      isPointerInElement = _useMousePointer.isPointerInElement,
      mousePosition = _useMousePointer.mousePosition;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    isPointerInElement(headingRef);
  }, [mousePosition.x, mousePosition.y]);
  return __jsx("div", {
    className: _main_section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.stl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(_elements_heading__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: headingRef,
    className: _main_section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.stl__heading,
    tag: "h1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "Jonat\xE1n Isaac", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), "Trevi\xF1o Galindo"));
};

/* harmony default export */ __webpack_exports__["default"] = (MainSection);

/***/ })

})
//# sourceMappingURL=index.js.ac7c3fad56eef9052d18.hot-update.js.map