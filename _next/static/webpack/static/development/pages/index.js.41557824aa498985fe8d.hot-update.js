webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/main-section/main-section.component.tsx":
/*!****************************************************************!*\
  !*** ./src/components/main-section/main-section.component.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _elements_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/heading */ "./src/elements/heading/index.tsx");
/* harmony import */ var _hooks_useMousePointer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useMousePointer */ "./src/hooks/useMousePointer.tsx");
/* harmony import */ var _context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/pointer-classes.context */ "./src/context/pointer-classes.context.tsx");
/* harmony import */ var _social_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../social-media */ "./src/components/social-media/index.tsx");
/* harmony import */ var _main_section_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-section.module.scss */ "./src/components/main-section/main-section.module.scss");
/* harmony import */ var _main_section_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_main_section_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
    _jsxFileName = "/Users/jickty/Documents/GitHub/nextjs-apps/jonnitg.github.io/src/components/main-section/main-section.component.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var MainSection = function MainSection() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_4__["PointerClassesContext"]),
      dispatchClasses = _useContext.dispatchClasses;

  var _useMousePointer = Object(_hooks_useMousePointer__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      mousePosition = _useMousePointer.mousePosition,
      setRef = _useMousePointer.setRef;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (mousePosition.isOver) {
      dispatchClasses(Object(_context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_4__["addTitleClassAction"])());
    }

    return function () {
      dispatchClasses(Object(_context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_4__["resetClasses"])());
    };
  }, [mousePosition.isOver]);
  var classes = Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(_main_section_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.stl__heading);
  return __jsx("div", {
    className: _main_section_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.stl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("div", {
    ref: setRef,
    className: _main_section_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.stl__container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(_elements_heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes,
    tag: "h1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Jonat\xE1n Isaac", ' ', __jsx("br", {
    className: _main_section_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a['stl__heading--hide-br-mobile'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }), "Trevi\xF1o Galindo"), __jsx("div", {
    className: _main_section_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a['stl__container__animated-box'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  })), __jsx(_social_media__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MainSection);

/***/ })

})
//# sourceMappingURL=index.js.41557824aa498985fe8d.hot-update.js.map