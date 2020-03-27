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
/* harmony import */ var _elements_mouse_tracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/mouse-tracker */ "./src/elements/mouse-tracker/index.tsx");
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.module.scss */ "./src/components/layout/layout.module.scss");
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/jickty/Documents/GitHub/nextjs-apps/jonnitg.github.io/src/components/layout/layout.component.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Layout = function Layout(_ref) {
  var children = _ref.children;

  var _useMousePointer = Object(_hooks_useMousePointer__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      isPointerInElement = _useMousePointer.isPointerInElement,
      mouseLocation = _useMousePointer.mouseLocation;

  return __jsx("main", {
    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.stl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
      isPointerInElement: isPointerInElement,
      mouseLocation: mouseLocation
    });
  }), __jsx(_elements_mouse_tracker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/elements/mouse-tracker/index.tsx":
/*!**********************************************!*\
  !*** ./src/elements/mouse-tracker/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mouse_tracker_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mouse-tracker.element */ "./src/elements/mouse-tracker/mouse-tracker.element.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _mouse_tracker_element__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/mouse-tracker/mouse-tracker.element.tsx":
/*!**************************************************************!*\
  !*** ./src/elements/mouse-tracker/mouse-tracker.element.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useMousePointer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useMousePointer */ "./src/hooks/useMousePointer.tsx");
var _this = undefined,
    _jsxFileName = "/Users/jickty/Documents/GitHub/nextjs-apps/jonnitg.github.io/src/elements/mouse-tracker/mouse-tracker.element.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var MouseTracker = function MouseTracker() {
  var _useMousePointer = Object(_hooks_useMousePointer__WEBPACK_IMPORTED_MODULE_1__["default"])(callback),
      setElement = _useMousePointer.setElement;

  var mouseRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();

  var callback = function callback(x, y) {
    mouseRef.current.style.left = "".concat(x, "px");
    mouseRef.current.style.top = "".concat(y, "px");
  };

  return __jsx("div", {
    id: "mouse-pointer",
    ref: mouseRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MouseTracker);

/***/ })

})
//# sourceMappingURL=index.js.6914648528e11959e67d.hot-update.js.map