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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardPage; }\n/* harmony export */ });\n/* harmony import */ var C_Users_admin_Desktop_pilot_next_pilot_myself_TNH_MYSELF_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_admin_Desktop_pilot_next_pilot_myself_TNH_MYSELF_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_admin_Desktop_pilot_next_pilot_myself_TNH_MYSELF_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/emotion */ \"./styles/emotion.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    mutation createBoard($title: String!, $content: String!, $url: String) {\\n        createBoard(title: $title, content: $content, url: $url){\\n            id\\n            title\\n            content\\n            viewcount\\n        }\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar CREATE_BOARD = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject());\nfunction BoardPage() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(CREATE_BOARD), 1), createBoard = ref[0];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''), title = ref1[0], setTitle = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''), content = ref2[0], setContents = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''), titleError = ref3[0], setTitleError = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''), contentsError = ref4[0], setContentsError = ref4[1];\n    var onChangeTitle = function(event) {\n        setTitle(event.target.value);\n        if (event.target.value !== '') {\n            setTitleError('');\n        }\n    };\n    var onChangeContents = function(event) {\n        setContents(event.target.value);\n        if (event.target.value !== '') {\n            setContentsError('');\n        }\n    };\n    var onClickSubmit = function() {\n        var _ref = _asyncToGenerator(C_Users_admin_Desktop_pilot_next_pilot_myself_TNH_MYSELF_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var result;\n            return C_Users_admin_Desktop_pilot_next_pilot_myself_TNH_MYSELF_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (title === '') {\n                            setTitleError('제목을 입력해주세요');\n                        }\n                        if (content === '') {\n                            setContentsError('내용을 입력해주세요');\n                        }\n                        if (!(title !== '' && content !== '')) {\n                            _ctx.next = 15;\n                            break;\n                        }\n                        _ctx.prev = 3;\n                        _ctx.next = 6;\n                        return createBoard({\n                            variables: {\n                                title: title,\n                                content: content\n                            }\n                        });\n                    case 6:\n                        result = _ctx.sent;\n                        console.log(result);\n                        alert('게시물 등록에 성공하였습니다!');\n                        //이동\n                        router.push(\"/boards/\".concat(result.data.createBoard.id));\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](3);\n                        console.log(_ctx.t0.message);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    3,\n                    12\n                ]\n            ]);\n        }));\n        return function onClickSubmit() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.Wrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.Title, {\n                children: \" 게시판 작성 \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\new\\\\index.js\",\n                lineNumber: 84,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.InputWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.Label, {\n                        children: \"제목\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\new\\\\index.js\",\n                        lineNumber: 86,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.Subject, {\n                        type: \"text\",\n                        placeholder: \"제목을 작성해주세요\",\n                        onChange: onChangeTitle\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\new\\\\index.js\",\n                        lineNumber: 87,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.Error, {\n                        children: titleError\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\new\\\\index.js\",\n                        lineNumber: 88,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\new\\\\index.js\",\n                lineNumber: 85,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.InputWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.Label, {\n                        children: \"내용\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\new\\\\index.js\",\n                        lineNumber: 91,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.Contents, {\n                        placeholder: \"내용을 작성해주세요\",\n                        onChange: onChangeContents\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\new\\\\index.js\",\n                        lineNumber: 92,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.Error, {\n                        children: contentsError\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\new\\\\index.js\",\n                        lineNumber: 93,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\new\\\\index.js\",\n                lineNumber: 90,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.ImageWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.Label, {\n                        children: \"파일 첨부\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\new\\\\index.js\",\n                        lineNumber: 96,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.UploadButton, {\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\new\\\\index.js\",\n                        lineNumber: 97,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.UploadButton, {\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\new\\\\index.js\",\n                        lineNumber: 98,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.UploadButton, {\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\new\\\\index.js\",\n                        lineNumber: 99,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\new\\\\index.js\",\n                lineNumber: 95,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.ButtonWrapper, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.SubmitButton, {\n                    onClick: onClickSubmit,\n                    children: \"등록하기\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\new\\\\index.js\",\n                    lineNumber: 102,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\new\\\\index.js\",\n                lineNumber: 101,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\new\\\\index.js\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this));\n};\n_s(BoardPage, \"9fDFTwweyewLeAX/+5+1u5rrdec=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation\n    ];\n});\n_c = BoardPage;\nvar _c;\n$RefreshReg$(_c, \"BoardPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSw2RUFDSC9CLG9EQUFPOzt3RkFDUEQsa0RBQUs7MEJBQUMsQ0FBUTs7Ozs7O3dGQUNKRSx5REFBRTs7Z0dBQ1ZDLGtEQUFLO2tDQUFDLENBQUU7Ozs7OztnR0FDSk0sb0RBQUc7d0JBQUNpQyxJQUFJLEVBQUMsQ0FBTTt3QkFBQ0MsV0FBVyxFQUFDLENBQVk7d0JBQW1CQyxRQUFRLEVBQUVqQixhQUFhOzs7Ozs7Z0dBQ3BFakIsa0RBQWI7a0NBQUVhLFVBQVU7Ozs7Ozs7Ozs7Ozt3RkFFbkJyQix5REFBWTs7Z0dBQ1ZDLGtEQUFLO2tDQUFDLENBQUU7Ozs7OztnR0FDSkMscURBQUk7d0JBQUN1QyxXQUFXLEVBQUMsQ0FBWTt3QkFBbUJDLFFBQVEsRUFBRWIsZ0JBQWdCOzs7Ozs7Z0dBQzVEckIsa0RBQWI7a0NBQUVlLGFBQWE7Ozs7Ozs7Ozs7Ozt3RkFFdEJwQix5REFBWTs7Z0dBQ1ZGLGtEQUFLO2tDQUFDLENBQUs7Ozs7OztnR0FDSEcseURBQUk7a0NBQUMsQ0FBQzs7Ozs7O2dHQUNkQSx5REFBWTtrQ0FBQyxDQUFDOzs7Ozs7Z0dBQ2RBLHlEQUFZO2tDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozt3RkFFaEJFLDBEQUFhO3NHQUNYRCx5REFBWTtvQkFBQ3NDLE9BQU8sRUFBRWIsYUFBYTs4QkFBRSxDQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtoRCxDQUFDO0dBN0V1QmhCLFNBQVM7O1FBQ2hCRixrREFBUztRQUVGRix1REFBVzs7O0tBSFhJLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9hcmRzL25ldy9pbmRleC5qcz9lYzhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgVGl0bGUsIFxyXG4gIFdyYXBwZXIsXHJcbiAgSW5wdXRXcmFwcGVyLFxyXG4gIExhYmVsLFxyXG4gIENvbnRlbnRzLFxyXG4gIEltYWdlV3JhcHBlcixcclxuICBVcGxvYWRCdXR0b24sXHJcbiAgU3VibWl0QnV0dG9uLFxyXG4gIEJ1dHRvbldyYXBwZXIsXHJcbiAgU3ViamVjdCxcclxuICBFcnJvcixcclxufSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvZW1vdGlvbidcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZU11dGF0aW9uLCBncWx9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IENSRUFURV9CT0FSRCA9IGdxbGBcclxuICAgIG11dGF0aW9uIGNyZWF0ZUJvYXJkKCR0aXRsZTogU3RyaW5nISwgJGNvbnRlbnQ6IFN0cmluZyEsICR1cmw6IFN0cmluZykge1xyXG4gICAgICAgIGNyZWF0ZUJvYXJkKHRpdGxlOiAkdGl0bGUsIGNvbnRlbnQ6ICRjb250ZW50LCB1cmw6ICR1cmwpe1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgIHZpZXdjb3VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkUGFnZSgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBbY3JlYXRlQm9hcmRdID0gdXNlTXV0YXRpb24oQ1JFQVRFX0JPQVJEKVxyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRzXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBjb25zdFt0aXRsZUVycm9yLCBzZXRUaXRsZUVycm9yXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0W2NvbnRlbnRzRXJyb3IsIHNldENvbnRlbnRzRXJyb3JdID0gdXNlU3RhdGUoJycpXHJcblxyXG5cclxuICBjb25zdCBvbkNoYW5nZVRpdGxlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRUaXRsZShldmVudC50YXJnZXQudmFsdWUpXHJcblxyXG4gICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlICE9PScnKXtcclxuICAgICAgc2V0VGl0bGVFcnJvcignJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZUNvbnRlbnRzID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRDb250ZW50cyhldmVudC50YXJnZXQudmFsdWUpXHJcblxyXG4gICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlICE9PScnKXtcclxuICAgICAgc2V0Q29udGVudHNFcnJvcignJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNsaWNrU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYodGl0bGUgPT09ICcnKXtcclxuICAgICAgc2V0VGl0bGVFcnJvcign7KCc66qp7J2EIOyeheugpe2VtOyjvOyEuOyalCcpXHJcbiAgICB9XHJcbiAgICBpZihjb250ZW50ID09PSAnJyl7XHJcbiAgICAgIHNldENvbnRlbnRzRXJyb3IoJ+uCtOyaqeydhCDsnoXroKXtlbTso7zshLjsmpQnKVxyXG4gICAgfVxyXG4gICAgaWYodGl0bGUgIT09ICcnICYmIGNvbnRlbnQgIT09Jycpe1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3JlYXRlQm9hcmQoe1xyXG4gICAgICAgICAgdmFyaWFibGVzOiB7dGl0bGU6IHRpdGxlLCBjb250ZW50OiBjb250ZW50fVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIGFsZXJ0KCfqsozsi5zrrLwg65Ox66Gd7JeQIOyEseqzte2VmOyYgOyKteuLiOuLpCEnKVxyXG4gICAgICAgIC8v7J2064+ZXHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9ib2FyZHMvJHtyZXN1bHQuZGF0YS5jcmVhdGVCb2FyZC5pZH1gKVxyXG4gICAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgIDxUaXRsZT4g6rKM7Iuc7YyQIOyekeyEsSA8L1RpdGxlPiBcclxuICAgIDxJbnB1dFdyYXBwZXI+XHJcbiAgICAgIDxMYWJlbD7soJzrqqk8L0xhYmVsPlxyXG4gICAgICA8U3ViamVjdCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0n7KCc66qp7J2EIOyekeyEse2VtOyjvOyEuOyalCcgb25DaGFuZ2U9e29uQ2hhbmdlVGl0bGV9IC8+XHJcbiAgICAgIDxFcnJvcj57dGl0bGVFcnJvcn08L0Vycm9yPlxyXG4gICAgPC9JbnB1dFdyYXBwZXI+XHJcbiAgICA8SW5wdXRXcmFwcGVyPlxyXG4gICAgICA8TGFiZWw+64K07JqpPC9MYWJlbD5cclxuICAgICAgPENvbnRlbnRzIHBsYWNlaG9sZGVyPSfrgrTsmqnsnYQg7J6R7ISx7ZW07KO87IS47JqUJyBvbkNoYW5nZT17b25DaGFuZ2VDb250ZW50c30gLz5cclxuICAgICAgPEVycm9yPntjb250ZW50c0Vycm9yfTwvRXJyb3I+XHJcbiAgICA8L0lucHV0V3JhcHBlcj5cclxuICAgIDxJbWFnZVdyYXBwZXI+XHJcbiAgICAgIDxMYWJlbD7tjIzsnbwg7LKo67aAPC9MYWJlbD5cclxuICAgICAgPFVwbG9hZEJ1dHRvbj4rPC9VcGxvYWRCdXR0b24+XHJcbiAgICAgIDxVcGxvYWRCdXR0b24+KzwvVXBsb2FkQnV0dG9uPlxyXG4gICAgICA8VXBsb2FkQnV0dG9uPis8L1VwbG9hZEJ1dHRvbj5cclxuICAgIDwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgPEJ1dHRvbldyYXBwZXI+XHJcbiAgICAgIDxTdWJtaXRCdXR0b24gb25DbGljaz17b25DbGlja1N1Ym1pdH0+65Ox66Gd7ZWY6riwPC9TdWJtaXRCdXR0b24+XHJcbiAgICA8L0J1dHRvbldyYXBwZXI+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgICBcclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlRpdGxlIiwiV3JhcHBlciIsIklucHV0V3JhcHBlciIsIkxhYmVsIiwiQ29udGVudHMiLCJJbWFnZVdyYXBwZXIiLCJVcGxvYWRCdXR0b24iLCJTdWJtaXRCdXR0b24iLCJCdXR0b25XcmFwcGVyIiwiU3ViamVjdCIsIkVycm9yIiwidXNlU3RhdGUiLCJ1c2VNdXRhdGlvbiIsImdxbCIsInVzZVJvdXRlciIsIkNSRUFURV9CT0FSRCIsIkJvYXJkUGFnZSIsInJvdXRlciIsImNyZWF0ZUJvYXJkIiwidGl0bGUiLCJzZXRUaXRsZSIsImNvbnRlbnQiLCJzZXRDb250ZW50cyIsInRpdGxlRXJyb3IiLCJzZXRUaXRsZUVycm9yIiwiY29udGVudHNFcnJvciIsInNldENvbnRlbnRzRXJyb3IiLCJvbkNoYW5nZVRpdGxlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlQ29udGVudHMiLCJvbkNsaWNrU3VibWl0IiwicmVzdWx0IiwidmFyaWFibGVzIiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwicHVzaCIsImRhdGEiLCJpZCIsIm1lc3NhZ2UiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/boards/new/index.js\n");

/***/ })

});