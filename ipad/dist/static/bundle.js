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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_libs_drag__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_models_model_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_models_model_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scripts_models_model_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_libs_html_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_scss__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__index_scss__);





let container = document.getElementById('container');
let desktopContainer = document.getElementById('desktop-container');
let sliderNav = container.querySelector('.slider-nav');
let sliderPrev = container.querySelector('.slider-prev');
let sliderNext = container.querySelector('.slider-next');
let dockContainer = document.getElementById('dock-container');
let dock = container.querySelector('.dock');
let dockApp = container.querySelector('.dock-app');
let downMenu = container.querySelector('.down-menu');
let upMenu = container.querySelector('.up-menu');
let sliderDesktop = document.getElementById('slider-desktop');
let indexBlock = container.querySelector('.index-block');
var screenSize = [document.documentElement.clientWidth, document.documentElement.clientHeight];
screenSize[1] = screenSize[1] > 400 ? screenSize[1] : 400;

let zoom = [];
[zoom[0], zoom[1]] = screenSize[0] > screenSize[1] ? [0.006 * screenSize[0], 0.012 * screenSize[1]] : [0.015 * screenSize[0], 0.012 * screenSize[1]];

// var maxScaleX = 0.056;
// var minScaleX = 0.047;
// var maxScaleY = 0.11;
// var maxScaleY = 0.1;
// var rangeNumber = ( max, min )=>{

// }

var iconSize = screenSize[0] > screenSize[1] ? 0.056 * screenSize[0] : 0.11 * screenSize[1];

iconSize = iconSize < 70 && screenSize[0] > screenSize[1] ? 80 : iconSize;

var configs = {
  containerSize: [screenSize[0], screenSize[1]],
  desktopSize: [screenSize[0], screenSize[1] * 0.81],
  dockStartPosition: [0.188 * screenSize[0], screenSize[1] * 0.04],
  dockSpaceSize: [0.14 * screenSize[0], 0.067 * screenSize[1]],
  dockContainerSize: [screenSize[0], screenSize[1] * 0.19],
  dockSize: [screenSize[0], 0.24 * screenSize[1]],
  dockTop: 0.03 * screenSize[1]
};

var desktopHeight = configs.desktopSize[1] - screenSize[1] * 0.06;

var colNum = screenSize[0] > screenSize[1] ? screenSize[0] > 1000 ? 7 : screenSize[0] > 600 ? 6 : 5 : 4;
var rowNum = 4,
    rowNumLast = null;

var desktopSpaceSize = [Math.floor((screenSize[0] - colNum * iconSize) / (colNum + 1)), Math.floor((desktopHeight - rowNum * iconSize) / (rowNum + 1))];

var clongDesktopSpaceSize = [];

clongDesktopSpaceSize[0] = desktopSpaceSize[0];
clongDesktopSpaceSize[1] = desktopSpaceSize[1];

window.addEventListener('resize', () => {
  screenSize = [document.documentElement.clientWidth, document.documentElement.clientHeight];
  screenSize[1] = screenSize[1] > 400 ? screenSize[1] : 400;
  colNum = screenSize[0] > screenSize[1] ? screenSize[0] > 1000 ? 7 : screenSize[0] > 800 ? 6 : 5 : 4;
  iconSize = screenSize[0] > screenSize[1] ? 0.056 * screenSize[0] : 0.11 * screenSize[1];
  iconSize = iconSize < 70 && screenSize[0] > screenSize[1] ? 80 : iconSize;
  [zoom[0], zoom[1]] = screenSize[0] > screenSize[1] ? [0.006 * screenSize[0], 0.012 * screenSize[1]] : [0.015 * screenSize[0], 0.012 * screenSize[1]];

  configs = {
    containerSize: [screenSize[0], screenSize[1]],
    desktopSize: [screenSize[0], screenSize[1] * 0.81],
    dockStartPosition: [0.188 * screenSize[0], screenSize[1] * 0.04],
    dockSpaceSize: [0.14 * screenSize[0], 0.067 * screenSize[1]],
    dockContainerSize: [screenSize[0], screenSize[1] * 0.19],
    dockSize: [screenSize[0], 0.24 * screenSize[1]],
    dockTop: 0.03 * screenSize[1]
  };

  desktopHeight = configs.desktopSize[1] - screenSize[1] * 0.06;
  desktopSpaceSize = [Math.floor((screenSize[0] - colNum * iconSize) / (colNum + 1)), Math.floor((desktopHeight - rowNum * iconSize) / (rowNum + 1))];

  desktopRender();
  dockRender();
  desktopItemMoveIndex();
  allTitlePosition();
}, false);

