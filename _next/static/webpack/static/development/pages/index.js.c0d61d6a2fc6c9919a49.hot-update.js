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
var initialState = {
  x: x,
  y: y
};

var useMousePointer = function useMousePointer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      element = _useState[0],
      setElement = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState),
      state = _useState2[0],
      setState = _useState2[1];

  var isPointerInElement = function isPointerInElement(ref) {
    var object = ref.current;
    console.log({
      object: object,
      mouseLocation: mouseLocation
    });
    return true;
  };

  var handleOnMouseMove = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    var x = e.clientX,
        y = e.clientY;
    mouseRef.current.style.left = "".concat(x, "px");
    mouseRef.current.style.top = "".concat(y, "px");
  }, [element]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.addEventListener('mousemove', handleOnMouseMove);
    return function () {
      document.removeEventListener('mousemove', handleOnMouseMove);
    };
  }, [element]);
  return {
    isPointerInElement: isPointerInElement,
    mouseLocation: mouseLocation,
    setElement: setElement
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useMousePointer);

/***/ })

})
//# sourceMappingURL=index.js.c0d61d6a2fc6c9919a49.hot-update.js.map