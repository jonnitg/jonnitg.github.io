webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/pointer-classes.context */ "./src/context/pointer-classes.context.tsx");
/* harmony import */ var _hooks_useMousePointer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useMousePointer */ "./src/hooks/useMousePointer.tsx");
/* harmony import */ var _navigation_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation.module.scss */ "./src/components/navigation/navigation.module.scss");
/* harmony import */ var _navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_navigation_module_scss__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "/Users/jickty/Documents/GitHub/nextjs-apps/jonnitg.github.io/src/components/navigation/navigation.component.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




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
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_2__["PointerClassesContext"]),
      dispatchClasses = _useContext.dispatchClasses;

  var _useMousePointer = Object(_hooks_useMousePointer__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      mousePosition = _useMousePointer.mousePosition,
      setRef = _useMousePointer.setRef;

  var handleOnMouseOver = function handleOnMouseOver(type) {
    var customClass = "pointer__cursor--type-".concat(type.toLowerCase());
    dispatchClasses(Object(_context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_2__["addNavClassAction"])(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, customClass, true)));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!mousePosition.isOver) {
      dispatchClasses(Object(_context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_2__["resetClasses"])());
    }

    return function () {
      dispatchClasses(Object(_context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_2__["resetClasses"])());
    };
  }, [mousePosition.isOver]);
  return __jsx("nav", {
    ref: setRef,
    className: _navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.stl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
      className: _navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.stl__link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    }, route.title, __jsx("span", {
      className: _navigation_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['stl__link__animated-box'],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ })

})
//# sourceMappingURL=index.js.9011d97141628666c47f.hot-update.js.map