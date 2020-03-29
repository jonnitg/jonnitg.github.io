webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/navigation/navigation.component.tsx":
/*!************************************************************!*\
  !*** ./src/components/navigation/navigation.component.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navigation_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.module.scss */ "./src/components/navigation/navigation.module.scss");
/* harmony import */ var _navigation_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navigation_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/jickty/Documents/GitHub/nextjs-apps/jonnitg.github.io/src/components/navigation/navigation.component.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var routes = [{
  title: 'Home',
  href: '/'
}, {
  title: 'About',
  href: '/'
}, {
  title: 'Skills',
  href: '/'
}, {
  title: 'Portfolio',
  href: '/'
}, {
  title: 'Contact',
  href: '/'
}];

var Navigation = function Navigation() {
  return __jsx("nav", {
    className: _navigation_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.stl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, routes.map(function (route) {
    return __jsx("a", {
      href: route.href,
      key: route.title,
      className: _navigation_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.stl__link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }, route.title, __jsx("span", {
      className: _navigation_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['stl__link__animated-box'],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ })

})
//# sourceMappingURL=index.js.c6488e902bdb6d6e277f.hot-update.js.map