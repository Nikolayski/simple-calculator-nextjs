"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/sections/calculator/elements.jsx":
/*!**********************************************!*\
  !*** ./src/sections/calculator/elements.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CalculatorContainer\": function() { return /* binding */ CalculatorContainer; },\n/* harmony export */   \"CalculatorDisplay\": function() { return /* binding */ CalculatorDisplay; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _extends() {\n    _extends = Object.assign || function(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source){\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 30%;\\n    margin: 7% auto;\\n    font-size: 30px;\\n    @media (max-width: 1200px){\\n        width: 50%;\\n    }\\n    @media (max-width: 600px){\\n        width: 70%;\\n    }\\n    @media (max-width: 500px){\\n        width: 80%;\\n    }\\n    @media (max-width: 500px){\\n        width: 80%;\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    background: hsl(224, 36%, 15%);\\n    font-size: 70px;\\n    text-align: end;\\n    padding: 20px;\\n    border-radius: 12px;\\n    @media (max-width: 1600px){\\n        font-size: 55px;\\n    }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar CalculatorContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(_param) /*#__PURE__*/ {\n    var props = _extends({}, _param);\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", _objectSpread({}, props), void 0, false, {\n        fileName: \"C:\\\\Users\\\\Huko\\\\Desktop\\\\Calculator NextJs\\\\calculator\\\\src\\\\sections\\\\calculator\\\\elements.jsx\",\n        lineNumber: 3,\n        columnNumber: 59\n    }, _this);\n})(_templateObject());\n\nvar CalculatorDisplay = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(_param) /*#__PURE__*/ {\n    var props = _extends({}, _param);\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", _objectSpread({}, props), void 0, false, {\n        fileName: \"C:\\\\Users\\\\Huko\\\\Desktop\\\\Calculator NextJs\\\\calculator\\\\src\\\\sections\\\\calculator\\\\elements.jsx\",\n        lineNumber: 21,\n        columnNumber: 57\n    }, _this);\n})(_templateObject1());\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMvY2FsY3VsYXRvci9lbGVtZW50cy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFFNEMsQ0FnQmxGOzs7Ozs7Ozs7UUFFMEUsQ0FTMUU7Ozs7Ozs7SUEzQmFDLG1CQUFtQixHQUFHRCw2REFBTSxDQUFDLFFBQVEsdUJBQVEsQ0FBQ0U7UUFBWkMsS0FBSzt5RUFBT0QsQ0FBTyw0QkFBS0MsS0FBSzs7Ozs7QUFBRyxDQUFDO0FBQTFFO0lBa0JPQyxpQkFBaUIsR0FBR0osNkRBQU0sQ0FBQyxRQUFRLHVCQUFRLENBQUNLO1FBQVpGLEtBQUs7eUVBQU9FLENBQUMsc0JBQUtGLEtBQUs7Ozs7O0FBQUcsQ0FBQztBQUFsRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VjdGlvbnMvY2FsY3VsYXRvci9lbGVtZW50cy5qc3g/MzI4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhbGN1bGF0b3JDb250YWluZXIgPSBzdHlsZWQoKHsuLi5wcm9wc30pID0+IDxzZWN0aW9uIHsuLi5wcm9wc30gLz4pYFxyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbjogNyUgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpe1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FsY3VsYXRvckRpc3BsYXkgPSBzdHlsZWQoKHsuLi5wcm9wc30pID0+IDxwIHsuLi5wcm9wc30gLz4pYFxyXG4gICAgYmFja2dyb3VuZDogaHNsKDIyNCwgMzYlLCAxNSUpO1xyXG4gICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KXtcclxuICAgICAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiQ2FsY3VsYXRvckNvbnRhaW5lciIsInNlY3Rpb24iLCJwcm9wcyIsIkNhbGN1bGF0b3JEaXNwbGF5IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sections/calculator/elements.jsx\n");

/***/ })

});