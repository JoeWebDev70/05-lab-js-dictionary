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

eval("var modalContainer = document.querySelector(\".modal_container\");\nvar modalTriggers = document.querySelectorAll(\".modal_trigger\");\nmodalTriggers.forEach(function (trigger) {\n  trigger.addEventListener(\"click\", function () {\n    modalContainer.classList.toggle(\"active\");\n  });\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/js_libs/modalWindows.js?");

/***/ }),

/***/ "./src/js_libs/toggle.js":
/*!*******************************!*\
  !*** ./src/js_libs/toggle.js ***!
  \*******************************/
/***/ (() => {

eval("var toggleDiv = document.querySelector(\"#toggle_div\");\nvar body = document.querySelector(\"body\");\nvar elements = document.querySelectorAll(\"body *\");\nvar preferColor = window.matchMedia(\"(prefers-color-scheme: dark)\");\nvar toggleChoice = body.getAttribute(\"class\");\nvar faviconElement = document.querySelector(\"link[rel='shortcut icon']\");\n// console.log(faviconElement);\n\nif (preferColor.matches) {\n  elements.forEach(function (element) {\n    element.classList.add(\"dark_mode\");\n  });\n  body.classList.add(\"dark_mode_body\");\n  body.classList.remove(\"light_mode_body\");\n  faviconElement.setAttribute(\"href\", \"./ressources/images/favicon_dark_16x16.webp\");\n} else {\n  elements.forEach(function (element) {\n    element.classList.remove(\"dark_mode\");\n    body.classList.remove(\"dark_mode_body\");\n    body.classList.add(\"light_mode_body\");\n    faviconElement.setAttribute(\"href\", \"./ressources/images/favicon_16x16.webp\");\n  });\n}\npreferColor.addEventListener(\"change\", function (e) {\n  if (e.matches) {\n    elements.forEach(function (element) {\n      element.classList.add(\"dark_mode\");\n    });\n    body.classList.add(\"dark_mode_body\");\n    body.classList.remove(\"light_mode_body\");\n    faviconElement.setAttribute(\"href\", \"./ressources/images/favicon_dark_16x16.webp\");\n  } else {\n    elements.forEach(function (element) {\n      element.classList.remove(\"dark_mode\");\n    });\n    body.classList.remove(\"dark_mode_body\");\n    body.classList.add(\"light_mode_body\");\n    faviconElement.setAttribute(\"href\", \"./ressources/images/favicon_16x16.webp\");\n  }\n});\nif (toggleDiv != null) {\n  toggleDiv.addEventListener(\"click\", function () {\n    elements.forEach(function (element) {\n      element.classList.toggle(\"dark_mode\");\n    });\n    body.classList.toggle(\"dark_mode_body\");\n    body.classList.toggle(\"light_mode_body\");\n    toggleChoice = body.className;\n    localStorage.removeItem(\"toggleChoice\");\n    localStorage.setItem(\"toggleChoice\", toggleChoice);\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/js_libs/toggle.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _js_libs_modalWindows_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js_libs/modalWindows.js */ \"./src/js_libs/modalWindows.js\");\n/* harmony import */ var _js_libs_modalWindows_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_libs_modalWindows_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_libs_changeFont_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js_libs/changeFont.js */ \"./src/js_libs/changeFont.js\");\n/* harmony import */ var _js_libs_changeFont_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_libs_changeFont_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_libs_toggle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js_libs/toggle.js */ \"./src/js_libs/toggle.js\");\n/* harmony import */ var _js_libs_toggle_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_libs_toggle_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_libs_creditsTheme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js_libs/creditsTheme.js */ \"./src/js_libs/creditsTheme.js\");\n/* harmony import */ var _js_libs_creditsTheme_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_libs_creditsTheme_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _js_libs_creditsFonts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js_libs/creditsFonts.js */ \"./src/js_libs/creditsFonts.js\");\n/* harmony import */ var _js_libs_creditsFonts_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_libs_creditsFonts_js__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar searchBarForm = document.querySelector(\"#search_bar\");\nvar searchZoneInput = document.querySelector(\"#search_zone\");\nvar questions; //div \"panel\" for open and close panel : get in displayResult function before clone template\nvar resultZone = document.querySelector(\"#div_resultat dl\");\nvar nodeToErase; //to count nodes created by displayResult or displayError\nvar btnEraseInputValue = document.querySelector(\"#erase_data\");\nvar audioDisplay; //to display audio on click\n// let srcAudio; // to get src audio\nvar btnAudioClicked = false;\n\n//add event listener on seach bar and its items\nif (searchBarForm != null) {\n  // verification of form validity\n  searchBarForm.addEventListener('submit', function (e) {\n    if (!this.checkValidity()) {\n      e.preventDefault();\n      this.classList.add('not_valid');\n      if (!searchZoneInput.valid) {\n        eraseResultOrError(nodeToErase);\n        searchZoneInput.placeholder = searchZoneInput.dataset.error;\n      }\n    } else {\n      eraseResultOrError(nodeToErase);\n      search(e);\n    }\n  });\n\n  // show or hide icon to erase data in input on new focus\n  searchZoneInput.addEventListener('focus', function () {\n    if (searchZoneInput.value != \"\") {\n      btnEraseInputValue.classList.add(\"show_item\");\n    } else {\n      btnEraseInputValue.classList.remove(\"show_item\");\n    }\n  });\n\n  // show or hide icon to erase data in input on change\n  searchZoneInput.addEventListener('change', function () {\n    if (searchZoneInput.value != \"\") {\n      btnEraseInputValue.classList.add(\"show_item\");\n    } else {\n      btnEraseInputValue.classList.remove(\"show_item\");\n    }\n  });\n\n  // erase data in input for new research on click icon\n  btnEraseInputValue.addEventListener('click', function () {\n    searchZoneInput.value = \"\";\n    btnEraseInputValue.classList.remove(\"show_item\");\n  });\n}\n\n// search word in API and collect data in new array\nfunction search(evt) {\n  evt.preventDefault();\n  var searchingWord = searchZoneInput.value;\n  var resultArray = new Array();\n  if (searchingWord.length != 0) {\n    var url = \"https://api.dictionaryapi.dev/api/v2/entries/en/\" + searchingWord;\n    // search word not single letter\n    if (searchingWord.length > 1) {\n      fetch(url).then(function (response) {\n        if (response.ok) {\n          response.json().then(function (data) {\n            try {\n              for (var i = 0; i < data.length; i++) {\n                var monObjet = {\n                  objAudio: \"\",\n                  objWord: \"\",\n                  objGender: \"\",\n                  objPhonetic: \"\",\n                  objDefinitions: \"\",\n                  objSynonyms: \"\"\n                };\n                var resultDefinitions = \"\";\n                var resultSynonyms = \"\";\n\n                // word\n                if (data[i].word != null) {\n                  monObjet.objWord = data[i].word;\n                }\n\n                // phonetic\n                if (data[i].phonetic != null) {\n                  monObjet.objPhonetic = data[i].phonetic;\n                }\n\n                // loop photenics array for find file audio and collect the first one\n                for (var m = 0; m < data[i].phonetics.length; m++) {\n                  // file audio\n                  if (m < data[i].phonetics.length) {\n                    if (data[i].phonetics[m].audio != null) {\n                      if (monObjet.objAudio == \"\") {\n                        monObjet.objAudio = data[i].phonetics[m].audio;\n                      }\n                    }\n                  }\n                }\n\n                // loop on meanings arrays\n                for (var j = 0; j < data[i].meanings.length; j++) {\n                  // gender\n                  if (data[i].meanings[j].partOfSpeech != null) {\n                    monObjet.objGender = data[i].meanings[j].partOfSpeech;\n                  }\n                  // definitions\n                  for (var k = 0; k < data[i].meanings[j].definitions.length; k++) {\n                    if (data[i].meanings[j].definitions[k].definition != null) {\n                      if (resultDefinitions == \"\") {\n                        resultDefinitions = data[i].meanings[j].definitions[k].definition;\n                      } else {\n                        resultDefinitions = resultDefinitions + \"/\" + data[i].meanings[j].definitions[k].definition;\n                      }\n                    }\n                  }\n                  monObjet.objDefinitions = resultDefinitions;\n\n                  // synonyms\n                  for (var l = 0; l < data[i].meanings[j].synonyms.length; l++) {\n                    if (data[i].meanings[j].synonyms[l] != null) {\n                      if (resultSynonyms == \"\") {\n                        resultSynonyms = data[i].meanings[j].synonyms[l];\n                      } else {\n                        resultSynonyms = resultSynonyms + '/' + data[i].meanings[j].synonyms[l];\n                      }\n                    }\n                  }\n                  monObjet.objSynonyms = resultSynonyms;\n                }\n                resultArray.push(monObjet);\n              }\n              displayResult(resultArray);\n            } catch (err) {\n              displayError();\n            }\n          });\n        } else {\n          displayError();\n        }\n      });\n    } else {\n      displayError();\n    }\n  }\n}\n\n// display content error when word is not found\nfunction displayError() {\n  var notFound = \"Definition not found! please enter an other word!\";\n  if (\"content\" in document.createElement(\"template\")) {\n    var temp = document.querySelector(\"#temp_panel\");\n    var clone = temp.content.cloneNode(true);\n    var dt = clone.querySelector(\"dt\");\n    var div = clone.querySelector(\".panel\");\n    dt.textContent = notFound;\n    dt.classList.add(\"not_found\");\n    div.classList.add(\"not_found\");\n    resultZone.appendChild(clone);\n  }\n  nodeToErase = resultZone.childNodes;\n}\n\n// display content when word is found\nfunction displayResult(dataToDisplay) {\n  var h3Definitions = \"Definitions:\";\n  var h3Synonyms = \"Synonyms:\";\n  if (\"content\" in document.createElement(\"template\")) {\n    for (var i = 0; i < dataToDisplay.length; i++) {\n      var temp = document.querySelector(\"#temp_panel\");\n      var clone = temp.content.cloneNode(true);\n      var divs = clone.querySelectorAll(\"div\");\n      var dt = clone.querySelector(\"dt\");\n      var dd = clone.querySelector(\"dd\");\n      var h2 = clone.querySelector(\"h2\");\n      var h3s = clone.querySelectorAll(\"h3\");\n      var ps = clone.querySelectorAll(\"p\");\n      var uls = clone.querySelectorAll(\"ul\");\n      var lis = clone.querySelectorAll(\"li\");\n      var audio = clone.querySelector(\"audio\");\n      divs[0].appendChild(dt);\n      dt.appendChild(divs[1]);\n      divs[1].appendChild(divs[2]);\n      divs[2].appendChild(divs[3]);\n      if (dataToDisplay[i].objAudio != \"\") {\n        divs[3].appendChild(ps[0]);\n        ps[0].classList.remove(\"not_display_item\");\n        audio.setAttribute('src', dataToDisplay[i].objAudio);\n      }\n      h2.textContent = dataToDisplay[i].objWord;\n      divs[3].appendChild(h2);\n      divs[2].appendChild(divs[4]);\n      ps[1].textContent = dataToDisplay[i].objGender;\n      divs[4].appendChild(ps[1]);\n      ps[2].textContent = dataToDisplay[i].objPhonetic;\n      divs[4].appendChild(ps[2]);\n      divs[0].appendChild(dd);\n      h3s[0].textContent = h3Definitions;\n      dd.appendChild(h3s[0]);\n      var tempContentDef = dataToDisplay[i].objDefinitions.split('/');\n      for (var k = 0; k < tempContentDef.length; k++) {\n        var tmpli = document.createElement(\"li\");\n        tmpli.innerHTML += tempContentDef[k] + '<br>';\n        uls[0].appendChild(tmpli);\n      }\n      dd.appendChild(uls[0]);\n      h3s[1].textContent = h3Synonyms;\n      dd.appendChild(h3s[1]);\n      var tempContentSyn = dataToDisplay[i].objSynonyms.split('/');\n      for (var l = 0; l < tempContentSyn.length; l++) {\n        var _tmpli = document.createElement(\"li\");\n        _tmpli.innerHTML += tempContentSyn[l] + '<br>';\n        uls[1].appendChild(_tmpli);\n      }\n      dd.appendChild(uls[1]);\n      resultZone.appendChild(clone);\n    }\n  }\n  audioDisplay = document.querySelectorAll(\".audio_display\");\n  displayAudio(audioDisplay);\n  questions = document.querySelectorAll(\".panel\");\n  openClose(questions);\n  nodeToErase = resultZone.childNodes;\n}\nfunction eraseResultOrError(nodes) {\n  if (nodes != null && nodes.length > 1) {\n    for (var i = nodes.length - 1; i > 0; i--) {\n      resultZone.removeChild(nodes[i]);\n    }\n  }\n}\nfunction displayAudio(items) {\n  items.forEach(function (item) {\n    item.addEventListener(\"click\", function () {\n      btnAudioClicked = true;\n      this.childNodes[1].play();\n      console.log(this.childNodes);\n    });\n  });\n}\n\n//open or close panels of results\nfunction openClose(items) {\n  items.forEach(function (item) {\n    item.addEventListener(\"click\", function () {\n      if (!btnAudioClicked) {\n        var elementHasActive = document.querySelector(\".active\");\n        // check if element is found and if the founded element isn't clicked now\n        if (elementHasActive && this !== elementHasActive) {\n          elementHasActive.classList.remove(\"active\");\n          elementHasActive.childNodes[0].classList.remove(\"active\");\n          elementHasActive.childNodes[0].childNodes[0].classList.remove(\"active\");\n        }\n        //click twice => close\n        this.classList.toggle(\"active\");\n        this.childNodes[0].classList.toggle(\"active\");\n        this.childNodes[0].childNodes[0].classList.toggle(\"active\");\n      }\n      btnAudioClicked = false;\n    });\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/script.js?");

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