(function(t){function e(e){for(var r,l,c=e[0],i=e[1],a=e[2],f=0,p=[];f<c.length;f++)l=c[f],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);s&&s(e);while(p.length)p.shift()();return u.push.apply(u,a||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(u.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},o={app:0},u=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/last-visit/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var s=i;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},4537:function(t,e,n){},5300:function(t,e,n){"use strict";n("4537")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],l=(n("cf25"),n("2877")),c={},i=Object(l["a"])(c,o,u,!1,null,null,null),a=i.exports,s=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("lv-button",{staticClass:"lv-button--light",attrs:{text:"LOGOUT"},on:{"lv-button-clicked":t.logout}})],1)},p=[],d={name:"Home",methods:{logout:function(){this.$router.push("Login")}}},b=d,v=Object(l["a"])(b,f,p,!1,null,null,null),h=v.exports;r["a"].use(s["a"]);var m=[{path:"/",name:"Home",component:h}],y=new s["a"]({routes:m}),g=y,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"lv-button",attrs:{type:t.type},on:{click:t.btnClicked}},[t._v(t._s(t.text))])},_=[],w={name:"lv-button",props:{text:String,type:{type:String,default:"button"}},methods:{btnClicked:function(){this.$emit("lv-button-clicked")}}},j=w,x=(n("5300"),Object(l["a"])(j,O,_,!1,null,null,null)),k=x.exports;r["a"].config.productionTip=!1,r["a"].component("lv-button",k),new r["a"]({router:g,render:function(t){return t(a)}}).$mount("#app")},cf25:function(t,e,n){"use strict";n("fea6")},fea6:function(t,e,n){}});
//# sourceMappingURL=app.f86843f6.js.map