let css = {
  transform: (element, position) => element.style.transform = `translate3d(${position[0]}px,${position[1]}px,0px)`,

  translate3dScale: (element, position, scale) => element.style.transform = `translate3d(${position[0]}px,
    ${position[1]}px,0px) scale(${scale[0]},${scale[1]})`,

  spaceIndexLeftWidth: (element, position) => {
    element.style.left = position[0] + 'px';
    element.style.width = position[1] + 'px';
  },

  enlarge: (desktop, element) => {
    let containerSize = [configs.containerSize[0], configs.containerSize[1]];
    let x = containerSize[0] / iconSize;
    let y = containerSize[1] / iconSize;
    let elementLeft = element.getBoundingClientRect().left;
    let elementTop = element.getBoundingClientRect().top;
    let translateX = desktop.offsetWidth * zoom[0] / 2 - desktop.offsetWidth / 2 - (elementLeft * zoom[0] - (desktop.offsetWidth / 2 - iconSize * zoom[0] / 2));
    let translateY = configs.desktopSize[1] * zoom[1] / 2 - configs.desktopSize[1] / 2 - (elementTop * zoom[1] - (configs.desktopSize[1] / 2 - iconSize * zoom[1] / 2)) + configs.dockSize[1] / 2 - 14;

    desktopContainer.style.height = configs.containerSize[1] + 'px';
    container.parentNode.onmousewheel = () => false;
    desktop.style.transform = `translate3d(${translateX}px,${translateY}px,0px) scale(${zoom[0]},${zoom[1]})`;

    let { style, firstChild, classList, lastChild } = element.lastChild;
    let { elStyle } = element.parentNode;
    let appOff = element.lastChild.firstChild;
    appOff.style.top = configs.desktopSize[1] / 4 / y + 'px';
    appOff.style.left = screenSize[0] / 4 / x + 'px';
    style.transform = `translate3d(0,0,0) scale(${x / zoom[0]},${y / zoom[1]})`;
    firstChild.style.transform = `translate3d(0,0,0) scale(${zoom[0] / x},${zoom[1] / y})`;
    classList.remove('hidden');
    lastChild.classList.remove('hidden');
    element.parentNode.style.zIndex = 20;
    element.parentNode.position = 'absolute';
    dockContainer.style.zIndex = 0;
    sliderNext.style.display = 'none';
    sliderPrev.style.display = 'none';
    dockContainer.style.transform = 'translate3d(' + -2000 + 'px,' + -1700 + 'px,0px) scale(' + zoom[0] + ',' + zoom[1] + ')';
  },

  transformPosition: (element, position, pos) => {
    let Pos = pos === undefined ? [0, 0] : pos;
    element.style.transform = `translate3d(${Pos[0] + position[0]}px,${Pos[1] + position[1]}px,0px)`;
  },

  reduce: (desktop, element) => {
    desktop.style.transform = 'scale(1,1)';
    desktopContainer.style.height = configs.desktopSize[1] + 'px';
    element.parentNode.style.transform = 'scale(1,1)';
    container.parentNode.onmousewheel = () => true;
    setTimeout(() => element.parentNode.classList.add('hidden'), 180);

    console.log(element.parentNode);
    element.parentNode.style.zIndex = 2;
    element.classList.add('hidden');
    dockContainer.style.zIndex = 2;
    sliderNext.style.display = 'block';
    sliderPrev.style.display = 'block';
    dockContainer.style.transform = 'translate3d(0,0,0) scale(1,1)';
  },

  position: (element, position) => {
    element.style.left = position[0] + 'px';
    element.style.top = position[1] + 'px';
  },

  size: (element, size) => {
    element.style.width = size[0] + 'px';
    element.style.height = size[1] + 'px';
  }
};

var enlarge = element => {
  let containerSize = [configs.containerSize[0], configs.containerSize[1]];
  let x = containerSize[0] / iconSize;
  let y = containerSize[1] / iconSize;
  let elementPosition = getTransformPosition(element.parentNode);
  let translateX = containerSize[0] * zoom[0] / 2 - containerSize[0] / 2 - (elementPosition[0] * zoom[0] - (containerSize[0] / 2 - iconSize * zoom[0] / 2));
  let translateY = containerSize[1] * zoom[1] / 2 - containerSize[1] / 2 - (elementPosition[1] * zoom[1] - (containerSize[1] / 2 - iconSize * zoom[1] / 2)) - (containerSize[1] - dock.offsetHeight) - 10;

  dock.style.transform = 'translate3d(' + translateX + 'px,' + translateY + 'px,0px) scale(' + zoom[0] + ',' + zoom[1] + ')';
  dock.style.height = containerSize[1] + 'px';

  element.lastChild.style.transform = `translate3d(0,0,0) scale(${x / zoom[0]},${y / zoom[1]})`;
  element.lastChild.firstChild.style.transform = `translate3d(0,0,0) scale(${zoom[0] / x},${zoom[1] / y})`;

  let appOff = element.lastChild.firstChild;

  appOff.style.top = configs.desktopSize[1] / 4 / y + 'px';
  appOff.style.left = screenSize[0] / 4 / x + 'px';
  element.lastChild.classList.remove('hidden');
  element.lastChild.lastChild.classList.remove('hidden');
  dockContainer.style.zIndex = 2;
  sliderNext.style.display = 'none';
  sliderPrev.style.display = 'none';
  desktopContainer.style.transform = `translate3d(${translateX}px,-1700px,0px) scale(${zoom[0]},${zoom[1]})`;
};

