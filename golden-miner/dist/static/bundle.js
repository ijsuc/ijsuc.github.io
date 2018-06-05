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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_libs_timeline_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_models_goldenMinerData_json__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_models_goldenMinerData_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scripts_models_goldenMinerData_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_models_hookthing_json__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_models_hookthing_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scripts_models_hookthing_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_scss__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_scss__);





var container = document.querySelector('#container');
var gameMap = document.createElement('div');

gameMap.className = 'gameMap';
container.appendChild(gameMap);

var moneySum = document.querySelector('.money-sum');
var targetMoney = document.querySelector('.target-money');
var countdown = document.querySelector('.countdown');
var level = document.querySelector('.level-count');

var config = {
  'containerWidth': 680,
  'containerHeight': 494,
  'hook': 80,
  'hookSpeed': 4,
  'angle': 25
};

var angleDir = 1.2;
var originY = 0;
var originX = config.containerWidth / 2 - config.hook / 2;
var currentAngle = config.angle;
var speed = 4;
var direction = 0;
var hookAngleOffset = -90;
var sum = 0,
    levelCount = 1;
var targetMoneySum = 650;
var s = 61,
    stop,
    t;
var mainloops = [];

container.style.cssText = 'width:' + config.containerWidth + 'px;height:' + config.containerHeight + 'px';

var start = function () {
  var container1 = document.createElement('div');

  container1.className = 'container1';
  container.appendChild(container1);

  var glowed = document.createElement('div');

  glowed.className = 'glowed';
  container1.appendChild(glowed);

  glowed.addEventListener('mousedown', function () {
    container1.style.width = 0 + 'px';
    container1.style.height = 0 + 'px';
    startTarget();
  }, false);
};

start();

function startTarget() {
  var goal = document.createElement('div');
  goal.className = 'goal';
  container.appendChild(goal);
  var s = 3;
  function time() {
    s--;
    t = setTimeout(time, 1000);

    if (s === 0) {
      goal.style.width = 0 + 'px';
      goal.style.height = 0 + 'px';
      play();
      Object(__WEBPACK_IMPORTED_MODULE_0__scripts_libs_timeline_js__["a" /* timeline */])(60000, function (rate, animater) {
        countdown.innerHTML = Math.floor((60000 - 60000 * rate) / 1000);
      });
      clearTimeout(t);
    }
  }
  time();
}

function collisionDetection(x, y, mineral) {
  return Math.sqrt(Math.pow(x + 40 - (mineral.pos[0] + mineral.width / 2), 2) + Math.pow(y - (mineral.pos[1] + mineral.height / 2), 2)) < mineral.width ? true : false;
};

