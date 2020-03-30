webpackHotUpdate("static/development/pages/about.js",{

/***/ "./src/components/navigation/navigation.component.tsx":
/*!************************************************************!*\
  !*** ./src/components/navigation/navigation.component.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/pointer-classes.context */ "./src/context/pointer-classes.context.tsx");
/* harmony import */ var _hooks_useMousePointer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useMousePointer */ "./src/hooks/useMousePointer.tsx");
/* harmony import */ var _navigation_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation.module.scss */ "./src/components/navigation/navigation.module.scss");
/* harmony import */ var _navigation_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_navigation_module_scss__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "/Users/jickty/Documents/GitHub/nextjs-apps/jonnitg.github.io/src/components/navigation/navigation.component.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var routes = [{
  title: 'Home',
  href: '/'
}, {
  title: 'About',
  href: '/about'
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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      isActive = _useState[0],
      setIsActive = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_3__["PointerClassesContext"]),
      dispatchClasses = _useContext.dispatchClasses;

  var _useMousePointer = Object(_hooks_useMousePointer__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      mousePosition = _useMousePointer.mousePosition,
      setRef = _useMousePointer.setRef;

  var handleOnMouseOver = function handleOnMouseOver(type) {
    var customClass = "pointer__cursor--on-".concat(type.toLowerCase(), "-page");
    dispatchClasses(Object(_context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_3__["addNavClassAction"])(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, customClass, true))); // setIsActive(type);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!mousePosition.isOver) {
      dispatchClasses(Object(_context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_3__["resetClasses"])());
    }

    return function () {
      dispatchClasses(Object(_context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_3__["resetClasses"])());
    };
  }, [mousePosition.isOver]);
  return __jsx("nav", {
    ref: setRef,
    className: _navigation_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.stl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, routes.map(function (route) {
    return __jsx("a", {
      onMouseOver: function onMouseOver() {
        return handleOnMouseOver(route.title);
      },
      onFocus: function onFocus() {
        return handleOnMouseOver(route.title);
      },
      href: route.href,
      key: route.title,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(_navigation_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.stl__link, isActive === route.title && _navigation_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['stl__link--is-active']),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    }, route.title, __jsx("span", {
      className: _navigation_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['stl__link__animated-box'],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ })

})
//# sourceMappingURL=about.js.f15dfc80251e1ea2c64b.hot-update.js.map