webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _mouse_tracker_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mouse-tracker.module.scss */ "./src/elements/mouse-tracker/mouse-tracker.module.scss");
/* harmony import */ var _mouse_tracker_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mouse_tracker_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/jickty/Documents/GitHub/nextjs-apps/jonnitg.github.io/src/elements/mouse-tracker/mouse-tracker.element.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var MouseTracker = function MouseTracker() {
  var mouseRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();

  var _useMousePointer = Object(_hooks_useMousePointer__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      setRef = _useMousePointer.setRef,
      setCustomCallback = _useMousePointer.setCustomCallback;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var callback = function callback(x, y) {
      mouseRef.current.style.left = "".concat(x, "px");
      mouseRef.current.style.top = "".concat(y, "px");
    };

    setCustomCallback(callback);
    return function () {
      cleanup;
    };
  }, [input]);
  return __jsx("div", {
    id: "mouse-pointer",
    className: _mouse_tracker_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mousePointer,
    ref: setRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MouseTracker);

/***/ })

})
//# sourceMappingURL=index.js.b5f6c25685d0ddfefcea.hot-update.js.map