var reduce = element => {
  Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(element, '.dock').style.transform = 'scale(1,1)';
  setTimeout(() => {
    dock.style.height = configs.dockSize[1] + 'px';
  }, 1000);
  element.parentNode.style.transform = 'scale(1,1)';
  setTimeout(() => element.parentNode.classList.add('hidden'), 180);
  element.classList.add('hidden');
  dockContainer.style.zIndex = 2;
  desktopContainer.style.transform = 'translate3d(0,0,0) scale(1,1)';
  sliderNext.style.display = 'block';
  sliderPrev.style.display = 'block';
};

let desktopNum = -1;
var getTransformPosition = element => {
  let str = element.style.transform;
  let position = [Number(parseFloat(str.substring(12).split(','))), Number(parseFloat(str.substring(12).split(',')[1]))];
  return position;
};

var desktopRender = () => {
  var desktop, sliderItem, item;

  __WEBPACK_IMPORTED_MODULE_2__scripts_models_model_json___default.a.desktops.forEach((el, index) => {

    if (!el.desktop) {
      el.desktop = document.createElement('div');
      el.desktop.className = 'desktop';
      el.desktop.setAttribute('data-index', index);
      el.desktop.setAttribute('data-i', index);
      sliderDesktop.appendChild(el.desktop);
    }

    let style = container.style,
        elStyle = el.desktop.style;

    style.width = configs.containerSize[0] + 'px';
    style.height = configs.containerSize[1] + 'px';
    elStyle.width = configs.desktopSize[0] + 'px';
    elStyle.height = configs.desktopSize[1] + 'px';
    desktopContainer.style.height = configs.desktopSize[1] + 'px';
    sliderDesktop.style.height = configs.desktopSize[1] + 'px';
    css.transform(el.desktop, [configs.containerSize[0] * el.desktop.dataset.index, 0]);

    if (!el.sliderItem) {
      el.sliderItem = document.createElement('li');
      el.sliderItem.setAttribute('data-index', index);
      el.sliderItem.className = index === 0 ? 'slider-item checked' : 'slider-item';
      sliderNav.appendChild(el.sliderItem);
    }

    el.forEach((element, index) => {

      if (!element.item) {
        desktopNum++;
        element.item = Object(__WEBPACK_IMPORTED_MODULE_3__scripts_libs_html_js__["a" /* HTML */])(['<div class="item-container">', `<div class="item" data-index="${index}" style="background-image: url(${element.pic});">`, `<div class="title">${element.title}</div>`, '<div class="before-space"></div>', '<div class="after-space hidden"></div>', '<div class="close"></div>', '<div class="app hidden">', '<input type="button" value="关闭" class="desktop-app-off hidden">', '</div>', '</div>', `<div class="inline-box hidden" data-index="${index}"></div>`, '<div class="app hidden"></div>', '<input class="inline-box-name hidden" type="text" value="未定义">', '</div>']).append(el.desktop);
      }

      css.size(element.item, [iconSize, iconSize]);

      element.item.style.display = rowNum > (index / colNum | 0) ? 'block' : 'none';

      if (rowNum * colNum - 1 === index) rowNumLast = getTransformPosition(element.item);

      css.transform(element.item, [desktopSpaceSize[0] + index % colNum * (desktopSpaceSize[0] + iconSize), desktopSpaceSize[1] + (index / colNum | 0) * (desktopSpaceSize[1] + iconSize)]);
    });
  });
};

desktopRender();

let desktopItemMoveIndex = () => {
  Array.from(desktopContainer.querySelectorAll('.before-space')).forEach(element => {
    element.style.left = -desktopSpaceSize[0] + 'px';
    element.style.width = desktopSpaceSize[0] + 'px';
  });

  Array.from(desktopContainer.querySelectorAll('.after-space')).forEach(element => {
    element.style.left = iconSize + 'px';
    element.style.width = desktopSpaceSize[0] + 'px';
  });
};

desktopItemMoveIndex();

let dockEl;
var dockRender = () => {
  __WEBPACK_IMPORTED_MODULE_2__scripts_models_model_json___default.a.dock.forEach((element, index) => {
    if (!element.item) {
      element.item = Object(__WEBPACK_IMPORTED_MODULE_3__scripts_libs_html_js__["a" /* HTML */])(['<div class="item-container">', `<div class="item" data-index="${index}" style="background-image: url(${element.pic});">`, `<div class="title">${element.title}</div>`, '<div class="before-space"></div>', '<div class="after-space hidden"></div>', '<div class="close"></div>', '<div class="app hidden">', '<input type="button" value="关闭" class="dock-app-off hidden">', '</div>', '</div>', '</div>']).append(dock);
    }

    let length = Array.from(dock.children).length;
    var beforeSpace = dockContainer.querySelectorAll('.before-space')[index];
    var title = dockContainer.querySelectorAll('.title')[index];

    beforeSpace.style.left = -desktopSpaceSize[0] + 'px';
    beforeSpace.style.width = desktopSpaceSize[0] + 'px';
    title.style.top = iconSize + 8 + 'px';

    css.size(element.item, [iconSize, iconSize]);
    dockContainer.style.height = configs.dockContainerSize[1] + 'px';
    dock.style.height = configs.dockSize[1] + 'px';
    dock.style.top = -configs.dockTop + 'px';

    css.transform(element.item, [desktopSpaceSize[0] + index * (desktopSpaceSize[0] + iconSize), configs.dockStartPosition[1]]);
  });
};

