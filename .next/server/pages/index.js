module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Modal */ \"./src/components/Modal.js\");\n\nvar _jsxFileName = \"/home/muhammad/Documents/Personal-Project/framer-motion-modal/pages/index.js\";\n\n\n\nfunction IndexPage() {\n  const {\n    0: showModal,\n    1: setShowModal\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \" flex justify-center items-center h-screen w-screen bg-blue-500 \",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: \"Next js Tailwindcss Starter\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Modal__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"], {\n      showModal: setShowModal,\n      setShowModal: setShowModal\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 3\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInVzZVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxHQUFxQjtBQUNwQixRQUFNO0FBQUEsT0FBRUMsU0FBRjtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLHNEQUFRLENBQUMsSUFBRCxDQUE1QztBQUNBLHNCQUNDO0FBQUssYUFBUyxFQUFDLGtFQUFmO0FBQUEsNEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDLHFFQUFDLDJEQUFEO0FBQU8sZUFBUyxFQUFFRCxZQUFsQjtBQUFnQyxrQkFBWSxFQUFFQTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFNQTs7QUFDY0Ysd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Nb2RhbCc7XG5cbmZ1bmN0aW9uIEluZGV4UGFnZSgpIHtcblx0Y29uc3QgWyBzaG93TW9kYWwsIHNldFNob3dNb2RhbCBdID0gdXNlU3RhdGUodHJ1ZSk7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCIgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gdy1zY3JlZW4gYmctYmx1ZS01MDAgXCI+XG5cdFx0XHQ8c3Bhbj5OZXh0IGpzIFRhaWx3aW5kY3NzIFN0YXJ0ZXI8L3NwYW4+XG5cdFx0XHQ8TW9kYWwgc2hvd01vZGFsPXtzZXRTaG93TW9kYWx9IHNldFNob3dNb2RhbD17c2V0U2hvd01vZGFsfSAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./src/components/Modal.js":
/*!*********************************!*\
  !*** ./src/components/Modal.js ***!
  \*********************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/muhammad/Documents/Personal-Project/framer-motion-modal/src/components/Modal.js\";\n\nconst backdropVariants = {\n  visible: {\n    opacity: 1\n  },\n  hidden: {\n    opacity: 0\n  }\n};\nconst modalVarinats = {\n  visible: {\n    y: 0,\n    opacity: 1,\n    transition: {\n      delay: 0.5,\n      type: 'spring',\n      stiffness: 120\n    }\n  },\n  hidden: {\n    y: '-100vh',\n    opacity: 0\n  }\n};\nconst Modal = ({\n  showModal,\n  setShowModal\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"AnimatePresence\"], {\n    exitBeforeEnter: true,\n    children: showModal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n      animate: \"visible\",\n      initial: \"hidden\",\n      variants: backdropVariants,\n      className: \"fixed inset-0 h-full w-full z-10 flex justify-center items-center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        className: \" fixed inset-0  bg-black opacity-50 h-full w-full \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 6\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        animate: \"visible\",\n        initial: \"hidden\",\n        variants: modalVarinats,\n        className: \"bg-white h-64 w-64 p-16 rounded-lg shadow-xl opacity-100 z-20\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 6\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 3\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbC5qcz80N2YyIl0sIm5hbWVzIjpbImJhY2tkcm9wVmFyaWFudHMiLCJ2aXNpYmxlIiwib3BhY2l0eSIsImhpZGRlbiIsIm1vZGFsVmFyaW5hdHMiLCJ5IiwidHJhbnNpdGlvbiIsImRlbGF5IiwidHlwZSIsInN0aWZmbmVzcyIsIk1vZGFsIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsZ0JBQWdCLEdBQUc7QUFDeEJDLFNBQU8sRUFBRTtBQUFFQyxXQUFPLEVBQUU7QUFBWCxHQURlO0FBRXhCQyxRQUFNLEVBQUU7QUFBRUQsV0FBTyxFQUFFO0FBQVg7QUFGZ0IsQ0FBekI7QUFJQSxNQUFNRSxhQUFhLEdBQUc7QUFDckJILFNBQU8sRUFBRTtBQUFFSSxLQUFDLEVBQUUsQ0FBTDtBQUFRSCxXQUFPLEVBQUUsQ0FBakI7QUFBb0JJLGNBQVUsRUFBRTtBQUFFQyxXQUFLLEVBQUUsR0FBVDtBQUFjQyxVQUFJLEVBQUUsUUFBcEI7QUFBOEJDLGVBQVMsRUFBRTtBQUF6QztBQUFoQyxHQURZO0FBRXJCTixRQUFNLEVBQUU7QUFBRUUsS0FBQyxFQUFFLFFBQUw7QUFBZUgsV0FBTyxFQUFFO0FBQXhCO0FBRmEsQ0FBdEI7QUFJTyxNQUFNUSxLQUFLLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUFpQztBQUNyRCxzQkFDQyxxRUFBQyw2REFBRDtBQUFpQixtQkFBZSxNQUFoQztBQUFBLGNBQ0VELFNBQVMsaUJBQ1QscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0MsYUFBTyxFQUFDLFNBRFQ7QUFFQyxhQUFPLEVBQUMsUUFGVDtBQUdDLGNBQVEsRUFBRVgsZ0JBSFg7QUFJQyxlQUFTLEVBQUMsbUVBSlg7QUFBQSw4QkFNQyxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxpQkFBUyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkQsZUFPQyxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDQyxlQUFPLEVBQUMsU0FEVDtBQUVDLGVBQU8sRUFBQyxRQUZUO0FBR0MsZ0JBQVEsRUFBRUksYUFIWDtBQUlDLGlCQUFTLEVBQUM7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQW9CQSxDQXJCTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL01vZGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgYmFja2Ryb3BWYXJpYW50cyA9IHtcblx0dmlzaWJsZTogeyBvcGFjaXR5OiAxIH0sXG5cdGhpZGRlbjogeyBvcGFjaXR5OiAwIH1cbn07XG5jb25zdCBtb2RhbFZhcmluYXRzID0ge1xuXHR2aXNpYmxlOiB7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuNSwgdHlwZTogJ3NwcmluZycsIHN0aWZmbmVzczogMTIwIH0gfSxcblx0aGlkZGVuOiB7IHk6ICctMTAwdmgnLCBvcGFjaXR5OiAwIH1cbn07XG5leHBvcnQgY29uc3QgTW9kYWwgPSAoeyBzaG93TW9kYWwsIHNldFNob3dNb2RhbCB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZSBleGl0QmVmb3JlRW50ZXI+XG5cdFx0XHR7c2hvd01vZGFsICYmIChcblx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRhbmltYXRlPVwidmlzaWJsZVwiXG5cdFx0XHRcdFx0aW5pdGlhbD1cImhpZGRlblwiXG5cdFx0XHRcdFx0dmFyaWFudHM9e2JhY2tkcm9wVmFyaWFudHN9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBoLWZ1bGwgdy1mdWxsIHotMTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiIGZpeGVkIGluc2V0LTAgIGJnLWJsYWNrIG9wYWNpdHktNTAgaC1mdWxsIHctZnVsbCBcIiAvPlxuXHRcdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0XHRhbmltYXRlPVwidmlzaWJsZVwiXG5cdFx0XHRcdFx0XHRpbml0aWFsPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdHZhcmlhbnRzPXttb2RhbFZhcmluYXRzfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmctd2hpdGUgaC02NCB3LTY0IHAtMTYgcm91bmRlZC1sZyBzaGFkb3cteGwgb3BhY2l0eS0xMDAgei0yMFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0KX1cblx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Modal.js\n");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"framer-motion\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCI/ZmY3ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmcmFtZXItbW90aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///framer-motion\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });