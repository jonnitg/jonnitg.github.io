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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/jickty/Documents/GitHub/nextjs-apps/jonnitg.github.io/src/context/pointer-classes.context.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var ADD_TITLE_CLASS = 'ADD_TITLE_CLASS';
var ADD_NAV_CLASS = 'ADD_NAV_CLASS';
var ADD_HEADING_CLASS = 'ADD_HEADING_CLASS';
var initState = {};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var props = action.props,
      type = action.type;

  switch (type) {
    case ADD_TITLE_CLASS:
      return _objectSpread({}, state, {
        'pointer__cursor--is-on-title': true
      });

    default:
      return state;
  }
};

var PointerClassesContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);

function PointerClassesProvider(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initState),
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
      lineNumber: 27,
      columnNumber: 5
    }
  }, children);
}



/***/ })

})
//# sourceMappingURL=index.js.1dccb9e59addd4186d88.hot-update.js.map