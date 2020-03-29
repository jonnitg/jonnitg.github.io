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

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var props = action.props,
      type = action.type;

  switch (type) {
    case value:
      break;

    default:
      break;
  }
};

var PointerClassesContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);

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
      lineNumber: 23,
      columnNumber: 5
    }
  }, children);
}



/***/ })

})
//# sourceMappingURL=index.js.58a89679b7d8ae003a10.hot-update.js.map