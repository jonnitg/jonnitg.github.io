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
/* harmony import */ var _theme_settings_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-settings.module.scss */ "./src/components/theme-settings/theme-settings.module.scss");
/* harmony import */ var _theme_settings_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_theme_settings_module_scss__WEBPACK_IMPORTED_MODULE_2__);
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

  var handleChangeComplete = function handleChangeComplete(color, event) {
    document.documentElement.style.setProperty('--main-theme-color', color.hex);
    window.localStorage.setItem('themeColor', color.hex);
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
    className: _theme_settings_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['theme-settings'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("button", {
    type: "button",
    className: _theme_settings_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['theme-settings__button'],
    onClick: function onClick() {
      return setShowThemePicker(!showThemePicker);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, "Theme Color"), __jsx("button", {
    type: "button",
    className: _theme_settings_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['theme-settings__button'],
    onClick: function onClick() {
      return setShowTextPicker(!showTextPicker);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, "Text Color"), showPicker && __jsx(react_color__WEBPACK_IMPORTED_MODULE_1__["TwitterPicker"], {
    colors: colors,
    width: 315,
    onChangeComplete: handleChangeComplete,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ThemeSettings);

/***/ })

})
//# sourceMappingURL=index.js.36a63f30b2649fad0165.hot-update.js.map