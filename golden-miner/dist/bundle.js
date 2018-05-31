(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="";return __webpack_require__(0)})([function(module,exports,__webpack_require__){"use strict";var _timeline=__webpack_require__(1);var _goldenMinerData=__webpack_require__(2);var _goldenMinerData2=_interopRequireDefault(_goldenMinerData);var _hookthing=__webpack_require__(3);var _hookthing2=_interopRequireDefault(_hookthing);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var container=document.querySelector("#container");var gameMap=document.createElement("div");gameMap.className="gameMap";container.appendChild(gameMap);var moneySum=document.querySelector(".money-sum");var targetMoney=document.querySelector(".target-money");var countdown=document.querySelector(".countdown");var level=document.querySelector(".level-count");var config={"containerWidth":680,"containerHeight":494,"hook":80,"hookSpeed":4,"angle":25};var angleDir=1.2;var originY=0;var originX=config.containerWidth/2-config.hook/2;var currentAngle=config.angle;var speed=4;var direction=0;var hookAngleOffset=-90;var sum=0,levelCount=1;var targetMoneySum=650;var s=61,stop,t;var mainloops=[];container.style.cssText="width:"+config.containerWidth+"px;height:"+config.containerHeight+"px";var start=function start(){var container1=document.createElement("div");container1.className="container1";container.appendChild(container1);var glowed=document.createElement("div");glowed.className="glowed";container1.appendChild(glowed);glowed.addEventListener("mousedown",function(){container1.style.width=0+"px";container1.style.height=0+"px";startTarget()},false)};start();function startTarget(){var goal=document.createElement("div");goal.className="goal";container.appendChild(goal);var s=3;function time(){s--;t=setTimeout(time,1000);if(s===0){goal.style.width=0+"px";goal.style.height=0+"px";play();(0,_timeline.timeline)(60000,function(rate,animater){countdown.innerHTML=Math.floor((60000-60000*rate)/1000)});clearTimeout(t)}}time()}function collisionDetection(x,y,mineral){return Math.sqrt(Math.pow(x+40-(mineral.pos[0]+mineral.width/2),2)+Math.pow(y-(mineral.pos[1]+mineral.height/2),2))<mineral.width?true:false};var play=function play(){var hook=document.createElement("div");hook.className="hook";hook.style.cssText="width:"+config.hook+"px; height:"+config.hook+"px;";gameMap.appendChild(hook);var hookgold=document.createElement("div");hookgold.className="hookgold";gameMap.appendChild(hookgold);var people=document.createElement("div");people.className="people";container.appendChild(people);var peoplechange=function peoplechange(time){var s=time;var times=function times(){s--;clearTimeout(t);t=setTimeout(times,400);s%2==0?people.className="people":people.className="people1";if(s==-1)clearTimeout(t)};times()};var render=function render(){for(var i in _hookthing2.default){if(!_hookthing2.default[i]["el"]){_hookthing2.default[i].el=document.createElement("div");_hookthing2.default[i].el.className=_hookthing2.default[i].className;_hookthing2.default[i].el.style.cssText="background:"+_hookthing2.default[i].url+" no-repeat; width:"+_hookthing2.default[i].width+"px; height:"+_hookthing2.default[i].height+"px; left:"+(config.hook-_hookthing2.default[i].width)/2+"px; top:"+_hookthing2.default[i].top+"px";hook.appendChild(_hookthing2.default[i].el)}}for(var i=0,l=_goldenMinerData2.default.objects.length;i<l;i++){var item=_goldenMinerData2.default.objects[i];if(!item["el"]){item.el=document.createElement("div");gameMap.appendChild(item.el)}item.el.style.cssText="width:"+item.width+"px; height:"+item.height+"px; background:"+item.url+" no-repeat; top:"+item.pos[1]+"px; left:"+item.pos[0]+"px; position: absolute;"}moneySum.innerHTML=sum;targetMoney.innerHTML=targetMoneySum;level.innerHTML=levelCount};var mainloop=function mainloop(){var hookAngle=currentAngle+hookAngleOffset;var style=hook.style;style.transform="rotate("+hookAngle+"deg)";style.left=originX+"px";style.top=originY+"px";people.className="people";render();currentAngle+=angleDir;if(currentAngle>=155||currentAngle<=25)angleDir=-angleDir};function processControl(){if(mainloops.length==0)mainloops.push(mainloop);mainloops[0]();requestAnimationFrame(processControl)};processControl();var panning=function panning(){var r=currentAngle*Math.PI/180;var x=direction*Math.cos(r)+originX;var y=direction*Math.sin(r)+originY;var style=hook.style;style.left=x+"px";style.top=y+"px";direction+=speed;for(var i=0,l=_goldenMinerData2.default.objects.length;i<l;i++){var item=_goldenMinerData2.default.objects[i];if(collisionDetection(x,y,item)){item.pos[1]=-500;render();_hookthing2.default[item.type].el.style.display="block";speed=speed/item.weight;sum+=item.money;speed=-speed}else if(direction>=500){speed=-speed}if(direction<=0){speed=4;mainloops.splice(0,1,mainloop);_hookthing2.default[item.type].el.style.display="none"}}};document.addEventListener("keydown",function(event){var code=event.keyCode;if(code!=40)return;switch(code){case 40:mainloops.splice(0,1,panning);peoplechange(30);break;default:return;}},false);document.addEventListener("touchstart",function(event){mainloops.splice(0,1,panning);peoplechange(30)},false)}},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var timeline=exports.timeline=function timeline(time,callback){var startTime=Date.now();var started,ended,restarts,_stop,pauseOnOff,reverses,roundtrips;var pauseTime,offSetTime=0;var animater={state:"started",stop:function stop(){_stop=true},reverse:function reverse(){reverses=!reverses;init()},restart:function restart(){restarts=true;init()},pause:function pause(){pauseOnOff=true;pauseTime=Date.now()},resume:function resume(){pauseOnOff=false;offSetTime=Date.now()-pauseTime}};function init(){animater.state="started";startTime=Date.now()}var mainloop=function mainloop(){var nowTime,rate;if(pauseOnOff){requestAnimationFrame(mainloop);return}nowTime=Date.now();rate=(nowTime-startTime-offSetTime)/time;if(_stop){return}if(animater.state=="started"&&rate<1){callback(reverses?1-rate:rate,animater)}else if(rate<=0){rate=0;callback(reverses?1-rate:rate,animater)}else if(rate>=1){animater.state="ended";rate=1;callback(reverses?1-rate:rate,animater)}requestAnimationFrame(mainloop)}()}},function(module,exports){module.exports={"objects":[{"type":"ironoreS","pos":[100,180],"width":37,"height":30,"weight":2.5,"money":20,"url":"url(images/ironoreS.png)"},{"type":"ironoreS","pos":[250,200],"width":37,"height":30,"weight":2.5,"money":20,"url":"url(images/ironoreS.png)"},{"type":"ironoreS","pos":[300,240],"width":37,"height":30,"weight":2.5,"money":20,"url":"url(images/ironoreS.png)"},{"type":"ironoreL","pos":[150,170],"width":56,"height":50,"weight":5,"money":50,"url":"url(images/ironoreL.png)"},{"type":"ironoreL","pos":[330,220],"width":56,"height":50,"weight":5,"money":50,"url":"url(images/ironoreL.png)"},{"type":"ironoreL","pos":[450,300],"width":56,"height":50,"weight":5,"money":50,"url":"url(images/ironoreL.png)"},{"type":"goldM","pos":[70,130],"width":38,"height":34,"weight":2.5,"money":200,"url":"url(images/goldM.png)"},{"type":"goldM","pos":[500,280],"width":38,"height":34,"weight":2.5,"money":200,"url":"url(images/goldM.png)"},{"type":"goldM","pos":[300,280],"width":38,"height":34,"weight":2.5,"money":200,"url":"url(images/goldM.png)"},{"type":"goldL","pos":[550,320],"width":68,"height":64,"weight":5,"money":500,"url":"url(images/goldL.png)"},{"type":"goldL","pos":[120,350],"width":68,"height":64,"weight":5,"money":500,"url":"url(images/goldL.png)"}]}},function(module,exports){module.exports={"hook1":{"width":23,"height":30,"url":"url(images/hook-1.png)","className":"hook1","top":0},"hook3":{"width":23,"height":30,"url":"url(images/hook-3.png)","className":"hook3","top":0},"goldL":{"width":68,"height":64,"url":"url(images/goldL.png)","className":"goldL","top":14},"goldM":{"width":38,"height":34,"url":"url(images/goldM.png)","className":"goldM","top":14},"ironoreL":{"width":56,"height":50,"url":"url(images/ironoreL.png)","className":"ironoreL","top":14},"ironoreS":{"width":37,"height":30,"url":"url(images/ironoreS.png)","className":"ironoreS","top":14}}}]);