dockRender();

let allTitlePosition = () => {
  Array.from(container.querySelectorAll('.title')).forEach(element => {
    element.style.top = iconSize + 8 + 'px';
  });
};

allTitlePosition();

let box = document.createElement('div');
box.className = 'box';
container.appendChild(box);

// let dockBox = document.createElement( 'div' );
// dockBox.className = 'dockBox';
// dockContainer.appendChild( dockBox );

var spaceStyle = (container, html) => {
  css.spaceIndexLeftWidth(html.length ? html[0] : html, [-configs.dockSpaceSize[0] + iconSize, configs.dockSpaceSize[0] - iconSize]);
  container.length === 3 ? css.spaceIndexLeftWidth(html[2], [iconSize, configs.dockSpaceSize[0] - iconSize]) : null;
};

var sliderDesktopIndexEndPositionRender = () => {
  Array.from(sliderDesktop.children).forEach((item, index) => {
    Array.from(item.children).forEach((el, index) => {
      let elIndex = Number(el.firstChild.dataset.index);

      elIndex === colNum - 1 || elIndex === colNum * 2 - 1 || elIndex === colNum * 3 - 1 || elIndex === colNum * 4 - 1 ? Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(el.firstChild, '.after-space hidden') !== null ? Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(el.firstChild, '.after-space hidden').classList.remove('hidden') : '' : Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(el.firstChild, '.after-space') !== null ? Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(el.firstChild, '.after-space').classList.add('hidden') : '';

      el.style.display = rowNum > (elIndex / colNum | 0) ? 'block' : 'none';

      if (rowNum * colNum === index) rowNumLast = getTransformPosition(el);

      css.transform(el, [desktopSpaceSize[0] + elIndex % colNum * (desktopSpaceSize[0] + iconSize), desktopSpaceSize[1] + (elIndex / colNum | 0) * (desktopSpaceSize[1] + iconSize)]);
    });
  });
};

let sliderDockIndexEndPositionRender = () => {
  let itemArr = Array.from(dock.children);
  let length = itemArr.length;
  itemArr.forEach(item => {
    let elIndex = length - 1 !== 0 ? Number(item.firstChild.dataset.index) : 0;
    Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(item.firstChild, '.after-space') !== null ? Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(item.firstChild, '.after-space').classList.add('hidden') : null;
    css.transform(item, [desktopSpaceSize[0] + elIndex * (desktopSpaceSize[0] + iconSize), configs.dockStartPosition[1]]);
  });
};

var inlineBoxIndexEndPositionRender = element => {
  Array.from(element.children).forEach((item, index) => {
    let elIndex = Number(item.firstChild.dataset.index);
    item.firstChild.classList.add('animate');
    inlineBoxHtml = Object(__WEBPACK_IMPORTED_MODULE_3__scripts_libs_html_js__["a" /* HTML */])(['<div class="before-space"></div>', '<div class="close"></div>', elIndex % colNum === colNum - 1 ? '<div class="after-space"></div>' : '']).append(item.firstChild);

    css.transform(item, [desktopSpaceSize[0] - 80 + elIndex % colNum * (desktopSpaceSize[0] - 160), desktopSpaceSize[1] + (elIndex / colNum | 0) * desktopSpaceSize[1]]);
  });
};

var positionTest = (container, position) => {
  let arr = Array.from(container.children);
  let containerSize = [container.offsetWidth, container.offsetHeight];
  let item = arr.length - 1 !== -1 ? container.className === 'desktop' && rowNumLast !== null ? rowNumLast : getTransformPosition(arr[arr.length - 1]) : [0, 0];

  if (container.className === 'desktop') {
    if (item[0] + iconSize < position[0] && item[1] < position[1] && position[0] < containerSize[0] && position[1] < containerSize[1]) {
      return true;
    } else if (item[1] + iconSize < position[1] + 10 && position[0] < containerSize[0] && position[1] < containerSize[1]) {
      return true;
    } else {
      return false;
    }
  } else {
    if (item[0] + iconSize < position[0] && configs.containerSize[1] - containerSize[1] < position[1] && position[1] < configs.containerSize[1]) {
      return true;
    } else if (configs.desktopSize[1] > position[1] && configs.desktopSize[1] - sliderNav.offsetHeight < position[1]) {
      return true;
    }{
      return false;
    }
  }
};

var target, times, mouseIsdown, startIndex, downIsIndex;
var desktopItem, dockItem, modelItem, modelIndex, modelDesktopIndex;

