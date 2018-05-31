(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p='';return __webpack_require__(0)})([function(module,exports,__webpack_require__){(function(process){'use strict';var _mapping=__webpack_require__(2);var _backEaseInOut=__webpack_require__(3);var row=15;var col=25;var size=32;var map=document.getElementById('map');var snake=[[3,0],[2,0],[1,0]];var currentDir='right',targetDir='right';var headx,heady,food,dir;var foodpos=[5,5];var grow=false;var speed=200;var sum=0;var directions=(0,_mapping.mapping)(['name','keyCode','xOffset','yOffset','reverse','horver','xyOffset'],[['up',38,0,-1,'down','ver','0,-1'],['down',40,0,1,'up','ver','0,1'],['left',37,-1,0,'right','hor','-1,0'],['right',39,1,0,'left','hor','1,0']]);var start=document.querySelector('.start');var over=document.querySelector('.over');var reset=document.querySelector('input');var span=document.querySelector('span');var nameFromKeyCode=directions('name','keyCode');var xOffsetFromName=directions('xOffset','name');var yOffsetFromName=directions('yOffset','name');var reverseFromName=directions('reverse','name');var horverFromName=directions('horver','name');var namesetFromXYOffset=directions('name','xyOffset');var onOff=true;var startMove=true;var downTime=0,overTime=0;var totalTime=Math.sqrt(1000*2/0.001);var startY=120,currentStartY=-350,targetStartY=520;var mapSize=[col*size,row*size];var startSize=[start.offsetWidth,start.offsetHeight];start.style.left=(mapSize[0]-startSize[0])/2+'px';over.style.left=(mapSize[0]-startSize[0])/2+'px';document.body.parentNode.style.overflow='hidden';var gameStart=function gameStart(){var nowTime=new Date().getTime();if(onOff){downTime=new Date().getTime();onOff=false}if(downTime){if(nowTime-downTime<totalTime){startY=(0,_backEaseInOut.backEaseInOut)(nowTime-downTime,currentStartY,targetStartY,totalTime)}else{downTime=0}}start.style.top=startY+'px'};map.style.cssText='width:'+mapSize[0]+'px; height:'+mapSize[1]+'px;';var getDirection=function getDirection(block,targetBlock){return namesetFromXYOffset([targetBlock[0]-block[0],targetBlock[1]-block[1]].join(','))};var getDirection2=function getDirection2(block,prevBlock,nextBlock){var resultPrev,resultNext;resultPrev=getDirection(block,prevBlock);resultNext=getDirection(block,nextBlock);return reverseFromName(resultPrev)==resultNext?horverFromName(resultPrev):resultPrev+'-'+resultNext};var getBodyPartName=function getBodyPartName(data,index,array){if(index===0){return'snake head-'+getDirection(array[index+1],data)}else if(index===array.length-1){return'snake tail-'+getDirection(data,array[index-1])}else{return'snake body-'+getDirection2(data,array[index-1],array[index+1])}};function show(){for(var i=0,l=snake.length;i<l;i++){if(!snake[i][2]){snake[i][2]=document.createElement('div');map.appendChild(snake[i][2])}var BodyPartName=getBodyPartName(snake[i],i,snake);snake[i][2].className=BodyPartName;snake[i][2].style.left=snake[i][0]*size+'px';snake[i][2].style.top=snake[i][1]*size+'px'}if(!food){food=document.createElement('div');food.className='apple';map.appendChild(food)}food.style.left=foodpos[0]*size+'px';food.style.top=foodpos[1]*size+'px'}function move(){var length=snake.length-1;process.length=0;for(var i=length;i>0;i--){if(i==length&&grow){snake.push([snake[length][0],snake[length][1]]);grow=false}snake[i][0]=snake[i-1][0];snake[i][1]=snake[i-1][1]}if(currentDir!=targetDir)currentDir=targetDir;snake[0][0]+=xOffsetFromName(currentDir);snake[0][1]+=yOffsetFromName(currentDir);var headx=snake[0][0];var heady=snake[0][1];if(headx==foodpos[0]&&heady==foodpos[1]){var allSnakePos={};var allFoodPos=[],temp;grow=true;sum++;span.innerHTML=sum+'\u4E2A';for(var i=0,l=snake.length;i<l;i++){allSnakePos[snake[i][0]+'_'+snake[i][1]]=1}for(var x=0,l=col;x<l;x++){for(var y=0,v=row;y<v;y++){if(!allSnakePos[x+'_'+y])allFoodPos.push([x,y])}}temp=allFoodPos[Math.floor(Math.random()*allFoodPos.length)];foodpos[0]=temp[0];foodpos[1]=temp[1]}if(headx<0||heady<0||headx>col-1||heady>row-1){onOff=true;startMove=false;currentStartY=-320;targetStartY=520;process.push(gameOver)}for(var i=1,l=snake.length;i<l;i++){if(headx==snake[i][0]&&heady==snake[i][1]){onOff=true;startMove=false;currentStartY=-320;targetStartY=520;process.push(gameOver)}}if(startMove){show();setTimeout(move,speed)}};function gameOver(){var nowTime=new Date().getTime();if(onOff){downTime=new Date().getTime();onOff=false}if(downTime){if(nowTime-downTime<totalTime){startY=(0,_backEaseInOut.backEaseInOut)(nowTime-downTime,-350,520,totalTime)}else{downTime=0}}over.style.top=startY+'px'};var process=[gameStart];function mainloop(){process.forEach(function(game){game()});requestAnimationFrame(mainloop)}mainloop();map.addEventListener('click',function(event){var target=event.target;switch(target.className){case'on':downTime=new Date().getTime();currentStartY=200;targetStartY=-520;setTimeout(move,1500);break;case'restart':location.reload();break;}},false);document.addEventListener('keydown',function(event){dir=nameFromKeyCode(window.event.keyCode);if(dir==reverseFromName(currentDir)||!dir)return;if(dir)targetDir=dir},false)}).call(exports,__webpack_require__(1))},function(module,exports){'use strict';var process=module.exports={};var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined')}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined')}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout}else{cachedSetTimeout=defaultSetTimout}}catch(e){cachedSetTimeout=defaultSetTimout}try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout}else{cachedClearTimeout=defaultClearTimeout}}catch(e){cachedClearTimeout=defaultClearTimeout}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){return setTimeout(fun,0)}if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0)}try{return cachedSetTimeout(fun,0)}catch(e){try{return cachedSetTimeout.call(null,fun,0)}catch(e){return cachedSetTimeout.call(this,fun,0)}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){return clearTimeout(marker)}if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker)}try{return cachedClearTimeout(marker)}catch(e){try{return cachedClearTimeout.call(null,marker)}catch(e){return cachedClearTimeout.call(this,marker)}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue)}else{queueIndex=-1}if(queue.length){drainQueue()}}function drainQueue(){if(draining){return}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run()}}queueIndex=-1;len=queue.length}currentQueue=null;draining=false;runClearTimeout(timeout)}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i]}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue)}};function Item(fun,array){this.fun=fun;this.array=array}Item.prototype.run=function(){this.fun.apply(null,this.array)};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.binding=function(name){throw new Error('process.binding is not supported')};process.cwd=function(){return'/'};process.chdir=function(dir){throw new Error('process.chdir is not supported')};process.umask=function(){return 0}},function(module,exports){'use strict';Object.defineProperty(exports,'__esModule',{value:true});var mapping=exports.mapping=function mapping(fields,records){return function(fieldName,fromFieldName){var index,fromIndex,map;index=fields.indexOf(fieldName);fromIndex=fields.indexOf(fromFieldName);map=new Map;records.forEach(function(record){map.set(record[fromIndex],record[index])});return function(value){return map.get(value)}}}},function(module,exports){'use strict';Object.defineProperty(exports,'__esModule',{value:true});var backEaseInOut=exports.backEaseInOut=function backEaseInOut(index,offset,target,framesNum,s){if(s==undefined)s=1.70158;if((index/=framesNum/2)<1)return target/2*(index*index*(((s*=1.525)+1)*index-s))+offset;else return target/2*((index-=2)*index*(((s*=1.525)+1)*index+s)+2)+offset}}]);