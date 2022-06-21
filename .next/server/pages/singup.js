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
exports.id = "pages/singup";
exports.ids = ["pages/singup"];
exports.modules = {

/***/ "./pages/singup/index.js":
/*!*******************************!*\
  !*** ./pages/singup/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SingupStatePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/emotion */ \"./styles/emotion.js\");\n\n\n\nfunction SingupStatePage() {\n    const { 0: userid , 1: setUserid  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const { 0: password1 , 1: setPassword1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const { 0: password2 , 1: setPassword2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const { 0: emailError , 1: setEmailError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    function onChangeUserid(event) {\n        //event 는 변경 사항에 대한 내용 => \n        //event.target => 태그 전체\n        //event.target.value => 우리가 입력한 값\n        setUserid(event.target.value);\n    }\n    function onChangePassword1(event) {\n        setPassword1(event.target.value);\n    }\n    function onChangePassword2(event) {\n        setPassword2(event.target.value);\n    }\n    function onClickSignup(event) {\n        if (password1 !== password2) {\n            setEmailError('비밀번호가 일치하지 않습니다.');\n        } else {\n            alert('회원가입을 축하합니다.');\n        }\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"아이디: \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                onChange: onChangeUserid\n            }, void 0, false, {\n                fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/singup/index.js\",\n                lineNumber: 36,\n                columnNumber: 12\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/singup/index.js\",\n                lineNumber: 36,\n                columnNumber: 60\n            }, this),\n            \"비밀번호: \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                onChange: onChangePassword1\n            }, void 0, false, {\n                fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/singup/index.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/singup/index.js\",\n                lineNumber: 37,\n                columnNumber: 67\n            }, this),\n            \"비밀번호 확인: \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                onChange: onChangePassword2\n            }, void 0, false, {\n                fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/singup/index.js\",\n                lineNumber: 38,\n                columnNumber: 16\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/singup/index.js\",\n                lineNumber: 38,\n                columnNumber: 70\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_emotion__WEBPACK_IMPORTED_MODULE_2__.Error, {\n                children: emailError\n            }, void 0, false, {\n                fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/singup/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onClickSignup,\n                children: \"회원가입\"\n            }, void 0, false, {\n                fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/singup/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/s/Desktop/TNH_MYSELF/pages/singup/index.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaW5ndXAvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4QjtBQUNZO0FBRTNCLFFBQVEsQ0FBQ0UsZUFBZSxHQUFHLENBQUM7SUFDekMsS0FBSyxNQUFFQyxNQUFNLE1BQUVDLFNBQVMsTUFBSUosK0NBQVEsQ0FBQyxDQUFFO0lBQ3ZDLEtBQUssTUFBRUssU0FBUyxNQUFFQyxZQUFZLE1BQUlOLCtDQUFRLENBQUMsQ0FBRTtJQUM3QyxLQUFLLE1BQUVPLFNBQVMsTUFBRUMsWUFBWSxNQUFJUiwrQ0FBUSxDQUFDLENBQUU7SUFDN0MsS0FBSyxNQUFFUyxVQUFVLE1BQUVDLGFBQWEsTUFBSVYsK0NBQVEsQ0FBQyxDQUFFO2FBRXRDVyxjQUFjLENBQUNDLEtBQUssRUFBQyxDQUFDO1FBQzdCLEVBQTBCO1FBQ04sRUFBRztRQUNmLEVBQXlCO1FBQ25CUixTQUFMLENBQUNRLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLO0lBQzlCLENBQUM7YUFFUUMsaUJBQWlCLENBQUNILEtBQUssRUFBRSxDQUFDO1FBQ2pDTixZQUFZLENBQUNNLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLO0lBQ2pDLENBQUM7YUFFUUUsaUJBQWlCLENBQUNKLEtBQUssRUFBRSxDQUFDO1FBQ2pDSixZQUFZLENBQUNJLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLO0lBQ2pDLENBQUM7YUFFUUcsYUFBYSxDQUFDTCxLQUFLLEVBQUMsQ0FBQztRQUU1QixFQUFFLEVBQUNQLFNBQVMsS0FBS0UsU0FBUyxFQUFDLENBQUM7WUFDMUJHLGFBQWEsQ0FBQyxDQUFrQjtRQUNSLENBQXpCLE1BQUssQ0FBQztZQUNMUSxLQUFLLENBQUMsQ0FBYztRQUNGLENBQW5CO0lBQ0gsQ0FBQztJQUVELE1BQU0sNkVBQ0hDLENBQUc7O1lBQUMsQ0FDRTt3RkFBT0MsQ0FBSztnQkFBQ0MsSUFBSSxFQUFDLENBQU07Z0JBQUNDLFFBQVEsRUFBRVgsY0FBYzs7Ozs7O1lBQUksQ0FBQzt3RkFBQ1ksQ0FBRTs7Ozs7WUFBRSxDQUNwRDt3RkFBR0gsQ0FBSztnQkFBQ0MsSUFBSSxFQUFDLENBQVU7Z0JBQUNDLFFBQVEsRUFBRVAsaUJBQWlCOzs7Ozs7d0ZBQUtRLENBQUU7Ozs7O1lBQUUsQ0FDeEQ7d0ZBQUtILENBQUs7Z0JBQUNDLElBQUksRUFBQyxDQUFVO2dCQUFDQyxRQUFRLEVBQUVOLGlCQUFpQjs7Ozs7O3dGQUFLTyxDQUFFOzs7Ozt3RkFDakV0QixrREFBUDswQkFBRVEsVUFBVTs7Ozs7O3dGQUNqQmUsQ0FBTTtnQkFBQ0MsT0FBTyxFQUFFUixhQUFhOzBCQUFFLENBQUk7Ozs7Ozs7Ozs7OztBQUcxQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xhc3MvLi9wYWdlcy9zaW5ndXAvaW5kZXguanM/NDgzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7RXJyb3J9IGZyb20gJy4uLy4uL3N0eWxlcy9lbW90aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5ndXBTdGF0ZVBhZ2UoKSB7XG4gIGNvbnN0IFt1c2VyaWQsIHNldFVzZXJpZF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Bhc3N3b3JkMSwgc2V0UGFzc3dvcmQxXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcGFzc3dvcmQyLCBzZXRQYXNzd29yZDJdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtlbWFpbEVycm9yLCBzZXRFbWFpbEVycm9yXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlVXNlcmlkKGV2ZW50KXtcbiAgICAvL2V2ZW50IOuKlCDrs4Dqsr0g7IKs7ZWt7JeQIOuMgO2VnCDrgrTsmqkgPT4gXG4gICAgLy9ldmVudC50YXJnZXQgPT4g7YOc6re4IOyghOyytFxuICAgIC8vZXZlbnQudGFyZ2V0LnZhbHVlID0+IOyasOumrOqwgCDsnoXroKXtlZwg6rCSXG4gICAgc2V0VXNlcmlkKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlUGFzc3dvcmQxKGV2ZW50KSB7XG4gICAgc2V0UGFzc3dvcmQxKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlUGFzc3dvcmQyKGV2ZW50KSB7XG4gICAgc2V0UGFzc3dvcmQyKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2xpY2tTaWdudXAoZXZlbnQpe1xuICAgIFxuICAgIGlmKHBhc3N3b3JkMSAhPT0gcGFzc3dvcmQyKXtcbiAgICAgIHNldEVtYWlsRXJyb3IoJ+u5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukLicpXG4gICAgfSBlbHNle1xuICAgICAgYWxlcnQoJ+2ajOybkOqwgOyeheydhCDstpXtlZjtlanri4jri6QuJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICDslYTsnbTrlJQ6IDxpbnB1dCB0eXBlPSd0ZXh0JyBvbkNoYW5nZT17b25DaGFuZ2VVc2VyaWR9IC8+IDxici8+XG4gICAgICDruYTrsIDrsojtmLg6IDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmQxfSAvPjxici8+XG4gICAgICDruYTrsIDrsojtmLgg7ZmV7J24OiA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkMn0gLz48YnIvPlxuICAgICAgPEVycm9yPntlbWFpbEVycm9yfTwvRXJyb3I+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tTaWdudXB9Pu2ajOybkOqwgOyehTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRXJyb3IiLCJTaW5ndXBTdGF0ZVBhZ2UiLCJ1c2VyaWQiLCJzZXRVc2VyaWQiLCJwYXNzd29yZDEiLCJzZXRQYXNzd29yZDEiLCJwYXNzd29yZDIiLCJzZXRQYXNzd29yZDIiLCJlbWFpbEVycm9yIiwic2V0RW1haWxFcnJvciIsIm9uQ2hhbmdlVXNlcmlkIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlUGFzc3dvcmQxIiwib25DaGFuZ2VQYXNzd29yZDIiLCJvbkNsaWNrU2lnbnVwIiwiYWxlcnQiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImJyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/singup/index.js\n");

