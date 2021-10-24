/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Example.js":
/*!************************!*\
  !*** ./src/Example.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Example": () => (/* binding */ Example)
/* harmony export */ });
class Example
{
    constructor()
    {
        this.el = document.createElement('div');
        this.el.innerText="Пример компонента - Вот так это выглядит!";
    }
}

/***/ }),

/***/ "./src/classes/Example2.js":
/*!*********************************!*\
  !*** ./src/classes/Example2.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Example2": () => (/* binding */ Example2)
/* harmony export */ });
class Example2
{
    constructor()
    {
        this.el = document.createElement('div');
        this.el.innerText="Пример компонента2 - Вот так это выглядит!";
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Example2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Example2 */ "./src/classes/Example2.js");
/* harmony import */ var _Example__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Example */ "./src/Example.js");



const body = document.querySelector('body');



const ex = new _Example__WEBPACK_IMPORTED_MODULE_1__.Example();
const ex2 = new _Example__WEBPACK_IMPORTED_MODULE_1__.Example();
const ex3 = new _Example__WEBPACK_IMPORTED_MODULE_1__.Example();
body.append(ex.el);
body.append(ex2.el);
body.append(ex3.el);


body.append(new _classes_Example2__WEBPACK_IMPORTED_MODULE_0__.Example2().el);
})();

/******/ })()
;
//# sourceMappingURL=app.js.map