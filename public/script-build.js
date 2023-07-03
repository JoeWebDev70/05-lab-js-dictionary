/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js_libs/modal_script.js":
/*!*************************************!*\
  !*** ./src/js_libs/modal_script.js ***!
  \*************************************/
/***/ (() => {

eval("var modalContainers = document.querySelectorAll(\".modal_container\");\nvar modalTriggers = document.querySelectorAll(\".modal_trigger\");\nmodalTriggers.forEach(function (trigger) {\n  trigger.addEventListener(\"click\", function () {\n    toggleModal();\n  });\n});\nfunction toggleModal() {\n  modalContainer.classList.toggle(\"active\");\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/js_libs/modal_script.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _js_libs_modal_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js_libs/modal_script.js */ \"./src/js_libs/modal_script.js\");\n/* harmony import */ var _js_libs_modal_script_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_libs_modal_script_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar btn = document.querySelector(\"button\");\nbtn.addEventListener(\"click\", function () {\n  search();\n});\nfunction search() {\n  var word = document.querySelector(\"input\").value;\n  var resultat = document.querySelector(\"#resultat\");\n  if (word.length != 0) {\n    var url = \"https://api.dictionaryapi.dev/api/v2/entries/en/\" + word;\n    fetch(url).then(function (reponse) {\n      return reponse.json().then(function (data) {\n        console.log(data);\n        try {\n          // for(let words of data){\n          // let definition = words.meanings[0].definitions[0].definition;\n          // resultat.innerHTML = \"<p class='res'> \"+definitions + \"</p>\";\n          // }\n          for (var i = 0; i < data.length; i++) {\n            for (var j = 0; j < data[i].meanings.length; j++) {\n              console.log(\"data i : \", Object.values(data[i]));\n              console.log(data[i].meanings[j]);\n            }\n          }\n        } catch (err) {\n          resultat.innerHTML = \"<p class='res'> Aucune definition trouvée ! </p>\";\n        }\n      });\n    });\n  } else {\n    resultat.innerHTML = \"<p class='res'> Veuillez remplir ce champ</p>\";\n  }\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/script.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.scss?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;