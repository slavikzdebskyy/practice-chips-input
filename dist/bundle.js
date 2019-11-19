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
eval("\n\nconst input = document.getElementById('tags-input');\nconst list = document.getElementsByClassName('tags-list')[0];\nconst modal = document.getElementById('question');\nconst modalBtnCancel = modal.querySelector('.cancel');\nconst modalBtnRemove = modal.querySelector('.accept');\nconst modalBtnCancelX = document.getElementById('close-btn');\nconst message = document.getElementById('alert-msg');\n\nmessage.innerText = 'Are you sure ?';\n\nconst LS_KEY = 'tagList';\n\n\n// const toggleModal = () => {\n//   if (modal.className === 'hidden') {\n//     modal.className = '';\n//   } else {\n//     modal.className = 'hidden';\n//   }\n// };\n\nconst saveItem = item => {\n  const list = JSON.parse(localStorage.getItem(LS_KEY));\n  if(list && list.length) {\n    list.push(item);\n    localStorage.setItem(LS_KEY, JSON.stringify(list));\n  } else {\n    localStorage.setItem(LS_KEY, JSON.stringify([item]));\n  }\n};\n\nconst removeItem = item => {\n  const list = JSON.parse(localStorage.getItem(LS_KEY));\n  const newList = list.filter(el => el !== item);\n  localStorage.setItem(LS_KEY, JSON.stringify(newList));\n};\n\nconst createListItem = item => {\n  const li = document.createElement('li');\n  li.className = 'tags-list-item';\n  const span = document.createElement('span');\n  span.innerText = item ? item : input.value;\n  li.appendChild(span);\n  if (!item) {\n    saveItem(input.value);\n  }\n  input.value = '';\n  const btn = document.createElement('span');\n  btn.innerText = 'X';\n  btn.className = 'remove-btn';\n  li.appendChild(btn);\n  list.appendChild(li);\n  btn.addEventListener('click', () => {\n    li.classList.add('need-to-remove');\n    toggleModal();\n  });\n};\n\nconst initTags = () => {\n  const list = JSON.parse(localStorage.getItem(LS_KEY));\n  if(list && list.length) {\n    list.forEach(el => createListItem(el));\n  }\n};\n\nconst toggleModal = () => {\n  modal.classList.toggle('hidden');\n};\n\nconst removeClass = () => {\n  const liToRemove = list.querySelector('.need-to-remove');\n  liToRemove.classList.remove('need-to-remove');\n  toggleModal();\n};\n\n\ninput.addEventListener('keyup', event => {\n  if (event.keyCode === 13) {\n    createListItem();\n  }\n});\n\nmodalBtnCancel.addEventListener('click', removeClass);\nmodalBtnCancelX.addEventListener('click', removeClass);\n\nmodalBtnRemove.addEventListener('click', () => {\n  const liToRemove = list.querySelector('.need-to-remove');\n  removeItem(liToRemove.getElementsByTagName('span')[0].innerText);\n  list.removeChild(liToRemove);\n  toggleModal();\n});\n\n\n\ninitTags();\n// console.log(modalBtnCancel);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZ3MtaW5wdXQnKTtcbmNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YWdzLWxpc3QnKVswXTtcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXN0aW9uJyk7XG5jb25zdCBtb2RhbEJ0bkNhbmNlbCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKTtcbmNvbnN0IG1vZGFsQnRuUmVtb3ZlID0gbW9kYWwucXVlcnlTZWxlY3RvcignLmFjY2VwdCcpO1xuY29uc3QgbW9kYWxCdG5DYW5jZWxYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLWJ0bicpO1xuY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGVydC1tc2cnKTtcblxubWVzc2FnZS5pbm5lclRleHQgPSAnQXJlIHlvdSBzdXJlID8nO1xuXG5jb25zdCBMU19LRVkgPSAndGFnTGlzdCc7XG5cblxuLy8gY29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG4vLyAgIGlmIChtb2RhbC5jbGFzc05hbWUgPT09ICdoaWRkZW4nKSB7XG4vLyAgICAgbW9kYWwuY2xhc3NOYW1lID0gJyc7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgbW9kYWwuY2xhc3NOYW1lID0gJ2hpZGRlbic7XG4vLyAgIH1cbi8vIH07XG5cbmNvbnN0IHNhdmVJdGVtID0gaXRlbSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExTX0tFWSkpO1xuICBpZihsaXN0ICYmIGxpc3QubGVuZ3RoKSB7XG4gICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExTX0tFWSwgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xuICB9IGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExTX0tFWSwgSlNPTi5zdHJpbmdpZnkoW2l0ZW1dKSk7XG4gIH1cbn07XG5cbmNvbnN0IHJlbW92ZUl0ZW0gPSBpdGVtID0+IHtcbiAgY29uc3QgbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTFNfS0VZKSk7XG4gIGNvbnN0IG5ld0xpc3QgPSBsaXN0LmZpbHRlcihlbCA9PiBlbCAhPT0gaXRlbSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExTX0tFWSwgSlNPTi5zdHJpbmdpZnkobmV3TGlzdCkpO1xufTtcblxuY29uc3QgY3JlYXRlTGlzdEl0ZW0gPSBpdGVtID0+IHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaS5jbGFzc05hbWUgPSAndGFncy1saXN0LWl0ZW0nO1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLmlubmVyVGV4dCA9IGl0ZW0gPyBpdGVtIDogaW5wdXQudmFsdWU7XG4gIGxpLmFwcGVuZENoaWxkKHNwYW4pO1xuICBpZiAoIWl0ZW0pIHtcbiAgICBzYXZlSXRlbShpbnB1dC52YWx1ZSk7XG4gIH1cbiAgaW5wdXQudmFsdWUgPSAnJztcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBidG4uaW5uZXJUZXh0ID0gJ1gnO1xuICBidG4uY2xhc3NOYW1lID0gJ3JlbW92ZS1idG4nO1xuICBsaS5hcHBlbmRDaGlsZChidG4pO1xuICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxpLmNsYXNzTGlzdC5hZGQoJ25lZWQtdG8tcmVtb3ZlJyk7XG4gICAgdG9nZ2xlTW9kYWwoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBpbml0VGFncyA9ICgpID0+IHtcbiAgY29uc3QgbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTFNfS0VZKSk7XG4gIGlmKGxpc3QgJiYgbGlzdC5sZW5ndGgpIHtcbiAgICBsaXN0LmZvckVhY2goZWwgPT4gY3JlYXRlTGlzdEl0ZW0oZWwpKTtcbiAgfVxufTtcblxuY29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG4gIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufTtcblxuY29uc3QgcmVtb3ZlQ2xhc3MgPSAoKSA9PiB7XG4gIGNvbnN0IGxpVG9SZW1vdmUgPSBsaXN0LnF1ZXJ5U2VsZWN0b3IoJy5uZWVkLXRvLXJlbW92ZScpO1xuICBsaVRvUmVtb3ZlLmNsYXNzTGlzdC5yZW1vdmUoJ25lZWQtdG8tcmVtb3ZlJyk7XG4gIHRvZ2dsZU1vZGFsKCk7XG59O1xuXG5cbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICBjcmVhdGVMaXN0SXRlbSgpO1xuICB9XG59KTtcblxubW9kYWxCdG5DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVDbGFzcyk7XG5tb2RhbEJ0bkNhbmNlbFguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVDbGFzcyk7XG5cbm1vZGFsQnRuUmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBsaVRvUmVtb3ZlID0gbGlzdC5xdWVyeVNlbGVjdG9yKCcubmVlZC10by1yZW1vdmUnKTtcbiAgcmVtb3ZlSXRlbShsaVRvUmVtb3ZlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzcGFuJylbMF0uaW5uZXJUZXh0KTtcbiAgbGlzdC5yZW1vdmVDaGlsZChsaVRvUmVtb3ZlKTtcbiAgdG9nZ2xlTW9kYWwoKTtcbn0pO1xuXG5cblxuaW5pdFRhZ3MoKTtcbi8vIGNvbnNvbGUubG9nKG1vZGFsQnRuQ2FuY2VsKTtcblxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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