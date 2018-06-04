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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_libs_domRadey_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_libs_direction_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_models_mode_json__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_models_mode_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scripts_models_mode_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_scss__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_scss__);





Object(__WEBPACK_IMPORTED_MODULE_0__scripts_libs_domRadey_js__["a" /* domRadey */])(function () {
  var config = {
    "sliderWidth": 600,
    "sliderHeight": 400,
    "scale": 50,
    "imgWidth": 600,
    "rotate": 60,
    "verticalAlign": { "top": 0, "bottom": 1, "middle": 2 }
  };

  var slider = document.getElementById('slider');
  var container = document.getElementById('container');
  var offsetIndex = __WEBPACK_IMPORTED_MODULE_2__scripts_models_mode_json___default.a.length % 2 ? 0 : -1;

  var render = function () {
    __WEBPACK_IMPORTED_MODULE_2__scripts_models_mode_json___default.a.forEach(function (item, index, arr) {
      var moietyLength = Math.floor(arr.length / 2);
      var abs = Math.abs;
      if (!item.el) {
        item.el = document.createElement('div');
        item.index = index - moietyLength;
        item.el.className = 'item';
        item.el.style.backgroundImage = 'url(' + item.pic + ')';
        slider.appendChild(item.el);
      }
      var style = item.el.style;

      style.zIndex = item.index > 0 ? -item.index : item.index;
      style.width = config.imgWidth + 'px';
      style.height = config.sliderHeight - abs(item.index) * config.scale + 'px';
      style.left = item.index * config.scale + 'px';
      style.top = abs(item.index) * config.scale / config.verticalAlign.middle + 'px';
      style.opacity = 5 / (abs(item.index) + 5);
    });
  };

  render();

  function merryGoRound(dir) {
    __WEBPACK_IMPORTED_MODULE_2__scripts_models_mode_json___default.a.forEach(function (item) {
      var v = dir === 'E' ? -1 : 1;
      item.index += v;
      item.index = Math.abs(item.index * 2) > __WEBPACK_IMPORTED_MODULE_2__scripts_models_mode_json___default.a.length ? dir !== 'E' && offsetIndex ? v * 3 + offsetIndex - item.index : v + offsetIndex - item.index : item.index;
    });

    render();
  }

  var start = true;

  container.addEventListener('click', function (event) {
    var target = event.target;
    if (start && target.className === 'prve') {
      merryGoRound('E');
      start = false;
      setTimeout(() => {
        start = true;
      }, 800);
    }

    if (start && target.className === 'next') {
      merryGoRound('W');
      start = false;
      setTimeout(() => {
        start = true;
      }, 800);
    }
  }, false);

  var startX, startY;
  window.addEventListener('touchstart', function (event) {
    startX = event.touches[0].pageX;
    startY = event.touches[0].pageY;
  }, false);

  window.addEventListener('touchend', function (event) {
    var endX = event.changedTouches[0].pageX;
    var endY = event.changedTouches[0].pageY;

    if (start) {
      merryGoRound(Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_direction_js__["a" /* direction */])([endX, endY], [startX, startY]));
      start = false;
      setTimeout(() => {
        start = true;
      }, 800);
    }
  }, false);
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return domRadey; });
var domRadey = function (fn) {
    //判断如果支持addEc=ventListener（非IE--IE支持的是attachEvent）则绑定DOMContentLoaded事件
    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", fn, false);
    } else {
        IEContenLoaded(fn);
    }

    //IE下模拟DOMContentLoaded
    function IEContenLoaded(fn) {
        var done = false;
        //只执行一次用户的回调函数init
        var init = function () {
            if (!done) {
                done = true;
                fn();
            }
        }(function () {
            try {
                //DOM树未创建完之前调用doScroll会抛出错误
                window.document.documentElement.doScroll("left");
            } catch (error) {
                //延迟再执行，arguments.callee调用自己
                setTimeout(argument.callee, 1);
                return;
            }
            //没有错误表示DOM树创建完毕，执行用户回调
            init();
        })();

        //监听document的加载状态
        window.document.onreadystatechange = function () {
            //如果用户是在DOMReady之后调用的函数立即执行用户回调
            if (window.document.readyState == 'complete') {
                window.document.onreadystatechange = null;
                init();
            }
        };
    }
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return direction; });
var direction = function () {
  var atan2 = Math.atan2,
      PI = Math.PI;
  var directions = ['SW', 'W', 'NW', 'N', 'Ne', 'E', 'SE', 'S'];
  return function (p1, p2) {
    var n = Math.floor((atan2(p2[1] - p1[1], p2[0] - p1[0]) * 180 / PI + 250) / 45) % 8;
    return directions[n];
  };
}();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = [{ "title": "风车", "pic": "//ijsuc.com/merry-go-round/dist/static/images/1.jpg" }, { "title": "上海迪斯尼", "pic": "//ijsuc.com/merry-go-round/dist/static/images/2.jpg" }, { "title": "时钟", "pic": "//ijsuc.com/merry-go-round/dist/static/images/3.jpg" }, { "title": "长颈鹿", "pic": "//ijsuc.com/merry-go-round/dist/static/images/4.jpg" }, { "title": "骑手", "pic": "//ijsuc.com/merry-go-round/dist/static/images/5.jpg" }, { "title": "风车", "pic": "//ijsuc.com/merry-go-round/dist/static/images/1.jpg" }, { "title": "上海迪斯尼", "pic": "//ijsuc.com/merry-go-round/dist/static/images/2.jpg" }, { "title": "时钟", "pic": "//ijsuc.com/merry-go-round/dist/static/images/3.jpg" }, { "title": "长颈鹿", "pic": "//ijsuc.com/merry-go-round/dist/static/images/4.jpg" }];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);