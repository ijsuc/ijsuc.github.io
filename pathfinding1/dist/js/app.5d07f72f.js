(function(t){function e(e){for(var i,s,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},o=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/pathfinding/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("mMap")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"map"},[n("div",{staticClass:"header"},[n("div",{staticClass:"controls"}),n("div",{staticClass:"info",style:{width:t.rowNum*t.G+2*t.left+"px"}},[n("span",{staticStyle:{"padding-left":"1rem"}},[t._v("start: "+t._s(t.start))]),n("span",{staticStyle:{"padding-left":"1rem"}},[t._v("end: "+t._s(t.end))])])]),n("div",{staticClass:"content",style:{width:t.rowNum*t.G+2*t.left+"px",height:t.rowNum*t.G+t.top+"px"},on:{click:t.clickContent}},[t._l(t.modelData,(function(e,i){return n("div",{key:i,staticClass:"grid",class:{end:"end"===e.type,roadblock:"roadblock"===e.type,passby:"passby"===e.type},style:{width:e.width+"px",height:e.height+"px",top:e.y+"px",left:e.x+"px"},attrs:{"data-index":e.index,"data-type":e.type}},[t.showFGH?n("div",{attrs:{"data-index":e.index,"data-type":e.type}},[t._v(" "+t._s(e.index)+" "),n("span",{staticStyle:{color:"#f02e33"}},[t._v(t._s(e.F))]),t._v(" "+t._s(e.G)+" "+t._s(e.H)+" ")]):t._e()])})),t.elfBlock?n("div",{staticClass:"elf-box",style:{width:t.elfBlock.width+"px",height:t.elfBlock.height+"px",top:t.elfBlock.y+"px",left:t.elfBlock.x+"px"}},[n("div",{staticClass:"elf"})]):t._e()],2),t.showModal?n("div",{staticClass:"modal-dom"},[n("div",{staticClass:"mask"}),n("div",{staticClass:"wrap"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-title"},[t._v("设置")]),n("div",{staticClass:"modal-body"},[n("div",[n("div",[t._v("宽高:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.setG,expression:"setG"}],attrs:{type:"number",min:2,max:100},domProps:{value:t.setG},on:{input:function(e){e.target.composing||(t.setG=e.target.value)}}})]),n("div",[n("div",[t._v("行列数:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.setRowNum,expression:"setRowNum"}],attrs:{type:"number",min:5,max:1e3},domProps:{value:t.setRowNum},on:{input:function(e){e.target.composing||(t.setRowNum=e.target.value)}}})]),n("div",[n("div",[t._v("FGH:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.setShowFGH,expression:"setShowFGH"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.setShowFGH=e.target.multiple?n:n[0]}}},[n("option",{domProps:{value:!0}},[t._v("是")]),n("option",{domProps:{value:!1}},[t._v("否")])])])]),n("div",{staticClass:"modal-footer"},[n("div",{on:{click:function(e){t.showModal=!1}}},[t._v("取消")]),n("div",{on:{click:t.ok}},[t._v("确认")])])])])]):t._e()])},r=[],l=(n("a4d3"),n("e01a"),n("d28b"),n("4de4"),n("26e9"),n("4e82"),n("0d03"),n("4ec9"),n("a9e3"),n("d3b7"),n("3ca3"),n("ddb0"),function(t,e){var n,i,a,o,s=Date.now(),r=0,l={state:"started",stop:function(){n=!0},reverse:function(){a=!a,c()},restart:function(){!0,c()},pause:function(){i=!0,o=Date.now()},resume:function(){i=!1,r=Date.now()-o}};function c(){l.state="started",s=Date.now()}(function o(){var c,u;i?requestAnimationFrame(o):(c=Date.now(),u=(c-s-r)/t,n||("started"==l.state&&u<1?e(a?1-u:u,l):u<=0?(u=0,e(a?1-u:u,l)):u>=1&&(l.state="ended",u=1,e(a?1-u:u,l)),requestAnimationFrame(o)))})()}),c=l,u=(n("25f0"),n("bf2d")),d=function(){var t=/str|num|boo|und/,e=/fun/,n=/date|rege/i;return function(i){var a,o,s;if(a=Object(u["a"])(i),t.test(a)||!i)return i;if(e.test(a))return new Function("return "+i.toString())();if(n.test(i.constructor))return new i.constructor(i.valueOf());for(o in s="length"in i?[]:{},i)i.hasOwnProperty(o)&&(s[o]=d(i[o]));return s}}(),p=d,h=/mobile/gi.test(navigator.userAgent),f={name:"m-map",data:function(){return{modelData:[],modelMap:new Map,openList:[],start:1,end:null,endBlock:null,startBlock:null,elfBlock:null,date:null,timing:0,active:null,roadblock:[12,14,17,19,32,34,37,39,62,63,64,65,66,67,68,69,75,76,85,86],left:10,top:0,G:h?30:60,setG:h?30:60,rowNum:10,setRowNum:10,showFGH:!1,showModal:!1,setShowFGH:!1,speed:100,wantGo:[],FGHBlocks:[]}},mounted:function(){this.drawMap()},methods:{randomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},clickMagic:function(){this.start||this.end||("magic"===this.active?this.active="":this.active="magic")},clickContent:function(t){var e=t.target.dataset;if(e&&e.index&&"start"!==e.type&&"roadblock"!==e.type&&"end"!==e.type){var n=Number(e.index),i=this.modelMap.get(n);i.type="end",this.endBlock?this.endBlock=i:(this.endBlock=i,this.minimalPath(this.startBlock,i)),this.end=n}},drawMap:function(){var t=this.compurGrid(),e=!0,n=!1,i=void 0;try{for(var a,o=this.roadblock[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var s=a.value;this.modelMap.get(s).type="roadblock"}}catch(r){n=!0,i=r}finally{try{e||null==o.return||o.return()}finally{if(n)throw i}}this.startBlock=this.modelMap.get(this.start),this.startBlock.type="start",this.elfBlock=p(this.startBlock),this.modelData=t},compurGrid:function(){for(var t=this.left,e=this.top,n=this.rowNum,i=this.G,a=[],o=0;o<n;o++)for(var s=0;s<n;s++){var r=s+1+o*n,l={width:i,height:i,x:s*i+t,y:o*i+e,index:r,direction:[r-n,r%n===0?0:r+1,r+n,r%n===1?0:r-1]};a.push(l),this.modelMap.set(l.index,l)}return a},initData:function(){this.start=null,this.end=null,this.timing=null,this.modelData=[],this.modelMap.clear()},updateMap:function(){this.active="update-map",this.initData();for(var t=this.compurGrid(),e=new Array(this.rowNum*(this.rowNum-Math.floor(this.rowNum/2))),n=0,i=e;n<i.length;n++){i[n];this.modelMap.get(this.randomNum(1,this.rowNum*this.rowNum)).type="roadblock"}this.modelData=t,this.active=null},handlePath:function(){this.date=Date.now(),this.minimalPath(this.startBlock)},minimalPath:function(t,e){if("start"===t.type||"end"===e.type){var n;this.pathScoring(t,e);while(this.openList.length)n=this.openList.pop(),"end"===n.type?this.openList=[]:this.pathScoring(n,e);n&&"end"===n.type?(this.drawPath(n),this.$forceUpdate()):alert("无法到达终点!")}},clearTypeOpenList:function(){this.FGHBlocks=this.FGHBlocks.filter((function(t){return"openList"===t.type&&(t.F=null,t.H=null,t.G=null,t.type=null,t.parent=null),"start"===t.type||"end"===t.type||"passby"===t.type}))},drawPath:function(t){"end"!==t.type&&"start"!==t.type&&(t.type="passby"),t.parent?(this.wantGo.unshift(t),this.drawPath(this.modelMap.get(t.parent))):(this.wantGo.unshift(t),this.clearTypeOpenList(),this.goEnd())},goEnd:function(){var t,e,n=this,i=this.endBlock,a=0,o=0;c(this.speed,(function(s,r){if(0===s){if(t=n.wantGo.shift(),t.parent=null,t.path=null,!n.wantGo.length||i.index!==n.endBlock.index)return r.stop(),n.clearPath(),void("start"===i.type?i.index===n.endBlock.index?n.endBlock=null:n.minimalPath(n.startBlock,n.endBlock):(i.type=null,i.parent=null,n.endBlock.parent=null,n.minimalPath(n.startBlock,n.endBlock)));t.type=null,e=n.wantGo[0],e.type="start",e.parent=null,e.path=null,n.startBlock=e,n.start=e.index}a=(e.x-n.elfBlock.x)*s,o=(e.y-n.elfBlock.y)*s,n.elfBlock.x=n.elfBlock.x+a,n.elfBlock.y=n.elfBlock.y+o,"ended"==r.state&&r.reverse()}))},clearPath:function(){var t=!0,e=!1,n=void 0;try{for(var i,a=this.FGHBlocks[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;"start"!==o.type&&"end"!==o.type&&(o.type=null,o.parent=null,o.path=null,o.F=null,o.G=null,o.H=null)}}catch(s){e=!0,n=s}finally{try{t||null==a.return||a.return()}finally{if(e)throw n}}this.wantGo=[],this.openList=[]},computFGH:function(t,e,n){var i,a=t.x,o=t.y,s=(t.index,Math.abs(a-n.x)+Math.abs(o-n.y));i=e.G?e.G+this.G:Math.abs(a-this.startBlock.x)+Math.abs(o-this.startBlock.y);var r=s+i;t.H=s,t.G=i,t.F=r,this.FGHBlocks.push(t)},pathScoring:function(t,e){t.width;var n=t.index,i=(t.x,t.y,t.direction),a=!0,o=!1,s=void 0;try{for(var r,l=i[Symbol.iterator]();!(a=(r=l.next()).done);a=!0){var c=r.value,u=this.modelMap.get(c);u&&"roadblock"!==u.type&&"start"!==u.type&&"openList"!==u.type&&(this.computFGH(u,t,e),"end"!==u.type&&(u.type="openList"),u.parent=n,this.openList.push(u))}}catch(d){o=!0,s=d}finally{try{a||null==l.return||l.return()}finally{if(o)throw s}}this.openList.sort((function(t,e){return e.F-t.F}))},clickSeting:function(){this.showModal=!0,this.active="seting"},cancel:function(){this.active=null,this.showModal=!1},ok:function(){this.G=this.setG,this.rowNum=this.setRowNum,this.showFGH=this.setShowFGH,this.initData(),this.drawMap(),this.active=null,this.showModal=!1}}},v=f,m=(n("662b"),n("2877")),y=Object(m["a"])(v,s,r,!1,null,"0ba13d0a",null),w=y.exports,k={name:"app",components:{mMap:w}},g=k,b=(n("034f"),Object(m["a"])(g,a,o,!1,null,null,null)),x=b.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(x)}}).$mount("#app")},"662b":function(t,e,n){"use strict";var i=n("f4ff"),a=n.n(i);a.a},"85ec":function(t,e,n){},f4ff:function(t,e,n){}});
//# sourceMappingURL=app.5d07f72f.js.map