document.addEventListener('mousedown', event => {
  mouseIsdown = true;
  target = event.target;
  if (target.className === 'item') {
    times = setTimeout(() => {
      sliderDesktopIndexEndPositionRender();
      container.classList.add('animate');
    }, 1500);
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(target, '.hidden animate') && target.className === 'item') {
    let position = getTransformPosition(target.parentNode);
    let dockpos = [position[0], position[1] + configs.desktopSize[1] - configs.dockTop];
    let pos = Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(target, '.desktop') !== null ? position : dockpos;
    css.transformPosition(box, pos);

    Object(__WEBPACK_IMPORTED_MODULE_0__scripts_libs_drag__["a" /* drag */])(event, offsetPosition => css.transformPosition(box, offsetPosition, pos));

    if (box.firstChild === null) {
      desktopItem = Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(target, '.desktop');
      dockItem = Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(target, '.dock');
      modelDesktopIndex = desktopItem !== null ? Number(desktopItem.dataset.i) : null;
      modelIndex = Number(target.dataset.index);
      modelItem = desktopItem !== null ? __WEBPACK_IMPORTED_MODULE_2__scripts_models_model_json___default.a.desktops[modelDesktopIndex].splice(modelIndex, 1)[0] : __WEBPACK_IMPORTED_MODULE_2__scripts_models_model_json___default.a.dock.splice(modelIndex, 1)[0];
      target.classList.remove('animate');
      target.classList.add('add');
      target.parentNode.style.transform = '';
      box.appendChild(target.parentNode);
      startIndex = Number(target.dataset.index);
      downIsIndex = true;
    }
  }

  // if( closest( target, '.hidden animate' ) && closest( target, '.dock' ) && target.className === 'item' ){
  //   let dockpos = getTransformPosition( target.parentNode )
  //   drag( event, offsetPosition => css.transformPosition( target.parentNode, offsetPosition, dockpos ) );  
  //   if( box.firstChild === null ){
  //     css.translate3dScale( box, [ 0, 0 ], [ 1, 1 ] );

  //     target.classList.remove( 'animate' );
  //     target.classList.add( 'add' );
  //     dockBox.appendChild( target.parentNode );
  //     startIndex = Number( target.dataset.index );
  //   }
  // }

  if (target.className === 'desktop-app-off') {
    let desktopElement = Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(target, '.desktop');
    css.reduce(desktopElement, target);
  }

  if (target.className === 'dock-app-off') {
    reduce(target);
  }
}, false);

let desktopIndex, dockIndex, index, desktopArr;
document.body.addEventListener('mousemove', event => {
  var target = event.target;
  let className = target.className;
  let containerArr;

  if (box.firstChild) {
    if (!downIsIndex) return;

    if (className === 'desktop' || className === 'dock') {
      desktopArr = Array.from(target.children);
    }

    let mousePosition = [event.clientX + window.pageXOffset, event.clientY + window.pageYOffset];
    let limit = className === 'desktop' || className === 'dock' ? positionTest(target, mousePosition) : false;

    if (limit) {
      let length = desktopArr.length - 1;
      index = length !== -1 ? Number(desktopArr[length].firstChild.dataset.index) + 1 : 0;
      sequence(startIndex, index, target);
      downIsIndex = false;
    }
  }
}, false);

let endIndex,
    pageTurning,
    latency = true;