/***/ }),

/***/ "./styles/emotion.js":
/*!***************************!*\
  !*** ./styles/emotion.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Error\": () => (/* binding */ Error),\n/* harmony export */   \"Title\": () => (/* binding */ Title),\n/* harmony export */   \"MyEmail\": () => (/* binding */ MyEmail),\n/* harmony export */   \"MyContent\": () => (/* binding */ MyContent),\n/* harmony export */   \"WriterWrapper\": () => (/* binding */ WriterWrapper),\n/* harmony export */   \"Wrapper\": () => (/* binding */ Wrapper)\n/* harmony export */ });\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Error = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`\ncolor: red;\nfont-size: 5px;\n`;\nconst Title = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)` \nfont-family: Arial, Helvetica, sans-serif;\nfont-size: 36px;\nfont-weight: bold;\n`;\nconst MyEmail = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().input)`\nwidth: 200px;\n`;\nconst MyContent = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().input)`\nwidth: 500px;\nheight: 800px;\n`;\nconst WriterWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-top: 40px;\n`;\nconst Wrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`\n  width: 1200px;\n  border: 1px solid black;\n  margin: 100px;\n  padding-top: 80px;\n  padding-bottom: 100px;\n  padding-left: 102px;\n  padding-right: 102px;\n  flex-direction: column;\n  align-items: center;\n  border: none;\n  box-shadow: 0px 0px 10px gray;\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvZW1vdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFvQztBQUU3QixLQUFLLENBQUNDLEtBQUssR0FBR0QsNERBQVUsQ0FBQzs7O0FBR2hDO0FBRU8sS0FBSyxDQUFDRyxLQUFLLEdBQUdILDREQUFVLENBQUM7Ozs7QUFJaEM7QUFDTyxLQUFLLENBQUNJLE9BQU8sR0FBR0osOERBQVksQ0FBQzs7QUFFcEM7QUFDTyxLQUFLLENBQUNNLFNBQVMsR0FBR04sOERBQVksQ0FBQzs7O0FBR3RDO0FBRU8sS0FBSyxDQUFDTyxhQUFhLEdBQUdQLDREQUFVLENBQUM7Ozs7OztBQU14QztBQUNPLEtBQUssQ0FBQ1EsT0FBTyxHQUFHUiw0REFBVSxDQUFDOzs7Ozs7Ozs7Ozs7QUFZbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFzcy8uL3N0eWxlcy9lbW90aW9uLmpzP2EwZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmV4cG9ydCBjb25zdCBFcnJvciA9IHN0eWxlZC5kaXZgXG5jb2xvcjogcmVkO1xuZm9udC1zaXplOiA1cHg7XG5gXG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgIFxuZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5mb250LXNpemU6IDM2cHg7XG5mb250LXdlaWdodDogYm9sZDtcbmBcbmV4cG9ydCBjb25zdCBNeUVtYWlsID0gc3R5bGVkLmlucHV0YFxud2lkdGg6IDIwMHB4O1xuYFxuZXhwb3J0IGNvbnN0IE15Q29udGVudCA9IHN0eWxlZC5pbnB1dGBcbndpZHRoOiA1MDBweDtcbmhlaWdodDogODAwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgV3JpdGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuYDtcbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEyMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbjogMTAwcHg7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogMTAycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwMnB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCBncmF5O1xuYDsiXSwibmFtZXMiOlsic3R5bGVkIiwiRXJyb3IiLCJkaXYiLCJUaXRsZSIsIk15RW1haWwiLCJpbnB1dCIsIk15Q29udGVudCIsIldyaXRlcldyYXBwZXIiLCJXcmFwcGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/emotion.js\n");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@emotion/styled");

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
var __webpack_exports__ = (__webpack_exec__("./pages/singup/index.js"));
module.exports = __webpack_exports__;

})();