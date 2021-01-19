(function(t){function e(e){for(var a,l,r=e[0],s=e[1],u=e[2],p=0,d=[];p<r.length;p++)l=r[p],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&d.push(i[l][0]),i[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},i={app:0},o=[];function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/last-visit/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1628:function(t,e,n){"use strict";n("f06a")},4537:function(t,e,n){},5300:function(t,e,n){"use strict";n("4537")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],l=(n("cf25"),n("2877")),r={},s=Object(l["a"])(r,i,o,!1,null,null,null),u=s.exports,c=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("lv-button",{staticClass:"lv-button--light",attrs:{text:"LOGOUT"},on:{"lv-button-clicked":t.logout}})],1)},d=[],f={name:"Home",methods:{logout:function(){this.$router.push("Login")}}},v=f,m=Object(l["a"])(v,p,d,!1,null,null,null),b=m.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login view"},[a("img",{staticClass:"login__icon",attrs:{src:n("e426")}}),a("form",{staticClass:"login__form",attrs:{novalidate:""}},[a("lv-input",{attrs:{placeholder:"Email",type:"email",validations:"email|required",name:"email",label:"E-mail",id:"login-email"},on:{"lv-input-value":function(e){return t.setValue(e,"email")}}}),a("lv-input",{attrs:{placeholder:"password",type:"password",validations:"required",name:"password",label:"Password",id:"login-pass"},on:{"lv-input-value":function(e){return t.setValue(e,"password")}}}),a("lv-button",{staticClass:"lv-button--dark login__form-button",attrs:{text:"Log In","max-width":"",disableButton:t.disableButton},on:{"lv-button-clicked":t.login}})],1)])},g=[],_=n("2591"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lv-input"},[n("label",{staticClass:"hidden",attrs:{for:t.inputId}},[t._v(t._s(t.label))]),n("input",{directives:[{name:"validate",rawName:"v-validate",value:t.validations,expression:"validations"}],staticClass:"lv-input__input",attrs:{id:t.inputId,type:t.type,placeholder:t.placeholder,"data-vv-as":t.inputAlias,name:t.name},on:{input:t.emitValue}}),n("p",{staticClass:"lv-input__error"},[t._v(t._s(t.errors&&t.errors.first(t.name)))])])},w=[],x=(n("498a"),{name:"lv-input",props:{type:{type:String,default:"text"},label:String,placeholder:String,validations:String,inputAlias:String,name:String,inputId:String},methods:{emitValue:function(t){this.$emit("lv-input-value",t.target.value.trim())}}}),S=x,O=(n("d552"),Object(l["a"])(S,y,w,!1,null,null,null)),j=O.exports,I={name:"Login",components:{LvInput:j},data:function(){return{email:"",password:"",lastSignIn:0}},computed:{disableButton:function(){return""===this.email||""===this.password||!!this.errors.items.length}},methods:{login:function(){var t=this;_["a"].auth().signInWithEmailAndPassword(this.email,this.password).then((function(e){var n=e.user.metadata.lastSignInTime,a=new Date(n).getTime(),i=_["a"].database().ref("Users/".concat(e.user.uid));i.on("value",(function(t){t.exists()&&t.val().lastSignIn||i.set({lastSignIn:a,lastSignInTime:n})})),t.$router.push("Home")})).catch((function(t){console.log(t)}))},setValue:function(t,e){this[e]=t}}},k=I,C=(n("1628"),Object(l["a"])(k,h,g,!1,null,null,null)),T=C.exports;a["a"].use(c["a"]);var $=[{path:"/Home",name:"Home",component:b},{path:"/login",name:"Login",component:T}],B=new c["a"]({routes:$}),E=B,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"lv-button",class:{"lv-button--max-width":t.maxWidth,"lv-button--disable":t.disableButton},attrs:{type:t.type},on:{click:t.btnClicked}},[t._v(t._s(t.text))])},A=[],L={name:"lv-button",props:{text:String,type:{type:String,default:"button"},maxWidth:Boolean,disableButton:Boolean},methods:{btnClicked:function(){this.$emit("lv-button-clicked")}}},V=L,H=(n("5300"),Object(l["a"])(V,P,A,!1,null,null,null)),M=H.exports,J=n("7bb1"),W=n("260b"),K={apiKey:"AIzaSyBQ6-TlsOt7TSN9JHMZhVuxKAJE3WKrmTk",authDomain:"last-visit-32fc1.firebaseapp.com",projectId:"last-visit-32fc1",storageBucket:"last-visit-32fc1.appspot.com",messagingSenderId:"56543789226",appId:"1:56543789226:web:ef19e7de6b29dda5c590d3"};W["a"].initializeApp(K),a["a"].use(J["a"]),a["a"].config.productionTip=!1,a["a"].component("lv-button",M),new a["a"]({router:E,render:function(t){return t(u)}}).$mount("#app")},"8fa6":function(t,e,n){},cf25:function(t,e,n){"use strict";n("fea6")},d552:function(t,e,n){"use strict";n("8fa6")},e426:function(t,e,n){t.exports=n.p+"img/padlock.9ca9ae37.svg"},f06a:function(t,e,n){},fea6:function(t,e,n){}});
//# sourceMappingURL=app.28317e1b.js.map