webpackJsonp([0],[function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){var t=/str|num|boo|und/,e=/fun/,r=/date|rege/i;return function(o){var a,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Map,l=void 0,c=void 0;if(a=void 0===o?"undefined":n(o),t.test(a)||!o)return o;if(e.test(a))return new Function("return "+o.toString())();if(r.test(o.constructor))return new o.constructor(o.valueOf());if(!((l=s.get(o))>1)){for(l in s.set(o,++l||1),c="length"in o?[]:{},o)o.hasOwnProperty(l)&&(c[l]=i(o[l],s));return c}}}(),a=function(){var t=/num|str|boo/,e=/fun/,r=/date|rege/i;return function(o,i){var s,l=void 0,c=void 0;if(s=void 0===o?"undefined":n(o),o===i)return!0;if(s!==(void 0===i?"undefined":n(i)))return!1;if(o!=o&&i!=i)return!0;if(t.test(s)||!o||!i)return o===i;if(e.test(s)||r.test(o.constructor))return o.toString()===i.toString();c=new Map,Object.keys(o).concat(Object.keys(i)).forEach(function(t){return c.set(t,1)});var u=!0,f=!1,d=void 0;try{for(var h,p=c[Symbol.iterator]();!(u=(h=p.next()).done);u=!0)if(l=h.value,!a(o[l[0]],i[l[0]]))return!1}catch(t){f=!0,d=t}finally{try{!u&&p.return&&p.return()}finally{if(f)throw d}}return!0}}(),s=[],l={},c=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.uniqueId=Math.random().toString(36).slice(2),r.sharedState={},r.storeUpSharedState={},s.push(r),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,React.Component),o(e,[{key:"importSharedState",value:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];var o=!0,n=!1,a=void 0;try{for(var s,c=e[Symbol.iterator]();!(o=(s=c.next()).done);o=!0){var u=s.value,f=l[u];void 0===f&&(f=l[u]={}),void 0===this.storeUpSharedState[u]&&(this.storeUpSharedState[u]=i(f)),this.sharedState=l}}catch(t){n=!0,a=t}finally{try{!o&&c.return&&c.return()}finally{if(n)throw a}}}},{key:"assign",value:function(t){var e=this;return function(r){return e[t]=r}}},{key:"updateSharedState",value:function(){for(var t={},e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];var n=!0,l=!1,c=void 0;try{for(var u,f=r[Symbol.iterator]();!(n=(u=f.next()).done);n=!0){var d=u.value;if(void 0!==this.sharedState[d]){var h=this.sharedState[d],p=!0,y=!1,v=void 0;try{for(var g,m=s[Symbol.iterator]();!(p=(g=m.next()).done);p=!0){var b=g.value;a(b.storeUpSharedState[d],h)||(b.sharedState[d]=h,b.storeUpSharedState[d]=i(h),t[b.uniqueId]=b)}}catch(t){y=!0,v=t}finally{try{!p&&m.return&&m.return()}finally{if(y)throw v}}}}}catch(t){l=!0,c=t}finally{try{!n&&f.return&&f.return()}finally{if(l)throw c}}Object.keys(t).forEach(function(e){t[e].forceUpdate()})}}],[{key:"initSharedState",value:function(t){for(var e in t)t.hasOwnProperty(e)&&(l[e]=t[e])}}]),e}();e.default=c},function(t,e,r){"use strict";var o=i(r(0)),n=i(r(2));function i(t){return t&&t.__esModule?t:{default:t}}var a=document.documentElement.clientWidth<=320?25:30;o.default.initSharedState({gridData:[{color:"#a1aafe",shape:[{x:0,y:0}],width:1,height:1},{color:"#ffb715",shape:[{x:0,y:0},{x:1,y:0}],width:2,height:1},{color:"#ffb715",shape:[{x:0,y:0},{x:0,y:1}],width:1,height:2},{color:"#fcb151",shape:[{x:0,y:0},{x:1,y:0},{x:2,y:0}],width:3,height:1},{color:"#fcb151",shape:[{x:0,y:0},{x:0,y:1},{x:0,y:2}],width:1,height:3},{color:"#b2ffcb",shape:[{x:0,y:0},{x:1,y:0},{x:1,y:1}],width:2,height:2},{color:"#b2ffcb",shape:[{x:0,y:0},{x:0,y:1},{x:1,y:1}],width:2,height:2},{color:"#b2ffcb",shape:[{x:1,y:0},{x:1,y:1},{x:0,y:1}],width:2,height:2},{color:"#b2ffcb",shape:[{x:0,y:0},{x:1,y:0},{x:1,y:1}],width:2,height:2},{color:"#ff92ff",shape:[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0}],width:4,height:1},{color:"#ff92ff",shape:[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3}],width:1,height:4},{color:"#85ff16",shape:[{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1}],width:2,height:2},{color:"#fe6d4c",shape:[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:0,y:4}],width:1,height:5},{color:"#fe6d4c",shape:[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:4,y:0}],width:5,height:1},{color:"#47e9fe",shape:[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:2,y:1},{x:2,y:2}],width:3,height:3},{color:"#47e9fe",shape:[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:2},{x:2,y:2}],width:3,height:3},{color:"#47e9fe",shape:[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:0,y:1},{x:0,y:2}],width:3,height:3},{color:"#47e9fe",shape:[{x:2,y:0},{x:2,y:1},{x:2,y:2},{x:1,y:2},{x:0,y:2}],width:3,height:3},{color:"#00ffe0",shape:[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:0,y:2},{x:1,y:2},{x:2,y:2}],width:3,height:3}],normalSize:a,smallSize:15,spaing:2,rows:10,cols:10,num:0}),ReactDOM.render(React.createElement(n.default,null),document.querySelector("#root"))},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),i=c(r(0));r(3);var a=c(r(8)),s=c(r(11)),l=c(r(12));function c(t){return t&&t.__esModule?t:{default:t}}var u=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));r.importSharedState("cols","rows","gridData","normalSize","spaing","smallSize");var o=document.documentElement,n=r.sharedState,i=n.rows,a=(n.cols,n.spaing),s=n.normalSize;return r.screenWidth=o.clientWidth,r.gameTop=80,r.gameSize=i*s+(i-1)*a,r.gameLeft=(r.screenWidth-r.gameSize)/2,r.gameContainer=[],r.gridsArr,r.gridsBlock,r.addBlock=new Map,r.score=new Map,r.Result,r.count=0,r.scoreEl=null,r.num=0,window.addEventListener("touchmove",function(t){return t.preventDefault()},!1),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,i.default),n(e,[{key:"blockBgContainer",value:function(){for(var t=this.sharedState,e=t.cols,r=t.rows,o=t.normalSize,n=t.spaing,i=0;i<e;i++)for(var a=0;a<r;a++)this.gameContainer.push({left:a*o+a*n+"px",top:i*o+i*n+"px",backgroundColor:"#4b4b4b",width:o+"px",height:o+"px",borderRadius:"6px"});return React.createElement("div",{className:"game-container",style:{left:this.gameLeft+"px",top:this.gameTop+"px"}},this.gameContainer.map(function(t,e){return React.createElement("div",{className:"grid-item",key:e,style:t})}))}},{key:"gridBlock",value:function(t,e){return e.map(function(e,r){return React.createElement("div",{key:r,className:"block x"+e.x+" y"+e.y,style:{backgroundColor:t.color}})})}},{key:"gridsBlockStyle",value:function(t,e,r){var o=this.sharedState,n=(o.rows,o.cols,o.spaing,o.normalSize,o.smallSize),i=this.gameSize,a=this.gameLeft,s=this.gameTop;return{left:(t?1===t?a+(i-e*(n+1*(e-1)))/2:a+i-e*(n+1*e):a)+"px",top:s+i+60-r*(n+1*(r-1))/2+"px"}}},{key:"createGrid",value:function(){var t=this,e=this.sharedState,r=(e.cols,e.rows,e.normalSize,e.spaing,e.gridData);this.gameSize,this.gameLeft,this.gameTop,this.gridsArr=[];for(var o=0;o<3;o++)this.gridsArr.push(r[Math.floor(Math.random()*r.length)]);return React.createElement("div",{className:"grids"},this.gridsArr.map(function(e,r){return React.createElement("div",{className:"grids-block","data-index":""+r,key:Math.random(),style:t.gridsBlockStyle(r,e.width,e.height)},React.createElement("div",{className:"small block"},t.gridBlock(e,e.shape)))}))}},{key:"blockListBox",value:function(){var t=this.sharedState;t.cols,t.rows,t.normalSize,t.spaing,t.gridData,this.Result=[];var e=this.createGrid();return this.Result.push(e),this.Result}},{key:"onMoving",value:function(t,e){t.style.left=e[0]+"px",t.style.top=e[1]+"px"}},{key:"returnHomePosition",value:function(t,e){t.style.left=e[0]+"px",t.style.top=e[1]+"px",this.gridsBlock.firstChild.classList.add("small"),this.gridsBlock.firstChild.classList.remove("normal")}},{key:"up",value:function(t,e,r){var o=this.gridsArr[t.dataset.index],n=ReactDOM.findDOMNode(this),i=this.sharedState,a=(i.cols,i.rows),s=i.normalSize,c=i.spaing,u=(this.gameSize,this.gameLeft),f=this.gameTop,d=e[0]-u,h=e[1]-f,p=Math.round(d/(s+c)),y=Math.round(h/(s+c)),v=p*(s+c)+u,g=y*(s+c)+f,m=!0,b=!1,x=void 0;try{for(var k,w=o.shape[Symbol.iterator]();!(m=(k=w.next()).done);m=!0){var S=k.value;if(this.addBlock.has(y+S.y+""+(p+S.x)))return void this.returnHomePosition(t,r)}}catch(t){b=!0,x=t}finally{try{!m&&w.return&&w.return()}finally{if(b)throw x}}if(p<0||p+o.width>10||y<0||y+o.height>10)this.returnHomePosition(t,r);else{var E,O=!0,M=!1,L=void 0;try{for(var j,R=o.shape[Symbol.iterator]();!(O=(j=R.next()).done);O=!0){var B=j.value,_=(0,l.default)('<div style="\n          left:'+(B.x?v+B.x*c+B.x*s:v)+"px;top:"+(B.y?g+B.y*c+B.y*s:g)+"px;background-color:"+o.color+"; width:"+s+"px; height:"+s+'px; position:absolute;border-radius: 6px;"></div>').append(n);this.addBlock.set(y+B.y+""+(B.x+p),_),this.score.has("x"+(p+B.x))?this.score.get("x"+(p+B.x)).s++:this.score.set("x"+(p+B.x),{s:1}),this.score.has("y"+(y+B.y))?this.score.get("y"+(y+B.y)).s++:this.score.set("y"+(y+B.y),{s:1})}}catch(t){M=!0,L=t}finally{try{!O&&R.return&&R.return()}finally{if(M)throw L}}this.num+=o.shape.length;var N=[],C=!0,U=!1,A=void 0;try{for(var T,z=this.score[Symbol.iterator]();!(C=(T=z.next()).done);C=!0){var P=T.value;if(10===P[1].s){var D="y"===P[0][0]?0:1,H=!0,I=!1,q=void 0;try{for(var F,G=this.addBlock[Symbol.iterator]();!(H=(F=G.next()).done);H=!0){var J=F.value;J[0][D]===P[0][1]&&(J[1].parentNode.removeChild(J[1]),this.addBlock.delete(J[0]))}}catch(t){I=!0,q=t}finally{try{!H&&G.return&&G.return()}finally{if(I)throw q}}N.push(P[0])}}}catch(t){U=!0,A=t}finally{try{!C&&z.return&&z.return()}finally{if(U)throw A}}var W=!0,$=!1,X=void 0;try{for(var Y,V=N[Symbol.iterator]();!(W=(Y=V.next()).done);W=!0)for(var K="y"===Y.value[0]?"x":"y",Q=0;Q<a;Q++)this.score.get(K+Q).s--}catch(t){$=!0,X=t}finally{try{!W&&V.return&&V.return()}finally{if($)throw X}}E=10*N.length;var Z=!0,tt=!1,et=void 0;try{for(var rt,ot=N[Symbol.iterator]();!(Z=(rt=ot.next()).done);Z=!0){var nt=rt.value;this.score.get(nt).s=0,N=[]}}catch(t){tt=!0,et=t}finally{try{!Z&&ot.return&&ot.return()}finally{if(tt)throw et}}this.scoreEl.innerHTML=this.num+E,this.count++,this.gridsArr.splice(t.dataset.index,1,null),this.count%3==0&&(this.Result=[],this.forceUpdate()),t.style.display="none",t.style.left=v+"px",t.style.top=g+"px",this.gameOver(this.gridsArr)}}},{key:"appropriate",value:function(t){for(var e=this,r=this.sharedState,n=r.rows,i=r.cols,a=(r.spaing,r.normalSize,r.smallSize,t.shape),s=function(r){for(var n=function(t){if(a.every(function(o){return!e.addBlock.has(""+(r+o.y)+(t+o.x))}))return{v:{v:!0}}},s=0;s<=i-t.width;s++){var l=n(s);if("object"===(void 0===l?"undefined":o(l)))return l.v}},l=0;l<=n-t.height;l++){var c=s(l);if("object"===(void 0===c?"undefined":o(c)))return c.v}return!1}},{key:"gameOver",value:function(t){var e=ReactDOM.findDOMNode(this);this.addBlock.size>30&&(t.filter(function(t){return t}).some(this.appropriate.bind(this))||(0,l.default)('<div class="game-over" style="left:'+(this.gameLeft+20)+'px;"><span>GAME OVER</span><input type="button" value="重玩" /></div>').append(e).lastChild.addEventListener("click",function(t){window.location.reload()},!1))}},{key:"componentDidMount",value:function(){var t=this,e=ReactDOM.findDOMNode(this),r=this.sharedState,o=(r.rows,r.cols,r.spaing,r.normalSize,r.smallSize,this.gameSize,this.gameLeft),n=this.gameTop,i=function(){return/mobile/gi.test(navigator.userAgent)},c=i()?"touchstart":"mousedown";i(),this.scoreEl||(this.scoreEl=(0,l.default)('<div class="score" style="left: '+(o+20)+"px; top: "+(n/2-5)+'px;">0</div>').append(e)),e.addEventListener(c,function(e){if(t.gridsBlock=(0,s.default)(e.target,".grids-block"),t.gridsBlock){var r=t.gridsBlock.firstChild;r.classList.remove("small"),r.classList.add("normal"),r.style.zIndex=2,(0,a.default)(e,t.onMoving.bind(t),t.up.bind(t))}},!1),window.addEventListener("orientationchange",function(t){console.log(1),90===orientation&&(e.style.transformOrigin="50% 60%",e.style.transform="rotate( -90deg )")},!1)}},{key:"render",value:function(){return React.createElement("div",{className:"game"},this.blockBgContainer(),this.blockListBox())}}]),e}();e.default=u},function(t,e,r){var o=r(4);"string"==typeof o&&(o=[[t.i,o,""]]);r(6)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(t.exports=o.locals)},function(t,e,r){(t.exports=r(5)(!1)).push([t.i,"p{color:#fff}body,html{background-color:#262626}.game{left:0;top:0;bottom:0;right:0}.game,.score{position:absolute}.score{color:#fff;font-size:30px}.game-container,.grid-item,.grids .grids-block .small.block{position:absolute}.grids .grids-block .small.block .block{position:absolute;width:15px;height:15px;border-radius:3px}.grids .grids-block .small.block .x0{left:0}.grids .grids-block .small.block .x1{left:16px}.grids .grids-block .small.block .x2{left:32px}.grids .grids-block .small.block .x3{left:48px}.grids .grids-block .small.block .x4{left:64px}.grids .grids-block .small.block .y0{top:0}.grids .grids-block .small.block .y1{top:16px}.grids .grids-block .small.block .y2{top:32px}.grids .grids-block .small.block .y3{top:48px}.grids .grids-block .small.block .y4{top:64px}.grids,.grids .grids-block,.grids .grids-block .normal.block{position:absolute}.grids .grids-block .normal.block .block{position:absolute;width:30px;height:30px;border-radius:6px}.grids .grids-block .normal.block .x0{left:0}.grids .grids-block .normal.block .x1{left:32px}.grids .grids-block .normal.block .x2{left:64px}.grids .grids-block .normal.block .x3{left:96px}.grids .grids-block .normal.block .x4{left:128px}.grids .grids-block .normal.block .y0{top:0}.grids .grids-block .normal.block .y1{top:32px}.grids .grids-block .normal.block .y2{top:64px}.grids .grids-block .normal.block .y3{top:96px}.grids .grids-block .normal.block .y4{top:128px}.game-over{position:absolute}.game-over span{font-size:30px;color:#fd0a19}.game-over input{font-size:30px;background-color:#262626;color:#3058fd}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=function(t,e){var r=t[1]||"",o=t[3];if(!o)return r;if(e&&"function"==typeof btoa){var n=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(o),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[r].concat(i).concat([n]).join("\n")}return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(o[i]=!0)}for(n=0;n<t.length;n++){var a=t[n];"number"==typeof a[0]&&o[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(t,e,r){var o={},n=function(t){var e;return function(){return void 0===e&&(e=function(){return window&&document&&document.all&&!window.atob}.apply(this,arguments)),e}}(),i=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),a=null,s=0,l=[],c=r(7);function u(t,e){for(var r=0;r<t.length;r++){var n=t[r],i=o[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(v(n.parts[a],e))}else{var s=[];for(a=0;a<n.parts.length;a++)s.push(v(n.parts[a],e));o[n.id]={id:n.id,refs:1,parts:s}}}}function f(t,e){for(var r=[],o={},n=0;n<t.length;n++){var i=t[n],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):r.push(o[a]={id:a,parts:[s]})}return r}function d(t,e){var r=i(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===t.insertAt)o?o.nextSibling?r.insertBefore(e,o.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),l.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=i(t.insertInto+" "+t.insertAt.before);r.insertBefore(e,n)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function p(t){var e=document.createElement("style");return t.attrs.type="text/css",y(e,t.attrs),d(t,e),e}function y(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function v(t,e){var r,o,n,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=s++;r=a||(a=p(e)),o=m.bind(null,r,l,!1),n=m.bind(null,r,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",y(e,t.attrs),d(t,e),e}(e),o=function(t,e,r){var o=r.css,n=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&n;(e.convertToAbsoluteUrls||i)&&(o=c(o)),n&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,r,e),n=function(){h(r),r.href&&URL.revokeObjectURL(r.href)}):(r=p(e),o=function(t,e){var r=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,r),n=function(){h(r)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else n()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=n()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=f(t,e);return u(r,e),function(t){for(var n=[],i=0;i<r.length;i++){var a=r[i];(s=o[a.id]).refs--,n.push(s)}for(t&&u(f(t,e),e),i=0;i<n.length;i++){var s;if(0===(s=n[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete o[s.id]}}}};var g=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}();function m(t,e,r,o){var n=r?"":o.css;if(t.styleSheet)t.styleSheet.cssText=g(e,n);else{var i=document.createTextNode(n),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,o=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var n,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(n=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(r(9)),n=i(r(10));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e,r){var i,a,s=void 0,l=void 0,c=t.target.parentNode.parentNode,u=c.getBoundingClientRect(),f=[u.left,u.top],d=[t.pageX-f[0],t.pageY-f[1]];t.preventDefault(),e=e||Function(),r=r||Function();var h=function(){return/mobile/gi.test(navigator.userAgent)};h(),i=h()?"touchmove":"mousemove",a=h()?"touchend":"mouseup";var p=function(t){s=[t.pageX,t.pageY],l=[s[0]-d[0],s[1]-d[1]],(0,n.default)(d,s)>6&&e(c,l)};o.default.on(document,i,p),o.default.on(document,a,function t(){r(c,l,f),o.default.off(document,i,p),o.default.off(document,a,t)})}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={on:function(t,e,r){t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent?t.attachEvent("on"+e,r):t["on"+e]=r},off:function(t,e,r){t.removeEventListener?t.removeEventListener(e,r,!1):t.detachEvent?t.detachEvent("on"+e,r):t["on"+e]=null}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[0]-e[0],2))}},function(t,e,r){"use strict";function o(t,e){var r=/^\./;if(r.test(e))for(;t&&t.tagName&&t.className!==e.replace(r,"");)t=t.parentNode;else for(;t&&t.tagName&&t.tagName.toLowerCase()!==tagName.toLowerCase();)t=t.parentNode;return t.tagName?t:null}Object.defineProperty(e,"__esModule",{value:!0}),e.closest=o,e.default=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var t=function(t){this.html=t};return t.prototype.getElementsByHtml=function(t){var e=document.createElementNS("xml","x");e.innerHTML=Array.isArray(t)?t.join(""):t;var r=e.childNodes;return[].slice.call(r,0)},t.prototype.innerHTML=function(t,e,r){var o=this.getElementsByHtml(this.html);return o.forEach(function(r){t.insertBefore(r,e)}),1===o.length?o[0]:o},t.prototype.append=function(t,e){return this.innerHTML(t,null,this.html)},t.prototype.prepend=function(t,e){return this.innerHTML(t,t.firstChild,this.html)},t.prototype.before=function(t,e){return this.innerHTML(t.parentNode,t,this.html)},t.prototype.after=function(t,e){return this.innerHTML(t.parentNode,t.nextSibling,this.html)},t.prototype.replace=function(t,e){return this.getElementsByHtml(this.html).forEach(function(e){t.parentNode.insertBefore(e,t)}),t.parentNode.removeChild(t)},function(e){return new t(e)}}();e.default=o}],[1]);