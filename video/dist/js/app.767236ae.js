(function(e){function t(t){for(var n,a,l=t[0],i=t[1],s=t[2],p=0,f=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);c&&c(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,l=1;l<r.length;l++){var i=r[l];0!==o[i]&&(n=!1)}n&&(u.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},u=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var c=i;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},2395:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},u=[],a=(r("7c55"),r("2877")),l={},i=Object(a["a"])(l,o,u,!1,null,null,null),s=i.exports,c=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("video",{ref:"player",staticClass:"video-js video",attrs:{controls:"",autoplay:"autoplay"},on:{ended:e.onEnded}},[r("source",{attrs:{src:e.url,type:"video/mp4"}})])])},f=[],d={name:"Home",data:function(){var e="//localhost:8088/video?name=1";return{url:e,url1:e,url2:"//localhost:8088/video?name=2",url3:"//localhost:8088/video?name=3"}},create:function(){},mounted:function(){},methods:{onEnded:function(e){this.url===this.url1?(this.$refs.player.src=this.url2,this.$refs.player.play()):this.url===this.url2?(this.$refs.player.src=this.url3,this.$refs.player.play()):this.url===this.url3&&(this.$refs.player.src=this.url1)}}},h=d,v=(r("cccb"),Object(a["a"])(h,p,f,!1,null,null,null)),y=v.exports;n["a"].use(c["a"]);var b=[{path:"/",name:"Home",component:y}],m=new c["a"]({mode:"history",base:"/",routes:b}),w=m,O=r("2f62");n["a"].use(O["a"]);var g=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:w,store:g,render:function(e){return e(s)}}).$mount("#app")},"5ced":function(e,t,r){},"7c55":function(e,t,r){"use strict";var n=r("2395"),o=r.n(n);o.a},cccb:function(e,t,r){"use strict";var n=r("5ced"),o=r.n(n);o.a}});
//# sourceMappingURL=app.767236ae.js.map