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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StaticRoutedPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n//동적 라우팅\n\n\nconst FETCH_BOARD = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n    query fetchBoard($boardid: Float!){\n        fetchBoard(boardid: $boardid){\n            id\n            title\n            content\n            url\n\n        }\n    }\n`;\nfunction StaticRoutedPage() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARD, {\n        variables: {\n            boardid: Number(router.query.boardid)\n        }\n    });\n    console.log(data);\n    //optional chaining, 데이터가 있으면 보여줘\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data === null || data === void 0 ? void 0 : data.fetchBoard.id\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"제목: \",\n                    data === null || data === void 0 ? void 0 : data.fetchBoard.title\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"내용: \",\n                    data === null || data === void 0 ? void 0 : data.fetchBoard.content\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\boards\\\\[boardid]\\\\index.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ib2FyZHMvW2JvYXJkaWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsRUFBUTtBQUNzQztBQUNQO0FBRXZDLEtBQUssQ0FBQ0csV0FBVyxHQUFHRiwrQ0FBRyxDQUFDOzs7Ozs7Ozs7O0FBVXhCO0FBRWUsUUFBUSxDQUFDRyxnQkFBZ0IsR0FBRSxDQUFDO0lBQ3ZDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHSCxzREFBUztJQUd4QixLQUFLLENBQUMsQ0FBQyxDQUFDSSxJQUFJLEVBQUMsQ0FBQyxHQUFHTix3REFBUSxDQUFDRyxXQUFXLEVBQUUsQ0FBQztRQUNwQ0ksU0FBUyxFQUFFLENBQUNDO1lBQUFBLE9BQU8sRUFBRUMsTUFBTSxDQUFDSixNQUFNLENBQUNLLEtBQUssQ0FBQ0YsT0FBTztRQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNERyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sSUFBSTtJQUNoQixFQUFpQztJQUNiLE1BQWQsNkVBQ0RPLENBQUc7O3dGQUNDQSxDQUFHOzBCQUFFUCxJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFFUSxVQUFVLENBQUNDLEVBQUU7Ozs7Ozt3RkFDeEJGLENBQUc7O29CQUFDLENBQUk7b0JBQUtQLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxJQUFJLENBQUVRLFVBQVUsQ0FBQ0UsS0FBSzs7Ozs7Ozt3RkFDL0JILENBQUQ7O29CQUFDLENBQUk7b0JBQUNQLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxJQUFJLENBQUVRLFVBQVUsQ0FBQ0csT0FBTzs7Ozs7Ozs7Ozs7OztBQUk5QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xhc3MvLi9wYWdlcy9ib2FyZHMvW2JvYXJkaWRdL2luZGV4LmpzPzJmMzgiXSwic291cmNlc0NvbnRlbnQiOlsiLy/rj5nsoIEg65287Jqw7YyFXHJcbmltcG9ydCB7IHVzZVF1ZXJ5LCBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBGRVRDSF9CT0FSRCA9IGdxbGBcclxuICAgIHF1ZXJ5IGZldGNoQm9hcmQoJGJvYXJkaWQ6IEZsb2F0ISl7XHJcbiAgICAgICAgZmV0Y2hCb2FyZChib2FyZGlkOiAkYm9hcmRpZCl7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgdXJsXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhdGljUm91dGVkUGFnZSgpe1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcblxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShGRVRDSF9CT0FSRCwge1xyXG4gICAgICAgIHZhcmlhYmxlczoge2JvYXJkaWQ6IE51bWJlcihyb3V0ZXIucXVlcnkuYm9hcmRpZCl9XHJcbiAgICB9KSBcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAvL29wdGlvbmFsIGNoYWluaW5nLCDrjbDsnbTthLDqsIAg7J6I7Jy866m0IOuztOyXrOykmFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PntkYXRhPy5mZXRjaEJvYXJkLmlkfTwvZGl2PiBcclxuICAgICAgICAgICAgPGRpdj7soJzrqqk6IHtkYXRhPy5mZXRjaEJvYXJkLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PuuCtOyaqToge2RhdGE/LmZldGNoQm9hcmQuY29udGVudH08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJncWwiLCJ1c2VSb3V0ZXIiLCJGRVRDSF9CT0FSRCIsIlN0YXRpY1JvdXRlZFBhZ2UiLCJyb3V0ZXIiLCJkYXRhIiwidmFyaWFibGVzIiwiYm9hcmRpZCIsIk51bWJlciIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImRpdiIsImZldGNoQm9hcmQiLCJpZCIsInRpdGxlIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/boards/[boardid]/index.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

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