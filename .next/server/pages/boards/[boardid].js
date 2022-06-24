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
exports.id = "pages/boards/[boardid]";
exports.ids = ["pages/boards/[boardid]"];
exports.modules = {

/***/ "./pages/boards/[boardid]/index.js":
/*!*****************************************!*\
  !*** ./pages/boards/[boardid]/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StaticRoutedPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/emotion */ \"./styles/emotion.js\");\n\n//동적 라우팅\n\n\n\nconst FETCH_BOARD = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n    query fetchBoard($boardid: Float!){\n        fetchBoard(boardid: $boardid){\n            id\n            title\n            content\n            url\n            user {\n                userid\n            }\n\n        }\n    }\n`;\nfunction StaticRoutedPage() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARD, {\n        variables: {\n            boardid: Number(router.query.boardid)\n        }\n    });\n    const onClickUpdate = ()=>{\n        router.push(`/boards/${router.query.boardid}/update`);\n    };\n    const onClickBoardList = ()=>{\n        router.push(`/boards`);\n    };\n    console.log(data);\n    //optional chaining, 데이터가 있으면 보여줘\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_3__.InputWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_3__.Label, {\n                        children: \"게시자\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\index.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: data === null || data === void 0 ? void 0 : data.fetchBoard.user.userid\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\index.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\index.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_3__.InputWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_3__.Label, {\n                        children: \"제목\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\index.js\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: data === null || data === void 0 ? void 0 : data.fetchBoard.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\index.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\index.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_3__.InputWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_3__.Label, {\n                        children: \"내용\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\index.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: data === null || data === void 0 ? void 0 : data.fetchBoard.content\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\index.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\index.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_3__.ImageWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_3__.Label, {\n                        children: \"파일 첨부\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\index.js\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: data === null || data === void 0 ? void 0 : data.fetchBoard.url\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\index.js\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: data === null || data === void 0 ? void 0 : data.fetchBoard.url\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\index.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\index.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_3__.ButtonWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_3__.SubmitButton, {\n                        onClick: onClickUpdate,\n                        children: \"수정하기\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\index.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_3__.SubmitButton, {\n                        onClick: onClickBoardList,\n                        children: \"목록\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\index.js\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\index.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\index.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib2FyZHMvW2JvYXJkaWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLEVBQVE7QUFDc0M7QUFDUDtBQVVMO0FBRWxDLEtBQUssQ0FBQ1csV0FBVyxHQUFHViwrQ0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBYXhCO0FBRWUsUUFBUSxDQUFDVyxnQkFBZ0IsR0FBRSxDQUFDO0lBQ3ZDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHWCxzREFBUztJQUd4QixLQUFLLENBQUMsQ0FBQyxDQUFDWSxJQUFJLEVBQUMsQ0FBQyxHQUFHZCx3REFBUSxDQUFDVyxXQUFXLEVBQUUsQ0FBQztRQUNwQ0ksU0FBUyxFQUFFLENBQUNDO1lBQUFBLE9BQU8sRUFBRUMsTUFBTSxDQUFDSixNQUFNLENBQUNLLEtBQUssQ0FBQ0YsT0FBTztRQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELEtBQUssQ0FBQ0csYUFBYSxPQUFTLENBQUM7UUFDekJOLE1BQU0sQ0FBQ08sSUFBSSxFQUFFLFFBQVEsRUFBRVAsTUFBTSxDQUFDSyxLQUFLLENBQUNGLE9BQU8sQ0FBQyxPQUFPO0lBQ3ZELENBQUM7SUFFRCxLQUFLLENBQUNLLGdCQUFnQixPQUFTLENBQUM7UUFDNUJSLE1BQU0sQ0FBQ08sSUFBSSxFQUFFLE9BQU87SUFDeEIsQ0FBQztJQUVERSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsSUFBSTtJQUNoQixFQUFpQztJQUNiLE1BQWQsNkVBQ0RWLG9EQUFPOzt3RkFDSEMseURBQVk7O2dHQUNSQyxrREFBSztrQ0FBQyxDQUFHOzs7Ozs7Z0dBQ0hrQixDQUFIO2tDQUFFVixJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFFVyxVQUFVLENBQUNDLElBQUksQ0FBQ0MsTUFBTTs7Ozs7Ozs7Ozs7O3dGQUVyQ3RCLHlEQUFZOztnR0FDUkMsa0RBQUs7a0NBQUMsQ0FBRTs7Ozs7O2dHQUNKa0IsQ0FBRDtrQ0FBRVYsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBRVcsVUFBVSxDQUFDRyxLQUFLOzs7Ozs7Ozs7Ozs7d0ZBRS9CdkIseURBQVk7O2dHQUNSQyxrREFBSztrQ0FBQyxDQUFFOzs7Ozs7Z0dBQ0prQixDQUFEO2tDQUFFVixJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFFVyxVQUFVLENBQUNJLE9BQU87Ozs7Ozs7Ozs7Ozt3RkFFakN0Qix5REFBWTs7Z0dBQ1pELGtEQUFLO2tDQUFDLENBQUs7Ozs7OztnR0FDQ2tCLENBQUw7a0NBQUVWLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxJQUFJLENBQUVXLFVBQVUsQ0FBQ0ssR0FBRzs7Ozs7O2dHQUN6QkMsQ0FBRzt3QkFBQ0MsR0FBRyxFQUFFbEIsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBRVcsVUFBVSxDQUFDSyxHQUFHOzs7Ozs7Ozs7Ozs7d0ZBRWpDcEIsMERBQWE7O2dHQUNURCx5REFBWTt3QkFBQ3dCLE9BQU8sRUFBRWQsYUFBYTtrQ0FBRSxDQUFJOzs7Ozs7Z0dBQ2pDVix5REFBSTt3QkFBQ3dCLE9BQU8sRUFBRVosZ0JBQWdCO2tDQUFFLENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkzRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xhc3MvLi9wYWdlcy9ib2FyZHMvW2JvYXJkaWRdL2luZGV4LmpzPzJmMzgiXSwic291cmNlc0NvbnRlbnQiOlsiLy/rj5nsoIEg65287Jqw7YyFXHJcbmltcG9ydCB7IHVzZVF1ZXJ5LCBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7XHJcbiAgICBUaXRsZSwgXHJcbiAgICBXcmFwcGVyLFxyXG4gICAgSW5wdXRXcmFwcGVyLFxyXG4gICAgTGFiZWwsXHJcbiAgICBJbWFnZVdyYXBwZXIsXHJcbiAgICBVcGxvYWRCdXR0b24sXHJcbiAgICBTdWJtaXRCdXR0b24sXHJcbiAgICBCdXR0b25XcmFwcGVyLFxyXG4gIH0gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL2Vtb3Rpb24nXHJcblxyXG5jb25zdCBGRVRDSF9CT0FSRCA9IGdxbGBcclxuICAgIHF1ZXJ5IGZldGNoQm9hcmQoJGJvYXJkaWQ6IEZsb2F0ISl7XHJcbiAgICAgICAgZmV0Y2hCb2FyZChib2FyZGlkOiAkYm9hcmRpZCl7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgIHVzZXIge1xyXG4gICAgICAgICAgICAgICAgdXNlcmlkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGF0aWNSb3V0ZWRQYWdlKCl7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KEZFVENIX0JPQVJELCB7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7Ym9hcmRpZDogTnVtYmVyKHJvdXRlci5xdWVyeS5ib2FyZGlkKX1cclxuICAgIH0pIFxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9ib2FyZHMvJHtyb3V0ZXIucXVlcnkuYm9hcmRpZH0vdXBkYXRlYClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNsaWNrQm9hcmRMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvYm9hcmRzYClcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgLy9vcHRpb25hbCBjaGFpbmluZywg642w7J207YSw6rCAIOyeiOycvOuptCDrs7Tsl6zspJhcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxJbnB1dFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+6rKM7Iuc7J6QPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXY+e2RhdGE/LmZldGNoQm9hcmQudXNlci51c2VyaWR9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvSW5wdXRXcmFwcGVyPlxyXG4gICAgICAgICAgICA8SW5wdXRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPuygnOuqqTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntkYXRhPy5mZXRjaEJvYXJkLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8L0lucHV0V3JhcHBlcj5cclxuICAgICAgICAgICAgPElucHV0V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD7rgrTsmqk8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdj57ZGF0YT8uZmV0Y2hCb2FyZC5jb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAgICA8L0lucHV0V3JhcHBlcj5cclxuICAgICAgICAgICAgPEltYWdlV3JhcHBlcj5cclxuICAgICAgICAgICAgPExhYmVsPu2MjOydvCDssqjrtoA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdj57ZGF0YT8uZmV0Y2hCb2FyZC51cmx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YT8uZmV0Y2hCb2FyZC51cmx9Lz5cclxuICAgICAgICAgICAgPC9JbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxCdXR0b25XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPFN1Ym1pdEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrVXBkYXRlfT7siJjsoJXtlZjquLA8L1N1Ym1pdEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxTdWJtaXRCdXR0b24gb25DbGljaz17b25DbGlja0JvYXJkTGlzdH0+66qp66GdPC9TdWJtaXRCdXR0b24+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uV3JhcHBlcj5cclxuICAgICAgICA8L1dyYXBwZXI+ICAgICAgICAgICAgXHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJncWwiLCJ1c2VSb3V0ZXIiLCJUaXRsZSIsIldyYXBwZXIiLCJJbnB1dFdyYXBwZXIiLCJMYWJlbCIsIkltYWdlV3JhcHBlciIsIlVwbG9hZEJ1dHRvbiIsIlN1Ym1pdEJ1dHRvbiIsIkJ1dHRvbldyYXBwZXIiLCJGRVRDSF9CT0FSRCIsIlN0YXRpY1JvdXRlZFBhZ2UiLCJyb3V0ZXIiLCJkYXRhIiwidmFyaWFibGVzIiwiYm9hcmRpZCIsIk51bWJlciIsInF1ZXJ5Iiwib25DbGlja1VwZGF0ZSIsInB1c2giLCJvbkNsaWNrQm9hcmRMaXN0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImZldGNoQm9hcmQiLCJ1c2VyIiwidXNlcmlkIiwidGl0bGUiLCJjb250ZW50IiwidXJsIiwiaW1nIiwic3JjIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/boards/[boardid]/index.js\n");

