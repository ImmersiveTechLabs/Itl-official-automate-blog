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
exports.id = "pages/api/addBlog";
exports.ids = ["pages/api/addBlog"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "./src/pages/api/addBlog.js":
/*!**********************************!*\
  !*** ./src/pages/api/addBlog.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n// pages/api/addBlog.js\n\n\nfunction handler(req, res) {\n  if (req.method === 'POST') {\n    try {\n      console.log('Current working directory:', process.cwd());\n      const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'src', 'data', 'blogs.json');\n      console.log('Attempting to read file at:', filePath);\n\n      if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(filePath)) {\n        console.error('File does not exist:', filePath);\n        return res.status(500).json({\n          message: 'File does not exist'\n        });\n      }\n\n      const fileData = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, 'utf8'));\n      console.log('Current file data:', fileData);\n      const newId = fileData.length > 0 ? fileData[fileData.length - 1].id + 1 : 1; // convert title to slug\n\n      const link = req.body.title.toLowerCase().replace(/ /g, '-').replace(/[^\\w-]+/g, ''); // i want content replace <p class=\"c0\"><span class=\"c5\"></span></p> with blank space contnet come from req body\n\n      var modifiedContent = req.body.content.replace(/<p class=\"c0\"><span class=\"c5\"><\\/span><\\/p>/g, '');\n      const newBlog = {\n        id: newId,\n        title: req.body.title,\n        subtitle: req.body.subtitle,\n        content: modifiedContent,\n        image: req.body.image,\n        tags: req.body.tags,\n        link,\n        date: {\n          day: new Date().getDate(),\n          month: new Date().toLocaleString('default', {\n            month: 'long'\n          })\n        }\n      };\n      fileData.push(newBlog);\n      fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(filePath, JSON.stringify(fileData, null, 2));\n      return res.status(200).json({\n        message: 'Blog added successfully!'\n      });\n    } catch (error) {\n      console.error('An error occurred:', error);\n      return res.status(500).json({\n        message: 'An error occurred',\n        error: error.message\n      });\n    }\n  } else {\n    res.setHeader('Allow', ['POST']);\n    return res.status(405).end(`Method ${req.method} Not Allowed`);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxRQUFBQSxPQUFPLEVBQUU7QUFBWCxPQUFyQixDQUFQO0FBQ0QsS0EzQ0QsQ0EyQ0UsT0FBT0gsS0FBUCxFQUFjO0FBQ2RQLE1BQUFBLE9BQU8sQ0FBQ08sS0FBUixDQUFjLG9CQUFkLEVBQW9DQSxLQUFwQztBQUNBLGFBQU9ULEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFFBQUFBLE9BQU8sRUFBRSxtQkFBWDtBQUFnQ0gsUUFBQUEsS0FBSyxFQUFFQSxLQUFLLENBQUNHO0FBQTdDLE9BQXJCLENBQVA7QUFDRDtBQUNGLEdBaERELE1BZ0RPO0FBQ0xaLElBQUFBLEdBQUcsQ0FBQ3dDLFNBQUosQ0FBYyxPQUFkLEVBQXVCLENBQUMsTUFBRCxDQUF2QjtBQUNBLFdBQU94QyxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCK0IsR0FBaEIsQ0FBcUIsVUFBUzFDLEdBQUcsQ0FBQ0UsTUFBTyxjQUF6QyxDQUFQO0FBQ0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2l0bC8uL3NyYy9wYWdlcy9hcGkvYWRkQmxvZy5qcz80OWE4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9hZGRCbG9nLmpzXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZygnQ3VycmVudCB3b3JraW5nIGRpcmVjdG9yeTonLCBwcm9jZXNzLmN3ZCgpKTtcblxuICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3NyYycsICdkYXRhJywgJ2Jsb2dzLmpzb24nKTtcbiAgICAgIGNvbnNvbGUubG9nKCdBdHRlbXB0aW5nIHRvIHJlYWQgZmlsZSBhdDonLCBmaWxlUGF0aCk7XG5cbiAgICAgIGlmICghZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmlsZSBkb2VzIG5vdCBleGlzdDonLCBmaWxlUGF0aCk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdGaWxlIGRvZXMgbm90IGV4aXN0JyB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlsZURhdGEgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgJ3V0ZjgnKSk7XG4gICAgICBjb25zb2xlLmxvZygnQ3VycmVudCBmaWxlIGRhdGE6JywgZmlsZURhdGEpO1xuXG4gICAgICBjb25zdCBuZXdJZCA9IGZpbGVEYXRhLmxlbmd0aCA+IDAgPyBmaWxlRGF0YVtmaWxlRGF0YS5sZW5ndGggLSAxXS5pZCArIDEgOiAxO1xuXG4gICAgICAvLyBjb252ZXJ0IHRpdGxlIHRvIHNsdWdcbiAgICAgIGNvbnN0IGxpbmsgPSByZXEuYm9keS50aXRsZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJy0nKS5yZXBsYWNlKC9bXlxcdy1dKy9nLCAnJyk7XG5cbiAgICAgIC8vIGkgd2FudCBjb250ZW50IHJlcGxhY2UgPHAgY2xhc3M9XCJjMFwiPjxzcGFuIGNsYXNzPVwiYzVcIj48L3NwYW4+PC9wPiB3aXRoIGJsYW5rIHNwYWNlIGNvbnRuZXQgY29tZSBmcm9tIHJlcSBib2R5XG4gICAgICB2YXIgbW9kaWZpZWRDb250ZW50ID0gcmVxLmJvZHkuY29udGVudC5yZXBsYWNlKC88cCBjbGFzcz1cImMwXCI+PHNwYW4gY2xhc3M9XCJjNVwiPjxcXC9zcGFuPjxcXC9wPi9nLCAnJyk7XG5cbiAgICAgIFxuXG4gICAgICBjb25zdCBuZXdCbG9nID0ge1xuICAgICAgICBpZDogbmV3SWQsXG4gICAgICAgIHRpdGxlOiByZXEuYm9keS50aXRsZSxcbiAgICAgICAgc3VidGl0bGU6IHJlcS5ib2R5LnN1YnRpdGxlLFxuICAgICAgICBjb250ZW50OiBtb2RpZmllZENvbnRlbnQsXG4gICAgICAgIGltYWdlOiByZXEuYm9keS5pbWFnZSxcbiAgICAgICAgdGFnczogcmVxLmJvZHkudGFncyxcbiAgICAgICAgbGluayxcbiAgICAgICAgZGF0ZToge1xuICAgICAgICAgIGRheTogbmV3IERhdGUoKS5nZXREYXRlKCksXG4gICAgICAgICAgbW9udGg6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCB7IG1vbnRoOiAnbG9uZycgfSlcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZmlsZURhdGEucHVzaChuZXdCbG9nKTtcblxuICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZmlsZURhdGEsIG51bGwsIDIpKTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ0Jsb2cgYWRkZWQgc3VjY2Vzc2Z1bGx5IScgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkOicsIGVycm9yKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdBbiBlcnJvciBvY2N1cnJlZCcsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnUE9TVCddKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImN3ZCIsImZpbGVQYXRoIiwiam9pbiIsImV4aXN0c1N5bmMiLCJlcnJvciIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZmlsZURhdGEiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJuZXdJZCIsImxlbmd0aCIsImlkIiwibGluayIsImJvZHkiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsIm1vZGlmaWVkQ29udGVudCIsImNvbnRlbnQiLCJuZXdCbG9nIiwic3VidGl0bGUiLCJpbWFnZSIsInRhZ3MiLCJkYXRlIiwiZGF5IiwiRGF0ZSIsImdldERhdGUiLCJtb250aCIsInRvTG9jYWxlU3RyaW5nIiwicHVzaCIsIndyaXRlRmlsZVN5bmMiLCJzdHJpbmdpZnkiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/addBlog.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/addBlog.js"));
module.exports = __webpack_exports__;

})();