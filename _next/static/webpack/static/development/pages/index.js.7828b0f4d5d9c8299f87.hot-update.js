webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/theme-settings/theme-settings.component.tsx":
/*!********************************************************************!*\
  !*** ./src/components/theme-settings/theme-settings.component.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/lib/index.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/pointer-classes.context */ "./src/context/pointer-classes.context.tsx");
/* harmony import */ var _theme_settings_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-settings.module.scss */ "./src/components/theme-settings/theme-settings.module.scss");
/* harmony import */ var _theme_settings_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_settings_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/jickty/Documents/GitHub/nextjs-apps/jonnitg.github.io/src/components/theme-settings/theme-settings.component.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b'];

var ThemeSettings = function ThemeSettings() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showThemePicker = _useState[0],
      setShowThemePicker = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showTextPicker = _useState2[0],
      setShowTextPicker = _useState2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_2__["PointerClassesContext"]),
      pointerClasses = _useContext.classes,
      setClasses = _useContext.setClasses;

  var handleChangeComplete = function handleChangeComplete(color, type) {
    if (type === 'theme') {
      document.documentElement.style.setProperty('--main-theme-color', color.hex);
      window.localStorage.setItem('themeColor', color.hex);
    }

    if (type === 'text') {
      document.documentElement.style.setProperty('--main-text-color', color.hex);
      window.localStorage.setItem('textColor', color.hex);
    }
  };

  var toggleOptions = function toggleOptions(type) {
    if (type === 'theme') {
      setShowThemePicker(!showThemePicker);
      setShowTextPicker(false);
    }

    if (type === 'text') {
      setShowThemePicker(false);
      setShowTextPicker(!showTextPicker);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _window = window,
        localStorage = _window.localStorage;
    var currentColor = localStorage.getItem('themeColor');

    if (currentColor) {
      var found = colors.find(function (color) {
        return color === currentColor.trim();
      }, currentColor);
      document.documentElement.style.setProperty('--main-theme-color', found);
    }
  }, []);
  return __jsx("div", {
    className: _theme_settings_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['theme-settings'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx("button", {
    type: "button",
    className: _theme_settings_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['theme-settings__button'],
    onClick: function onClick() {
      return toggleOptions('theme');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, "Theme Color"), showThemePicker && __jsx(react_color__WEBPACK_IMPORTED_MODULE_1__["TwitterPicker"], {
    className: _theme_settings_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['theme-settings__picker'],
    colors: colors,
    width: 315,
    onChangeComplete: function onChangeComplete(color) {
      return handleChangeComplete(color, 'theme');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx("button", {
    type: "button",
    className: _theme_settings_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['theme-settings__button'],
    onClick: function onClick() {
      return toggleOptions('text');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, "Text Color"), showTextPicker && __jsx(react_color__WEBPACK_IMPORTED_MODULE_1__["TwitterPicker"], {
    className: _theme_settings_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['theme-settings__picker'],
    colors: colors,
    width: 315,
    onChangeComplete: function onChangeComplete(color) {
      return handleChangeComplete(color, 'text');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ThemeSettings);

/***/ })

})
//# sourceMappingURL=index.js.7828b0f4d5d9c8299f87.hot-update.js.map