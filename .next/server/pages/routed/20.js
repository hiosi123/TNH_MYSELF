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
exports.id = "pages/routed/20";
exports.ids = ["pages/routed/20"];
exports.modules = {

/***/ "./pages/routed/20/index.js":
/*!**********************************!*\
  !*** ./pages/routed/20/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StaticRoutedPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst FETCH_BOARD = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n    query fetchBoard($boardid: Float!){\n        fetchBoard(boardid: $boardid){\n            id\n            title\n            content\n            url\n\n        }\n    }\n`;\nfunction StaticRoutedPage() {\n    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARD, {\n        variables: {\n            boardid: 20\n        }\n    });\n    console.log(data);\n    //optional chaining, 데이터가 있으면 보여줘\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data === null || data === void 0 ? void 0 : data.fetchBoard.id\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\routed\\\\20\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"제목: \",\n                    data === null || data === void 0 ? void 0 : data.fetchBoard.title\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\routed\\\\20\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"내용: \",\n                    data === null || data === void 0 ? void 0 : data.fetchBoard.content\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\routed\\\\20\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\routed\\\\20\\\\index.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yb3V0ZWQvMjAvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThDO0FBRTlDLEtBQUssQ0FBQ0UsV0FBVyxHQUFHRCwrQ0FBRyxDQUFDOzs7Ozs7Ozs7O0FBVXhCO0FBRWUsUUFBUSxDQUFDRSxnQkFBZ0IsR0FBRSxDQUFDO0lBQ3ZDLEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksRUFBQyxDQUFDLEdBQUdKLHdEQUFRLENBQUNFLFdBQVcsRUFBRSxDQUFDO1FBQ3BDRyxTQUFTLEVBQUUsQ0FBQ0M7WUFBQUEsT0FBTyxFQUFFLEVBQUU7UUFBQSxDQUFDO0lBQzVCLENBQUM7SUFDREMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUk7SUFDaEIsRUFBaUM7SUFDYixNQUFkLDZFQUNESyxDQUFHOzt3RkFDQ0EsQ0FBRzswQkFBRUwsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBRU0sVUFBVSxDQUFDQyxFQUFFOzs7Ozs7d0ZBQ3hCRixDQUFHOztvQkFBQyxDQUFJO29CQUFLTCxJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFFTSxVQUFVLENBQUNFLEtBQUs7Ozs7Ozs7d0ZBQy9CSCxDQUFEOztvQkFBQyxDQUFJO29CQUFDTCxJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFFTSxVQUFVLENBQUNHLE9BQU87Ozs7Ozs7Ozs7Ozs7QUFJOUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXNzLy4vcGFnZXMvcm91dGVkLzIwL2luZGV4LmpzPzJmMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnksIGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5cclxuY29uc3QgRkVUQ0hfQk9BUkQgPSBncWxgXHJcbiAgICBxdWVyeSBmZXRjaEJvYXJkKCRib2FyZGlkOiBGbG9hdCEpe1xyXG4gICAgICAgIGZldGNoQm9hcmQoYm9hcmRpZDogJGJvYXJkaWQpe1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgIHVybFxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXRpY1JvdXRlZFBhZ2UoKXtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoRkVUQ0hfQk9BUkQsIHtcclxuICAgICAgICB2YXJpYWJsZXM6IHtib2FyZGlkOiAyMH1cclxuICAgIH0pIFxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIC8vb3B0aW9uYWwgY2hhaW5pbmcsIOuNsOydtO2EsOqwgCDsnojsnLzrqbQg67O07Jes7KSYXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e2RhdGE/LmZldGNoQm9hcmQuaWR9PC9kaXY+IFxyXG4gICAgICAgICAgICA8ZGl2PuygnOuqqToge2RhdGE/LmZldGNoQm9hcmQudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+64K07JqpOiB7ZGF0YT8uZmV0Y2hCb2FyZC5jb250ZW50fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsImdxbCIsIkZFVENIX0JPQVJEIiwiU3RhdGljUm91dGVkUGFnZSIsImRhdGEiLCJ2YXJpYWJsZXMiLCJib2FyZGlkIiwiY29uc29sZSIsImxvZyIsImRpdiIsImZldGNoQm9hcmQiLCJpZCIsInRpdGxlIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/routed/20/index.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

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
var __webpack_exports__ = (__webpack_exec__("./pages/routed/20/index.js"));
module.exports = __webpack_exports__;

})();