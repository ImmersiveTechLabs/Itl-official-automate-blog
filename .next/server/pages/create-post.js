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
exports.id = "pages/create-post";
exports.ids = ["pages/create-post"];
exports.modules = {

/***/ "./src/components/BlogForm.js":
/*!************************************!*\
  !*** ./src/components/BlogForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BlogForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"C:\\\\Users\\\\Usman\\\\Desktop\\\\saadtest-itl-8e2b0d2f477e74f28b6e685441da8c40741a99ee\\\\saadtest-itl-8e2b0d2f477e74f28b6e685441da8c40741a99ee\\\\src\\\\components\\\\BlogForm.js\";\n\n// components/BlogForm.js\nfunction BlogForm({\n  onFormSubmit\n}) {\n  const handleSubmit = async event => {\n    event.preventDefault(); // Extract data from the form\n\n    const formData = {\n      title: event.target.title.value,\n      subtitle: event.target.subtitle.value,\n      content: event.target.content.value,\n      image: event.target.image.value,\n      tags: event.target.tags.value.split(','),\n      // Assuming tags are comma-separated\n      innerImages: event.target.innerImages.value.split(',').map(link => link.trim())\n    };\n    onFormSubmit(formData);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    onSubmit: handleSubmit,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"text\",\n      name: \"title\",\n      placeholder: \"Title\",\n      required: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"text\",\n      name: \"subtitle\",\n      placeholder: \"subTitle\",\n      required: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n      name: \"content\",\n      placeholder: \"Content\",\n      required: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"text\",\n      name: \"image\",\n      placeholder: \"Image URL\",\n      required: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"text\",\n      name: \"tags\",\n      placeholder: \"Tags,Separated,By,Comma\",\n      required: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"text\",\n      name: \"innerImages\",\n      placeholder: \"innerImages\",\n      required: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      type: \"submit\",\n      children: \"Submit\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 7\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CbG9nRm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsUUFBVCxDQUFrQjtBQUFFQyxFQUFBQTtBQUFGLENBQWxCLEVBQW9DO0FBQy9DLFFBQU1DLFlBQVksR0FBRyxNQUFPQyxLQUFQLElBQWlCO0FBQ3BDQSxJQUFBQSxLQUFLLENBQUNDLGNBQU4sR0FEb0MsQ0FHcEM7O0FBQ0EsVUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLE1BQUFBLEtBQUssRUFBRUgsS0FBSyxDQUFDSSxNQUFOLENBQWFELEtBQWIsQ0FBbUJFLEtBRFg7QUFFZkMsTUFBQUEsUUFBUSxFQUFFTixLQUFLLENBQUNJLE1BQU4sQ0FBYUUsUUFBYixDQUFzQkQsS0FGakI7QUFHZkUsTUFBQUEsT0FBTyxFQUFFUCxLQUFLLENBQUNJLE1BQU4sQ0FBYUcsT0FBYixDQUFxQkYsS0FIZjtBQUlmRyxNQUFBQSxLQUFLLEVBQUVSLEtBQUssQ0FBQ0ksTUFBTixDQUFhSSxLQUFiLENBQW1CSCxLQUpYO0FBS2ZJLE1BQUFBLElBQUksRUFBRVQsS0FBSyxDQUFDSSxNQUFOLENBQWFLLElBQWIsQ0FBa0JKLEtBQWxCLENBQXdCSyxLQUF4QixDQUE4QixHQUE5QixDQUxTO0FBSzJCO0FBQzFDQyxNQUFBQSxXQUFXLEVBQUVYLEtBQUssQ0FBQ0ksTUFBTixDQUFhTyxXQUFiLENBQXlCTixLQUF6QixDQUErQkssS0FBL0IsQ0FBcUMsR0FBckMsRUFBMENFLEdBQTFDLENBQThDQyxJQUFJLElBQUlBLElBQUksQ0FBQ0MsSUFBTCxFQUF0RDtBQU5FLEtBQWpCO0FBU0FoQixJQUFBQSxZQUFZLENBQUNJLFFBQUQsQ0FBWjtBQUNELEdBZEQ7O0FBZ0JBLHNCQUNFO0FBQU0sWUFBUSxFQUFFSCxZQUFoQjtBQUFBLDRCQUNFO0FBQU8sVUFBSSxFQUFDLE1BQVo7QUFBbUIsVUFBSSxFQUFDLE9BQXhCO0FBQWdDLGlCQUFXLEVBQUMsT0FBNUM7QUFBb0QsY0FBUTtBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLFVBQUksRUFBQyxVQUF4QjtBQUFtQyxpQkFBVyxFQUFDLFVBQS9DO0FBQTBELGNBQVE7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBVSxVQUFJLEVBQUMsU0FBZjtBQUF5QixpQkFBVyxFQUFDLFNBQXJDO0FBQStDLGNBQVE7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUU7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixVQUFJLEVBQUMsT0FBeEI7QUFBZ0MsaUJBQVcsRUFBQyxXQUE1QztBQUF3RCxjQUFRO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFO0FBQU8sVUFBSSxFQUFDLE1BQVo7QUFBbUIsVUFBSSxFQUFDLE1BQXhCO0FBQStCLGlCQUFXLEVBQUMseUJBQTNDO0FBQXFFLGNBQVE7QUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUU7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixVQUFJLEVBQUMsYUFBeEI7QUFBc0MsaUJBQVcsRUFBQyxhQUFsRDtBQUFnRSxjQUFRO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQU9FO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXRsLy4vc3JjL2NvbXBvbmVudHMvQmxvZ0Zvcm0uanM/YWFmYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL0Jsb2dGb3JtLmpzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dGb3JtKHsgb25Gb3JtU3VibWl0IH0pIHtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBcbiAgICAgIC8vIEV4dHJhY3QgZGF0YSBmcm9tIHRoZSBmb3JtXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IHtcbiAgICAgICAgdGl0bGU6IGV2ZW50LnRhcmdldC50aXRsZS52YWx1ZSxcbiAgICAgICAgc3VidGl0bGU6IGV2ZW50LnRhcmdldC5zdWJ0aXRsZS52YWx1ZSxcbiAgICAgICAgY29udGVudDogZXZlbnQudGFyZ2V0LmNvbnRlbnQudmFsdWUsXG4gICAgICAgIGltYWdlOiBldmVudC50YXJnZXQuaW1hZ2UudmFsdWUsXG4gICAgICAgIHRhZ3M6IGV2ZW50LnRhcmdldC50YWdzLnZhbHVlLnNwbGl0KCcsJyksIC8vIEFzc3VtaW5nIHRhZ3MgYXJlIGNvbW1hLXNlcGFyYXRlZFxuICAgICAgICBpbm5lckltYWdlczogZXZlbnQudGFyZ2V0LmlubmVySW1hZ2VzLnZhbHVlLnNwbGl0KCcsJykubWFwKGxpbmsgPT4gbGluay50cmltKCkpXG4gICAgICB9O1xuICBcbiAgICAgIG9uRm9ybVN1Ym1pdChmb3JtRGF0YSk7XG4gICAgfTtcbiAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN1YnRpdGxlXCIgcGxhY2Vob2xkZXI9XCJzdWJUaXRsZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiY29udGVudFwiIHBsYWNlaG9sZGVyPVwiQ29udGVudFwiIHJlcXVpcmVkIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbWFnZVwiIHBsYWNlaG9sZGVyPVwiSW1hZ2UgVVJMXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhZ3NcIiBwbGFjZWhvbGRlcj1cIlRhZ3MsU2VwYXJhdGVkLEJ5LENvbW1hXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImlubmVySW1hZ2VzXCIgcGxhY2Vob2xkZXI9XCJpbm5lckltYWdlc1wiIHJlcXVpcmVkIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbiAgIl0sIm5hbWVzIjpbIkJsb2dGb3JtIiwib25Gb3JtU3VibWl0IiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwidGl0bGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN1YnRpdGxlIiwiY29udGVudCIsImltYWdlIiwidGFncyIsInNwbGl0IiwiaW5uZXJJbWFnZXMiLCJtYXAiLCJsaW5rIiwidHJpbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/BlogForm.js\n");

/***/ }),

