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

/***/ "./src/js_libs/changeFont.js":
/*!***********************************!*\
  !*** ./src/js_libs/changeFont.js ***!
  \***********************************/
/***/ (() => {

eval("var radioBtns = document.querySelectorAll(\"input[type=radio]\");\nvar body = document.querySelector(\"body\");\nvar links = document.querySelectorAll(\"a\");\nvar fontChoice = body.getAttribute(\"style\");\nif (radioBtns != null) {\n  radioBtns.forEach(function (radioBtn) {\n    radioBtn.addEventListener(\"change\", function (e) {\n      if (radioBtn.checked) {\n        switch (radioBtn.value) {\n          case \"Roboto\":\n            body.style.fontFamily = \"Roboto\";\n            search_zone.style.fontFamily = \"Roboto\";\n            links.forEach(function (link) {\n              link.style.fontFamily = \"Roboto\";\n            });\n            break;\n          case \"Roboto Serif\":\n            body.style.fontFamily = \"Roboto Serif\";\n            search_zone.style.fontFamily = \"Roboto Serif\";\n            links.forEach(function (link) {\n              link.style.fontFamily = \"Roboto Serif\";\n            });\n            break;\n          case \"Roboto Mono\":\n            body.style.fontFamily = \"Roboto Mono\";\n            search_zone.style.fontFamily = \"Roboto Mono\";\n            links.forEach(function (link) {\n              link.style.fontFamily = \"Roboto Mono\";\n            });\n            break;\n        }\n        fontChoice = body.style.fontFamily;\n        localStorage.removeItem(\"fontChoice\");\n        localStorage.setItem(\"fontChoice\", fontChoice);\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/js_libs/changeFont.js?");

/***/ }),

/***/ "./src/js_libs/creditsFonts.js":
/*!*************************************!*\
  !*** ./src/js_libs/creditsFonts.js ***!
  \*************************************/
/***/ (() => {

eval("var creditsBody = document.querySelector(\"#body_credits\");\nvar creditsElements = document.querySelectorAll(\"#body_credits a\");\nif (!localStorage.getItem(\"fontChoice\")) {\n  localStorage.href = 'index.html';\n}\nvar pageFont = localStorage.getItem(\"fontChoice\");\nwindow.addEventListener(\"storage\", function () {\n  pageFont = localStorage.getItem(\"fontChoice\");\n  if (creditsBody != null) {\n    creditsBody.style.fontFamily = pageFont;\n  }\n  creditsElements.forEach(function (creditsElement) {\n    creditsElement.style.fontFamily = pageFont;\n  });\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/js_libs/creditsFonts.js?");

/***/ }),

/***/ "./src/js_libs/creditsTheme.js":
/*!*************************************!*\
  !*** ./src/js_libs/creditsTheme.js ***!
  \*************************************/
/***/ (() => {

eval("var creditBody = document.querySelector(\"#body_credits\");\nvar creditElements = document.querySelectorAll(\"#body_credits *\");\nif (!localStorage.getItem(\"toggleChoice\")) {\n  localStorage.href = 'index.html';\n}\nvar preferColor = localStorage.getItem(\"toggleChoice\");\nwindow.addEventListener(\"storage\", function () {\n  preferColor = localStorage.getItem(\"toggleChoice\");\n  if (preferColor == \"dark_mode_body\") {\n    creditElements.forEach(function (creditElement) {\n      creditElement.classList.add(\"dark_mode\");\n    });\n    if (creditBody != null) {\n      creditBody.classList.add(\"dark_mode_body\");\n      creditBody.classList.remove(\"light_mode_body\");\n    }\n  } else {\n    creditElements.forEach(function (creditElement) {\n      creditElement.classList.remove(\"dark_mode\");\n    });\n    if (creditBody != null) {\n      creditBody.classList.remove(\"dark_mode_body\");\n      creditBody.classList.add(\"light_mode_body\");\n    }\n  }\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/js_libs/creditsTheme.js?");

/***/ }),

/***/ "./src/js_libs/modalWindows.js":
/*!*************************************!*\
  !*** ./src/js_libs/modalWindows.js ***!
  \*************************************/
/***/ (() => {

eval("var modalContainers = document.querySelectorAll(\".modal_container\");\nvar modalTriggers = document.querySelectorAll(\".modal_trigger\");\nmodalTriggers.forEach(function (trigger) {\n  trigger.addEventListener(\"click\", function () {\n    toggleModal(trigger);\n  });\n});\nfunction toggleModal(trigger) {\n  modalContainers.forEach(function (modalContainer) {\n    if (trigger.classList.contains(\"info\") & modalContainer.classList.contains(\"info\")) {\n      modalContainer.classList.toggle(\"active\");\n    } else if (trigger.classList.contains(\"setting\") & modalContainer.classList.contains(\"setting\")) {\n      modalContainer.classList.toggle(\"active\");\n    }\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/js_libs/modalWindows.js?");

/***/ }),

/***/ "./src/js_libs/toggle.js":
/*!*******************************!*\
  !*** ./src/js_libs/toggle.js ***!
  \*******************************/
