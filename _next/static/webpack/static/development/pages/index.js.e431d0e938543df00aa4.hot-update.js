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
  var _useMousePointer = Object(_hooks_useMousePointer__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      setRef = _useMousePointer.setRef,
      setCustomCallback = _useMousePointer.setCustomCallback;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (mouseRef.current) {
      console.log({
        mouseRef: mouseRef
      });

      var callback = function callback(x, y) {
        mouseRef.current.style.left = "".concat(x, "px");
        mouseRef.current.style.top = "".concat(y, "px");
      };

      setCustomCallback(callback);
    }
  }, [mouseRef.current]);
  return __jsx("div", {
    id: "mouse-pointer",
    className: _mouse_tracker_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mousePointer,
    ref: setRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MouseTracker);

/***/ }),

/***/ "./src/hooks/useMousePointer.tsx":
/*!***************************************!*\
  !*** ./src/hooks/useMousePointer.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var initialState = {
  x: null,
  y: null
};

var useMousePointer = function useMousePointer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      customCallback = _useState[0],
      setCustomCallback = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      element = _useState2[0],
      setElement = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState),
      mousePosition = _useState3[0],
      setMousePosition = _useState3[1];

  var isPointerInElement = function isPointerInElement(ref) {
    var object = ref.current; // console.log({ object });

    return true;
  }; // useEffect(() => {
  //   console.log({ customCallback });
  // }, [customCallback]);


  var handleOnMouseMove = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    var x = event.clientX,
        y = event.clientY;
    setMousePosition({
      x: x,
      y: y
    });

    if (customCallback) {
      // console.log('here');
      // const { x, y } = mousePosition;
      customCallback(x, y);
    }
  }, [element, customCallback]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.addEventListener('mousemove', handleOnMouseMove);
    return function () {
      document.removeEventListener('mousemove', handleOnMouseMove);
    };
  }, [element]);
  return {
    isPointerInElement: isPointerInElement,
    mousePosition: mousePosition,
    setRef: setElement,
    setCustomCallback: setCustomCallback
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useMousePointer);

/***/ })

})
//# sourceMappingURL=index.js.e431d0e938543df00aa4.hot-update.js.map