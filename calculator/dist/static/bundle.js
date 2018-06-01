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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_scss__);

void function () {
  const screen = document.getElementById('total');
  const buttons = document.getElementById('the-buttons');

  const keymap = {
    '0': { value: 0, action: ['input'] },
    '1': { value: 1, action: ['input'] },
    '2': { value: 2, action: ['input'] },
    '3': { value: 3, action: ['input'] },
    '4': { value: 4, action: ['input'] },
    '5': { value: 5, action: ['input'] },
    '6': { value: 6, action: ['input'] },
    '7': { value: 7, action: ['input'] },
    '8': { value: 8, action: ['input'] },
    '9': { value: 9, action: ['input'] },
    '.': { value: null, action: ['decimal'] },
    '+': { value: '+', action: ['operate'] },
    '-': { value: '-', action: ['operate'] },
    '*': { value: '*', action: ['operate'] },
    '/': { value: '/', action: ['operate'] },
    '=': { value: null, action: ['result'] },
    'sign': { value: null, action: ['sign'] },
    'recip': { value: null, action: ['recip'] },
    'squ': { value: null, action: ['squ'] },
    'clear': { value: null, action: ['clear'] },
    'recede': { value: null, action: ['recede'] },
    '^': { value: null, action: ['power'] }
  };

  const closest = (el, tagName) => {
    while (el && el.tagName && el.tagName.toLowerCase() !== tagName.toLowerCase()) {
      el = el.parentNode;
    }
    return el.tagName ? el : null;
  };

  const copy = from => {
    return Object.assign({}, from);
  };

  const expression = [],
        renderModel = { type: 'number', value: 0 };

  const render = unknow => {
    let value = 0,
        exp;
    if (unknow === true) {
      exp = expression[expression.length - 1];

      if (exp && exp.type === 'number') {
        value = exp.value;
      }
    } else if (typeof unknow === 'string') {
      screen.innerHTML = unknow;
      return;
    } else {
      value = calculate();
    }

    renderModel.value = value;
    screen.innerHTML = value;
  };

  const numberWork = fn => {
    let exp;

    exp = expression[expression.length - 1];

    if (exp && exp.type === 'number') {
      fn(exp);
      return;
    }

    exp = null;

    for (let i = expression.length - 1; i >= 0; i--) {
      if (expression[i].type === 'number') {
        exp = copy(expression[i]);
        break;
      }
    }

    if (!exp) {
      exp = copy(renderModel);
    }

    fn(exp);
    expression.push(exp);
  };

  const fillExpression = () => {
    if (!expression.length) {
      expression.push(copy(renderModel));
    }
  };

  const calculate = () => {
    let exp = expression[expression.length - 1];
    let expressionForCalc, expressionString, result;
    if (!expression.length) {
      return 0;
    } else if (exp.type === 'number') {
      expressionForCalc = expression.slice(0);
    } else {
      expressionForCalc = expression.slice(0, -1);
    }

    expressionString = expressionForCalc.map(function (exp) {
      return exp.value;
    }).join(' ');
    try {
      result = Function('return ' + expressionString)();
    } catch (e) {
      result = 'Err';
    }

    return result;
  };

  const actions = {
    input: keyOption => {
      let exp = expression[expression.length - 1];
      if (exp && exp.type === 'number') {
        if (exp.isPower) {
          exp.value = Math.pow(exp.value, keyOption.value);
        } else if (exp.isFloat) {
          exp.value = String(exp.value) + (/\./.test(exp.value) ? '' : '.') + String(keyOption.value);
        } else {
          exp.value = exp.value * 10 + keyOption.value;
        }
      } else {
        expression.push({
          type: 'number',
          value: keyOption.value
        });
      }
    },

    decimal: function (keyOption) {
      let exp = expression[expression.length - 1];

      if (exp && exp.type === 'number') {
        exp.isFloat = true;
      } else {
        expression.push({
          type: 'number',
          isFloat: true,
          value: 0
        });
      }
    },

    operate: function (keyOption) {
      fillExpression();

      let exp = expression[expression.length - 1];

      if (exp && exp.type === 'operater') {
        exp.value = keyOption.value;
      } else {
        expression.push({
          type: 'operater',
          value: keyOption.value
        });
      }
    },

    sign: function (keyOption) {
      fillExpression();

      numberWork(function (exp) {
        exp.value *= -1;
        render(String(exp.value));
      });
    },

    recip: function (keyOption) {
      fillExpression();

      numberWork(function (exp) {
        exp.value = 1 / exp.value;
        render(String(exp.value));
      });
    },

    squ: keyOption => {
      fillExpression();

      numberWork(function (exp) {
        exp.value *= exp.value;
        render(String(exp.value));
      });
    },

    power: keyOption => {
      let exp = expression[expression.length - 1];
      if (exp && exp.type === 'number') {
        exp.isPower = true;
      } else {
        expression.push({
          type: 'number',
          isPower: true,
          value: 0
        });
      }
    },

    result: keyOption => {
      numberWork(Function());
      render();
      expression.length = 0;
    },

    clear: keyOption => {
      expression.length = 0;
    },

    recede: keyOption => {
      let exp = expression[expression.length - 1];
      if (exp && (exp.type === 'number' || exp.type === 'string')) {
        let numberToString = String(exp.value);
        if (numberToString.length === 1 || numberToString.length === 2 && ~numberToString.indexOf('-')) {
          expression.splice(expression.length - 1, 1);
        } else {
          if (exp.isFloat) {
            let floatLength = numberToString.split('.')[1].length;
            exp.value = Number(exp.value).toFixed(floatLength - 1);
          } else {
            exp.value = exp.value > 0 ? (exp.value - numberToString[numberToString.length - 1]) / 10 : (exp.value + numberToString[numberToString.length - 1]) / 10;
          }
        }
      }
    }
  };

  buttons.addEventListener('click', function (event) {
    const button = closest(event.target, 'button');
    let keyOption, keyName;
    if (button && button.dataset.value) {
      keyName = button.dataset.value;
      keyOption = keymap[keyName];
      if (keyOption) {
        keyOption.action.forEach(action => {
          if (actions[action]) {
            actions[action](keyOption);
          }
        });

        if (!/^(\*|\/|=|sign|squ|recip)$/.test(keyName)) {
          render(/^(input|decimal)$/.test(keyOption.action));
        }
      }
    }
  });
}();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);