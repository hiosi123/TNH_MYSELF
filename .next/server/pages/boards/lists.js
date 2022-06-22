"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/boards/lists";
exports.ids = ["pages/boards/lists"];
exports.modules = {

/***/ "./pages/boards/lists/index.js":
/*!*************************************!*\
  !*** ./pages/boards/lists/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BoardLists)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst FETCH_BOARDS = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query fetchBoards($pagesize: Float, $page: Float, $userid: String) {\n    fetchBoards(pagesize : $pagesize, page: $page, userid: $userid){\n      id\n      title\n      createdAt\n      viewcount\n    }\n  }\n`;\nconst DELETE_BOARD = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  mutation deleteBoard($boarid: Float!){\n    deleteBoard(boardid: $boardid){\n      message\n    }\n  }\n`;\nconst Row = (_emotion_styled__WEBPACK_IMPORTED_MODULE_3___default().div)`\n    display: flex;\n`;\nconst Column = (_emotion_styled__WEBPACK_IMPORTED_MODULE_3___default().div)`\n    width: 20%;\n`;\nfunction BoardLists() {\n    const [deleteBoard] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(DELETE_BOARD);\n    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARDS);\n    const onClickDelete = async (event)=>{\n        const result = await deleteBoard({\n            variables: {\n                boardid: Number(event.target.id)\n            },\n            refetchQueries: [\n                {\n                    query: FETCH_BOARDS\n                }\n            ]\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data === null || data === void 0 ? void 0 : data.fetchBoards.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"checkbox\"\n                        }, void 0, false, {\n                            fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/lists/index.js\",\n                            lineNumber: 46,\n                            columnNumber: 19\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/lists/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                        children: el.id\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/lists/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                        children: el.title\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/lists/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                        children: el.createdAt\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/lists/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                        children: el.viewcount\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/lists/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            id: el.id,\n                            onClick: onClickDelete,\n                            children: \"삭제\"\n                        }, void 0, false, {\n                            fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/lists/index.js\",\n                            lineNumber: 52,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/lists/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/lists/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, el.id, true, {\n                fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/lists/index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        )\n    }, void 0, false, {\n        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/boards/lists/index.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib2FyZHMvbGlzdHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEyRDtBQUN0QjtBQUNEO0FBRXBDLEtBQUssQ0FBQ0ssWUFBWSxHQUFHSiwrQ0FBRyxDQUFDOzs7Ozs7Ozs7QUFTekI7QUFDQSxLQUFLLENBQUVLLFlBQVksR0FBR0wsK0NBQUcsQ0FBQzs7Ozs7O0FBTTFCO0FBRUEsS0FBSyxDQUFDTSxHQUFHLEdBQUdILDREQUFVLENBQUM7O0FBRXZCO0FBRUEsS0FBSyxDQUFDSyxNQUFNLEdBQUdMLDREQUFVLENBQUM7O0FBRTFCO0FBRWUsUUFBUSxDQUFDTSxVQUFVLEdBQUcsQ0FBQztJQUNwQyxLQUFLLEVBQUVDLFdBQVcsSUFBSVgsMkRBQVcsQ0FBQ00sWUFBWTtJQUM5QyxLQUFLLENBQUMsQ0FBQyxDQUFDTSxJQUFJLEVBQUMsQ0FBQyxHQUFHVix3REFBUSxDQUFDRyxZQUFZO0lBRXRDLEtBQUssQ0FBQ1EsYUFBYSxVQUFVQyxLQUFLLEdBQUssQ0FBQztRQUN0QyxLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNKLFdBQVcsQ0FBQyxDQUFDO1lBQ2hDSyxTQUFTLEVBQUUsQ0FBQ0M7Z0JBQUFBLE9BQU8sRUFBRUMsTUFBTSxDQUFDSixLQUFLLENBQUNLLE1BQU0sQ0FBQ0MsRUFBRTtZQUFDLENBQUM7WUFDN0NDLGNBQWMsRUFBRSxDQUFDO2dCQUFBLENBQUNDO29CQUFBQSxLQUFLLEVBQUVqQixZQUFZO2dCQUFBLENBQUM7WUFBQSxDQUFDO1FBRXpDLENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSw2RUFDSEcsQ0FBRztrQkFDSEksSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBRVcsV0FBVyxDQUFDQyxHQUFHLEVBQUVDLEVBQUUsK0VBQ3ZCbEIsR0FBRzs7Z0dBQ0NFLE1BQU07OEdBQUVpQixDQUFLOzRCQUFDQyxJQUFJLEVBQUMsQ0FBVTs7Ozs7Ozs7Ozs7Z0dBQzdCbEIsTUFBTTtrQ0FBRWdCLEVBQUUsQ0FBQ0wsRUFBRTs7Ozs7O2dHQUNiWCxNQUFNO2tDQUFFZ0IsRUFBRSxDQUFDRyxLQUFLOzs7Ozs7Z0dBQ2hCbkIsTUFBTTtrQ0FBRWdCLEVBQUUsQ0FBQ0ksU0FBUzs7Ozs7O2dHQUNwQnBCLE1BQU07a0NBQUVnQixFQUFFLENBQUNLLFNBQVM7Ozs7OztnR0FDcEJyQixNQUFNOzhHQUNGc0IsQ0FBTTs0QkFBQ1gsRUFBRSxFQUFFSyxFQUFFLENBQUNMLEVBQUU7NEJBQUVZLE9BQU8sRUFBRW5CLGFBQWE7c0NBQUUsQ0FBRTs7Ozs7Ozs7Ozs7Z0dBRWhEb0IsQ0FBRTs7Ozs7O2VBVEdSLEVBQUUsQ0FBQ0wsRUFBRTs7Ozs7Ozs7Ozs7QUFjckIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXNzLy4vcGFnZXMvYm9hcmRzL2xpc3RzL2luZGV4LmpzPzY5OTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24sIGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIlxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IEZFVENIX0JPQVJEUyA9IGdxbGBcbiAgcXVlcnkgZmV0Y2hCb2FyZHMoJHBhZ2VzaXplOiBGbG9hdCwgJHBhZ2U6IEZsb2F0LCAkdXNlcmlkOiBTdHJpbmcpIHtcbiAgICBmZXRjaEJvYXJkcyhwYWdlc2l6ZSA6ICRwYWdlc2l6ZSwgcGFnZTogJHBhZ2UsIHVzZXJpZDogJHVzZXJpZCl7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIGNyZWF0ZWRBdFxuICAgICAgdmlld2NvdW50XG4gICAgfVxuICB9XG5gXG5jb25zdCAgREVMRVRFX0JPQVJEID0gZ3FsYFxuICBtdXRhdGlvbiBkZWxldGVCb2FyZCgkYm9hcmlkOiBGbG9hdCEpe1xuICAgIGRlbGV0ZUJvYXJkKGJvYXJkaWQ6ICRib2FyZGlkKXtcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gIH1cbmBcblxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuYFxuXG5jb25zdCBDb2x1bW4gPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAyMCU7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkTGlzdHMoKSB7XG4gIGNvbnN0IFtkZWxldGVCb2FyZF0gPSB1c2VNdXRhdGlvbihERUxFVEVfQk9BUkQpXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoRkVUQ0hfQk9BUkRTKVxuXG4gIGNvbnN0IG9uQ2xpY2tEZWxldGUgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkZWxldGVCb2FyZCh7XG4gICAgICB2YXJpYWJsZXM6IHtib2FyZGlkOiBOdW1iZXIoZXZlbnQudGFyZ2V0LmlkKX0sXG4gICAgICByZWZldGNoUXVlcmllczogW3txdWVyeTogRkVUQ0hfQk9BUkRTfV1cblxuICAgIH0pXG4gIH1cbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAge2RhdGE/LmZldGNoQm9hcmRzLm1hcCgoZWwpID0+IChcbiAgICAgIDxSb3cga2V5PXtlbC5pZH0+XG4gICAgICAgICAgPENvbHVtbj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48L0NvbHVtbj5cbiAgICAgICAgICA8Q29sdW1uPntlbC5pZH08L0NvbHVtbj5cbiAgICAgICAgICA8Q29sdW1uPntlbC50aXRsZX08L0NvbHVtbj5cbiAgICAgICAgICA8Q29sdW1uPntlbC5jcmVhdGVkQXR9PC9Db2x1bW4+XG4gICAgICAgICAgPENvbHVtbj57ZWwudmlld2NvdW50fTwvQ29sdW1uPlxuICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9e2VsLmlkfSBvbkNsaWNrPXtvbkNsaWNrRGVsZXRlfT7sgq3soJw8L2J1dHRvbj5cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICA8YnIvPlxuICAgICAgPC9Sb3c+XG4gICAgKSl9XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlTXV0YXRpb24iLCJncWwiLCJ1c2VRdWVyeSIsInVzZVJvdXRlciIsInN0eWxlZCIsIkZFVENIX0JPQVJEUyIsIkRFTEVURV9CT0FSRCIsIlJvdyIsImRpdiIsIkNvbHVtbiIsIkJvYXJkTGlzdHMiLCJkZWxldGVCb2FyZCIsImRhdGEiLCJvbkNsaWNrRGVsZXRlIiwiZXZlbnQiLCJyZXN1bHQiLCJ2YXJpYWJsZXMiLCJib2FyZGlkIiwiTnVtYmVyIiwidGFyZ2V0IiwiaWQiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiZmV0Y2hCb2FyZHMiLCJtYXAiLCJlbCIsImlucHV0IiwidHlwZSIsInRpdGxlIiwiY3JlYXRlZEF0Iiwidmlld2NvdW50IiwiYnV0dG9uIiwib25DbGljayIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/boards/lists/index.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/boards/lists/index.js"));
module.exports = __webpack_exports__;

})();