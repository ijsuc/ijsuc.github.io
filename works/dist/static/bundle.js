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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_models_writingsModel_json__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_models_writingsModel_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scripts_models_writingsModel_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);


var list = document.querySelector('#list');
list.innerHTML = __WEBPACK_IMPORTED_MODULE_0__scripts_models_writingsModel_json___default.a.map(function (item) {
  return ['<li class="list">', '<a href=' + item.url + '>', '<img src=' + item.pic + ' width="190" height="190">', '<h3>' + item.title + '</h3></a>', '</li>'].join('');
}).join('');

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = [{ "title": "中国象棋(双人版)", "url": "//ijsuc.com/chess/dist/index.html", "pic": "//ijsuc.com/works/dist/static/images/chess.png" }, { "title": "ipad桌面", "url": "//ijsuc.com/ipad/dist/index.html", "pic": "//ijsuc.com/works/dist/static/images/ipad.png" }, { "title": "100 方块游戏", "url": "//ijsuc.com/100/dist/index.html", "pic": "//ijsuc.com/works/dist/static/images/100.png" }, { "title": "两点最近路径", "url": "//ijsuc.com/recently/dist/index.html", "pic": "//ijsuc.com/works/dist/static/images/map.png" }, { "title": "计算器", "url": "//ijsuc.com/calculator/dist/index.html", "pic": "//ijsuc.com/works/dist/static/images/calculator.png" }, { "title": "贪吃蛇", "url": "//ijsuc.com/snake/dist/index.html", "pic": "//ijsuc.com/works/dist/static/images/snake.png" }, { "title": "React-todo", "url": "//ijsuc.com/React-todo/dist/index.html", "pic": "//ijsuc.com/works/dist/static/images/todo.png" }, { "title": "黄金矿工", "url": "//ijsuc.com/golden-miner/dist/index.html", "pic": "//ijsuc.com/works/dist/static/images/golden-miner.png" }, { "title": "图片剪切", "url": "//ijsuc.com/picture-cut/dist/index.html", "pic": "//ijsuc.com/works/dist/static/images/picture-cut.png" }, { "title": "旋转木马", "url": "//ijsuc.com/merry-go-round/dist/index.html", "pic": "//ijsuc.com/works/dist/static/images/merry-go-round.png" }, { "title": "youdao", "url": "//ijsuc.com/youdao/dist/index.html", "pic": "//ijsuc.com/works/dist/static/images/youdao.png" }];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);