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
exports.id = "pages/graphql-mutation";
exports.ids = ["pages/graphql-mutation"];
exports.modules = {

/***/ "./pages/graphql-mutation/index.js":
/*!*****************************************!*\
  !*** ./pages/graphql-mutation/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GraphqlMutationPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n\n// import axios from 'axios'\n\n\nconst CREATE_BOARD = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`\n    mutation createBoard($title: String!, $content: String!, $url: String) {\n        createBoard(title: $title, content: $content, url: $url){\n            id\n            title\n            content\n            viewcount\n        }\n    }\n`;\nfunction GraphqlMutationPage() {\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: mytitle , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: mycontent , 1: setContent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [callAPI] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(CREATE_BOARD);\n    const callGraphqlApi = async ()=>{\n        // const result = await axios.get(\"https://koreanjson.com/posts/1\")\n        const result = await callAPI({\n            variables: {\n                title: mytitle,\n                content: mycontent\n            }\n        });\n        console.log(result);\n        console.log(result.data.createBoard.content);\n        setData(result.data.createBoard.content);\n    // console.log(result.data.title)\n    // setData(result.data.title)\n    };\n    const onChangeTitle = (event)=>{\n        setTitle(event.target.value);\n    };\n    const onChangeContent = (event)=>{\n        setContent(event.target.value);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"제목: \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                onChange: onChangeTitle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\graphql-mutation\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 17\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\graphql-mutation\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 70\n            }, this),\n            \"내용: \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                onChange: onChangeContent\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\graphql-mutation\\\\index.js\",\n                lineNumber: 50,\n                columnNumber: 17\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\graphql-mutation\\\\index.js\",\n                lineNumber: 50,\n                columnNumber: 72\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: callGraphqlApi,\n                children: \"GRAPHQL-API 요청하기!!!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\graphql-mutation\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\pilot_next\\\\pilot_myself\\\\TNH_MYSELF\\\\pages\\\\graphql-mutation\\\\index.js\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ncmFwaHFsLW11dGF0aW9uL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsRUFBNEI7QUFDSTtBQUNnQjtBQUVoRCxLQUFLLENBQUNHLFlBQVksR0FBR0QsK0NBQUcsQ0FBQzs7Ozs7Ozs7O0FBU3pCO0FBRWUsUUFBUSxDQUFDRSxtQkFBbUIsR0FBRSxDQUFDO0lBQzFDLEtBQUssTUFBRUMsSUFBSSxNQUFFQyxPQUFPLE1BQUlOLCtDQUFRLENBQUMsQ0FBRTtJQUNuQyxLQUFLLE1BQUVPLE9BQU8sTUFBRUMsUUFBUSxNQUFJUiwrQ0FBUSxDQUFDLENBQUU7SUFDdkMsS0FBSyxNQUFFUyxTQUFTLE1BQUVDLFVBQVUsTUFBSVYsK0NBQVEsQ0FBQyxDQUFFO0lBQzNDLEtBQUssRUFBRVcsT0FBTyxJQUFJViwyREFBVyxDQUFDRSxZQUFZO0lBSzFDLEtBQUssQ0FBQ1MsY0FBYyxhQUFlLENBQUM7UUFDaEMsRUFBbUU7UUFDbkUsS0FBSyxDQUFDQyxNQUFNLEdBQUcsS0FBSyxDQUFDRixPQUFPLENBQUMsQ0FBQztZQUMxQkcsU0FBUyxFQUFFLENBQUNDO2dCQUFBQSxLQUFLLEVBQUVSLE9BQU87Z0JBQUVTLE9BQU8sRUFBRVAsU0FBUztZQUFBLENBQUM7UUFDbkQsQ0FBQztRQUVEUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsTUFBTTtRQUNsQkksT0FBTyxDQUFDQyxHQUFHLENBQUNMLE1BQU0sQ0FBQ1IsSUFBSSxDQUFDYyxXQUFXLENBQUNILE9BQU87UUFDM0NWLE9BQU8sQ0FBQ08sTUFBTSxDQUFDUixJQUFJLENBQUNjLFdBQVcsQ0FBQ0gsT0FBTztJQUN2QyxFQUFpQztJQUNqQyxFQUE2QjtJQUNqQyxDQUFDO0lBQ0QsS0FBSyxDQUFDSSxhQUFhLElBQUlDLEtBQUssR0FBSyxDQUFDO1FBQzlCYixRQUFRLENBQUNhLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLO0lBQy9CLENBQUM7SUFFRCxLQUFLLENBQUNDLGVBQWUsSUFBSUgsS0FBSyxHQUFLLENBQUM7UUFDaENYLFVBQVUsQ0FBQ1csS0FBSyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7SUFDakMsQ0FBQztJQUdELE1BQU0sNkVBQ0RFLENBQUc7O1lBQ3lCLENBQ3JCO3dGQUFLQyxDQUFLO2dCQUFDQyxJQUFJLEVBQUMsQ0FBTTtnQkFBQ0MsUUFBUSxFQUFFUixhQUFhOzs7Ozs7WUFBVSxDQUFDO3dGQUFDUyxDQUFFOzs7OztZQUFFLENBQzFEO3dGQUFDSCxDQUFLO2dCQUFDQyxJQUFJLEVBQUMsQ0FBTTtnQkFBQ0MsUUFBUSxFQUFFSixlQUFlOzs7Ozs7WUFBVSxDQUFDO3dGQUFDSyxDQUFFOzs7Ozt3RkFDN0RDLENBQUU7Z0JBQUNDLE9BQU8sRUFBRW5CLGNBQWM7MEJBQUUsQ0FBbUI7Ozs7Ozs7Ozs7OztBQUloRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xhc3MvLi9wYWdlcy9ncmFwaHFsLW11dGF0aW9uL2luZGV4LmpzPzIxMjgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgZ3FsfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuXHJcbmNvbnN0IENSRUFURV9CT0FSRCA9IGdxbGBcclxuICAgIG11dGF0aW9uIGNyZWF0ZUJvYXJkKCR0aXRsZTogU3RyaW5nISwgJGNvbnRlbnQ6IFN0cmluZyEsICR1cmw6IFN0cmluZykge1xyXG4gICAgICAgIGNyZWF0ZUJvYXJkKHRpdGxlOiAkdGl0bGUsIGNvbnRlbnQ6ICRjb250ZW50LCB1cmw6ICR1cmwpe1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgIHZpZXdjb3VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JhcGhxbE11dGF0aW9uUGFnZSgpe1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtteXRpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW215Y29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2NhbGxBUEldID0gdXNlTXV0YXRpb24oQ1JFQVRFX0JPQVJEKVxyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICBjb25zdCBjYWxsR3JhcGhxbEFwaSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL2tvcmVhbmpzb24uY29tL3Bvc3RzLzFcIilcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYWxsQVBJKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7dGl0bGU6IG15dGl0bGUsIGNvbnRlbnQ6IG15Y29udGVudH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEuY3JlYXRlQm9hcmQuY29udGVudClcclxuICAgICAgICBzZXREYXRhKHJlc3VsdC5kYXRhLmNyZWF0ZUJvYXJkLmNvbnRlbnQpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LmRhdGEudGl0bGUpXHJcbiAgICAgICAgLy8gc2V0RGF0YShyZXN1bHQuZGF0YS50aXRsZSlcclxuICAgIH1cclxuICAgIGNvbnN0IG9uQ2hhbmdlVGl0bGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRUaXRsZShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VDb250ZW50ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0Q29udGVudChldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICB9ICAgIFxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2PntkYXRhfTwvZGl2PiAqL31cclxuICAgICAgICAgICAg7KCc66qpOiA8aW5wdXQgdHlwZT0ndGV4dCcgb25DaGFuZ2U9e29uQ2hhbmdlVGl0bGV9PjwvaW5wdXQ+IDxici8+XHJcbiAgICAgICAgICAgIOuCtOyaqTogPGlucHV0IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbnRlbnR9PjwvaW5wdXQ+IDxici8+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2FsbEdyYXBocWxBcGl9PkdSQVBIUUwtQVBJIOyalOyyre2VmOq4sCEhITwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZU11dGF0aW9uIiwiZ3FsIiwiQ1JFQVRFX0JPQVJEIiwiR3JhcGhxbE11dGF0aW9uUGFnZSIsImRhdGEiLCJzZXREYXRhIiwibXl0aXRsZSIsInNldFRpdGxlIiwibXljb250ZW50Iiwic2V0Q29udGVudCIsImNhbGxBUEkiLCJjYWxsR3JhcGhxbEFwaSIsInJlc3VsdCIsInZhcmlhYmxlcyIsInRpdGxlIiwiY29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVCb2FyZCIsIm9uQ2hhbmdlVGl0bGUiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VDb250ZW50IiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/graphql-mutation/index.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/graphql-mutation/index.js"));
module.exports = __webpack_exports__;

})();