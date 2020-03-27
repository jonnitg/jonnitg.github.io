webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/main-section/main-section.component.tsx":
/*!****************************************************************!*\
  !*** ./src/components/main-section/main-section.component.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _elements_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/heading */ "./src/elements/heading/index.tsx");
/* harmony import */ var _hooks_useMousePointer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useMousePointer */ "./src/hooks/useMousePointer.tsx");
/* harmony import */ var _main_section_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-section.module.scss */ "./src/components/main-section/main-section.module.scss");
/* harmony import */ var _main_section_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_main_section_module_scss__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "/Users/jickty/Documents/GitHub/nextjs-apps/jonnitg.github.io/src/components/main-section/main-section.component.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var MainSection = function MainSection() {
  var _useMousePointer = Object(_hooks_useMousePointer__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      mousePosition = _useMousePointer.mousePosition,
      setRef = _useMousePointer.setRef;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isHovered = _useState[0],
      setIsHovered = _useState[1];

  console.log(_objectSpread({}, mousePosition));
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(function () {
    setIsHovered(mousePosition.isOver);
  }, [mousePosition.isOver]);
  var classes = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(_main_section_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.stl__heading, isHovered && _main_section_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['stl__heading--is-hovered']);
  return __jsx("div", {
    className: _main_section_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.stl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(_elements_heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: setRef,
    className: classes,
    tag: "h1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, "Jonat\xE1n Isaac", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), "Trevi\xF1o Galindo"));
};

/* harmony default export */ __webpack_exports__["default"] = (MainSection);

/***/ })

})
//# sourceMappingURL=index.js.8d8150e9d7b48b1d3e54.hot-update.js.map