document.addEventListener('mouseover', event => {
  let overOut = event.target;
  let desktop = Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(overOut, '.desktop');
  let dock = Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(overOut, '.dock');
  let container = desktop !== null ? desktop : dock;
  let leng, itemIndex, index, containerArr;
  let lastDesktopIndex = Number(__WEBPACK_IMPORTED_MODULE_2__scripts_models_model_json___default.a.desktops[__WEBPACK_IMPORTED_MODULE_2__scripts_models_model_json___default.a.desktops.length - 1].desktop.dataset.index);
  let firstDesktopIndex = Number(__WEBPACK_IMPORTED_MODULE_2__scripts_models_model_json___default.a.desktops[0].desktop.dataset.index);

  if (overOut.className === 'slider-next' && lastDesktopIndex !== 0) itemIndex = -1;

  if (overOut.className === 'slider-prev' && firstDesktopIndex !== 0) itemIndex = 1;

  if ((overOut.className === 'slider-next' || overOut.className === 'slider-prev') && itemIndex) {
    for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__scripts_models_model_json___default.a.desktops.length; i++) {
      leng = Number(__WEBPACK_IMPORTED_MODULE_2__scripts_models_model_json___default.a.desktops[i].desktop.getAttribute('data-index')) + itemIndex;
      __WEBPACK_IMPORTED_MODULE_2__scripts_models_model_json___default.a.desktops[i].sliderItem.className = leng === 0 ? 'slider-item checked' : 'slider-item';
      __WEBPACK_IMPORTED_MODULE_2__scripts_models_model_json___default.a.desktops[i].desktop.setAttribute('data-index', leng);

      if (leng === 0) desktopArr = __WEBPACK_IMPORTED_MODULE_2__scripts_models_model_json___default.a.desktops[i].desktop.children;
    }

    if (box.firstChild) startIndex = desktopArr.length;

    desktopRender();
  }

  if (box.firstChild && !downIsIndex) {
    if (overOut.className === 'desktop' || overOut.className === 'dock') {
      containerArr = Array.from(overOut.children);
      let length = containerArr.length - 1;
      index = length !== -1 ? Number(containerArr[length].firstChild.dataset.index) + 1 : 0;
      startIndex = index;
    }
  }

  if (box.firstChild && (overOut.className === 'before-space' || overOut.className === 'after-space') && latency) {
    if (overOut.className === 'before-space') {
      endIndex = Number(overOut.parentNode.dataset.index);
      endIndex = (endIndex === colNum || endIndex === colNum * 2 || endIndex === colNum * 3) && startIndex < endIndex ? endIndex + 1 : endIndex;
      downIsIndex = true;
      latency = false;
    }

    if (overOut.className === 'after-space') {
      endIndex = typeof endIndex === 'number' && startIndex < endIndex ? Number(overOut.parentNode.dataset.index) + 1 : Number(overOut.parentNode.dataset.index);
      downIsIndex = true;
    }

    sequence(startIndex, endIndex, container);
    setTimeout(() => {
      latency = true;
    }, 200);
  }

  // if( box.firstChild && overOut.className === 'item animate' ){
  //     let title = closest( overOut, '.title' );
  //     let inlineBox = closest( overOut, '.inline-box hidden' )
  //     let close = closest( overOut, '.close' );
  //     let inlineBoxName = closest( overOut, '.inline-box-name hidden' );
  //     inlineBoxName.classList.remove( 'hidden' );
  //     title.classList.add( 'hidden' );
  //     inlineBox.classList.remove( 'hidden' )
  //     close.classList.add( 'hidden' );
  //     let app = closest( overOut, '.app hidden' );
  //     time = setTimeout( () => {
  //       css.size( inlineBox, [
  //         configs.containerSize[ 0 ] - iconSize * 2,
  //         180
  //       ] );
  //       overOut.parentNode.style.zIndex = 4;
  //       css.position( inlineBox, [ 
  //         -overOut.getBoundingClientRect().left + iconSize,
  //         configs.containerSize[ 1 ] / 2 - inlineBox.offsetHeight / 2 - 
  //         overOut.getBoundingClientRect().top
  //       ] );

  //       inlineBox.style.opacity = 1;
  //       inlineBox.style.zIndex = 8;
  //       inlineBox.style.pointerEvents = '';
  //       app.classList.remove( 'hidden' );
  //       css.translate3dScale( app, [
  //         configs.containerSize[ 0 ] / 2 - ( overOut.getBoundingClientRect().left + overOut.offsetWidth / 2 ),
  //         configs.containerSize[ 1 ] / 2 - ( overOut.getBoundingClientRect().top + overOut.offsetHeight / 2 )
  //       ],[
  //         configs.containerSize[ 0 ] / app.offsetWidth,
  //         configs.containerSize[ 1 ] / app.offsetHeight
  //       ] );
  //       css.position( inlineBoxName, [
  //         ( configs.containerSize[ 0 ] - inlineBoxName.offsetWidth ) / 2 - 
  //         overOut.getBoundingClientRect().left,
  //         configs.containerSize[ 1 ] / 2 - inlineBox.offsetHeight / 2 - 
  //         overOut.getBoundingClientRect().top - inlineBoxName.offsetHeight
  //       ] );

  //       inlineBox.appendChild( overOut );
  //     }, 1000 );
  // }

  // document.addEventListener( 'mouseout', () => {
  //   if( box.firstChild && overOut.className === 'item animate' ){
  //     clearTimeout( time )
  //   }
  // }, false );
}, false);

let size;

document.addEventListener('mouseup', event => {
  let target = event.target;
  clearTimeout(times);

  if (mouseIsdown && Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(target, '.hidden animate') === null && target.className === 'item' && Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(target, '.desktop')) {
    css.enlarge(Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(target, '.desktop'), target);
    mouseIsdown = false;
  }

  if (mouseIsdown && Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(target, '.dock') && target.className === 'item' && Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(target, '.hidden animate') === null) {
    enlarge(target);
  }

  if (box.firstChild) {
    rowNumLast = null;
    Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(target, '.desktop') !== null ? css.transformPosition(box.firstChild, getTransformPosition(box)) : css.transformPosition(box.firstChild, getTransformPosition(box), [0, -configs.desktopSize[1] + configs.dockTop]);
    box.firstChild.firstChild.dataset.index = startIndex;
    box.firstChild.firstChild.classList.remove('add');

    if (target.className === 'desktop' || target.className === 'dock') {
      let itemArr = Array.from(target.children);
      let length = itemArr.length - 1;

      if (length === -1) {
        target.appendChild(box.firstChild);
      }

      itemArr.forEach((item, index) => {
        if (Array.from(target.children).length === startIndex) target.appendChild(box.firstChild);

        if (index === startIndex) target.insertBefore(box.firstChild, item);
      });

      target.className === 'desktop' ? __WEBPACK_IMPORTED_MODULE_2__scripts_models_model_json___default.a.desktops[Number(target.dataset.i)].splice(startIndex, 0, modelItem) : __WEBPACK_IMPORTED_MODULE_2__scripts_models_model_json___default.a.dock.splice(startIndex, 0, modelItem);
      target.className === 'desktop' ? setTimeout(() => sliderDesktopIndexEndPositionRender(), 40) : setTimeout(() => sliderDockIndexEndPositionRender(), 40);
      startIndex = null, endIndex = null;
    }

    if (target.className === 'before-space') {
      let itemContainer = Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(target, '.item-container');
      let desktop = Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(target, '.desktop');
      let dock = Object(__WEBPACK_IMPORTED_MODULE_1__scripts_libs_closest__["a" /* closest */])(target, '.dock');
      let container = desktop !== null ? desktop : dock;

      container.insertBefore(box.firstChild, itemContainer);
      target.className === 'desktop' ? __WEBPACK_IMPORTED_MODULE_2__scripts_models_model_json___default.a.desktops[Number(target.dataset.i)].splice(startIndex, 0, modelItem) : __WEBPACK_IMPORTED_MODULE_2__scripts_models_model_json___default.a.dock.splice(startIndex, 0, modelItem);
      container.className === 'desktop' ? setTimeout(() => sliderDesktopIndexEndPositionRender(), 40) : setTimeout(() => sliderDockIndexEndPositionRender(), 40);
      startIndex = null, endIndex = null;
    }
  }
}, false);