/***/ "./src/pages/create-post.js":
/*!**********************************!*\
  !*** ./src/pages/create-post.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_BlogForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/BlogForm */ \"./src/components/BlogForm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"C:\\\\Users\\\\Usman\\\\Desktop\\\\saadtest-itl-8e2b0d2f477e74f28b6e685441da8c40741a99ee\\\\saadtest-itl-8e2b0d2f477e74f28b6e685441da8c40741a99ee\\\\src\\\\pages\\\\create-post.js\";\n\n\n\nconst NewBlog = () => {\n  const onFormSubmit = async formData => {\n    const response = await fetch('/api/addBlog', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(formData)\n    });\n    const data = await response.json();\n    console.log(data);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      children: \"Create a New Blog Post\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_BlogForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      onFormSubmit: onFormSubmit\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewBlog);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY3JlYXRlLXBvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLE1BQU07QUFDcEIsUUFBTUMsWUFBWSxHQUFHLE1BQU9DLFFBQVAsSUFBb0I7QUFDdkMsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxjQUFELEVBQWlCO0FBQzNDQyxNQUFBQSxNQUFNLEVBQUUsTUFEbUM7QUFFM0NDLE1BQUFBLE9BQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURULE9BRmtDO0FBSzNDQyxNQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxRQUFmO0FBTHFDLEtBQWpCLENBQTVCO0FBUUEsVUFBTVEsSUFBSSxHQUFHLE1BQU1QLFFBQVEsQ0FBQ1EsSUFBVCxFQUFuQjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUNELEdBWEQ7O0FBYUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLDREQUFEO0FBQVUsa0JBQVksRUFBRVQ7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU1ELENBcEJEOztBQXNCQSxpRUFBZUQsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2l0bC8uL3NyYy9wYWdlcy9jcmVhdGUtcG9zdC5qcz8xYzUzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEJsb2dGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQmxvZ0Zvcm0nO1xuXG5jb25zdCBOZXdCbG9nID0gKCkgPT4ge1xuICBjb25zdCBvbkZvcm1TdWJtaXQgPSBhc3luYyAoZm9ybURhdGEpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2FkZEJsb2cnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5DcmVhdGUgYSBOZXcgQmxvZyBQb3N0PC9oMT5cbiAgICAgIDxCbG9nRm9ybSBvbkZvcm1TdWJtaXQ9e29uRm9ybVN1Ym1pdH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld0Jsb2c7XG4iXSwibmFtZXMiOlsiQmxvZ0Zvcm0iLCJOZXdCbG9nIiwib25Gb3JtU3VibWl0IiwiZm9ybURhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/create-post.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/create-post.js"));
module.exports = __webpack_exports__;

})();