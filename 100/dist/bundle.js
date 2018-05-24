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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var clone = function () {
  var s = /str|num|boo|und/,
      f = /fun/,
      m = /date|rege/i;

  return function (json) {
    var buffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Map();

    var t = void 0,
        i = void 0,
        r = void 0;

    t = typeof json === 'undefined' ? 'undefined' : _typeof(json);

    if (s.test(t) || !json) return json;

    if (f.test(t)) return new Function('return ' + json.toString())();

    if (m.test(json.constructor)) return new json.constructor(json.valueOf());

    i = buffer.get(json);

    if (i > 1) {
      return void 0;
    } else {
      buffer.set(json, ++i || 1);
    }

    r = 'length' in json ? [] : {};

    for (i in json) {
      if (json.hasOwnProperty(i)) r[i] = clone(json[i], buffer);
    }return r;
  };
}();

//深度比较两个对象
var equal = function () {
  var s = /num|str|boo/,
      f = /fun/,
      m = /date|rege/i;

  return function (a, b) {
    var t = void 0,
        i = void 0,
        c = void 0;

    t = typeof a === 'undefined' ? 'undefined' : _typeof(a);

    if (a === b) return true;

    if (t !== (typeof b === 'undefined' ? 'undefined' : _typeof(b))) return false;

    if (a !== a && b !== b) return true;

    if (s.test(t) || !a || !b) return a === b;

    if (f.test(t) || m.test(a.constructor)) return a.toString() === b.toString();

    c = new Map();

    Object.keys(a).concat(Object.keys(b)).forEach(function (i) {
      return c.set(i, 1);
    });

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = c[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        i = _step.value;

        if (!equal(a[i[0]], b[i[0]])) return false;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return true;
  };
}();

var allComponents = []; //用来存所有主件
var globalStore = {}; //用来存取初史化里的数据

var Component = function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component(props) {
    _classCallCheck(this, Component);

    var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props));

    _this.uniqueId = Math.random().toString(36).slice(2);
    _this.sharedState = {};
    _this.storeUpSharedState = {};
    allComponents.push(_this);
    return _this;
  }

  _createClass(Component, [{
    key: 'importSharedState',
    value: function importSharedState() {
      for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
        names[_key] = arguments[_key];
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = names[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var name = _step2.value;

          var state = globalStore[name];

          if (state === undefined) state = globalStore[name] = {};

          if (this.storeUpSharedState[name] === undefined) this.storeUpSharedState[name] = clone(state);

          this.sharedState = globalStore;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'assign',
    value: function assign(prop) {
      var _this2 = this;

      return function (element) {
        return _this2[prop] = element;
      };
    }
  }, {
    key: 'updateSharedState',
    value: function updateSharedState() {
      var shouldUpdateComponents = {};

      for (var _len2 = arguments.length, names = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        names[_key2] = arguments[_key2];
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = names[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var name = _step3.value;

          if (this.sharedState[name] === undefined) continue;

          var state = this.sharedState[name];

          //遍历所有主件检查是否有变动，变动的数据储存起来
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = allComponents[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var component = _step4.value;

              if (!equal(component.storeUpSharedState[name], state)) {
                component.sharedState[name] = state;
                component.storeUpSharedState[name] = clone(state);
                shouldUpdateComponents[component.uniqueId] = component;
              }
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        }

        //更新主件变动过的数据　
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      Object.keys(shouldUpdateComponents).forEach(function (key) {
        shouldUpdateComponents[key].forceUpdate();
      });
    }

    //初史化数据的方法

  }], [{
    key: 'initSharedState',
    value: function initSharedState(store) {
      for (var name in store) {
        if (store.hasOwnProperty(name)) globalStore[name] = store[name];
      }
    }
  }]);

  return Component;
}(React.Component);

exports.default = Component;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Component = __webpack_require__(0);

var _Component2 = _interopRequireDefault(_Component);

var _Game = __webpack_require__(2);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var grids = [{ color: '#a1aafe', shape: [{ x: 0, y: 0 }], width: 1, height: 1 }, { color: '#ffb715', shape: [{ x: 0, y: 0 }, { x: 1, y: 0 }], width: 2, height: 1 }, { color: '#ffb715', shape: [{ x: 0, y: 0 }, { x: 0, y: 1 }], width: 1, height: 2 }, { color: '#fcb151', shape: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }], width: 3, height: 1 }, { color: '#fcb151', shape: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }], width: 1, height: 3 }, { color: '#b2ffcb', shape: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }], width: 2, height: 2 }, { color: '#b2ffcb', shape: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }], width: 2, height: 2 }, { color: '#b2ffcb', shape: [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }], width: 2, height: 2 }, { color: '#b2ffcb', shape: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }], width: 2, height: 2 }, { color: '#ff92ff', shape: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }], width: 4, height: 1 }, { color: '#ff92ff', shape: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }], width: 1, height: 4 }, { color: '#85ff16', shape: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }], width: 2, height: 2 }, { color: '#fe6d4c', shape: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }], width: 1, height: 5 }, { color: '#fe6d4c', shape: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }], width: 5, height: 1 }, { color: '#47e9fe', shape: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }], width: 3, height: 3 }, { color: '#47e9fe', shape: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }], width: 3, height: 3 }, { color: '#47e9fe', shape: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }], width: 3, height: 3 }, { color: '#47e9fe', shape: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 1, y: 2 }, { x: 0, y: 2 }], width: 3, height: 3 }, { color: '#00ffe0', shape: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }], width: 3, height: 3 }];

