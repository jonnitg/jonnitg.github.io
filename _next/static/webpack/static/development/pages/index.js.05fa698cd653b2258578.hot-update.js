webpackHotUpdate("static/development/pages/index.js",{

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

var mouseRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();

var useMousePointer = function useMousePointer() {
  var withComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState),
      element = _useState[0],
      setElement = _useState[1];

  var mouseLocation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    x: 0,
    y: 0
  });

  var isPointerInElement = function isPointerInElement(ref) {
    var object = ref.current;
    console.log({
      object: object,
      mouseLocation: mouseLocation
    });
    return true;
  };

  var handleOnMouseMove = function handleOnMouseMove(e) {
    var x = e.clientX,
        y = e.clientY;
    mouseRef.current.style.left = "".concat(x, "px");
    mouseRef.current.style.top = "".concat(y, "px");
    mouseLocation.current = {
      x: x,
      y: y
    };
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (withComponent) {
      document.addEventListener('mousemove', handleOnMouseMove);
    }

    return function () {
      if (withComponent) {
        document.removeEventListener('mousemove', handleOnMouseMove);
      }
    };
  }, [element]);
  return {
    isPointerInElement: isPointerInElement,
    mouseLocation: mouseLocation
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useMousePointer);

/***/ })

})
//# sourceMappingURL=index.js.05fa698cd653b2258578.hot-update.js.map