/***/ }),

/***/ "./styles/emotion.js":
/*!***************************!*\
  !*** ./styles/emotion.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Error\": () => (/* binding */ Error),\n/* harmony export */   \"Title\": () => (/* binding */ Title),\n/* harmony export */   \"MyEmail\": () => (/* binding */ MyEmail),\n/* harmony export */   \"MyContent\": () => (/* binding */ MyContent),\n/* harmony export */   \"WriterWrapper\": () => (/* binding */ WriterWrapper),\n/* harmony export */   \"Wrapper\": () => (/* binding */ Wrapper),\n/* harmony export */   \"InputWrapper\": () => (/* binding */ InputWrapper),\n/* harmony export */   \"Label\": () => (/* binding */ Label),\n/* harmony export */   \"Subject\": () => (/* binding */ Subject),\n/* harmony export */   \"Contents\": () => (/* binding */ Contents),\n/* harmony export */   \"UploadButton\": () => (/* binding */ UploadButton),\n/* harmony export */   \"ButtonWrapper\": () => (/* binding */ ButtonWrapper),\n/* harmony export */   \"SubmitButton\": () => (/* binding */ SubmitButton),\n/* harmony export */   \"ImageWrapper\": () => (/* binding */ ImageWrapper),\n/* harmony export */   \"TableTop\": () => (/* binding */ TableTop),\n/* harmony export */   \"TableBottom\": () => (/* binding */ TableBottom),\n/* harmony export */   \"Row\": () => (/* binding */ Row),\n/* harmony export */   \"ColumnHeaderBasic\": () => (/* binding */ ColumnHeaderBasic),\n/* harmony export */   \"ColumnHeaderTitle\": () => (/* binding */ ColumnHeaderTitle),\n/* harmony export */   \"ColumnBasic\": () => (/* binding */ ColumnBasic),\n/* harmony export */   \"ColumnTitle\": () => (/* binding */ ColumnTitle),\n/* harmony export */   \"Footer\": () => (/* binding */ Footer),\n/* harmony export */   \"Button\": () => (/* binding */ Button),\n/* harmony export */   \"Column\": () => (/* binding */ Column),\n/* harmony export */   \"Page\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Error = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`\ncolor: red;\nfont-size: 5px;\n`;\nconst Title = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)` \nfont-family: Arial, Helvetica, sans-serif;\nfont-size: 36px;\nfont-weight: bold;\n`;\nconst MyEmail = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().input)`\nwidth: 200px;\n`;\nconst MyContent = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().input)`\nwidth: 500px;\nheight: 800px;\n`;\nconst WriterWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-top: 40px;\n`;\nconst Wrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`\n  width: 1200px;\n  border: 1px solid black;\n  margin: 100px;\n  padding-top: 80px;\n  padding-bottom: 100px;\n  padding-left: 102px;\n  padding-right: 102px;\n  flex-direction: column;\n  align-items: center;\n  border: none;\n  box-shadow: 0px 0px 10px gray;\n`;\nconst InputWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`\n  padding-top: 40px;\n`;\nconst Label = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`\n  padding-bottom: 16px;\n  font-size: 16px;\n  font-weight: 500;\n`;\nconst Subject = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().input)`\n  width: 996px;\n  height: 52px;\n  padding-left: 16px;\n  border: 1px solid #bdbdbd;\n`;\nconst Contents = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().input)`\n  width: 996px;\n  height: 480px;\n  padding-left: 16px;\n  padding: 14px;\n  border: 1px solid #bdbdbd;\n`;\nconst UploadButton = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().button)`\n  width: 78px;\n  height: 78px;\n  background-color: #bdbdbd;\n  margin-right: 24px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n`;\nconst ButtonWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`\n   display: flex;\n   flex-direction: row;\n   justify-content: center;\n   padding-top: 80px; \n\n`;\nconst SubmitButton = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().button)`\n  width: 179px;\n  height: 52px;\n  border: none;\n  font-size: 16px;\n  font-weight: 500;\n  margin-left: 12px;\n  margin-right: 12px;\n  cursor: pointer;\n  border: 3px solid #bdbdbd;\n`;\nconst ImageWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`\n  width: 996px;\n  padding-top: 40px;\n`;\nconst TableTop = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`\n  border-top: 2px solid gray;\n  margin-top: 20px;\n`;\nconst TableBottom = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`\n  border-bottom: 2px solid gray;\n`;\nconst Row = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`\n  display: flex;\n  flex-direction: row;\n  height: 52px;\n  line-height: 52px;\n  border-bottom: 1px solid gray;\n\n  :hover {\n    color: blue;\n  }\n`;\nconst ColumnHeaderBasic = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`\n  width: 10%;\n  text-align: center;\n`;\nconst ColumnHeaderTitle = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`\n  width: 70%;\n  text-align: center;\n`;\nconst ColumnBasic = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`\n  width: 10%;\n  text-align: center;\n`;\nconst ColumnTitle = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`\n  width: 70%;\n  text-align: center;\n  cursor: pointer;\n\n  :hover {\n    color: blue;\n  }\n`;\nconst Footer = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-top: 50px;\n`;\nconst Button = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().button)`\n  width: 171px;\n  height: 52px;\n  background-color: white;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  cursor: pointer;\n\n  :hover {\n    background-color: #f5f2fc;\n  }\n`;\nconst Column = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`\n    width: 20%;\n`;\nconst Page = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`\n  cursor: pointer;\n\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvZW1vdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFFN0IsS0FBSyxDQUFDQyxLQUFLLEdBQUdELDREQUFVLENBQUM7OztBQUdoQztBQUNPLEtBQUssQ0FBQ0csS0FBSyxHQUFHSCw0REFBVSxDQUFDOzs7O0FBSWhDO0FBQ08sS0FBSyxDQUFDSSxPQUFPLEdBQUdKLDhEQUFZLENBQUM7O0FBRXBDO0FBQ08sS0FBSyxDQUFDTSxTQUFTLEdBQUdOLDhEQUFZLENBQUM7OztBQUd0QztBQUdPLEtBQUssQ0FBQ08sYUFBYSxHQUFHUCw0REFBVSxDQUFDOzs7Ozs7QUFNeEM7QUFDTyxLQUFLLENBQUNRLE9BQU8sR0FBR1IsNERBQVUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBWWxDO0FBRU8sS0FBSyxDQUFDUyxZQUFZLEdBQUdULDREQUFVLENBQUM7O0FBRXZDO0FBRU8sS0FBSyxDQUFDVSxLQUFLLEdBQUdWLDREQUFVLENBQUM7Ozs7QUFJaEM7QUFFTyxLQUFLLENBQUNXLE9BQU8sR0FBR1gsOERBQVksQ0FBQzs7Ozs7QUFLcEM7QUFDTyxLQUFLLENBQUNZLFFBQVEsR0FBR1osOERBQVksQ0FBQzs7Ozs7O0FBTXJDO0FBRU8sS0FBSyxDQUFDYSxZQUFZLEdBQUdiLCtEQUFhLENBQUM7Ozs7Ozs7O0FBUTFDO0FBRU8sS0FBSyxDQUFDZSxhQUFhLEdBQUdmLDREQUFVLENBQUM7Ozs7OztBQU14QztBQUVPLEtBQUssQ0FBQ2dCLFlBQVksR0FBR2hCLCtEQUFhLENBQUM7Ozs7Ozs7Ozs7QUFVMUM7QUFFTyxLQUFLLENBQUNpQixZQUFZLEdBQUdqQiw0REFBVSxDQUFDOzs7QUFHdkM7QUFHTyxLQUFLLENBQUNrQixRQUFRLEdBQUdsQiw0REFBVSxDQUFDOzs7QUFHbkM7QUFFTyxLQUFLLENBQUNtQixXQUFXLEdBQUduQiw0REFBVSxDQUFDOztBQUV0QztBQUVPLEtBQUssQ0FBQ29CLEdBQUcsR0FBR3BCLDREQUFVLENBQUM7Ozs7Ozs7Ozs7QUFVOUI7QUFFTyxLQUFLLENBQUNxQixpQkFBaUIsR0FBR3JCLDREQUFVLENBQUM7OztBQUc1QztBQUVPLEtBQUssQ0FBQ3NCLGlCQUFpQixHQUFHdEIsNERBQVUsQ0FBQzs7O0FBRzVDO0FBRU8sS0FBSyxDQUFDdUIsV0FBVyxHQUFHdkIsNERBQVUsQ0FBQzs7O0FBR3RDO0FBRU8sS0FBSyxDQUFDd0IsV0FBVyxHQUFHeEIsNERBQVUsQ0FBQzs7Ozs7Ozs7QUFRdEM7QUFFTyxLQUFLLENBQUN5QixNQUFNLEdBQUd6Qiw0REFBVSxDQUFDOzs7OztBQUtqQztBQUVPLEtBQUssQ0FBQzBCLE1BQU0sR0FBRzFCLCtEQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBY3BDO0FBRU8sS0FBSyxDQUFDMkIsTUFBTSxHQUFHM0IsNERBQVUsQ0FBQzs7QUFFakM7QUFFTyxLQUFLLENBQUM0QixJQUFJLEdBQUc1Qiw0REFBVSxDQUFDOzs7QUFHL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFzcy8uL3N0eWxlcy9lbW90aW9uLmpzP2EwZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcblxyXG5leHBvcnQgY29uc3QgRXJyb3IgPSBzdHlsZWQuZGl2YFxyXG5jb2xvcjogcmVkO1xyXG5mb250LXNpemU6IDVweDtcclxuYFxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YCBcclxuZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbmZvbnQtc2l6ZTogMzZweDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmBcclxuZXhwb3J0IGNvbnN0IE15RW1haWwgPSBzdHlsZWQuaW5wdXRgXHJcbndpZHRoOiAyMDBweDtcclxuYFxyXG5leHBvcnQgY29uc3QgTXlDb250ZW50ID0gc3R5bGVkLmlucHV0YFxyXG53aWR0aDogNTAwcHg7XHJcbmhlaWdodDogODAwcHg7XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFdyaXRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTIwMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbjogMTAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTAycHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTAycHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggZ3JheTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExhYmVsID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFN1YmplY3QgPSBzdHlsZWQuaW5wdXRgXHJcbiAgd2lkdGg6IDk5NnB4O1xyXG4gIGhlaWdodDogNTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IENvbnRlbnRzID0gc3R5bGVkLmlucHV0YFxyXG4gIHdpZHRoOiA5OTZweDtcclxuICBoZWlnaHQ6IDQ4MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxuICBwYWRkaW5nOiAxNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVXBsb2FkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICB3aWR0aDogNzhweDtcclxuICBoZWlnaHQ6IDc4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkYmRiZDtcclxuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgcGFkZGluZy10b3A6IDgwcHg7IFxyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHdpZHRoOiAxNzlweDtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgI2JkYmRiZDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA5OTZweDtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBUYWJsZVRvcCA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyYXk7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUYWJsZUJvdHRvbSA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyYXk7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1MnB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbHVtbkhlYWRlckJhc2ljID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb2x1bW5IZWFkZXJUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDcwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29sdW1uQmFzaWMgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbHVtblRpdGxlID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNzAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgd2lkdGg6IDE3MXB4O1xyXG4gIGhlaWdodDogNTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWYyZmM7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbHVtbiA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMjAlO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUGFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuYCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJFcnJvciIsImRpdiIsIlRpdGxlIiwiTXlFbWFpbCIsImlucHV0IiwiTXlDb250ZW50IiwiV3JpdGVyV3JhcHBlciIsIldyYXBwZXIiLCJJbnB1dFdyYXBwZXIiLCJMYWJlbCIsIlN1YmplY3QiLCJDb250ZW50cyIsIlVwbG9hZEJ1dHRvbiIsImJ1dHRvbiIsIkJ1dHRvbldyYXBwZXIiLCJTdWJtaXRCdXR0b24iLCJJbWFnZVdyYXBwZXIiLCJUYWJsZVRvcCIsIlRhYmxlQm90dG9tIiwiUm93IiwiQ29sdW1uSGVhZGVyQmFzaWMiLCJDb2x1bW5IZWFkZXJUaXRsZSIsIkNvbHVtbkJhc2ljIiwiQ29sdW1uVGl0bGUiLCJGb290ZXIiLCJCdXR0b24iLCJDb2x1bW4iLCJQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/emotion.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/boards/[boardid]/index.js"));
module.exports = __webpack_exports__;

})();