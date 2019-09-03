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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/data.json":
/*!***************************!*\
  !*** ./src/api/data.json ***!
  \***************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"id\\\":1,\\\"title\\\":\\\"Contemporary Wedding Venue by Plataran Indonesia\\\",\\\"currency\\\":\\\"IDR\\\",\\\"price\\\":60000000,\\\"discount\\\":20,\\\"image\\\":\\\"plataran-indonesia.jpg\\\",\\\"views\\\":12388,\\\"likes\\\":84,\\\"sold\\\":3},{\\\"id\\\":2,\\\"title\\\":\\\"Flawless Photography by Axioo\\\",\\\"currency\\\":\\\"IDR\\\",\\\"price\\\":20000000,\\\"discount\\\":0,\\\"image\\\":\\\"axioo-photography.jpg\\\",\\\"views\\\":232,\\\"likes\\\":12,\\\"sold\\\":15}]\");\n\n//# sourceURL=webpack:///./src/api/data.json?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/data.json */ \"./src/api/data.json\");\nvar _api_data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api/data.json */ \"./src/api/data.json\", 1);\n\nvar ranges = [{\n  divider: 1e3,\n  suffix: 'K'\n}, {\n  divider: 1e6,\n  suffix: 'M'\n}];\n\nfunction formatNumber(number) {\n  for (var i = 0; i < ranges.length; i++) {\n    if (number >= ranges[i].divider) {\n      var shortenedNumber = number / ranges[i].divider;\n      return shortenedNumber.toFixed(1).toString() + ranges[i].suffix;\n    }\n  }\n\n  return number.toString();\n}\n\nfunction loadContent() {\n  if ('content' in document.createElement('template')) {\n    var cardItem = document.querySelector('template').content;\n\n    for (var i = 0; i < _api_data_json__WEBPACK_IMPORTED_MODULE_0__.length; i++) {\n      var currentCard = cardItem.cloneNode(true);\n      currentCard.querySelector(\".card__image img\").src = \"images/\".concat(_api_data_json__WEBPACK_IMPORTED_MODULE_0__[i].image);\n      currentCard.querySelector(\".card__text--header\").innerHTML = _api_data_json__WEBPACK_IMPORTED_MODULE_0__[i].title;\n      var bannerElement = currentCard.querySelector(\".banner\");\n\n      if (_api_data_json__WEBPACK_IMPORTED_MODULE_0__[i].discount === 0) {\n        bannerElement.remove();\n        currentCard.querySelector(\".card__text--subheader\").innerHTML = \"\".concat(_api_data_json__WEBPACK_IMPORTED_MODULE_0__[i].currency, \" \").concat(_api_data_json__WEBPACK_IMPORTED_MODULE_0__[i].price.toLocaleString('id-ID'));\n      } else {\n        currentCard.querySelector(\".banner__text\").innerHTML = \"Discount \".concat(_api_data_json__WEBPACK_IMPORTED_MODULE_0__[i].discount.toString(), \"%\");\n        var originalPriceText = _api_data_json__WEBPACK_IMPORTED_MODULE_0__[i].currency + ' ' + _api_data_json__WEBPACK_IMPORTED_MODULE_0__[i].price.toLocaleString('id-ID');\n        var discountPrice = _api_data_json__WEBPACK_IMPORTED_MODULE_0__[i].price * (100 - _api_data_json__WEBPACK_IMPORTED_MODULE_0__[i].discount) / 100;\n        var discountPriceText = _api_data_json__WEBPACK_IMPORTED_MODULE_0__[i].currency + ' ' + discountPrice.toLocaleString('id-ID');\n        currentCard.querySelector(\".card__text--before-discount\").innerHTML = \"\".concat(originalPriceText);\n        currentCard.querySelector(\".card__text--after-discount\").innerHTML = \"\".concat(discountPriceText);\n      }\n\n      currentCard.querySelector(\"#views\").innerHTML = \"\".concat(formatNumber(_api_data_json__WEBPACK_IMPORTED_MODULE_0__[i].views), \" Views\");\n      currentCard.querySelector(\"#likes\").innerHTML = \"\".concat(formatNumber(_api_data_json__WEBPACK_IMPORTED_MODULE_0__[i].likes), \" Likes\");\n      currentCard.querySelector(\"#sold\").innerHTML = \"\".concat(formatNumber(_api_data_json__WEBPACK_IMPORTED_MODULE_0__[i].sold), \" Sold\");\n      document.querySelector(\".listing\").append(currentCard);\n    }\n  } else {\n    console.warn('HTML template element is not supported on your browser');\n  }\n}\n\nloadContent();\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });