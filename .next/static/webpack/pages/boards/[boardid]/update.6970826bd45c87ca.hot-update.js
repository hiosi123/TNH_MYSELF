"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/boards/[boardid]/update",{

/***/ "./pages/boards/[boardid]/update/index.js":
/*!************************************************!*\
  !*** ./pages/boards/[boardid]/update/index.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardEditPage; }\n/* harmony export */ });\n/* harmony import */ var C_Users_admin_Desktop_pilot_next_pilot_myself_TNH_MYSELF_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_admin_Desktop_pilot_next_pilot_myself_TNH_MYSELF_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_admin_Desktop_pilot_next_pilot_myself_TNH_MYSELF_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../styles/emotion */ \"./styles/emotion.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    mutation updateBoard($boardid: Float!, $title: String!, $content: String!, $url: String) {\\n        updateBoard(boardid: $boardid, title: $title, content: $content, url: $url){\\n            id\\n            title\\n            content\\n            viewcount\\n        }\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query fetchBoard($boardid: Float!){\\n        fetchBoard(boardid: $boardid){\\n            id\\n            title\\n            content\\n            url\\n\\n        }\\n    }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar UPDATE_BOARD = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject());\nvar FETCH_BOARD = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject1());\nfunction BoardEditPage() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(UPDATE_BOARD), 1), updateBoard = ref[0];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''), title = ref1[0], setTitle = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''), content = ref2[0], setContents = ref2[1];\n    var data = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(FETCH_BOARD, {\n        variables: {\n            boardid: Number(router.query.boardid)\n        }\n    }).data;\n    var onChangeTitle = function(event) {\n        setTitle(event.target.value);\n    };\n    var onChangeContents = function(event) {\n        setContents(event.target.value);\n    };\n    var onClickUpdate = function() {\n        var _ref = _asyncToGenerator(C_Users_admin_Desktop_pilot_next_pilot_myself_TNH_MYSELF_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var result;\n            return C_Users_admin_Desktop_pilot_next_pilot_myself_TNH_MYSELF_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return updateBoard({\n                            variables: {\n                                boardid: Number(router.query.boardid),\n                                title: title,\n                                content: content\n                            }\n                        });\n                    case 3:\n                        result = _ctx.sent;\n                        alert('게시물 수정에 성공하였습니다!');\n                        //이동\n                        router.push(\"/boards/\".concat(router.query.boardid));\n                        _ctx.next = 12;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        alert('수정할 권한이 없습니다.');\n                        router.push('/boards');\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return function onClickUpdate() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.Wrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.Title, {\n                children: \" 게시판 수정 \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\update\\\\index.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.InputWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.Label, {\n                        children: \"제목\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\update\\\\index.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.Subject, {\n                        type: \"text\",\n                        onChange: onChangeTitle,\n                        defaultValue: data === null || data === void 0 ? void 0 : data.fetchBoard.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\update\\\\index.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\update\\\\index.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.InputWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.Label, {\n                        children: \"내용\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\update\\\\index.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.Contents, {\n                        onChange: onChangeContents,\n                        defaultValue: data === null || data === void 0 ? void 0 : data.fetchBoard.content\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\update\\\\index.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\update\\\\index.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.ImageWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.Label, {\n                        children: \"파일 첨부\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\update\\\\index.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.UploadButton, {\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\update\\\\index.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.UploadButton, {\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\update\\\\index.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.UploadButton, {\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\update\\\\index.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\update\\\\index.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.ButtonWrapper, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.SubmitButton, {\n                    onClick: onClickUpdate,\n                    children: \"수정하기\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\update\\\\index.js\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\update\\\\index.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\update\\\\index.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this));\n};\n_s(BoardEditPage, \"wKfhQpatS289w8tjOOgvDuQ3Qek=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n_c = BoardEditPage;\nvar _c;\n$RefreshReg$(_c, \"BoardEditPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib2FyZHMvW2JvYXJkaWRdL3VwZGF0ZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBWW1DO0FBQ0U7QUFDcUI7QUFDNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFHTCxDQVN6Qjs7Ozs7Ozs7O1FBRXdCLENBVXhCOzs7Ozs7OztBQXJCQSxHQUFLLENBQUNnQixZQUFZLEdBQUdILG1EQUFHO0FBV3hCLEdBQUssQ0FBQ0ksV0FBVyxHQUFHSixtREFBRztBQVlSLFFBQVEsQ0FBQ0ssYUFBYSxHQUFHLENBQUM7O0lBQ3ZDLEdBQUssQ0FBQ0MsTUFBTSxHQUFHUixzREFBUztJQUV4QixHQUFLLENBQWlCQyxHQUF5QixrQkFBekJBLDJEQUFXLENBQUNJLFlBQVksT0FBdkNJLFdBQVcsR0FBSVIsR0FBeUI7SUFDL0MsR0FBSyxDQUFxQkcsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBOUJNLEtBQUssR0FBY04sSUFBWSxLQUF4Qk8sUUFBUSxHQUFJUCxJQUFZO0lBQ3RDLEdBQUssQ0FBMEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQW5DUSxPQUFPLEdBQWlCUixJQUFZLEtBQTNCUyxXQUFXLEdBQUlULElBQVk7SUFFM0MsR0FBSyxDQUFHVSxJQUFJLEdBQUtYLHdEQUFRLENBQUNHLFdBQVcsRUFBRSxDQUFDO1FBQ3RDUyxTQUFTLEVBQUUsQ0FBQ0M7WUFBQUEsT0FBTyxFQUFFQyxNQUFNLENBQUNULE1BQU0sQ0FBQ1UsS0FBSyxDQUFDRixPQUFPO1FBQUMsQ0FBQztJQUNwRCxDQUFDLEVBRk9GLElBQUk7SUFJWixHQUFLLENBQUNLLGFBQWEsR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO1FBQ2hDVCxRQUFRLENBQUNTLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLO0lBQzdCLENBQUM7SUFFRCxHQUFLLENBQUNDLGdCQUFnQixHQUFHLFFBQVEsQ0FBUEgsS0FBSyxFQUFLLENBQUM7UUFDbkNQLFdBQVcsQ0FBQ08sS0FBSyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7SUFDaEMsQ0FBQztJQUVELEdBQUssQ0FBQ0UsYUFBYTt5TUFBRyxRQUFRLFdBQUksQ0FBQztnQkFFekJDLE1BQU07Ozs7OzsrQkFBU2hCLFdBQVcsQ0FBQyxDQUFDOzRCQUNoQ00sU0FBUyxFQUFFLENBQUNDO2dDQUFBQSxPQUFPLEVBQUVDLE1BQU0sQ0FBQ1QsTUFBTSxDQUFDVSxLQUFLLENBQUNGLE9BQU87Z0NBQUdOLEtBQUssRUFBRUEsS0FBSztnQ0FBRUUsT0FBTyxFQUFFQSxPQUFPOzRCQUFBLENBQUM7d0JBQ3BGLENBQUM7O3dCQUZLYSxNQUFNO3dCQUdaQyxLQUFLLENBQUMsQ0FBa0I7d0JBQ0UsRUFBdEI7d0JBQ0FsQixNQUFFLENBQUNtQixJQUFJLENBQUUsQ0FBUSxVQUF1QixPQUFyQm5CLE1BQU0sQ0FBQ1UsS0FBSyxDQUFDRixPQUFPOzs7Ozs7d0JBRTNDVSxLQUFLLENBQUMsQ0FBZTt3QkFDRGxCLE1BQWQsQ0FBQ21CLElBQUksQ0FBQyxDQUFTOzs7Ozs7Ozs7OztRQUd6QixDQUFDO3dCQWJLSCxhQUFhOzs7O0lBZW5CLE1BQU0sNkVBQ0hsQyxvREFBTzs7d0ZBQ0xELGtEQUFLOzBCQUFDLENBQVE7Ozs7Ozt3RkFDSkUseURBQUU7O2dHQUNWQyxrREFBSztrQ0FBQyxDQUFFOzs7Ozs7Z0dBQ0pNLG9EQUFHO3dCQUFDOEIsSUFBSSxFQUFDLENBQU07d0JBQUNDLFFBQVEsRUFBRVYsYUFBYTt3QkFBRVcsWUFBWSxFQUFFaEIsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBRWlCLFVBQVUsQ0FBQ3JCLEtBQUs7Ozs7Ozs7Ozs7Ozt3RkFFbkZuQix5REFBWTs7Z0dBQ1ZDLGtEQUFLO2tDQUFDLENBQUU7Ozs7OztnR0FDSkMscURBQUk7d0JBQUNvQyxRQUFRLEVBQUVOLGdCQUFnQjt3QkFBRU8sWUFBWSxFQUFFaEIsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBRWlCLFVBQVUsQ0FBQ25CLE9BQU87Ozs7Ozs7Ozs7Ozt3RkFFN0VsQix5REFBWTs7Z0dBQ1ZGLGtEQUFLO2tDQUFDLENBQUs7Ozs7OztnR0FDSEcseURBQUk7a0NBQUMsQ0FBQzs7Ozs7O2dHQUNkQSx5REFBWTtrQ0FBQyxDQUFDOzs7Ozs7Z0dBQ2RBLHlEQUFZO2tDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozt3RkFFaEJFLDBEQUFhO3NHQUNYRCx5REFBWTtvQkFBQ29DLE9BQU8sRUFBRVIsYUFBYTs4QkFBRSxDQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlsRCxDQUFDO0dBeER1QmpCLGFBQWE7O1FBQ3BCUCxrREFBUztRQUVGQyx1REFBVztRQUloQkUsb0RBQVE7OztLQVBISSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2JvYXJkcy9bYm9hcmRpZF0vdXBkYXRlL2luZGV4LmpzPzk1MjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBUaXRsZSwgXHJcbiAgV3JhcHBlcixcclxuICBJbnB1dFdyYXBwZXIsXHJcbiAgTGFiZWwsXHJcbiAgQ29udGVudHMsXHJcbiAgSW1hZ2VXcmFwcGVyLFxyXG4gIFVwbG9hZEJ1dHRvbixcclxuICBTdWJtaXRCdXR0b24sXHJcbiAgQnV0dG9uV3JhcHBlcixcclxuICBTdWJqZWN0LFxyXG4gIEVycm9yLFxyXG59IGZyb20gJy4uLy4uLy4uLy4uL3N0eWxlcy9lbW90aW9uJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZU11dGF0aW9uLCBncWwsIHVzZVF1ZXJ5fSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuY29uc3QgVVBEQVRFX0JPQVJEID0gZ3FsYFxyXG4gICAgbXV0YXRpb24gdXBkYXRlQm9hcmQoJGJvYXJkaWQ6IEZsb2F0ISwgJHRpdGxlOiBTdHJpbmchLCAkY29udGVudDogU3RyaW5nISwgJHVybDogU3RyaW5nKSB7XHJcbiAgICAgICAgdXBkYXRlQm9hcmQoYm9hcmRpZDogJGJvYXJkaWQsIHRpdGxlOiAkdGl0bGUsIGNvbnRlbnQ6ICRjb250ZW50LCB1cmw6ICR1cmwpe1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgIHZpZXdjb3VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgRkVUQ0hfQk9BUkQgPSBncWxgXHJcbiAgICBxdWVyeSBmZXRjaEJvYXJkKCRib2FyZGlkOiBGbG9hdCEpe1xyXG4gICAgICAgIGZldGNoQm9hcmQoYm9hcmRpZDogJGJvYXJkaWQpe1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgIHVybFxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkRWRpdFBhZ2UoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgW3VwZGF0ZUJvYXJkXSA9IHVzZU11dGF0aW9uKFVQREFURV9CT0FSRClcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50c10gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShGRVRDSF9CT0FSRCwge1xyXG4gICAgdmFyaWFibGVzOiB7Ym9hcmRpZDogTnVtYmVyKHJvdXRlci5xdWVyeS5ib2FyZGlkKX1cclxuICB9KSBcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUaXRsZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0VGl0bGUoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VDb250ZW50cyA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0Q29udGVudHMoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DbGlja1VwZGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXBkYXRlQm9hcmQoe1xyXG4gICAgICAgIHZhcmlhYmxlczoge2JvYXJkaWQ6IE51bWJlcihyb3V0ZXIucXVlcnkuYm9hcmRpZCksIHRpdGxlOiB0aXRsZSwgY29udGVudDogY29udGVudH1cclxuICAgICAgfSlcclxuICAgICAgYWxlcnQoJ+qyjOyLnOusvCDsiJjsoJXsl5Ag7ISx6rO17ZWY7JiA7Iq164uI64ukIScpXHJcbiAgICAgIC8v7J2064+ZXHJcbiAgICAgIHJvdXRlci5wdXNoKGAvYm9hcmRzLyR7cm91dGVyLnF1ZXJ5LmJvYXJkaWR9YClcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KCfsiJjsoJXtlaAg6raM7ZWc7J20IOyXhuyKteuLiOuLpC4nKVxyXG4gICAgICByb3V0ZXIucHVzaCgnL2JvYXJkcycpXHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPFRpdGxlPiDqsozsi5ztjJAg7IiY7KCVIDwvVGl0bGU+IFxyXG4gICAgICA8SW5wdXRXcmFwcGVyPlxyXG4gICAgICAgIDxMYWJlbD7soJzrqqk8L0xhYmVsPlxyXG4gICAgICAgIDxTdWJqZWN0IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXtvbkNoYW5nZVRpdGxlfSBkZWZhdWx0VmFsdWU9e2RhdGE/LmZldGNoQm9hcmQudGl0bGV9Lz5cclxuICAgICAgPC9JbnB1dFdyYXBwZXI+XHJcbiAgICAgIDxJbnB1dFdyYXBwZXI+XHJcbiAgICAgICAgPExhYmVsPuuCtOyaqTwvTGFiZWw+XHJcbiAgICAgICAgPENvbnRlbnRzIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbnRlbnRzfSBkZWZhdWx0VmFsdWU9e2RhdGE/LmZldGNoQm9hcmQuY29udGVudH0vPlxyXG4gICAgICA8L0lucHV0V3JhcHBlcj5cclxuICAgICAgPEltYWdlV3JhcHBlcj5cclxuICAgICAgICA8TGFiZWw+7YyM7J28IOyyqOu2gDwvTGFiZWw+XHJcbiAgICAgICAgPFVwbG9hZEJ1dHRvbj4rPC9VcGxvYWRCdXR0b24+XHJcbiAgICAgICAgPFVwbG9hZEJ1dHRvbj4rPC9VcGxvYWRCdXR0b24+XHJcbiAgICAgICAgPFVwbG9hZEJ1dHRvbj4rPC9VcGxvYWRCdXR0b24+XHJcbiAgICAgIDwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgICA8QnV0dG9uV3JhcHBlcj5cclxuICAgICAgICA8U3VibWl0QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tVcGRhdGV9PuyImOygle2VmOq4sDwvU3VibWl0QnV0dG9uPlxyXG4gICAgICA8L0J1dHRvbldyYXBwZXI+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIlRpdGxlIiwiV3JhcHBlciIsIklucHV0V3JhcHBlciIsIkxhYmVsIiwiQ29udGVudHMiLCJJbWFnZVdyYXBwZXIiLCJVcGxvYWRCdXR0b24iLCJTdWJtaXRCdXR0b24iLCJCdXR0b25XcmFwcGVyIiwiU3ViamVjdCIsIkVycm9yIiwidXNlUm91dGVyIiwidXNlTXV0YXRpb24iLCJncWwiLCJ1c2VRdWVyeSIsInVzZVN0YXRlIiwiVVBEQVRFX0JPQVJEIiwiRkVUQ0hfQk9BUkQiLCJCb2FyZEVkaXRQYWdlIiwicm91dGVyIiwidXBkYXRlQm9hcmQiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnRzIiwiZGF0YSIsInZhcmlhYmxlcyIsImJvYXJkaWQiLCJOdW1iZXIiLCJxdWVyeSIsIm9uQ2hhbmdlVGl0bGUiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VDb250ZW50cyIsIm9uQ2xpY2tVcGRhdGUiLCJyZXN1bHQiLCJhbGVydCIsInB1c2giLCJ0eXBlIiwib25DaGFuZ2UiLCJkZWZhdWx0VmFsdWUiLCJmZXRjaEJvYXJkIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/boards/[boardid]/update/index.js\n");

/***/ })

});