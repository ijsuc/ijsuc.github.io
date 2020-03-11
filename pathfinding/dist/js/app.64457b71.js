(function(t){function e(e){for(var a,o,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/pathfinding/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"1db9":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("mMap")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"map"},[n("div",{staticClass:"header"},[n("div",{staticClass:"controls"},[n("span",{staticClass:"minimal-path-button",class:{active:"magic"===t.active,disabled:t.endBlock},on:{click:t.clickMagic}},[t._v("魔法棒")]),n("span",{staticClass:"stop-button",class:{active:"pause"===t.active,disabled:!t.endBlock},on:{click:t.handlePause}},[t._v(" "+t._s(t.isPause?"暂停":"继续")+" ")])]),n("div",{staticClass:"info",style:{width:t.rowNum*t.G+2*t.left+"px"}},[n("span",{staticStyle:{"padding-left":"1rem"}},[t._v("start: "+t._s(t.start))]),n("span",{staticStyle:{"padding-left":"1rem"}},[t._v("end: "+t._s(t.end))])])]),n("div",{staticClass:"content",style:{width:t.rowNum*t.G+2*t.left+"px",height:t.rowNum*t.G+t.top+"px"},on:{click:t.clickContent}},[t._l(t.modelData,(function(e,a){return n("div",{key:a,staticClass:"grid",class:{end:"end"===e.type,roadblock:"roadblock"===e.type,passby:"passby"===e.type},style:{width:e.width+"px",height:e.height+"px",top:e.y+"px",left:e.x+"px"},attrs:{"data-index":e.index,"data-type":e.type}},[t.showFGH?n("div",{attrs:{"data-index":e.index,"data-type":e.type}},[t._v(" "+t._s(e.index)+" "),n("span",{staticStyle:{color:"#f02e33"}},[t._v(t._s(e.F))]),t._v(" "+t._s(e.G)+" "+t._s(e.H)+" ")]):t._e()])})),t.elfBlock?n("div",{staticClass:"elf-box",style:{width:t.elfBlock.width+"px",height:t.elfBlock.height+"px",top:t.elfBlock.y+"px",left:t.elfBlock.x+"px"}},[n("div",{staticClass:"elf"})]):t._e()],2),t.showModal?n("div",{staticClass:"modal-dom"},[n("div",{staticClass:"mask"}),n("div",{staticClass:"wrap"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-title"},[t._v("设置")]),n("div",{staticClass:"modal-body"},[n("div",[n("div",[t._v("宽高:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.setG,expression:"setG"}],attrs:{type:"number",min:2,max:100},domProps:{value:t.setG},on:{input:function(e){e.target.composing||(t.setG=e.target.value)}}})]),n("div",[n("div",[t._v("行列数:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.setRowNum,expression:"setRowNum"}],attrs:{type:"number",min:5,max:1e3},domProps:{value:t.setRowNum},on:{input:function(e){e.target.composing||(t.setRowNum=e.target.value)}}})]),n("div",[n("div",[t._v("FGH:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.setShowFGH,expression:"setShowFGH"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.setShowFGH=e.target.multiple?n:n[0]}}},[n("option",{domProps:{value:!0}},[t._v("是")]),n("option",{domProps:{value:!1}},[t._v("否")])])])]),n("div",{staticClass:"modal-footer"},[n("div",{on:{click:function(e){t.showModal=!1}}},[t._v("取消")]),n("div",{on:{click:t.ok}},[t._v("确认")])])])])]):t._e()])},r=[],l=(n("a4d3"),n("e01a"),n("d28b"),n("4de4"),n("26e9"),n("4e82"),n("0d03"),n("4ec9"),n("a9e3"),n("d3b7"),n("3ca3"),n("38cf"),n("ddb0"),function(t,e){var n,a,i,s,o=Date.now(),r=0,l={state:"started",stop:function(){n=!0},reverse:function(){i=!i,r=0,c()},restart:function(){!0,c()},pause:function(){a=!0,s=Date.now()},resume:function(){a=!1,r=Date.now()-s}};function c(){l.state="started",o=Date.now()}(function s(){var c,u;a?requestAnimationFrame(s):(c=Date.now(),u=(c-o-r)/t,n||("started"==l.state&&u<1?e(i?1-u:u,l):u<=0?(u=0,e(i?1-u:u,l)):u>=1&&(l.state="ended",u=1,e(i?1-u:u,l)),requestAnimationFrame(s)))})()}),c=l,u=(n("25f0"),n("bf2d")),d=function(){var t=/str|num|boo|und/,e=/fun/,n=/date|rege/i;return function(a){var i,s,o;if(i=Object(u["a"])(a),t.test(i)||!a)return a;if(e.test(i))return new Function("return "+a.toString())();if(n.test(a.constructor))return new a.constructor(a.valueOf());for(s in o="length"in a?[]:{},a)a.hasOwnProperty(s)&&(o[s]=d(a[s]));return o}}(),p=d,h=/mobile/gi.test(navigator.userAgent),f={name:"m-map",data:function(){return{modelData:[],modelMap:new Map,openList:[],start:1,end:null,endBlock:null,startBlock:null,elfBlock:null,date:null,timing:0,active:null,roadblock:h?[12,14,17,19,32,34,37,39,62,63,64,65,66,67,68,69,75,76,85,86]:[2,3,13,18,20,27,28,29,30,31,32,37,42,47,54,55,59,64,67,69,71,76,78,83,85,87,89,91,94,95,99,105,107,110,117,121,125,126,127,131,136,138,140,147,153,161,163,164,165,168,169,170,175,176,177,178,179,181,183,186,191,194,199,207,213,216,217,219,226,227,230,233,235,237,239,243,248,250,252,255,257,259,262,268,270,274,279,283,285,286,290,292,295,297,299,301,304,306,307,308,310,313,315,317,319,324,326,328,330,333,336,339,343,344,351,354,359,361,366,367,369,370,372,375,376,377,378,379,383],left:10,top:0,G:30,setG:h?30:60,rowNum:h?10:20,setRowNum:10,showFGH:!1,showModal:!1,setShowFGH:!1,speed:200,wantGo:[],FGHBlocks:[],repeat:!1,pause:null,resume:null,isPause:!0}},mounted:function(){this.drawMap()},methods:{randomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},handlePause:function(t){this.endBlock&&(this.isPause?(this.isPause=!1,this.pause()):(this.resume(),this.isPause=!0))},clickMagic:function(){this.endBlock||("magic"===this.active?this.active="":this.active="magic")},clickContent:function(t){var e=t.target.dataset;if("magic"===this.active&&"start"!==e.type){var n=Number(e.index),a=this.modelMap.get(n);a.type?a.type="":a.type="roadblock",this.$set(this.modelData,n-1,a)}else if(e&&e.index&&"start"!==e.type&&"roadblock"!==e.type&&"end"!==e.type){var i=Number(e.index),s=this.modelMap.get(i);this.endBlock?this.repeat||(s.type="end",this.repeat=!0,this.end=i,this.endBlock=s):(s.type="end",this.endBlock=s,this.end=i,this.minimalPath(this.startBlock,s))}},drawMap:function(){var t=this.compurGrid(),e=!0,n=!1,a=void 0;try{for(var i,s=this.roadblock[Symbol.iterator]();!(e=(i=s.next()).done);e=!0){var o=i.value;this.modelMap.get(o).type="roadblock"}}catch(r){n=!0,a=r}finally{try{e||null==s.return||s.return()}finally{if(n)throw a}}this.startBlock=this.modelMap.get(this.start),this.startBlock.type="start",this.elfBlock=p(this.startBlock),this.modelData=t},compurGrid:function(){for(var t=this.left,e=this.top,n=this.rowNum,a=this.G,i=[],s=0;s<n;s++)for(var o=0;o<n;o++){var r=o+1+s*n,l={width:a,height:a,x:o*a+t,y:s*a+e,index:r,direction:[r-n,r%n===0?0:r+1,r+n,r%n===1?0:r-1]};i.push(l),this.modelMap.set(l.index,l)}return i},initData:function(){this.end=null,this.timing=null,this.modelData=[],this.modelMap.clear()},updateMap:function(){this.active="update-map",this.initData();for(var t=this.compurGrid(),e=new Array(this.rowNum*(this.rowNum-Math.floor(this.rowNum/2))),n=0,a=e;n<a.length;n++){a[n];this.modelMap.get(this.randomNum(1,this.rowNum*this.rowNum)).type="roadblock"}this.modelData=t,this.active=null},handlePath:function(){this.date=Date.now(),this.minimalPath(this.startBlock)},minimalPath:function(t,e){if("start"===t.type||"end"===e.type){var n;this.pathScoring(t,e);while(this.openList.length)n=this.openList.pop(),"end"===n.type?this.openList=[]:this.pathScoring(n,e);n&&"end"===n.type?(this.drawPath(n),this.$forceUpdate()):(alert("无法到达终点!"),this.clearPath(),this.endBlock.type=null,this.endBlock=null)}},clearTypeOpenList:function(){this.FGHBlocks=this.FGHBlocks.filter((function(t){return"openList"===t.type&&(t.F=null,t.H=null,t.G=null,t.type=null,t.parent=null),"start"===t.type||"end"===t.type||"passby"===t.type}))},drawPath:function(t){"end"!==t.type&&"start"!==t.type&&(t.type="passby"),t.parent?(this.wantGo.unshift(t),this.drawPath(this.modelMap.get(t.parent))):(this.wantGo.unshift(t),this.clearTypeOpenList(),this.goEnd())},goEnd:function(){var t=this;this.repeat=!1;var e,n,a=this.endBlock,i=0,s=0;c(this.speed,(function(o,r){if(t.resume=r.resume,t.pause=r.pause,0===o){if(e=t.wantGo.shift(),e.parent=null,e.path=null,!t.wantGo.length||a.index!==t.endBlock.index)return r.stop(),t.pause=null,t.resume=null,t.clearPath(),void("start"===a.type?a.index===t.endBlock.index?t.endBlock=null:t.minimalPath(t.startBlock,t.endBlock):(a.type=null,a.parent=null,t.endBlock.parent=null,t.minimalPath(t.startBlock,t.endBlock)));e.type=null,n=t.wantGo[0],n.type="start",n.parent=null,n.path=null,t.startBlock=n,t.start=n.index}i=(n.x-t.elfBlock.x)*o,s=(n.y-t.elfBlock.y)*o,t.elfBlock.x=t.elfBlock.x+i,t.elfBlock.y=t.elfBlock.y+s,"ended"==r.state&&r.reverse()}))},clearPath:function(){var t=!0,e=!1,n=void 0;try{for(var a,i=this.FGHBlocks[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var s=a.value;"start"!==s.type&&"end"!==s.type&&(s.type=null,s.parent=null,s.path=null,s.F=null,s.G=null,s.H=null)}}catch(o){e=!0,n=o}finally{try{t||null==i.return||i.return()}finally{if(e)throw n}}this.wantGo=[],this.openList=[]},computFGH:function(t,e,n){var a,i=t.x,s=t.y,o=(t.index,Math.abs(i-n.x)+Math.abs(s-n.y));a=e.G?e.G+this.G:Math.abs(i-this.startBlock.x)+Math.abs(s-this.startBlock.y);var r=o+a;t.H=o,t.G=a,t.F=r,this.FGHBlocks.push(t)},pathScoring:function(t,e){t.width;var n=t.index,a=(t.x,t.y,t.direction),i=!0,s=!1,o=void 0;try{for(var r,l=a[Symbol.iterator]();!(i=(r=l.next()).done);i=!0){var c=r.value,u=this.modelMap.get(c);u&&"roadblock"!==u.type&&"start"!==u.type&&"openList"!==u.type&&(this.computFGH(u,t,e),"end"!==u.type&&(u.type="openList"),u.parent=n,this.openList.push(u))}}catch(d){s=!0,o=d}finally{try{i||null==l.return||l.return()}finally{if(s)throw o}}this.openList.sort((function(t,e){return e.F-t.F}))},clickSeting:function(){this.showModal=!0,this.active="seting"},cancel:function(){this.active=null,this.showModal=!1},ok:function(){this.G=this.setG,this.rowNum=this.setRowNum,this.showFGH=this.setShowFGH,this.initData(),this.drawMap(),this.active=null,this.showModal=!1}}},m=f,v=(n("b760"),n("2877")),y=Object(v["a"])(m,o,r,!1,null,"15d32f97",null),w=y.exports,k={name:"app",components:{mMap:w}},g=k,b=(n("034f"),Object(v["a"])(g,i,s,!1,null,null,null)),x=b.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(x)}}).$mount("#app")},"85ec":function(t,e,n){},b760:function(t,e,n){"use strict";var a=n("1db9"),i=n.n(a);i.a}});
//# sourceMappingURL=app.64457b71.js.map