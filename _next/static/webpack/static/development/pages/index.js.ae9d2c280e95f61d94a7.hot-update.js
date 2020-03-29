webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/social-media/social-media.component.tsx":
/*!****************************************************************!*\
  !*** ./src/components/social-media/social-media.component.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/pointer-classes.context */ "./src/context/pointer-classes.context.tsx");
/* harmony import */ var _hooks_useMousePointer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useMousePointer */ "./src/hooks/useMousePointer.tsx");
/* harmony import */ var _social_media_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./social-media.module.scss */ "./src/components/social-media/social-media.module.scss");
/* harmony import */ var _social_media_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_social_media_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "/Users/jickty/Documents/GitHub/nextjs-apps/jonnitg.github.io/src/components/social-media/social-media.component.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var SocialMedia = function SocialMedia(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      showLink = _useState[0],
      setShowLink = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_2__["PointerClassesContext"]),
      dispatchClasses = _useContext.dispatchClasses;

  var _useMousePointer = Object(_hooks_useMousePointer__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      mousePosition = _useMousePointer.mousePosition,
      setRef = _useMousePointer.setRef;

  var handleOnMouseOver = function handleOnMouseOver(type) {
    if (type === 'twitter') {
      setShowLink('https://twitter.com/jonnitg');
    }

    if (type === 'facebook') {
      setShowLink('https://facebook.com/jonnitg');
    }

    if (type === 'github') {
      setShowLink('https://github.com/jonnitg');
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (mousePosition.isOver) {
      dispatchClasses(Object(_context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_2__["addLinkClassAction"])());
    } else {
      setShowLink('');
    }

    return function () {
      dispatchClasses(Object(_context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_2__["resetClasses"])());
    };
  }, [mousePosition.isOver]);
  var classes = Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(_social_media_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.stl, className);
  return __jsx("div", {
    ref: setRef,
    className: classes,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("a", {
    onMouseOver: function onMouseOver() {
      return handleOnMouseOver('twitter');
    },
    onFocus: function onFocus() {
      return handleOnMouseOver('twitter');
    },
    className: _social_media_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.stl__link,
    href: "https://twitter.com/jonnitg",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, "twitter"), __jsx("a", {
    onMouseOver: function onMouseOver() {
      return handleOnMouseOver('facebook');
    },
    onFocus: function onFocus() {
      return handleOnMouseOver('facebook');
    },
    className: _social_media_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.stl__link,
    href: "https://www.facebook.com/jonnitg",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, "facebook"), __jsx("a", {
    onMouseOver: function onMouseOver() {
      return handleOnMouseOver('github');
    },
    onFocus: function onFocus() {
      return handleOnMouseOver('github');
    },
    className: _social_media_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.stl__link,
    href: "https://github.com/jonnitg",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, "github"), showLink && __jsx("a", {
    className: _social_media_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.stl__absolute_link,
    href: showLink,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, showLink));
};

/* harmony default export */ __webpack_exports__["default"] = (SocialMedia);

/***/ })

})
//# sourceMappingURL=index.js.ae9d2c280e95f61d94a7.hot-update.js.map