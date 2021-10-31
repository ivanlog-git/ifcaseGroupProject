/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/ExampleComponent.js":
/*!*****************************************!*\
  !*** ./src/classes/ExampleComponent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExampleComponent": () => (/* binding */ ExampleComponent)
/* harmony export */ });
class ExampleComponent
{
    constructor()
    {
        this.el = document.createElement('div');
        this.el.innerText="Пример компонента - Вот так это выглядит!";
    }
}

/***/ }),

/***/ "./src/classes/StuffListComponent.js":
/*!*******************************************!*\
  !*** ./src/classes/StuffListComponent.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StuffListComponent": () => (/* binding */ StuffListComponent)
/* harmony export */ });
class StuffListComponent
{
    constructor(el)
    {
        this.el = el;
        this._btnNext = el.querySelector('button.btn_next');
        this._list = el.querySelector('ul.list');
        this._page = 0;
        this._btnNext.onclick = ()=>this.loadNext();        
    }

    async loadNext() {
        this._btnNext.disabled=true;
        try
        {
          const req = await fetch('/stuff/api/list?p='+(this._page+1));        
          const data = await req.text();
          if (data) this._list.innerHTML+=data;        
          this._page++;
        } catch (e) { console.error(e); }
        this._btnNext.disabled=false;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/* harmony import */ var _classes_ExampleComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/ExampleComponent */ "./src/classes/ExampleComponent.js");
/* harmony import */ var _classes_StuffListComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/StuffListComponent */ "./src/classes/StuffListComponent.js");



__webpack_require__.g.cmp = {};
__webpack_require__.g.cmp.StuffList = _classes_StuffListComponent__WEBPACK_IMPORTED_MODULE_1__.StuffListComponent;
__webpack_require__.g.cmp.Example = _classes_ExampleComponent__WEBPACK_IMPORTED_MODULE_0__.ExampleComponent;


})();

/******/ })()
;
//# sourceMappingURL=app.js.map