(function(t){function e(e){for(var r,i,c=e[0],u=e[1],s=e[2],l=0,p=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"908cb11f"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var s=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,o,a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},c=[],u=(n("034f"),n("2877")),s={},l=Object(u["a"])(s,i,c,!1,null,null,null),f=l.exports,p=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"revice-btn",on:{click:t.receiveMonthPayNotComeUp}},[t._v("立即领取")]),t._m(1),t.showCommonConfirm?n("CommonConfirm",{attrs:{title:t.title,desc:t.desc},on:{confrimCb:t.confrimCb}}):t._e()],1)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"coupon"},[n("div",{staticClass:"title"},[t._v("月付不涨价券")]),n("div",{staticClass:"dash"}),n("div",{staticClass:"desc"},[t._v("签约时选择月付时，可以使用本券抵月付服务费")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"instructions"},[t._v(" 优惠券使用说明： "),n("br"),t._v(" 1.现阶段仅面向5级用户开放，可在冠寓APP“我的”-“花珑珠”-“月付不涨价券”免费领取。 "),n("br"),t._v(" 2.同一用户一个自然年内只能使用一次月付不涨价券。 "),n("br"),t._v(" 3.此优惠券的有效期为本年度12月31日，过期作废 "),n("br"),t._v(" 4.月付不涨价券”不可与其他优惠同时使用 "),n("br"),t._v(" 5.已领取的“月付不涨价券”请到冠寓APP“我的”——“优惠券”中查看 "),n("br"),t._v(" 6.此券可在全国所有冠寓门店通用。 "),n("br"),t._v(" 7.请在操作签约前提前兑换月付不涨价券，并告知门店运营官您要使用该券。 "),n("br"),t._v(" 8.珑珠抵扣金额部分不支持开具发票 ")])}],b=n("d4ec"),m=n("262e"),h=n("2caf"),_=n("1b40"),y=(r=Object(_["a"])({}),r(o=function(t){Object(m["a"])(n,t);var e=Object(h["a"])(n);function n(){return Object(b["a"])(this,n),e.apply(this,arguments)}return n}(a["a"]))||o),g=y,j=(n("f6c6"),Object(u["a"])(g,v,d,!1,null,"7173aa78",null)),w=j.exports;a["a"].use(p["a"]);var O=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],C=new p["a"]({routes:O}),P=C;a["a"].config.productionTip=!1,new a["a"]({router:P,render:function(t){return t(f)}}).$mount("#app")},"85ec":function(t,e,n){},e152:function(t,e,n){},f6c6:function(t,e,n){"use strict";n("e152")}});
//# sourceMappingURL=app.6b26c739.js.map