webpackJsonp([0],[function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r(1);var a=u(r(6)),o=u(r(7)),i=(u(r(8)),u(r(9)));function u(e){return e&&e.__esModule?e:{default:e}}var s=1,l={},c=[],d=i.default.width,f=i.default.height,y=i.default.chessBoardLeft,p=i.default.chessBoardTop,b=i.default.chessBoardGirdSize,v=i.default.pieceSize,h=document.querySelector("#container");h.style.width=d+"px",h.style.height=f+"px",h.style.margin="0 auto 20px auto";var m=h.querySelector(".tag"),g=[],x=[],k=[],w=[],S=new Map,j=new Map,L=void 0,R=void 0,B=!0,M=null,N=0,U=function(e,t,r,o){var i=[],u=[],s=new Map(o),l={},c=void 0,d=void 0;Object.assign(l,r),s.delete(l.y+","+l.x),l.x=Number(e),l.y=Number(t),s.set(t+","+e,l);var f=!0,y=!1,p=void 0;try{for(var b,v=s[Symbol.iterator]();!(f=(b=v.next()).done);f=!0){var h=b.value;"red"===h[1].base?("king"===h[1].type&&(c=h[1]),i.push(h[1])):("king"===h[1].type&&(d=h[1]),u.push(h[1]))}}catch(e){y=!0,p=e}finally{try{!f&&v.return&&v.return()}finally{if(y)throw p}}var m="red"===r.base?u:i,g=!0,x=!1,k=void 0;try{for(var w,S=function(){var e=w.value,t=e.x,r=e.y,n=e.type,o=e.base,i=a.default.filter(function(e){return e.type===n})[0].rule({x:t,y:r,type:n,base:o},s),u=!0,l=!1,f=void 0;try{for(var y,p=i[Symbol.iterator]();!(u=(y=p.next()).done);u=!0){var b=y.value,v=b.x,h=b.y;if(c.x===v&&c.y===h||d.x===v&&d.y===h)return{v:!1}}}catch(e){l=!0,f=e}finally{try{!u&&p.return&&p.return()}finally{if(l)throw f}}},j=m[Symbol.iterator]();!(g=(w=j.next()).done);g=!0){var L=S();if("object"===(void 0===L?"undefined":n(L)))return L.v}}catch(e){x=!0,k=e}finally{try{!g&&j.return&&j.return()}finally{if(x)throw k}}return!0},C=function(e,t){return{x:""+(y+e*b[0]-v/2),y:""+(p+t*b[1]-v/2)}},T=function(e,t){var r=e.el,n=e.x,a=e.y,o=e.type,i=e.base,u=e.labelRed,s=e.labelBlack;r.style.left=t.x+"px",r.style.top=t.y+"px",r.dataset.x=n,r.dataset.y=a,r.dataset.type=o,r.dataset.label="red"===i?u:s,r.style.width=v+"px",r.style.height=v+"px"},O=!0,E=!1,A=void 0;try{for(var I,_=a.default[Symbol.iterator]();!(O=(I=_.next()).done);O=!0){var P=I.value,z=P.type,q=(P.rule,P.defaultPosition),D=P.labelRed,G=P.labelBlack,H=!0,J=!1,$=void 0;try{for(var F,K=q[Symbol.iterator]();!(H=(F=K.next()).done);H=!0){var Q,V=F.value,W=V.x,X=V.y,Y=V.base;(Q=document.createElement("div")).className="piece "+Y+" "+z;var Z=C(W,X);h.appendChild(Q),j.set(X+","+W,L={x:W,y:X,base:Y,type:z,labelRed:D,labelBlack:G,el:Q}),T(L,Z)}}catch(e){J=!0,$=e}finally{try{!H&&K.return&&K.return()}finally{if(J)throw $}}}}catch(e){E=!0,A=e}finally{try{!O&&_.return&&_.return()}finally{if(E)throw A}}var ee=function(e){var t=document.createElement("p"),r=document.querySelector(".record");e?(t.innerHTML=s+". "+(/\d/.test(e)?"黑方":"红方")+"  "+e,s++):t.innerHTML="红方先走",r.appendChild(t),r.style.scrollTop=25*s},te=function(e){switch(e){case 0:return"九";case 1:return"八";case 2:return"七";case 3:return"六";case 4:return"五";case 5:return"四";case 6:return"三";case 7:return"二";case 8:return"一"}};ee();var re=function(e,t){var r=void 0;x.length?(r=x.shift()).classList.remove("hidden"):((r=document.createElement("div")).className="indicator",r.style.width=d+"px",r.style.height=f+"px",h.appendChild(r));var n=C(e,t);T({el:r,x:e,y:t},n),g.push(r)};h.addEventListener("click",function(e){var t,r;if(function(){var e=!0,t=!1,r=void 0;try{for(var n,a=g[Symbol.iterator]();!(e=(n=a.next()).done);e=!0)n.value.classList.add("hidden")}catch(e){t=!0,r=e}finally{try{!e&&a.return&&a.return()}finally{if(t)throw r}}x.push.apply(x,g),g.length=0}(),t=(0,o.default)(e.target,".piece")){R=B?"red":"black";var i=t.dataset,u=i.x,s=i.y,d=i.label,f=i.type;if(l={position:[Number(u),Number(s)],base:R,label:d,type:f},(M=j.get(s+","+u)).base!==R)return;var y=a.default.filter(function(e){return e.type===M.type})[0].rule(M,j),p=!0,b=!1,v=void 0;try{for(var h,L=y[Symbol.iterator]();!(p=(h=L.next()).done);p=!0){var O=h.value,E=O.x,A=O.y;U(E,A,M,j)&&re(E,A)}}catch(e){b=!0,v=e}finally{try{!p&&L.return&&L.return()}finally{if(b)throw v}}}if(r=(0,o.default)(e.target,".indicator")){var I=r.dataset,_=I.x,P=I.y,z=void 0;c=[Number(_),Number(P)],B=!B,setTimeout(function(){return m.classList.toggle("red")},400),(z=j.get(P+","+_))&&(z.el.style.display="none",S.set(z.y+","+N+","+z.x,z),N++),k.push({el:M.el,x:M.x,y:M.y,type:M.type,base:M.base}),w.push({x:_,y:P}),j.delete(M.y+","+M.x),M.x=Number(_),M.y=Number(P),j.set(P+","+_,M),T(M,C(_,P)),function(e,t){var r=e.position,n=e.base,a=e.label,o=e.type;if("red"===n){var i=r[1]===t[1]?"平":r[1]>t[1]?"进":"退";ee(" \n      "+a+" \n      "+te(r[0])+" \n      "+i+" \n      "+("平"===i?te(t[0]):"horse"===o||"guard"===o||"eleph"===o?te(t[0]):function(e){switch(Math.abs(r[1]-t[1])){case 9:return"九";case 8:return"八";case 7:return"七";case 6:return"六";case 5:return"五";case 4:return"四";case 3:return"三";case 2:return"二";case 1:return"一"}}())+"\n    ")}else{var u=r[1]===t[1]?"平":r[1]>t[1]?"退":"进";ee("\n      "+a+" \n      "+(r[0]+1)+" \n      "+u+"\n      "+("平"===u?t[0]+1:"horse"===o||"guard"===o||"eleph"===o?t[0]+1:Math.abs(r[1]-t[1]))+"\n    ")}}(l,c),function(e,t){var r=[],o=[],i=!0,u=!1,s=void 0;try{for(var l,c=t[Symbol.iterator]();!(i=(l=c.next()).done);i=!0){var d=l.value;"red"===d[1].base?r.push(d[1]):o.push(d[1])}}catch(e){u=!0,s=e}finally{try{!i&&c.return&&c.return()}finally{if(u)throw s}}var f="red"===e.base?o:r,y=!0,p=!1,b=void 0;try{for(var v,h=function(){var e=v.value,t=a.default.filter(function(t){return t.type===e.type})[0].rule(e,j),r=!0,n=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){var s=i.value,l=s.x,c=s.y;if(U(l,c,e,j))return{v:!1}}}catch(e){n=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(n)throw o}}},m=f[Symbol.iterator]();!(y=(v=m.next()).done);y=!0){var g=h();if("object"===(void 0===g?"undefined":n(g)))return g.v}}catch(e){p=!0,b=e}finally{try{!y&&m.return&&m.return()}finally{if(p)throw b}}return!0}(M,j)&&setTimeout(function(){return alert(("red"===M.base?"红":"黑")+"方赢了")},700)}if((0,o.default)(e.target,".regret")&&k.length){var q=k.pop(),D=w.pop(),G=void 0;B=!B,setTimeout(function(){return m.classList.toggle("red")},400),(G=S.get(D.y+","+(N-1)+","+D.x))?(G.el.style.display="block",S.delete(D.y+","+(N-1)+","+D.x),j.set(D.y+","+D.x,G),N--):j.delete(D.y+","+D.x),j.set(q.y+","+q.x,q),T(q,C(q.x,q.y))}},!1)},function(e,t,r){var n=r(2);"string"==typeof n&&(n=[[e.i,n,""]]);r(4)(n,{hmr:!0,transform:void 0,insertInto:void 0}),n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(3)(!1)).push([e.i,"body{background-color:#ddd}body,html{margin:0;padding:0}#app{width:100%;height:100%;margin-top:20px}#container{background-image:url(//cdn.summerfarm.net/ijsuc/img/chessboard.png);background-size:100%;position:relative}#container>.tag{position:absolute;width:36px;height:36px;right:-18px;top:454px;background-image:url(//cdn.summerfarm.net/ijsuc/img/tag.png);background-size:cover;transition:all .3s ease}#container>.tag.red{top:100px}#container>.piece{position:absolute;border-radius:50%;transition:all .3s ease;cursor:pointer}#container>.piece.black,#container>.piece.red{background-size:cover}#container>.piece.black.king{background-image:url(//cdn.summerfarm.net/ijsuc/img/king1.png)}#container>.piece.red.king{background-image:url(//cdn.summerfarm.net/ijsuc/img/king.png)}#container>.piece.black.rook{background-image:url(//cdn.summerfarm.net/ijsuc/img/rook1.png)}#container>.piece.red.rook{background-image:url(//cdn.summerfarm.net/ijsuc/img/rook.png)}#container>.piece.black.horse{background-image:url(//cdn.summerfarm.net/ijsuc/img/horse1.png)}#container>.piece.red.horse{background-image:url(//cdn.summerfarm.net/ijsuc/img/horse.png)}#container>.piece.black.guard{background-image:url(//cdn.summerfarm.net/ijsuc/img/guard1.png)}#container>.piece.red.guard{background-image:url(//cdn.summerfarm.net/ijsuc/img/guard.png)}#container>.piece.black.eleph{background-image:url(//cdn.summerfarm.net/ijsuc/img/eleph1.png)}#container>.piece.red.eleph{background-image:url(//cdn.summerfarm.net/ijsuc/img/eleph.png)}#container>.piece.black.pawn{background-image:url(//cdn.summerfarm.net/ijsuc/img/pawn1.png)}#container>.piece.red.pawn{background-image:url(//cdn.summerfarm.net/ijsuc/img/pawn.png)}#container>.piece.black.cannon{background-image:url(//cdn.summerfarm.net/ijsuc/img/cannon1.png)}#container>.piece.red.cannon{background-image:url(//cdn.summerfarm.net/ijsuc/img/cannon.png)}#container>.indicator{background-image:url(//cdn.summerfarm.net/ijsuc/img/indicator.png);opacity:.9;background-size:cover;position:absolute;border-radius:50%}#container>.indicator.hidden{display:none}#container .indicator:hover{box-shadow:0 0 3px 3px #343be1}#container .piece.red:hover{box-shadow:0 0 3px 3px red}#container .piece.black:hover{box-shadow:0 0 3px 3px #000}.regret{position:absolute;top:0;left:0;background-color:#fff;outline:none}.regret:hover{background-color:red;color:#fff}.record{position:absolute;right:-80px}.record>p{margin:0;line-height:1.6rem}.record.mobile{position:relative;width:100%;padding:5px 10px;right:0;overflow-y:scroll}#cnzz_stat_icon_1261005751{display:none!important}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var a=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(n),o=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[r].concat(o).concat([a]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(n[o]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},function(e,t,r){var n={},a=function(e){var t;return function(){return void 0===t&&(t=function(){return window&&document&&document.all&&!window.atob}.apply(this,arguments)),t}}(),o=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),i=null,u=0,s=[],l=r(5);function c(e,t){for(var r=0;r<e.length;r++){var a=e[r],o=n[a.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](a.parts[i]);for(;i<a.parts.length;i++)o.parts.push(v(a.parts[i],t))}else{var u=[];for(i=0;i<a.parts.length;i++)u.push(v(a.parts[i],t));n[a.id]={id:a.id,refs:1,parts:u}}}}function d(e,t){for(var r=[],n={},a=0;a<e.length;a++){var o=e[a],i=t.base?o[0]+t.base:o[0],u={css:o[1],media:o[2],sourceMap:o[3]};n[i]?n[i].parts.push(u):r.push(n[i]={id:i,parts:[u]})}return r}function f(e,t){var r=o(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=s[s.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),s.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=o(e.insertInto+" "+e.insertAt.before);r.insertBefore(t,a)}}function y(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=s.indexOf(e);t>=0&&s.splice(t,1)}function p(e){var t=document.createElement("style");return e.attrs.type="text/css",b(t,e.attrs),f(e,t),t}function b(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function v(e,t){var r,n,a,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var s=u++;r=i||(i=p(t)),n=m.bind(null,r,s,!1),a=m.bind(null,r,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",b(t,e.attrs),f(e,t),t}(t),n=function(e,t,r){var n=r.css,a=r.sourceMap,o=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||o)&&(n=l(n)),a&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var i=new Blob([n],{type:"text/css"}),u=e.href;e.href=URL.createObjectURL(i),u&&URL.revokeObjectURL(u)}.bind(null,r,t),a=function(){y(r),r.href&&URL.revokeObjectURL(r.href)}):(r=p(t),n=function(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),a=function(){y(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else a()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=d(e,t);return c(r,t),function(e){for(var a=[],o=0;o<r.length;o++){var i=r[o];(u=n[i.id]).refs--,a.push(u)}for(e&&c(d(e,t),t),o=0;o<a.length;o++){var u;if(0===(u=a[o]).refs){for(var s=0;s<u.parts.length;s++)u.parts[s]();delete n[u.id]}}}};var h=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}();function m(e,t,r,n){var a=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=h(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var a,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(a=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=function(e,t){return e>=0&&e<9&&t>=0&&t<10},o=function(e,t){return e>2&&e<6&&(t>=0&&t<3||t<=9&&t>6)},i=[{x:0,y:-1},{x:1,y:0},{x:0,y:1},{x:-1,y:0}];t.default=[{type:"rook",labelRed:"車",labelBlack:"車",rule:function(e,t){for(var r=[],n=[1,1,1,1],o=void 0,u=1;!n.every(function(e){return 0===e});){for(var s=0;s<i.length;s++){var l=i[s],c=e.x+l.x*u,d=e.y+l.y*u;if(a(c,d))if(o=t.get(d+","+c)){if(o.base!==e.base&&n[s]){r.push({x:c,y:d}),n[s]=0;continue}n[s]=0}else n[s]&&r.push({x:c,y:d});else n[s]=0}u++}return r},defaultPosition:[{x:0,y:0,base:"black"},{x:8,y:0,base:"black"},{x:0,y:9,base:"red"},{x:8,y:9,base:"red"}]},{type:"horse",labelRed:"馬",labelBlack:"馬",rule:function(e,t){for(var r=[],n=0;n<i.length;n++){var o=i[n],u=void 0,s=e.x+o.x,l=e.y+o.y;if(!t.has(l+","+s)){var c=!0,d=!1,f=void 0;try{for(var y,p=this.steps[n][Symbol.iterator]();!(c=(y=p.next()).done);c=!0){var b=y.value,v=e.x+b.x,h=e.y+b.y;a(v,h)&&((u=t.get(h+","+v))&&e.base===u.base||r.push({x:v,y:h}))}}catch(e){d=!0,f=e}finally{try{!c&&p.return&&p.return()}finally{if(d)throw f}}}}return r},defaultPosition:[{x:1,y:0,base:"black"},{x:7,y:0,base:"black"},{x:1,y:9,base:"red"},{x:7,y:9,base:"red"}],steps:[[{x:-1,y:-2},{x:1,y:-2}],[{x:2,y:-1},{x:2,y:1}],[{x:1,y:2},{x:-1,y:2}],[{x:-2,y:1},{x:-2,y:-1}]]},{type:"king",labelRed:"帥",labelBlack:"將",rule:function(e,t){var r=[],a=void 0,u=void 0,s=void 0,l=[],c=!0,d=!1,f=void 0;try{for(var y,p=i[Symbol.iterator]();!(c=(y=p.next()).done);c=!0){var b=y.value,v=e.x+b.x,h=e.y+b.y;o(v,h)&&((a=t.get(h+","+v))&&a.base===e.base||r.push({x:v,y:h}))}}catch(e){d=!0,f=e}finally{try{!c&&p.return&&p.return()}finally{if(d)throw f}}var m=!0,g=!1,x=void 0;try{for(var k,w=t[Symbol.iterator]();!(m=(k=w.next()).done);m=!0){var S=n(k.value,2),j=(S[0],S[1]);"king"===j.type&&"red"===j.base&&(u=j),"king"===j.type&&"black"===j.base&&(s=j)}}catch(e){g=!0,x=e}finally{try{!m&&w.return&&w.return()}finally{if(g)throw x}}if(u.x===s.x){for(var L=s.y+1;L<u.y;L++)l.push(t.has(L+","+u.x));l.every(function(e){return!1===e})&&r.push({x:s.x,y:s.y},{x:u.x,y:u.y})}return r},defaultPosition:[{x:4,y:0,base:"black"},{x:4,y:9,base:"red"}]},{type:"guard",labelRed:"仕",labelBlack:"士",rule:function(e,t){var r=[],n=void 0,a=!0,i=!1,u=void 0;try{for(var s,l=this.steps[Symbol.iterator]();!(a=(s=l.next()).done);a=!0){var c=s.value,d=e.x+c.x,f=e.y+c.y;o(d,f)&&((n=t.get(f+","+d))&&n.base===e.base||r.push({x:d,y:f}))}}catch(e){i=!0,u=e}finally{try{!a&&l.return&&l.return()}finally{if(i)throw u}}return r},defaultPosition:[{x:3,y:0,base:"black"},{x:5,y:0,base:"black"},{x:3,y:9,base:"red"},{x:5,y:9,base:"red"}],steps:[{x:1,y:-1},{x:1,y:1},{x:-1,y:1},{x:-1,y:-1}]},{type:"eleph",labelRed:"相",labelBlack:"象",rule:function(e,t){for(var r=[],n=void 0,o=0;o<this.steps.length;o++){var i=this.steps[o],u=this.obstac[o],s=e.x+i.x,l=e.y+i.y,c=e.x+u.x,d=e.y+u.y;!a(s,l)||this.isInDomain(l)||t.get(d+","+c)||(n=t.get(l+","+s))&&n.base===e.base||r.push({x:s,y:l})}return r},defaultPosition:[{x:2,y:0,base:"black"},{x:6,y:0,base:"black"},{x:2,y:9,base:"red"},{x:6,y:9,base:"red"}],isInDomain:function(e){return 3===e||6===e},obstac:[{x:1,y:-1},{x:1,y:1},{x:-1,y:1},{x:-1,y:-1}],steps:[{x:2,y:-2},{x:2,y:2},{x:-2,y:2},{x:-2,y:-2}]},{type:"pawn",labelRed:"兵",labelBlack:"卒",rule:function(e,t){var r=[],n="red"===e.base?e.y<5:e.y>4,o=!0,u=!1,s=void 0;try{for(var l,c=i[Symbol.iterator]();!(o=(l=c.next()).done);o=!0){var d,f=l.value,y=e.x+f.x,p=e.y+f.y;1===f.y&&"red"===e.base||-1===f.y&&"black"===e.base||a(y,p)&&(n||0===f.x)&&((d=t.get(p+","+y))&&d.base===e.base||r.push({x:y,y:p}))}}catch(e){u=!0,s=e}finally{try{!o&&c.return&&c.return()}finally{if(u)throw s}}return r},defaultPosition:function(){for(var e=[],t=0;t<10;t+=2)e.push({x:t,y:3,base:"black"}),e.push({x:t,y:6,base:"red"});return e}()},{type:"cannon",labelRed:"炮",labelBlack:"砲",rule:function(e,t){for(var r=[],n=[1,1,1,1],o=[0,0,0,0],u=1,s=void 0;!n.every(function(e){return 0===e});){for(var l=0;l<i.length;l++){var c=i[l],d=e.x+c.x*u,f=e.y+c.y*u;a(d,f)?(s=t.get(f+","+d))?(o[l]++,2===o[l]&&s.base!==e.base&&r.push({x:d,y:f})):o[l]||r.push({x:d,y:f}):n[l]=0}u++}return r},defaultPosition:[{x:1,y:2,base:"black"},{x:7,y:2,base:"black"},{x:1,y:7,base:"red"},{x:7,y:7,base:"red"}]}]},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=e,n=/^\./;for("string"==typeof t&&(t=function(e){return n.test(e)?function(t){return t.classList.contains(e.replace(n,""))}:function(t){return t.tagName.toLowerCase()===e.toLowerCase()}}(t));!t(r);)if(!(r=r.parentElement))return null;return r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=document.createElement("audio");r.className="snd",r.setAttribute("src",""+e),r.autoplay=!0,r.load(),document.body.appendChild(r),setTimeout(function(){var e=document.querySelector(".snd");e.parentNode.removeChild(e)},t)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=document.querySelector(".record"),a=void 0,o=void 0;/mobile/gi.test(navigator.userAgent)?(n.classList.add("mobile"),a=window.screen.width-20,o=Math.round(a/.9)):(o=window.screen.height-200,a=Math.round(.9*o)),n.style.height=window.screen.height-o-50+"px";var i=a/2166,u=o/2416,s=[236.25*i,2134/9*u],l={width:a,height:o,chessBoardLeft:138*i,chessBoardTop:141*u,chessBoardGirdSize:s,pieceSize:s[0]-4};t.default=l}],[0]);