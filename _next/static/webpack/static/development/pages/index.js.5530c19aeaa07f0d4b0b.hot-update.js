webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/social-media/social-media.component.tsx":
/*!****************************************************************!*\
  !*** ./src/components/social-media/social-media.component.tsx ***!
  \****************************************************************/
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
/* harmony import */ var _social_media_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./social-media.module.scss */ "./src/components/social-media/social-media.module.scss");
/* harmony import */ var _social_media_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_social_media_module_scss__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "/Users/jickty/Documents/GitHub/nextjs-apps/jonnitg.github.io/src/components/social-media/social-media.component.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var SocialMedia = function SocialMedia(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      showLink = _useState[0],
      setShowLink = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_pointer_classes_context__WEBPACK_IMPORTED_MODULE_3__["PointerClassesContext"]),
      pointerClasses = _useContext.classes,
      setClasses = _useContext.setClasses;

  var _useMousePointer = Object(_hooks_useMousePointer__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      mousePosition = _useMousePointer.mousePosition,
      setRef = _useMousePointer.setRef;

  var handleOnMouseOver = function handleOnMouseOver(type) {
    if (type === 'twitter') {
      setShowLink('https://twitter.com/jonnitg');
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (mousePosition.isOver) {
      setClasses(_objectSpread({}, pointerClasses, {
        'pointer__cursor--is-on-link': true
      }));
    }

    return function () {
      setClasses(_objectSpread({}, pointerClasses, {
        'pointer__cursor--is-on-link': false
      }));
    };
  }, [mousePosition.isOver]);
  var classes = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(_social_media_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.stl, className);
  return __jsx("div", {
    ref: setRef,
    className: classes,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("a", {
    onMouseOver: function onMouseOver() {
      return handleOnMouseOver('twitter');
    },
    onFocus: function onFocus() {
      return handleOnMouseOver('twitter');
    },
    className: _social_media_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.stl__link,
    href: "https://twitter.com/jonnitg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, "twitter"), __jsx("a", {
    className: _social_media_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.stl__link,
    href: "https://www.facebook.com/jonnitg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "facebook"), __jsx("a", {
    className: _social_media_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.stl__link,
    href: "https://github.com/jonnitg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, "github"), showLink && __jsx("a", {
    href: "https://",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 20
    }
  }, "heee"));
};

/* harmony default export */ __webpack_exports__["default"] = (SocialMedia);

/***/ })

})
//# sourceMappingURL=index.js.5530c19aeaa07f0d4b0b.hot-update.js.map