/***/ (() => {

eval("var toggleDiv = document.querySelector(\"#toggle_div\");\nvar body = document.querySelector(\"body\");\nvar elements = document.querySelectorAll(\"body *\");\nvar preferColor = window.matchMedia(\"(prefers-color-scheme: dark)\");\nvar toggleChoice = body.getAttribute(\"class\");\nif (preferColor.matches) {\n  elements.forEach(function (element) {\n    element.classList.add(\"dark_mode\");\n  });\n  body.classList.add(\"dark_mode_body\");\n  body.classList.remove(\"light_mode_body\");\n} else {\n  elements.forEach(function (element) {\n    element.classList.remove(\"dark_mode\");\n    body.classList.remove(\"dark_mode_body\");\n    body.classList.add(\"light_mode_body\");\n  });\n}\npreferColor.addEventListener(\"change\", function (e) {\n  if (e.matches) {\n    elements.forEach(function (element) {\n      element.classList.add(\"dark_mode\");\n    });\n    body.classList.add(\"dark_mode_body\");\n    body.classList.remove(\"light_mode_body\");\n  } else {\n    elements.forEach(function (element) {\n      element.classList.remove(\"dark_mode\");\n    });\n    body.classList.remove(\"dark_mode_body\");\n    body.classList.add(\"light_mode_body\");\n  }\n});\nif (toggleDiv != null) {\n  toggleDiv.addEventListener(\"click\", function () {\n    elements.forEach(function (element) {\n      element.classList.toggle(\"dark_mode\");\n    });\n    body.classList.toggle(\"dark_mode_body\");\n    body.classList.toggle(\"light_mode_body\");\n    toggleChoice = body.className;\n    localStorage.removeItem(\"toggleChoice\");\n    localStorage.setItem(\"toggleChoice\", toggleChoice);\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/js_libs/toggle.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _js_libs_modalWindows_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js_libs/modalWindows.js */ \"./src/js_libs/modalWindows.js\");\n/* harmony import */ var _js_libs_modalWindows_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_libs_modalWindows_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_libs_changeFont_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js_libs/changeFont.js */ \"./src/js_libs/changeFont.js\");\n/* harmony import */ var _js_libs_changeFont_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_libs_changeFont_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_libs_toggle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js_libs/toggle.js */ \"./src/js_libs/toggle.js\");\n/* harmony import */ var _js_libs_toggle_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_libs_toggle_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_libs_creditsTheme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js_libs/creditsTheme.js */ \"./src/js_libs/creditsTheme.js\");\n/* harmony import */ var _js_libs_creditsTheme_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_libs_creditsTheme_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _js_libs_creditsFonts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js_libs/creditsFonts.js */ \"./src/js_libs/creditsFonts.js\");\n/* harmony import */ var _js_libs_creditsFonts_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_libs_creditsFonts_js__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar searchBar = document.querySelector(\"#search_bar\");\nvar searchZone = document.querySelector(\"#search_zone\");\nvar questions = document.querySelectorAll(\"dt\");\n// const btn = document.querySelector(\"button\");\n// btn.addEventListener(\"click\", function(e){\n//     e.preventDefault();\n//     search();\n// });\n\nif (searchBar != null) {\n  searchBar.addEventListener('submit', function (e) {\n    if (!this.checkValidity()) {\n      e.preventDefault();\n      this.classList.add('not_valid');\n      if (!searchZone.valid) {\n        searchZone.placeholder = searchZone.dataset.error;\n      }\n    } else {\n      search(e);\n    }\n  });\n}\nquestions.forEach(function (question) {\n  question.addEventListener(\"click\", function () {\n    var elementHasActive = document.querySelector(\".active\");\n    // Verifier qu'on a trouver un élément et que l'élément trouvé n'est pas celui cliqué\n    if (elementHasActive && this !== elementHasActive) {\n      elementHasActive.classList.remove(\"active\");\n    }\n    //clic à nouveau referme\n    this.classList.toggle(\"active\");\n  });\n});\nfunction search(evt) {\n  evt.preventDefault();\n  var word = document.querySelector(\"input\").value;\n  var notFound = \"Definition not found ! please enter an other word!\";\n  // let resultat = document.querySelector(\"#resultat\");\n  // let errorMessage = document.querySelector(\"input\").placeholder;\n  if (\"content\" in document.createElement(\"template\")) {\n    var temp = document.querySelector(\"#temp_panel\");\n    var resultZone = document.querySelector(\"#div_resultat dl\");\n    var clone = document.importNode(temp.content, true);\n    var dt = clone.querySelectorAll(\"dt\");\n    var dl = clone.querySelectorAll(\"dl\");\n    console.log(\"dt : \", dt);\n    console.log(\"dl : \", dl);\n  }\n  if (word.length != 0) {\n    var url = \"https://api.dictionaryapi.dev/api/v2/entries/en/\" + word;\n    fetch(url).then(function (reponse) {\n      return reponse.json().then(function (data) {\n        console.log(data);\n        try {\n          // for(let words of data){\n          // let definition = words.meanings[0].definitions[0].definition;\n          // resultat.innerHTML = \"<p class='res'> \"+definitions + \"</p>\";\n          // }\n          for (var i = 0; i < data.length; i++) {\n            for (var j = 0; j < data[i].meanings.length; j++) {\n              console.log(\"data i : \", Object.values(data[i]));\n              console.log(data[i].meanings[j]);\n            }\n          }\n        } catch (err) {\n          searchZone.placeholder.textContent = notFound;\n        }\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/script.js?");

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