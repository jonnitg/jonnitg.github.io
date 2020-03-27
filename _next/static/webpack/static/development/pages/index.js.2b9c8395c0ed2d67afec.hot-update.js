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

var initialState = {
  x: null,
  y: null
};

var useMousePointer = function useMousePointer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      element = _useState[0],
      setElement = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState),
      mousePosition = _useState2[0],
      setMousePosition = _useState2[1];

  var isPointerInElement = function isPointerInElement(ref) {
    var object = ref.current;
    console.log({
      object: object
    });
    return true;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (element !== null) {
      var onMove = function onMove(event) {
        var x = event.clientX,
            y = event.clientY;
        setMousePosition({
          x: x,
          y: y
        });
      };

      var addEvent = element.addEventListener.bind(element);
      addEvent('mousemove', onMove);
      return function () {
        var removeEvent = element.addEventListener.bind(element);
        removeEvent('mousemove', onMove);
      };
    }

    return function () {};
  }, [element]);
  return {
    isPointerInElement: isPointerInElement,
    mousePosition: mousePosition,
    setRef: setElement
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useMousePointer);

/***/ })

})
//# sourceMappingURL=index.js.2b9c8395c0ed2d67afec.hot-update.js.map