document.addEventListener('keydown', event => {

  switch (window.event.keyCode) {
    case 13:
    case 32:
      container.classList.remove('animate');
      container.classList.add('hidden');
      break;
  }
}, false);

let start, ends, end;

var sequence = (indexA, indexB, desktop) => {

  if (indexA - indexB === -1 || indexA - indexB === 0) {
    return;
  }
  start = indexA < indexB ? indexA : indexB;
  ends = indexA < indexB ? indexB : indexA;
  end = indexA < indexB ? ends - 1 : ends;

  let sub = Array.from(desktop.children).slice(start, end);

  for (let item of sub) {
    let itemChild = item.firstChild;
    itemChild.dataset.index = indexA < indexB ? Number(itemChild.dataset.index) - 1 : Number(itemChild.dataset.index) + 1;
    css.transform(item, [desktopSpaceSize[0] + Number(itemChild.dataset.index) % colNum * desktopSpaceSize[0], desktopSpaceSize[1] + (Number(itemChild.dataset.index) / colNum | 0) * desktopSpaceSize[1]]);
  }

  startIndex = indexA < indexB ? indexB - 1 : indexB;
  desktop.className === 'desktop' ? setTimeout(() => sliderDesktopIndexEndPositionRender(), 40) : setTimeout(() => sliderDockIndexEndPositionRender(), 40);
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = drag;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__distance__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventHelps__ = __webpack_require__(3);




var currentPosition, movingPosition;
function drag(event, move) {
  currentPosition = [event.clientX, event.clientY];
  event.preventDefault();
  move = move || Function();

  function moving(event) {
    movingPosition = [event.clientX, event.clientY];
    var offsetPosition = [movingPosition[0] - currentPosition[0], movingPosition[1] - currentPosition[1]];
    if (Object(__WEBPACK_IMPORTED_MODULE_0__distance__["a" /* distance */])(currentPosition, movingPosition) > 6) {
      move(offsetPosition);
    }
  }

  function up(event) {
    __WEBPACK_IMPORTED_MODULE_1__eventHelps__["a" /* eventHelps */].off(document, 'mousemove', moving);
    __WEBPACK_IMPORTED_MODULE_1__eventHelps__["a" /* eventHelps */].off(document, 'mouseup', up);
  }

  __WEBPACK_IMPORTED_MODULE_1__eventHelps__["a" /* eventHelps */].on(document, 'mousemove', moving);

  __WEBPACK_IMPORTED_MODULE_1__eventHelps__["a" /* eventHelps */].on(document, 'mouseup', up);
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = distance;
function distance(positionA, positionB) {
  return Math.sqrt(Math.pow(positionA[0] - positionB[0], 2) + Math.pow(positionA[0] - positionB[0], 2));
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eventHelps; });
var eventHelps = {
  on: function (element, type, fn) {
    if (element.addEventListener) {
      element.addEventListener(type, fn, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, fn);
    } else {
      element['on' + type] = fn;
    }
  },
  off: function (element, type, fn) {
    if (element.removeEventListener) {
      element.removeEventListener(type, fn, false);
    } else if (element.detachEvent) {
      element.detachEvent('on' + type, fn);
    } else {
      element['on' + type] = null;
    }
  }
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = closest;
function closest(el, string) {
  var regexp = /^\./;
  var initialEl = el;
  if (regexp.test(string)) {
    while (el && el.tagName && el.className !== string.replace(regexp, '')) el = el.parentNode;

    if (!el.tagName) {
      [].slice.call(initialEl.parentNode.children, 0).forEach(function (item) {
        if (item.className === string.replace(regexp, '')) el = item;
      });
    }
    if (!el.tagName) {
      [].slice.call(initialEl.children, 0).forEach(function (item) {
        if (item.className === string.replace(regexp, '')) el = item;
      });
    }
  } else {
    while (el && el.tagName && el.tagName.toLowerCase() !== tagName.toLowerCase()) el = el.parentNode;
  }

  return el.tagName ? el : null;
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = { "desktops": [[{ "title": "微信", "pic": "//ijsuc.com/ipad/dist/static/images/weixin.png" }, { "title": "高德地图", "pic": "//ijsuc.com/ipad/dist/static/images/gaode.png" }, { "title": "冰雪奇缘", "pic": "//ijsuc.com/ipad/dist/static/images/bingxueqiyan.png" }, { "title": "设置", "pic": "//ijsuc.com/ipad/dist/static/images/settings.png" }, { "title": "大众点评", "pic": "//ijsuc.com/ipad/dist/static/images/dazhongdianping.png" }, { "title": "豆瓣", "pic": "//ijsuc.com/ipad/dist/static/images/douban.png" }, { "title": "淘宝", "pic": "//ijsuc.com/ipad/dist/static/images/taobao.png" }, { "title": "UC浏览器", "pic": "//ijsuc.com/ipad/dist/static/images/uc.png" }, { "title": "有道词典", "pic": "//ijsuc.com/ipad/dist/static/images/youdao.png" }, { "title": "支付宝", "pic": "//ijsuc.com/ipad/dist/static/images/zhifubao.png" }, { "title": "星盘", "pic": "//ijsuc.com/ipad/dist/static/images/xingpan.png" }, { "title": "smule", "pic": "//ijsuc.com/ipad/dist/static/images/smule.png" }, { "title": "相片", "pic": "//ijsuc.com/ipad/dist/static/images/photos.png" }, { "title": "提醒事项", "pic": "//ijsuc.com/ipad/dist/static/images/reminders.png" }], [{ "title": "微信", "pic": "//ijsuc.com/ipad/dist/static/images/weixin.png" }, { "title": "QQ", "pic": "//ijsuc.com/ipad/dist/static/images/qq.png" }, { "title": "冰雪奇缘", "pic": "//ijsuc.com/ipad/dist/static/images/bingxueqiyan.png" }, { "title": "设置", "pic": "//ijsuc.com/ipad/dist/static/images/settings.png" }, { "title": "大众点评", "pic": "//ijsuc.com/ipad/dist/static/images/dazhongdianping.png" }, { "title": "豆瓣", "pic": "//ijsuc.com/ipad/dist/static/images/douban.png" }], [{ "title": "淘宝", "pic": "//ijsuc.com/ipad/dist/static/images/taobao.png" }, { "title": "UC浏览器", "pic": "//ijsuc.com/ipad/dist/static/images/uc.png" }, { "title": "有道词典", "pic": "//ijsuc.com/ipad/dist/static/images/youdao.png" }, { "title": "支付宝", "pic": "//ijsuc.com/ipad/dist/static/images/zhifubao.png" }, { "title": "星盘", "pic": "//ijsuc.com/ipad/dist/static/images/xingpan.png" }, { "title": "smule", "pic": "//ijsuc.com/ipad/dist/static/images/smule.png" }, { "title": "相片", "pic": "//ijsuc.com/ipad/dist/static/images/photos.png" }, { "title": "提醒事项", "pic": "//ijsuc.com/ipad/dist/static/images/reminders.png" }, { "title": "网易新闻", "pic": "//ijsuc.com/ipad/dist/static/images/wangyinew.png" }, { "title": "网易音乐", "pic": "//ijsuc.com/ipad/dist/static/images/wangyiyun.png" }, { "title": "查找", "pic": "//ijsuc.com/ipad/dist/static/images/find.png" }], [{ "title": "ICloud", "pic": "//ijsuc.com/ipad/dist/static/images/icloud.png" }, { "title": "爱奇艺", "pic": "//ijsuc.com/ipad/dist/static/images/iqiyi.png" }, { "title": "邮箱", "pic": "//ijsuc.com/ipad/dist/static/images/mail.png" }, { "title": "美颜相机", "pic": "//ijsuc.com/ipad/dist/static/images/meiyanxiangji.png" }, { "title": "备忘录", "pic": "//ijsuc.com/ipad/dist/static/images/notes.png" }, { "title": "新浪", "pic": "//ijsuc.com/ipad/dist/static/images/sina.png" }]], "dock": [{ "title": "电话", "pic": "//ijsuc.com/ipad/dist/static/images/call.png" }, { "title": "通信录", "pic": "//ijsuc.com/ipad/dist/static/images/contacts.png" }, { "title": "UC浏览器", "pic": "//ijsuc.com/ipad/dist/static/images/uc.png" }, { "title": "QQ", "pic": "//ijsuc.com/ipad/dist/static/images/qq.png" }, { "title": "网易新闻", "pic": "//ijsuc.com/ipad/dist/static/images/wangyinew.png" }, { "title": "网易音乐", "pic": "//ijsuc.com/ipad/dist/static/images/wangyiyun.png" }, { "title": "多米音乐", "pic": "//ijsuc.com/ipad/dist/static/images/duomi.png" }] };

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTML; });
var HTML = function () {
  var html = function (html) {
    this.html = html;
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

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);