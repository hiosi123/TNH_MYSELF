"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/boards",{

/***/ "./pages/boards/index.js":
/*!*******************************!*\
  !*** ./pages/boards/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardLists; }\n/* harmony export */ });\n/* harmony import */ var _Users_s_Desktop_TNH_MYSELF_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_s_Desktop_TNH_MYSELF_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_s_Desktop_TNH_MYSELF_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _styles_emotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/emotion */ \"./styles/emotion.js\");\n/* harmony import */ var _src_commons_libraries_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/commons/libraries/utils */ \"./src/commons/libraries/utils.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  query fetchBoards ($page: Float){\\n    fetchBoards(page: $page){\\n      id\\n      title\\n      createdAt\\n      viewcount\\n      user {\\n        userid\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  mutation deleteBoard($boardid: Float!){\\n    deleteBoard(boardid: $boardid)\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  query fetchBoardsCount {\\n    fetchBoardsCount\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\nmutation logout{\\n  logout\\n}\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar FETCH_BOARDS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject());\nvar DELETE_BOARD = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject1());\nvar FETCH_BOARDS_COUNT = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject2());\nvar LOGOUT = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject3());\nfunction BoardLists() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(1), startPage = ref[0], setStartPage = ref[1];\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery)(FETCH_BOARDS), data = ref1.data, refetch = ref1.refetch;\n    var ref2 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery)(FETCH_BOARDS_COUNT), dataBoardsCount = ref2.data;\n    var lastPage = Math.ceil((dataBoardsCount === null || dataBoardsCount === void 0 ? void 0 : dataBoardsCount.fetchBoardsCount) / 10);\n    var ref3 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(DELETE_BOARD), 1), deleteBoard = ref3[0];\n    var onClickDelete = function() {\n        var _ref = _asyncToGenerator(_Users_s_Desktop_TNH_MYSELF_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            return _Users_s_Desktop_TNH_MYSELF_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return deleteBoard({\n                            variables: {\n                                boardid: Number(event.target.id)\n                            },\n                            refetchQueries: [\n                                {\n                                    query: FETCH_BOARDS\n                                }\n                            ]\n                        });\n                    case 3:\n                        _ctx.next = 8;\n                        break;\n                    case 5:\n                        _ctx.prev = 5;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        alert('삭제할 권한이 없습니다.');\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    5\n                ]\n            ]);\n        }));\n        return function onClickDelete(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onClickMoveToBoardNew = function() {\n        router.push('/boards/new');\n    };\n    var onClickMoveToBoardDetail = function(event) {\n        router.push(\"/boards/\".concat(event.target.id));\n    };\n    var onClickPage = function(event) {\n        refetch({\n            page: Number(event.target.id)\n        });\n    };\n    var onClickPrevPage = function() {\n        if (startPage === 1) return;\n        setStartPage(function(prev) {\n            return prev - 10;\n        });\n        refetch({\n            page: startPage - 10\n        });\n    };\n    var onClickNextPage = function() {\n        if (!(startPage + 10 <= lastPage)) return;\n        setStartPage(function(prev) {\n            return prev + 10;\n        });\n        refetch({\n            page: startPage + 10\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.Wrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.Title, {\n                children: \"게시글 페이지\"\n            }, void 0, false, {\n                fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.TableTop, {}, void 0, false, {\n                fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.ColumnHeaderBasic, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"checkbox\"\n                        }, void 0, false, {\n                            fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                            lineNumber: 109,\n                            columnNumber: 28\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.ColumnHeaderBasic, {\n                        children: \"No\"\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.ColumnHeaderTitle, {\n                        children: \"제목\"\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.ColumnHeaderBasic, {\n                        children: \"게시자\"\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.ColumnHeaderBasic, {\n                        children: \"게시일\"\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.ColumnHeaderBasic, {\n                        children: \"조회수\"\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.ColumnHeaderBasic, {\n                        children: \"삭제\"\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this),\n            data === null || data === void 0 ? void 0 : data.fetchBoards.map(function(el) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.ColumnBasic, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"checkbox\"\n                            }, void 0, false, {\n                                fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                                lineNumber: 121,\n                                columnNumber: 26\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.ColumnBasic, {\n                            children: el.id\n                        }, void 0, false, {\n                            fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                            lineNumber: 122,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.ColumnTitle, {\n                            id: el.id,\n                            onClick: onClickMoveToBoardDetail,\n                            children: el.title\n                        }, void 0, false, {\n                            fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                            lineNumber: 123,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.ColumnBasic, {\n                            children: el.user.userid\n                        }, void 0, false, {\n                            fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                            lineNumber: 124,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.ColumnBasic, {\n                            children: (0,_src_commons_libraries_utils__WEBPACK_IMPORTED_MODULE_5__.getDate)(el.createdAt)\n                        }, void 0, false, {\n                            fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                            lineNumber: 125,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.ColumnBasic, {\n                            children: el.viewcount\n                        }, void 0, false, {\n                            fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                            lineNumber: 126,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.ColumnBasic, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                id: el.id,\n                                onClick: onClickDelete,\n                                children: \"삭제\"\n                            }, void 0, false, {\n                                fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                                lineNumber: 128,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                            lineNumber: 127,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, el.id, true, {\n                    fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                    lineNumber: 120,\n                    columnNumber: 13\n                }, _this));\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.TableBottom, {}, void 0, false, {\n                fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.Footer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.Page, {\n                        onClick: onClickPrevPage,\n                        children: \"<\"\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                        lineNumber: 136,\n                        columnNumber: 7\n                    }, this),\n                    new Array(10).fill(1).map(function(_, index) {\n                        return index + startPage <= lastPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.Page, {\n                            onClick: onClickPage,\n                            id: String(index + startPage),\n                            children: [\n                                \" \",\n                                \" \",\n                                index + startPage\n                            ]\n                        }, index + startPage, true, {\n                            fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                            lineNumber: 140,\n                            columnNumber: 13\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.Page, {\n                        onClick: onClickNextPage,\n                        children: \">\"\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                        lineNumber: 149,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        onClick: onClickMoveToBoardNew,\n                        children: \"등록\"\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                        lineNumber: 150,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/index.js\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, this));\n};\n_s(BoardLists, \"5ztOyYFqIfWgo2K+MsovYfCVji4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation\n    ];\n});\n_c = BoardLists;\nvar _c;\n$RefreshReg$(_c, \"BoardLists\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFKbkIyQyxLQUFLLEdBQUczQyxTQUFTOzs7Ozs7Z0dBUTdCVCxpREFBSTt3QkFBQzBDLE9BQU8sRUFBRU4sZUFBZTtrQ0FBSSxDQUFDOzs7Ozs7Z0dBQ2hDdkMsbURBQU07d0JBQUM2QyxPQUFPLEVBQUViLHFCQUFxQjtrQ0FBRSxDQUV4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVIsQ0FBQztHQXRHdUJ0QixVQUFVOztRQUNqQnJCLGtEQUFTO1FBRUFELG9EQUFRO1FBQ0VBLG9EQUFRO1FBRXBCRix1REFBVzs7O0tBTlh3QixVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2JvYXJkcy9pbmRleC5qcz9iOWY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uLCBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtcbiAgVGl0bGUsXG4gIFRhYmxlVG9wLCBcbiAgV3JhcHBlcixcbiAgQ29sdW1uSGVhZGVyQmFzaWMsXG4gIENvbHVtbkhlYWRlclRpdGxlLFxuICBSb3csXG4gIENvbHVtbkJhc2ljLFxuICBDb2x1bW4sXG4gIENvbHVtblRpdGxlLFxuICBCdXR0b24sXG4gIEZvb3RlcixcbiAgVGFibGVCb3R0b20sXG4gIFBhZ2Vcbn0gZnJvbSAnLi4vLi4vc3R5bGVzL2Vtb3Rpb24nXG5pbXBvcnQgeyBnZXREYXRlIH0gZnJvbSBcIi4uLy4uL3NyYy9jb21tb25zL2xpYnJhcmllcy91dGlsc1wiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IEZFVENIX0JPQVJEUyA9IGdxbGBcbiAgcXVlcnkgZmV0Y2hCb2FyZHMgKCRwYWdlOiBGbG9hdCl7XG4gICAgZmV0Y2hCb2FyZHMocGFnZTogJHBhZ2Upe1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBjcmVhdGVkQXRcbiAgICAgIHZpZXdjb3VudFxuICAgICAgdXNlciB7XG4gICAgICAgIHVzZXJpZFxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuY29uc3QgREVMRVRFX0JPQVJEID0gZ3FsYFxuICBtdXRhdGlvbiBkZWxldGVCb2FyZCgkYm9hcmRpZDogRmxvYXQhKXtcbiAgICBkZWxldGVCb2FyZChib2FyZGlkOiAkYm9hcmRpZClcbiAgfVxuYFxuXG5jb25zdCBGRVRDSF9CT0FSRFNfQ09VTlQgPSBncWxgXG4gIHF1ZXJ5IGZldGNoQm9hcmRzQ291bnQge1xuICAgIGZldGNoQm9hcmRzQ291bnRcbiAgfVxuYDtcblxuY29uc3QgTE9HT1VUID0gZ3FsYFxubXV0YXRpb24gbG9nb3V0e1xuICBsb2dvdXRcbn1cbmBcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZExpc3RzKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3N0YXJ0UGFnZSwgc2V0U3RhcnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCB7ZGF0YSwgcmVmZXRjaH0gPSB1c2VRdWVyeShGRVRDSF9CT0FSRFMpXG4gIGNvbnN0IHsgZGF0YTogZGF0YUJvYXJkc0NvdW50IH0gPSB1c2VRdWVyeShGRVRDSF9CT0FSRFNfQ09VTlQpXG4gIGNvbnN0IGxhc3RQYWdlID0gTWF0aC5jZWlsKGRhdGFCb2FyZHNDb3VudD8uZmV0Y2hCb2FyZHNDb3VudCAvIDEwKTtcbiAgY29uc3QgW2RlbGV0ZUJvYXJkXSA9IHVzZU11dGF0aW9uKERFTEVURV9CT0FSRClcbiAgXG5cblxuICBjb25zdCBvbkNsaWNrRGVsZXRlID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgdHJ5e1xuICAgICAgYXdhaXQgZGVsZXRlQm9hcmQoe1xuICAgICAgICB2YXJpYWJsZXM6IHtib2FyZGlkOiBOdW1iZXIoZXZlbnQudGFyZ2V0LmlkKX0sXG4gICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbe3F1ZXJ5OiBGRVRDSF9CT0FSRFN9XVxuICAgICAgfSlcbiAgXG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgYWxlcnQoJ+yCreygnO2VoCDqtoztlZzsnbQg7JeG7Iq164uI64ukLicpXG4gICAgfVxuIFxuICB9XG5cbiAgY29uc3Qgb25DbGlja01vdmVUb0JvYXJkTmV3ID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKCcvYm9hcmRzL25ldycpXG4gIH1cblxuICBjb25zdCBvbkNsaWNrTW92ZVRvQm9hcmREZXRhaWwgPSAoZXZlbnQpID0+IHtcbiAgICByb3V0ZXIucHVzaChgL2JvYXJkcy8ke2V2ZW50LnRhcmdldC5pZH1gKVxuICB9XG4gIFxuICBjb25zdCBvbkNsaWNrUGFnZSA9IChldmVudCkgPT4ge1xuICAgIHJlZmV0Y2goe3BhZ2U6IE51bWJlcihldmVudC50YXJnZXQuaWQpfSlcbiAgfVxuXG4gIGNvbnN0IG9uQ2xpY2tQcmV2UGFnZSA9ICgpID0+IHtcbiAgICBpZiAoc3RhcnRQYWdlID09PSAxKSByZXR1cm47XG4gICAgc2V0U3RhcnRQYWdlKChwcmV2KSA9PiBwcmV2IC0gMTApO1xuICAgIHJlZmV0Y2goeyBwYWdlOiBzdGFydFBhZ2UgLSAxMCB9KTtcbiAgfTtcblxuICBjb25zdCBvbkNsaWNrTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKCEoc3RhcnRQYWdlICsgMTAgPD0gbGFzdFBhZ2UpKSByZXR1cm47XG4gICAgc2V0U3RhcnRQYWdlKChwcmV2KSA9PiBwcmV2ICsgMTApO1xuICAgIHJlZmV0Y2goeyBwYWdlOiBzdGFydFBhZ2UgKyAxMCB9KTtcbiAgfTtcblxuXG5cbiAgXG4gIHJldHVybihcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxUaXRsZT7qsozsi5zquIAg7Y6Y7J207KeAPC9UaXRsZT4gXG4gICAgICA8VGFibGVUb3AvPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbHVtbkhlYWRlckJhc2ljPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPjwvQ29sdW1uSGVhZGVyQmFzaWM+XG4gICAgICAgIDxDb2x1bW5IZWFkZXJCYXNpYz5ObzwvQ29sdW1uSGVhZGVyQmFzaWM+XG4gICAgICAgIDxDb2x1bW5IZWFkZXJUaXRsZT7soJzrqqk8L0NvbHVtbkhlYWRlclRpdGxlPlxuICAgICAgICA8Q29sdW1uSGVhZGVyQmFzaWM+6rKM7Iuc7J6QPC9Db2x1bW5IZWFkZXJCYXNpYz5cbiAgICAgICAgPENvbHVtbkhlYWRlckJhc2ljPuqyjOyLnOydvDwvQ29sdW1uSGVhZGVyQmFzaWM+XG4gICAgICAgIDxDb2x1bW5IZWFkZXJCYXNpYz7sobDtmozsiJg8L0NvbHVtbkhlYWRlckJhc2ljPlxuICAgICAgICA8Q29sdW1uSGVhZGVyQmFzaWM+7IKt7KCcPC9Db2x1bW5IZWFkZXJCYXNpYz5cbiAgICAgIDwvUm93PlxuICAgICAgXG4gICAgICB7ZGF0YT8uZmV0Y2hCb2FyZHMubWFwKChlbCkgPT4ge1xuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxSb3cga2V5PXtlbC5pZH0+XG4gICAgICAgICAgICA8Q29sdW1uQmFzaWM+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+PC9Db2x1bW5CYXNpYz5cbiAgICAgICAgICAgIDxDb2x1bW5CYXNpYz57ZWwuaWR9PC9Db2x1bW5CYXNpYz5cbiAgICAgICAgICAgIDxDb2x1bW5UaXRsZSBpZD17ZWwuaWR9IG9uQ2xpY2s9e29uQ2xpY2tNb3ZlVG9Cb2FyZERldGFpbH0+e2VsLnRpdGxlfTwvQ29sdW1uVGl0bGU+XG4gICAgICAgICAgICA8Q29sdW1uQmFzaWM+e2VsLnVzZXIudXNlcmlkfTwvQ29sdW1uQmFzaWM+XG4gICAgICAgICAgICA8Q29sdW1uQmFzaWM+e2dldERhdGUoZWwuY3JlYXRlZEF0KX08L0NvbHVtbkJhc2ljPlxuICAgICAgICAgICAgPENvbHVtbkJhc2ljPntlbC52aWV3Y291bnR9PC9Db2x1bW5CYXNpYz5cbiAgICAgICAgICAgIDxDb2x1bW5CYXNpYz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPXtlbC5pZH0gb25DbGljaz17b25DbGlja0RlbGV0ZX0+7IKt7KCcPC9idXR0b24+XG4gICAgICAgICAgICA8L0NvbHVtbkJhc2ljPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICApfVxuICAgICAgPFRhYmxlQm90dG9tLz5cbiAgICAgIDxGb290ZXI+XG4gICAgICA8UGFnZSBvbkNsaWNrPXtvbkNsaWNrUHJldlBhZ2V9PntgPGB9PC9QYWdlPlxuICAgICAge25ldyBBcnJheSgxMCkuZmlsbCgxKS5tYXAoXG4gICAgICAgIChfLCBpbmRleCkgPT5cbiAgICAgICAgICBpbmRleCArIHN0YXJ0UGFnZSA8PSBsYXN0UGFnZSAmJiAoXG4gICAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgICBrZXk9e2luZGV4ICsgc3RhcnRQYWdlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrUGFnZX1cbiAgICAgICAgICAgICAgaWQ9e1N0cmluZyhpbmRleCArIHN0YXJ0UGFnZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtgIGB9IHtpbmRleCArIHN0YXJ0UGFnZX1cbiAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICApXG4gICAgICApfVxuICAgICAgPFBhZ2Ugb25DbGljaz17b25DbGlja05leHRQYWdlfT57YD5gfTwvUGFnZT4gIFxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tNb3ZlVG9Cb2FyZE5ld30+XG4gICAgICAgICAg65Ox66GdXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Gb290ZXI+XG4gICAgPC9XcmFwcGVyPlxuICApXG59Il0sIm5hbWVzIjpbInVzZU11dGF0aW9uIiwiZ3FsIiwidXNlUXVlcnkiLCJ1c2VSb3V0ZXIiLCJzdHlsZWQiLCJUaXRsZSIsIlRhYmxlVG9wIiwiV3JhcHBlciIsIkNvbHVtbkhlYWRlckJhc2ljIiwiQ29sdW1uSGVhZGVyVGl0bGUiLCJSb3ciLCJDb2x1bW5CYXNpYyIsIkNvbHVtbiIsIkNvbHVtblRpdGxlIiwiQnV0dG9uIiwiRm9vdGVyIiwiVGFibGVCb3R0b20iLCJQYWdlIiwiZ2V0RGF0ZSIsInVzZVN0YXRlIiwiRkVUQ0hfQk9BUkRTIiwiREVMRVRFX0JPQVJEIiwiRkVUQ0hfQk9BUkRTX0NPVU5UIiwiTE9HT1VUIiwiQm9hcmRMaXN0cyIsInJvdXRlciIsInN0YXJ0UGFnZSIsInNldFN0YXJ0UGFnZSIsImRhdGEiLCJyZWZldGNoIiwiZGF0YUJvYXJkc0NvdW50IiwibGFzdFBhZ2UiLCJNYXRoIiwiY2VpbCIsImZldGNoQm9hcmRzQ291bnQiLCJkZWxldGVCb2FyZCIsIm9uQ2xpY2tEZWxldGUiLCJldmVudCIsInZhcmlhYmxlcyIsImJvYXJkaWQiLCJOdW1iZXIiLCJ0YXJnZXQiLCJpZCIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJhbGVydCIsIm9uQ2xpY2tNb3ZlVG9Cb2FyZE5ldyIsInB1c2giLCJvbkNsaWNrTW92ZVRvQm9hcmREZXRhaWwiLCJvbkNsaWNrUGFnZSIsInBhZ2UiLCJvbkNsaWNrUHJldlBhZ2UiLCJwcmV2Iiwib25DbGlja05leHRQYWdlIiwiaW5wdXQiLCJ0eXBlIiwiZmV0Y2hCb2FyZHMiLCJtYXAiLCJlbCIsIm9uQ2xpY2siLCJ0aXRsZSIsInVzZXIiLCJ1c2VyaWQiLCJjcmVhdGVkQXQiLCJ2aWV3Y291bnQiLCJidXR0b24iLCJBcnJheSIsImZpbGwiLCJfIiwiaW5kZXgiLCJTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/boards/index.js\n");

/***/ })

});