var play = function () {
  var hook = document.createElement('div');

  hook.className = 'hook';
  hook.style.cssText = 'width:' + config.hook + 'px; height:' + config.hook + 'px;';
  gameMap.appendChild(hook);

  var hookgold = document.createElement('div');

  hookgold.className = 'hookgold';
  gameMap.appendChild(hookgold);

  var people = document.createElement('div');

  people.className = 'people';
  container.appendChild(people);

  var peoplechange = function (time) {
    var s = time;
    var times = function () {
      s--;
      clearTimeout(t);
      t = setTimeout(times, 400);
      s % 2 == 0 ? people.className = 'people' : people.className = 'people1';

      if (s == -1) clearTimeout(t);
    };
    times();
  };

  var render = function () {
    for (var i in __WEBPACK_IMPORTED_MODULE_2__scripts_models_hookthing_json___default.a) {
      if (!__WEBPACK_IMPORTED_MODULE_2__scripts_models_hookthing_json___default.a[i]['el']) {
        __WEBPACK_IMPORTED_MODULE_2__scripts_models_hookthing_json___default.a[i].el = document.createElement('div');
        __WEBPACK_IMPORTED_MODULE_2__scripts_models_hookthing_json___default.a[i].el.className = __WEBPACK_IMPORTED_MODULE_2__scripts_models_hookthing_json___default.a[i].className;
        __WEBPACK_IMPORTED_MODULE_2__scripts_models_hookthing_json___default.a[i].el.style.cssText = 'background:' + __WEBPACK_IMPORTED_MODULE_2__scripts_models_hookthing_json___default.a[i].url + ' no-repeat; width:' + __WEBPACK_IMPORTED_MODULE_2__scripts_models_hookthing_json___default.a[i].width + 'px; height:' + __WEBPACK_IMPORTED_MODULE_2__scripts_models_hookthing_json___default.a[i].height + 'px; left:' + (config.hook - __WEBPACK_IMPORTED_MODULE_2__scripts_models_hookthing_json___default.a[i].width) / 2 + 'px; top:' + __WEBPACK_IMPORTED_MODULE_2__scripts_models_hookthing_json___default.a[i].top + 'px';
        hook.appendChild(__WEBPACK_IMPORTED_MODULE_2__scripts_models_hookthing_json___default.a[i].el);
      }
    }

    for (var i = 0, l = __WEBPACK_IMPORTED_MODULE_1__scripts_models_goldenMinerData_json___default.a.objects.length; i < l; i++) {
      var item = __WEBPACK_IMPORTED_MODULE_1__scripts_models_goldenMinerData_json___default.a.objects[i];
      if (!item['el']) {
        item.el = document.createElement('div');
        gameMap.appendChild(item.el);
      }
      item.el.style.cssText = 'width:' + item.width + 'px; height:' + item.height + 'px; background:' + item.url + ' no-repeat; top:' + item.pos[1] + 'px; left:' + item.pos[0] + 'px; position: absolute;';
    }

    moneySum.innerHTML = sum;
    targetMoney.innerHTML = targetMoneySum;
    level.innerHTML = levelCount;
  };

  var mainloop = function () {
    var hookAngle = currentAngle + hookAngleOffset;
    var style = hook.style;

    style.transform = 'rotate(' + hookAngle + 'deg)';
    style.left = originX + 'px';
    style.top = originY + 'px';
    people.className = 'people';
    render();

    currentAngle += angleDir;

    if (currentAngle >= 155 || currentAngle <= 25) angleDir = -angleDir;
  };

  function processControl() {
    if (mainloops.length == 0) mainloops.push(mainloop);

    mainloops[0]();
    requestAnimationFrame(processControl);
  };

  processControl();

  var panning = function () {
    var r = currentAngle * Math.PI / 180;
    var x = direction * Math.cos(r) + originX;
    var y = direction * Math.sin(r) + originY;
    var style = hook.style;

    style.left = x + 'px';
    style.top = y + 'px';
    direction += speed;

    for (var i = 0, l = __WEBPACK_IMPORTED_MODULE_1__scripts_models_goldenMinerData_json___default.a.objects.length; i < l; i++) {
      var item = __WEBPACK_IMPORTED_MODULE_1__scripts_models_goldenMinerData_json___default.a.objects[i];
      if (collisionDetection(x, y, item)) {
        item.pos[1] = -500;
        render();
        __WEBPACK_IMPORTED_MODULE_2__scripts_models_hookthing_json___default.a[item.type].el.style.display = 'block';
        speed = speed / item.weight;
        sum += item.money;
        speed = -speed;
      } else if (direction >= 500) {
        speed = -speed;
      }

      if (direction <= 0) {
        speed = 4;
        mainloops.splice(0, 1, mainloop);
        __WEBPACK_IMPORTED_MODULE_2__scripts_models_hookthing_json___default.a[item.type].el.style.display = 'none';
      }
    }
  };

  document.addEventListener('keydown', function (event) {
    var code = event.keyCode;

    if (code != 40) return;

    switch (code) {
      case 40:
        mainloops.splice(0, 1, panning);
        peoplechange(30);
        break;

      default:
        return;
    }
  }, false);

  document.addEventListener('touchstart', function (event) {
    mainloops.splice(0, 1, panning);
    peoplechange(30);
  }, false);
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeline; });
var timeline = function (time, callback) {
  var startTime = Date.now();
  var started, ended, restarts, stop, pauseOnOff, reverses, roundtrips;
  var pauseTime,
      offSetTime = 0;
  var animater = {
    state: 'started',

    stop: function () {
      stop = true;
    },

    reverse: function () {
      reverses = !reverses;
      init();
    },

    restart: function () {
      restarts = true;
      init();
    },

    pause: function () {
      pauseOnOff = true;
      pauseTime = Date.now();
    },

    resume: function () {
      pauseOnOff = false;
      offSetTime = Date.now() - pauseTime;
    }
  };

  function init() {
    animater.state = 'started';
    startTime = Date.now();
  }

  var mainloop = function mainloop() {
    var nowTime, rate;

    if (pauseOnOff) {
      requestAnimationFrame(mainloop);
      return;
    }

    nowTime = Date.now();
    rate = (nowTime - startTime - offSetTime) / time;
    if (stop) {
      return;
    }

    if (animater.state == 'started' && rate < 1) {
      callback(reverses ? 1 - rate : rate, animater);
    } else if (rate <= 0) {
      rate = 0;
      callback(reverses ? 1 - rate : rate, animater);
    } else if (rate >= 1) {
      animater.state = 'ended';
      rate = 1;
      callback(reverses ? 1 - rate : rate, animater);
    }

    requestAnimationFrame(mainloop);
  }();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = { "objects": [{ "type": "ironoreS", "pos": [100, 180], "width": 37, "height": 30, "weight": 2.5, "money": 20, "url": "url(//ijsuc.com/golden-miner/dist/static/images/ironoreS.png)" }, { "type": "ironoreS", "pos": [250, 200], "width": 37, "height": 30, "weight": 2.5, "money": 20, "url": "url(//ijsuc.com/golden-miner/dist/static/images/ironoreS.png)" }, { "type": "ironoreS", "pos": [300, 240], "width": 37, "height": 30, "weight": 2.5, "money": 20, "url": "url(//ijsuc.com/golden-miner/dist/static/images/ironoreS.png)" }, { "type": "ironoreL", "pos": [150, 170], "width": 56, "height": 50, "weight": 5, "money": 50, "url": "url(//ijsuc.com/golden-miner/dist/static/images/ironoreL.png)" }, { "type": "ironoreL", "pos": [330, 220], "width": 56, "height": 50, "weight": 5, "money": 50, "url": "url(//ijsuc.com/golden-miner/dist/static/images/ironoreL.png)" }, { "type": "ironoreL", "pos": [450, 300], "width": 56, "height": 50, "weight": 5, "money": 50, "url": "url(//ijsuc.com/golden-miner/dist/static/images/ironoreL.png)" }, { "type": "goldM", "pos": [70, 130], "width": 38, "height": 34, "weight": 2.5, "money": 200, "url": "url(//ijsuc.com/golden-miner/dist/static/images/goldM.png)" }, { "type": "goldM", "pos": [500, 280], "width": 38, "height": 34, "weight": 2.5, "money": 200, "url": "url(//ijsuc.com/golden-miner/dist/static/images/goldM.png)" }, { "type": "goldM", "pos": [300, 280], "width": 38, "height": 34, "weight": 2.5, "money": 200, "url": "url(//ijsuc.com/golden-miner/dist/static/images/goldM.png)" }, { "type": "goldL", "pos": [550, 320], "width": 68, "height": 64, "weight": 5, "money": 500, "url": "url(//ijsuc.com/golden-miner/dist/static/images/goldL.png)" }, { "type": "goldL", "pos": [120, 350], "width": 68, "height": 64, "weight": 5, "money": 500, "url": "url(//ijsuc.com/golden-miner/dist/static/images/goldL.png)" }] };

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = { "hook1": { "width": 23, "height": 30, "url": "url(//ijsuc.com/golden-miner/dist/static/images/hook-1.png)", "className": "hook1", "top": 0 }, "hook3": { "width": 23, "height": 30, "url": "url(//ijsuc.com/golden-miner/dist/static/images/hook-3.png)", "className": "hook3", "top": 0 }, "goldL": { "width": 68, "height": 64, "url": "url(//ijsuc.com/golden-miner/dist/static/images/goldL.png)", "className": "goldL", "top": 14 }, "goldM": { "width": 38, "height": 34, "url": "url(//ijsuc.com/golden-miner/dist/static/images/goldM.png)", "className": "goldM", "top": 14 }, "ironoreL": { "width": 56, "height": 50, "url": "url(//ijsuc.com/golden-miner/dist/static/images/ironoreL.png)", "className": "ironoreL", "top": 14 }, "ironoreS": { "width": 37, "height": 30, "url": "url(//ijsuc.com/golden-miner/dist/static/images/ironoreS.png)", "className": "ironoreS", "top": 14 } };

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);