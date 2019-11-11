/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst $tagsInputFirst = document.getElementById('tags-input-1');\nconst $tagsInputSecond = document.getElementById('tags-input-2');\nconst $tagsList = document.getElementsByClassName('tags-list');\nconst $modal = document.getElementById('question'); // modal window\nconst $btnsInModal = $modal.getElementsByClassName('btn');  // buttons Remove and Close in modal window\nconst $btnCloseInModal = document.getElementById('close-btn');  // span-button to close modal window\nconst tagsArrFirst = [];  // array for first input\nconst tagsArrSecond = ['tag1', 'some awesome tag'];   // array for second input\n\nconsole.log($tagsInputFirst);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0ICR0YWdzSW5wdXRGaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWdzLWlucHV0LTEnKTtcbmNvbnN0ICR0YWdzSW5wdXRTZWNvbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFncy1pbnB1dC0yJyk7XG5jb25zdCAkdGFnc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YWdzLWxpc3QnKTtcbmNvbnN0ICRtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWVzdGlvbicpOyAvLyBtb2RhbCB3aW5kb3dcbmNvbnN0ICRidG5zSW5Nb2RhbCA9ICRtb2RhbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidG4nKTsgIC8vIGJ1dHRvbnMgUmVtb3ZlIGFuZCBDbG9zZSBpbiBtb2RhbCB3aW5kb3dcbmNvbnN0ICRidG5DbG9zZUluTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtYnRuJyk7ICAvLyBzcGFuLWJ1dHRvbiB0byBjbG9zZSBtb2RhbCB3aW5kb3dcbmNvbnN0IHRhZ3NBcnJGaXJzdCA9IFtdOyAgLy8gYXJyYXkgZm9yIGZpcnN0IGlucHV0XG5jb25zdCB0YWdzQXJyU2Vjb25kID0gWyd0YWcxJywgJ3NvbWUgYXdlc29tZSB0YWcnXTsgICAvLyBhcnJheSBmb3Igc2Vjb25kIGlucHV0XG5cbmNvbnNvbGUubG9nKCR0YWdzSW5wdXRGaXJzdCk7XG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });