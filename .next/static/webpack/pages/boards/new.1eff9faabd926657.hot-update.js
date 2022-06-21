"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/boards/new",{

/***/ "./pages/boards/new/index.js":
/*!***********************************!*\
  !*** ./pages/boards/new/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AAAPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/emotion */ \"./styles/emotion.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction AAAPage() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), title = ref[0], setTitle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), contents = ref1[0], setContents = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), titleError = ref2[0], setTitleError = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), contentsError = ref3[0], setContentsError = ref3[1];\n    var onChangeTitle = function(event) {\n        setTitle(event.target.value);\n    };\n    var onChangeContents = function(event) {\n        setContents(event.target.value);\n    };\n    var onClickSubmit = function() {\n        if (title === '') {\n            setTitleError('제목을 입력해주세요');\n        }\n        if (contents === '') {\n            setContentsError('내용을 입력해주세요');\n        }\n        if (title !== '' && contents !== '') {\n            alert('게시물 등록에 성공하였습니다!');\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_1__.Title, {\n                children: \" 게시판 작성 \"\n            }, void 0, false, {\n                fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/new/index.js\",\n                lineNumber: 44,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_1__.InputWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_1__.Label, {\n                        children: \"제목\"\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/new/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_1__.Subject, {\n                        type: \"text\",\n                        placeholder: \"제목을 작성해주세요\",\n                        onChange: onChangeTitle\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/new/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_1__.Error, {\n                        children: titleError\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/new/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/new/index.js\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_1__.InputWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_1__.Label, {\n                        children: \"내용\"\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/new/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_1__.Contents, {\n                        placeholder: \"내용을 작성해주세요\",\n                        onChange: onChangeContents\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/new/index.js\",\n                        lineNumber: 52,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_1__.Error, {\n                        children: contentsError\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/new/index.js\",\n                        lineNumber: 53,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/new/index.js\",\n                lineNumber: 50,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_1__.ImageWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_1__.Label, {\n                        children: \"파일 첨부\"\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/new/index.js\",\n                        lineNumber: 56,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_1__.UploadButton, {\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/new/index.js\",\n                        lineNumber: 57,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_1__.UploadButton, {\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/new/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_1__.UploadButton, {\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/new/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/new/index.js\",\n                lineNumber: 55,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_1__.ButtonWrapper, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_1__.SubmitButton, {\n                    children: \"등록하기\"\n                }, void 0, false, {\n                    fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/new/index.js\",\n                    lineNumber: 62,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/new/index.js\",\n                lineNumber: 61,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/new/index.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this));\n};\n_s(AAAPage, \"UHPYy8SSgSJhDDeIPBlWHHdlC44=\");\n_c = AAAPage;\nvar _c;\n$RefreshReg$(_c, \"AAAPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib2FyZHMvbmV3L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFZZ0M7QUFDRjs7QUFFZixRQUFRLENBQUNZLE9BQU8sR0FBRyxDQUFDOztJQUNqQyxHQUFLLENBQXFCRCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE5QkUsS0FBSyxHQUFjRixHQUFZLEtBQXhCRyxRQUFRLEdBQUlILEdBQVk7SUFDdEMsR0FBSyxDQUEyQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBcENJLFFBQVEsR0FBaUJKLElBQVksS0FBM0JLLFdBQVcsR0FBSUwsSUFBWTtJQUU1QyxHQUFpQixDQUFrQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBeENNLFVBQVUsR0FBbUJOLElBQVksS0FBN0JPLGFBQWEsR0FBSVAsSUFBWTtJQUMvQyxHQUFvQixDQUFxQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBOUNRLGFBQWEsR0FBc0JSLElBQVksS0FBaENTLGdCQUFnQixHQUFJVCxJQUFZO0lBRXJELEdBQUssQ0FBQ1UsYUFBYSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7UUFDaENSLFFBQVEsQ0FBQ1EsS0FBSyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7SUFDN0IsQ0FBQztJQUNELEdBQUssQ0FBQ0MsZ0JBQWdCLEdBQUcsUUFBUSxDQUFQSCxLQUFLLEVBQUssQ0FBQztRQUNuQ04sV0FBVyxDQUFDTSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSztJQUNoQyxDQUFDO0lBRUQsR0FBSyxDQUFDRSxhQUFhLEdBQUcsUUFDeEIsR0FEOEIsQ0FBQztRQUMzQixFQUFFLEVBQUNiLEtBQUssS0FBSyxDQUFFLEdBQUMsQ0FBQztZQUNmSyxhQUFhLENBQUMsQ0FBWTtRQUNWLENBQWpCO1FBQ0QsRUFBRSxFQUFDSCxRQUFRLEtBQUssQ0FBRSxHQUFDLENBQUM7WUFDbEJLLGdCQUFnQixDQUFDLENBQVk7UUFDYixDQUFqQjtRQUNELEVBQUUsRUFBQ1AsS0FBSyxLQUFLLENBQUUsS0FBSUUsUUFBUSxLQUFJLENBQUUsR0FBQyxDQUFDO1lBQ2pDWSxLQUFLLENBQUMsQ0FBa0I7UUFDQSxDQUF6QjtJQUNILENBQUM7SUFFRCxNQUFNLDZFQUNIMUIsb0RBQU87O3dGQUNQRCxrREFBSzswQkFBQyxDQUFROzs7Ozs7d0ZBQ0pFLHlEQUFFOztnR0FDVkMsa0RBQUs7a0NBQUMsQ0FBRTs7Ozs7O2dHQUNKTSxvREFBRzt3QkFBQ21CLElBQUksRUFBQyxDQUFNO3dCQUFDQyxXQUFXLEVBQUMsQ0FBWTt3QkFBbUJDLFFBQVEsRUFBRVQsYUFBYTs7Ozs7O2dHQUNwRVgsa0RBQWI7a0NBQUVPLFVBQVU7Ozs7Ozs7Ozs7Ozt3RkFFbkJmLHlEQUFZOztnR0FDVkMsa0RBQUs7a0NBQUMsQ0FBRTs7Ozs7O2dHQUNKQyxxREFBSTt3QkFBQ3lCLFdBQVcsRUFBQyxDQUFZO3dCQUFtQkMsUUFBUSxFQUFFTCxnQkFBZ0I7Ozs7OztnR0FDNURmLGtEQUFiO2tDQUFFUyxhQUFhOzs7Ozs7Ozs7Ozs7d0ZBRXRCZCx5REFBWTs7Z0dBQ1ZGLGtEQUFLO2tDQUFDLENBQUs7Ozs7OztnR0FDSEcseURBQUk7a0NBQUMsQ0FBQzs7Ozs7O2dHQUNkQSx5REFBWTtrQ0FBQyxDQUFDOzs7Ozs7Z0dBQ2RBLHlEQUFZO2tDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozt3RkFFaEJFLDBEQUFhO3NHQUNYRCx5REFBWTs4QkFBQyxDQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt4QixDQUFDO0dBbkR1QkssT0FBTztLQUFQQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2JvYXJkcy9uZXcvaW5kZXguanM/ZWM4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBUaXRsZSwgXG4gIFdyYXBwZXIsXG4gIElucHV0V3JhcHBlcixcbiAgTGFiZWwsXG4gIENvbnRlbnRzLFxuICBJbWFnZVdyYXBwZXIsXG4gIFVwbG9hZEJ1dHRvbixcbiAgU3VibWl0QnV0dG9uLFxuICBCdXR0b25XcmFwcGVyLFxuICBTdWJqZWN0LFxuICBFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL2Vtb3Rpb24nXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQUFBUGFnZSgpIHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2NvbnRlbnRzLCBzZXRDb250ZW50c10gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdFt0aXRsZUVycm9yLCBzZXRUaXRsZUVycm9yXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdFtjb250ZW50c0Vycm9yLCBzZXRDb250ZW50c0Vycm9yXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IG9uQ2hhbmdlVGl0bGUgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRUaXRsZShldmVudC50YXJnZXQudmFsdWUpXG4gIH1cbiAgY29uc3Qgb25DaGFuZ2VDb250ZW50cyA9IChldmVudCkgPT4ge1xuICAgIHNldENvbnRlbnRzKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IG9uQ2xpY2tTdWJtaXQgPSAoKSA9PiB7XG4gICAgaWYodGl0bGUgPT09ICcnKXtcbiAgICAgIHNldFRpdGxlRXJyb3IoJ+ygnOuqqeydhCDsnoXroKXtlbTso7zshLjsmpQnKVxuICAgIH1cbiAgICBpZihjb250ZW50cyA9PT0gJycpe1xuICAgICAgc2V0Q29udGVudHNFcnJvcign64K07Jqp7J2EIOyeheugpe2VtOyjvOyEuOyalCcpXG4gICAgfVxuICAgIGlmKHRpdGxlICE9PSAnJyAmJiBjb250ZW50cyAhPT0nJyl7XG4gICAgICBhbGVydCgn6rKM7Iuc66y8IOuTseuhneyXkCDshLHqs7XtlZjsmIDsirXri4jri6QhJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgIDxUaXRsZT4g6rKM7Iuc7YyQIOyekeyEsSA8L1RpdGxlPiBcbiAgICA8SW5wdXRXcmFwcGVyPlxuICAgICAgPExhYmVsPuygnOuqqTwvTGFiZWw+XG4gICAgICA8U3ViamVjdCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0n7KCc66qp7J2EIOyekeyEse2VtOyjvOyEuOyalCcgb25DaGFuZ2U9e29uQ2hhbmdlVGl0bGV9IC8+XG4gICAgICA8RXJyb3I+e3RpdGxlRXJyb3J9PC9FcnJvcj5cbiAgICA8L0lucHV0V3JhcHBlcj5cbiAgICA8SW5wdXRXcmFwcGVyPlxuICAgICAgPExhYmVsPuuCtOyaqTwvTGFiZWw+XG4gICAgICA8Q29udGVudHMgcGxhY2Vob2xkZXI9J+uCtOyaqeydhCDsnpHshLHtlbTso7zshLjsmpQnIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbnRlbnRzfSAvPlxuICAgICAgPEVycm9yPntjb250ZW50c0Vycm9yfTwvRXJyb3I+XG4gICAgPC9JbnB1dFdyYXBwZXI+XG4gICAgPEltYWdlV3JhcHBlcj5cbiAgICAgIDxMYWJlbD7tjIzsnbwg7LKo67aAPC9MYWJlbD5cbiAgICAgIDxVcGxvYWRCdXR0b24+KzwvVXBsb2FkQnV0dG9uPlxuICAgICAgPFVwbG9hZEJ1dHRvbj4rPC9VcGxvYWRCdXR0b24+XG4gICAgICA8VXBsb2FkQnV0dG9uPis8L1VwbG9hZEJ1dHRvbj5cbiAgICA8L0ltYWdlV3JhcHBlcj5cbiAgICA8QnV0dG9uV3JhcHBlcj5cbiAgICAgIDxTdWJtaXRCdXR0b24+65Ox66Gd7ZWY6riwPC9TdWJtaXRCdXR0b24+XG4gICAgPC9CdXR0b25XcmFwcGVyPlxuICAgIDwvV3JhcHBlcj5cbiAgICBcbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRpdGxlIiwiV3JhcHBlciIsIklucHV0V3JhcHBlciIsIkxhYmVsIiwiQ29udGVudHMiLCJJbWFnZVdyYXBwZXIiLCJVcGxvYWRCdXR0b24iLCJTdWJtaXRCdXR0b24iLCJCdXR0b25XcmFwcGVyIiwiU3ViamVjdCIsIkVycm9yIiwidXNlU3RhdGUiLCJBQUFQYWdlIiwidGl0bGUiLCJzZXRUaXRsZSIsImNvbnRlbnRzIiwic2V0Q29udGVudHMiLCJ0aXRsZUVycm9yIiwic2V0VGl0bGVFcnJvciIsImNvbnRlbnRzRXJyb3IiLCJzZXRDb250ZW50c0Vycm9yIiwib25DaGFuZ2VUaXRsZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZUNvbnRlbnRzIiwib25DbGlja1N1Ym1pdCIsImFsZXJ0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/boards/new/index.js\n");

/***/ })

});