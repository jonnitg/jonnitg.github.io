webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/context/pointer-classes.context.tsx":
/*!*************************************************!*\
  !*** ./src/context/pointer-classes.context.tsx ***!
  \*************************************************/
/*! exports provided: PointerClassesContext, PointerClassesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerClassesContext", function() { return PointerClassesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerClassesProvider", function() { return PointerClassesProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jickty/Documents/GitHub/nextjs-apps/jonnitg.github.io/src/context/pointer-classes.context.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var initState = {};
var PointerClassesContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(initState);

function PointerClassesProvider(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initState),
      classes = _useState[0],
      setClasses = _useState[1];

  return __jsx(PointerClassesContext.Provider, {
    value: {
      classes: classes,
      setClasses: setClasses
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, children);
}



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
/* harmony import */ var _context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/pointer-classes.context */ "./src/context/pointer-classes.context.tsx");
/* harmony import */ var _mouse_tracker_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mouse-tracker.module.scss */ "./src/elements/mouse-tracker/mouse-tracker.module.scss");
/* harmony import */ var _mouse_tracker_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mouse_tracker_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/jickty/Documents/GitHub/nextjs-apps/jonnitg.github.io/src/elements/mouse-tracker/mouse-tracker.element.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var MouseTracker = function MouseTracker(_ref) {
  var _ref$mousePosition = _ref.mousePosition,
      mousePosition = _ref$mousePosition === void 0 ? {
    x: null,
    y: null,
    isOver: false
  } : _ref$mousePosition;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_1__["PointerClassesContext"]),
      classes = _useContext.classes;

  var mouseRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (mouseRef.current) {
      var x = mousePosition.x,
          y = mousePosition.y,
          isOver = mousePosition.isOver;
      mouseRef.current.style.transform = "translate3d(".concat(x, "px, ").concat(y, "px,0px)");

      if (isOver) {
        mouseRef.current.style.transform = "matrix(1,0,0,1,".concat(x, ", ").concat(y, ")");
      }
    }
  }, [mousePosition.x, mousePosition.y]);
  return __jsx("div", {
    className: _mouse_tracker_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['mouse-pointer'],
    ref: mouseRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MouseTracker);

/***/ })

})
//# sourceMappingURL=index.js.d122ed96e188464a7052.hot-update.js.map