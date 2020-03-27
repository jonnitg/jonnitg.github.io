webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/layout/layout.component.tsx":
/*!****************************************************!*\
  !*** ./src/components/layout/layout.component.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useMousePointer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useMousePointer */ "./src/hooks/useMousePointer.tsx");
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.module.scss */ "./src/components/layout/layout.module.scss");
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/jickty/Documents/GitHub/nextjs-apps/jonnitg.github.io/src/components/layout/layout.component.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Layout = function Layout(_ref) {
  var children = _ref.children;

  var _useMousePointer = Object(_hooks_useMousePointer__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      isPointerInElement = _useMousePointer.isPointerInElement,
      mouseLocation = _useMousePointer.mouseLocation;

  return __jsx("main", {
    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.stl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
      isPointerInElement: isPointerInElement,
      mouseLocation: mouseLocation
    });
  }), __jsx(MousePointer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.a6489f3926ec12e7f49f.hot-update.js.map