var de = document.documentElement;
var screenWidth = de.clientWidth;
var size = screenWidth <= 320 ? 25 : 30;

_Component2.default.initSharedState({
  gridData: grids,
  normalSize: size,
  smallSize: 15,
  spaing: 2,
  rows: 10,
  cols: 10,
  num: 0
});

ReactDOM.render(React.createElement(_Game2.default, null), document.querySelector('#root'));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

__webpack_require__(3);

var _drag = __webpack_require__(4);

var _drag2 = _interopRequireDefault(_drag);

var _closest = __webpack_require__(7);

var _closest2 = _interopRequireDefault(_closest);

var _HTML = __webpack_require__(8);

var _HTML2 = _interopRequireDefault(_HTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_Component) {
  _inherits(Game, _Component);

  function Game(props) {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

    _this.importSharedState('cols', 'rows', 'gridData', 'normalSize', 'spaing', 'smallSize');
    var de = document.documentElement;
    var _this$sharedState = _this.sharedState,
        rows = _this$sharedState.rows,
        cols = _this$sharedState.cols,
        spaing = _this$sharedState.spaing,
        normalSize = _this$sharedState.normalSize;

    _this.screenWidth = de.clientWidth;
    _this.gameTop = 80;
    _this.gameSize = rows * normalSize + (rows - 1) * spaing;
    _this.gameLeft = (_this.screenWidth - _this.gameSize) / 2;
    _this.gameContainer = [];
    _this.gridsArr;
    _this.gridsBlock;
    _this.addBlock = new Map();
    _this.score = new Map();
    _this.Result;
    _this.oneTimeEliminateNum = 0;
    _this.blockNum = 0;
    _this.count = 0;
    _this.scoreEl = null;
    _this.total = 0;
    window.addEventListener('touchmove', function (e) {
      return e.preventDefault();
    }, false);
    return _this;
  }
  //100格图框


  _createClass(Game, [{
    key: "blockBgContainer",
    value: function blockBgContainer() {
      var _sharedState = this.sharedState,
          cols = _sharedState.cols,
          rows = _sharedState.rows,
          normalSize = _sharedState.normalSize,
          spaing = _sharedState.spaing;


      for (var y = 0; y < cols; y++) {
        for (var x = 0; x < rows; x++) {
          this.gameContainer.push({
            left: x * normalSize + x * spaing + "px",
            top: y * normalSize + y * spaing + "px",
            backgroundColor: '#4b4b4b',
            width: normalSize + "px",
            height: normalSize + "px",
            borderRadius: '6px'
          });
        }
      }return React.createElement(
        "div",
        { className: "game-container", style: { left: this.gameLeft + "px", top: this.gameTop + "px" } },
        this.gameContainer.map(function (styles, index) {
          return React.createElement("div", { className: "grid-item", key: index, style: styles });
        })
      );
    }
    //方块格子

  }, {
    key: "gridBlock",
    value: function gridBlock(gridData, shape) {
      return shape.map(function (el, index) {
        return React.createElement("div", { key: index, className: "block x" + el.x + " y" + el.y, style: { backgroundColor: gridData.color } });
      });
    }
    //各种方块样式

  }, {
    key: "gridsBlockStyle",
    value: function gridsBlockStyle(x, width, height) {
      var _sharedState2 = this.sharedState,
          rows = _sharedState2.rows,
          cols = _sharedState2.cols,
          spaing = _sharedState2.spaing,
          normalSize = _sharedState2.normalSize,
          smallSize = _sharedState2.smallSize;
      var gameSize = this.gameSize,
          gameLeft = this.gameLeft,
          gameTop = this.gameTop;


      return {
        left: (x ? x === 1 ? gameLeft + (gameSize - width * (smallSize + (width - 1) * 1)) / 2 : gameLeft + gameSize - width * (smallSize + width * 1) : gameLeft) + "px",
        top: gameTop + gameSize + 60 - height * (smallSize + (height - 1) * 1) / 2 + "px"
      };
    }
    //一次同时消除的数量得分

  }, {
    key: "eliminateScore",
    value: function eliminateScore(num) {
      var rows = this.sharedState.rows;

      return rows * num + (num - 1) * .5;
    }

    //生成方块

  }, {
    key: "createGrid",
    value: function createGrid() {
      var _this2 = this;

      var _sharedState3 = this.sharedState,
          cols = _sharedState3.cols,
          rows = _sharedState3.rows,
          normalSize = _sharedState3.normalSize,
          spaing = _sharedState3.spaing,
          gridData = _sharedState3.gridData;
      var gameSize = this.gameSize,
          gameLeft = this.gameLeft,
          gameTop = this.gameTop;

      this.gridsArr = [];
      for (var i = 0; i < 3; i++) {
        this.gridsArr.push(gridData[Math.floor(Math.random() * gridData.length)]);
      }return React.createElement(
        "div",
        { className: "grids" },
        this.gridsArr.map(function (item, index) {
          return React.createElement(
            "div",
            {
              className: "grids-block",
              "data-index": "" + index,
              key: Math.random(),
              style: _this2.gridsBlockStyle(index, item.width, item.height) },
            React.createElement(
              "div",
              { className: "small block" },
              _this2.gridBlock(item, item.shape)
            )
          );
        })
      );
    }
    //生成方块的数据

  }, {
    key: "blockListBox",
    value: function blockListBox() {
      var _sharedState4 = this.sharedState,
          cols = _sharedState4.cols,
          rows = _sharedState4.rows,
          normalSize = _sharedState4.normalSize,
          spaing = _sharedState4.spaing,
          gridData = _sharedState4.gridData;
      this.Result = [];
      var grids = this.createGrid();
      this.Result.push(grids);
      return this.Result;
    }
  }, {
    key: "dragBlock",
    value: function dragBlock(el, position) {
      el.style.left = position[0] + 'px';
      el.style.top = position[1] + 'px';
    }
  }, {
    key: "returnHomePosition",
    value: function returnHomePosition(el, homePosition) {
      el.style.left = homePosition[0] + 'px';
      el.style.top = homePosition[1] + 'px';
      this.gridsBlock.firstChild.classList.add('small');
      this.gridsBlock.firstChild.classList.remove('normal');
    }
  }, {
    key: "up",
    value: function up(el, position, homePosition) {
      var block = this.gridsArr[el.dataset.index];
      var game = ReactDOM.findDOMNode(this);
      var _sharedState5 = this.sharedState,
          cols = _sharedState5.cols,
          rows = _sharedState5.rows,
          normalSize = _sharedState5.normalSize,
          spaing = _sharedState5.spaing;
      var gameSize = this.gameSize,
          gameLeft = this.gameLeft,
          gameTop = this.gameTop;

      var x = position[0] - gameLeft;
      var y = position[1] - gameTop;
      var X = Math.round(x / (normalSize + spaing));
      var Y = Math.round(y / (normalSize + spaing));
      var left = X * (normalSize + spaing) + gameLeft;
      var top = Y * (normalSize + spaing) + gameTop;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = block.shape[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _item = _step.value;

          if (this.addBlock.has(Y + _item.y + '' + (X + _item.x))) {
            this.returnHomePosition(el, homePosition);
            return;
          }
        }
        //超出格子回到原位置
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (X < 0 || X + block.width > 10 || Y < 0 || Y + block.height > 10) {
        this.returnHomePosition(el, homePosition);
      } else {
        this.blockNum = block.shape.length;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = block.shape[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;

            var html = (0, _HTML2.default)("<div style=\"\n          left:" + (item.x ? left + item.x * spaing + item.x * normalSize : left) + "px;top:" + (item.y ? top + item.y * spaing + item.y * normalSize : top) + "px;background-color:" + block.color + "; width:" + normalSize + "px; height:" + normalSize + "px; position:absolute;border-radius: 6px;\"></div>").append(game);

            this.addBlock.set(Y + item.y + '' + (item.x + X), html);

            //x0 - x9, y0-y9 位置有几个块
            if (this.score.has('x' + (X + item.x))) {
              this.score.get('x' + (X + item.x)).s++;
              if (this.score.get('x' + (X + item.x)).s === 10) {
                this.oneTimeEliminateNum++;
                for (var i = 0; i < rows; i++) {
                  var _el = this.addBlock.get(i + '' + (X + item.x));
                  _el.parentNode.removeChild(_el);
                  this.addBlock.delete(i + '' + (X + item.x));
                }
                this.score.set('x' + (X + item.x), { s: 1 });
              }
            } else this.score.set('x' + (X + item.x), { s: 1 });

            if (this.score.has('y' + (Y + item.y))) {
              this.score.get('y' + (Y + item.y)).s++;
              if (this.score.get('y' + (Y + item.y)).s === 10) {
                this.oneTimeEliminateNum++;
                for (var i = 0; i < cols; i++) {
                  var _el2 = this.addBlock.get(Y + item.y + '' + i);
                  _el2.parentNode.removeChild(_el2);
                  this.addBlock.delete(Y + item.y + '' + i);
                }
                this.score.set('y' + (Y + item.y), { s: 1 });
              }
            } else this.score.set('y' + (Y + item.y), { s: 1 });
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        this.total += this.blockNum;
        if (this.oneTimeEliminateNum) {
          this.total += this.eliminateScore(this.oneTimeEliminateNum);
          this.oneTimeEliminateNum = 0;
        }

        this.scoreEl.innerHTML = this.total;

        this.count++;

        this.gridsArr.splice(el.dataset.index, 1, null);

        if (this.count % 3 === 0) {
          this.Result = [];
          this.forceUpdate(); //刷新dom
        }

        el.style.display = 'none';
        el.style.left = left + 'px';
        el.style.top = top + 'px';

        this.gameOver(this.gridsArr);
      }
    }
  }, {
    key: "appropriate",
    value: function appropriate(block) {
      var _this3 = this;

      var _sharedState6 = this.sharedState,
          rows = _sharedState6.rows,
          cols = _sharedState6.cols,
          spaing = _sharedState6.spaing,
          normalSize = _sharedState6.normalSize,
          smallSize = _sharedState6.smallSize;
      var shape = block.shape;

      var _loop = function _loop(y) {
        var _loop2 = function _loop2(x) {
          if (shape.every(function (s) {
            return !_this3.addBlock.has("" + (y + s.y) + (x + s.x));
          })) return {
              v: {
                v: true
              }
            };
        };

        for (var x = 0; x <= cols - block.width; x++) {
          var _ret2 = _loop2(x);

          if ((typeof _ret2 === "undefined" ? "undefined" : _typeof(_ret2)) === "object") return _ret2.v;
        }
      };

      for (var y = 0; y <= rows - block.height; y++) {
        var _ret = _loop(y);

        if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
      }return false;
    }
  }, {
    key: "gameOver",
    value: function gameOver(block) {
      var game = ReactDOM.findDOMNode(this);
      if (this.addBlock.size > 30) {
        if (!block.filter(function (el) {
          return el;
        }).some(this.appropriate.bind(this))) {
          var header = (0, _HTML2.default)("<div class=\"game-over\" style=\"left:" + (this.gameLeft + 20) + "px;\"><span>GAME OVER</span><input type=\"button\" value=\"\u91CD\u73A9\" /></div>").append(game);
          header.lastChild.addEventListener('click', function (event) {
            window.location.reload();
          }, false);
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      var game = ReactDOM.findDOMNode(this);
      var _sharedState7 = this.sharedState,
          rows = _sharedState7.rows,
          cols = _sharedState7.cols,
          spaing = _sharedState7.spaing,
          normalSize = _sharedState7.normalSize,
          smallSize = _sharedState7.smallSize;
      var gameSize = this.gameSize,
          gameLeft = this.gameLeft,
          gameTop = this.gameTop;

      var isMobile = function isMobile() {
        return (/mobile/gi.test(navigator.userAgent)
        );
      };
      var touchStart = isMobile() ? 'touchstart' : 'mousedown';
      var touchMove = isMobile() ? 'touchmove' : 'mousemove';

      if (!this.scoreEl) this.scoreEl = (0, _HTML2.default)("<div class=\"score\" style=\"left: " + (gameLeft + 20) + "px; top: " + (gameTop / 2 - 5) + "px;\">0</div>").append(game);

      game.addEventListener(touchStart, function (event) {
        _this4.gridsBlock = (0, _closest2.default)(event.target, '.grids-block');

        if (_this4.gridsBlock) {
          var firstChild = _this4.gridsBlock.firstChild;

          firstChild.classList.remove('small');
          firstChild.classList.add('normal');
          firstChild.style.zIndex = 2;
          (0, _drag2.default)(event, _this4.dragBlock.bind(_this4), _this4.up.bind(_this4));
        }
      }, false);

      window.addEventListener('orientationchange', function (e) {
        console.log(1);
        if (orientation === 90) {
          game.style.transformOrigin = '50% 60%';
          game.style.transform = 'rotate( -90deg )';
        }
      }, false);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "game" },
        this.blockBgContainer(),
        this.blockListBox()
      );
    }
  }]);

  return Game;
}(_Component3.default);

exports.default = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eventHelps = __webpack_require__(5);

var _eventHelps2 = _interopRequireDefault(_eventHelps);

var _distance = __webpack_require__(6);

var _distance2 = _interopRequireDefault(_distance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var drag = function drag(event, move, up) {
  var movingPosition = void 0,
      touchStart = void 0,
      touchMove = void 0,
      touchEnd = void 0,
      offsetPosition = void 0;
  var element = event.target.parentNode.parentNode;
  var getBounding = element.getBoundingClientRect();
  var position = [getBounding.left, getBounding.top];

  var currentPosition = [event.pageX - position[0], event.pageY - position[1]];

  event.preventDefault();
  move = move || Function();
  up = up || Function();
  var isMobile = function isMobile() {
    return (/mobile/gi.test(navigator.userAgent)
    );
  };
  touchStart = isMobile() ? 'touchstart' : 'mousedown';
  touchMove = isMobile() ? 'touchmove' : 'mousemove';
  touchEnd = isMobile() ? 'touchend' : 'mouseup';

  var moving = function moving(event) {
    movingPosition = [event.pageX, event.pageY];

    offsetPosition = [movingPosition[0] - currentPosition[0], movingPosition[1] - currentPosition[1]];

    if ((0, _distance2.default)(currentPosition, movingPosition) > 6) move(element, offsetPosition);
  };

  var end = function end() {
    up(element, offsetPosition, position);
    _eventHelps2.default.off(document, touchMove, moving);
    _eventHelps2.default.off(document, touchEnd, end);
  };

  _eventHelps2.default.on(document, touchMove, moving);
  _eventHelps2.default.on(document, touchEnd, end);
};

exports.default = drag;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var eventHelps = {
  on: function on(element, type, fn) {
    if (element.addEventListener) {
      element.addEventListener(type, fn, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, fn);
    } else element['on' + type] = fn;
  },

  off: function off(element, type, fn) {
    if (element.removeEventListener) {
      element.removeEventListener(type, fn, false);
    } else if (element.detachEvent) {
      element.detachEvent('on' + type, fn);
    } else {
      element['on' + type] = null;
    }
  }
};

exports.default = eventHelps;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var distance = function distance(positionA, positionB) {
  return Math.sqrt(Math.pow(positionA[0] - positionB[0], 2) + Math.pow(positionA[0] - positionB[0], 2));
};

exports.default = distance;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closest = closest;
function closest(el, string) {
  var regexp = /^\./;
  var initialEl = el;
  if (regexp.test(string)) {
    while (el && el.tagName && el.className !== string.replace(regexp, '')) {
      el = el.parentNode;
    }
  } else {
    while (el && el.tagName && el.tagName.toLowerCase() !== tagName.toLowerCase()) {
      el = el.parentNode;
    }
  }

  return el.tagName ? el : null;
};

exports.default = closest;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
   * insertHtml
   * @author jason
   * createAt 2016.07.23
   * html( '<div></div>' ).append( dom )
   * html( '<div></div>' ).prepend( dom )
   * html( '<div></div>' ).before( dom )
   * html( '<div></div>' ).after( dom )
   * html( '<div></div>' ).replace( dom )
   */

var html = function () {
  var html = function html(_html) {
    this.html = _html;
  };

  html.prototype.getElementsByHtml = function (html) {
    var elt = document.createElementNS('xml', 'x');
    elt.innerHTML = Array.isArray(html) ? html.join('') : html;
    var eltChildNodes = elt.childNodes;
    return [].slice.call(eltChildNodes, 0);
  };

  html.prototype.innerHTML = function (container, element, html) {
    var htmls = this.getElementsByHtml(this.html);
    htmls.forEach(function (item) {
      container.insertBefore(item, element);
    });
    return htmls.length === 1 ? htmls[0] : htmls;
  };

  html.prototype.append = function (container, html) {
    return this.innerHTML(container, null, this.html);
  };

  html.prototype.prepend = function (container, html) {
    return this.innerHTML(container, container.firstChild, this.html);
  };

  html.prototype.before = function (element, html) {
    return this.innerHTML(element.parentNode, element, this.html);
  };

  html.prototype.after = function (element, html) {
    return this.innerHTML(element.parentNode, element.nextSibling, this.html);
  };

  html.prototype.replace = function (element, html) {
    var htmls = this.getElementsByHtml(this.html);
    htmls.forEach(function (item) {
      element.parentNode.insertBefore(item, element);
    });
    return element.parentNode.removeChild(element);
  };
  return function (h) {
    return new html(h);
  };
}();

exports.default = html;

/***/ })
/******/ ]);