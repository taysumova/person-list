(function(e){function t(t){for(var r,a,i=t[0],c=t[1],u=t[2],l=0,p=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==s[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},s={app:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-a0e9928a":"97bdc720","chunk-c88ec1c2":"7a226864"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-a0e9928a":1,"chunk-c88ec1c2":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-a0e9928a":"d325738c","chunk-c88ec1c2":"85a245cc"}[e]+".css",s=c.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===s))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){u=p[i],l=u.getAttribute("data-href");if(l===r||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=s[e]=[t,n]}));t.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}s[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09b2":function(e,t,n){"use strict";var r=n("7e04"),a=n.n(r);a.a},"114c":function(e,t,n){"use strict";var r=n("af88"),a=n.n(r);a.a},"13e3":function(e,t,n){e.exports=n.p+"img/vk.80315772.svg"},1576:function(e,t,n){"use strict";var r=n("3b59"),a=n.n(r);a.a},1662:function(e,t,n){},"206d":function(e,t,n){"use strict";var r=n("4413"),a=n.n(r);a.a},"2c95":function(e,t,n){e.exports=n.p+"img/close-dark.eac9c97d.svg"},"2f11":function(e,t,n){"use strict";var r=n("608b"),a=n.n(r);a.a},"339e":function(e,t,n){"use strict";var r=n("7fc6"),a=n.n(r);a.a},"3b59":function(e,t,n){},"3ec2":function(e,t,n){"use strict";var r=n("6145"),a=n.n(r);a.a},"3fe1":function(e,t,n){},4360:function(e,t,n){"use strict";var r=n("2b0e"),a=n("2f62"),s=n("0e44");r["a"].use(a["a"]),t["a"]=new a["a"].Store({plugins:[Object(s["a"])()],state:{token:null},mutations:{SET_TOKEN:function(e,t){e.token=t}},actions:{setToken:function(e,t){var n=e.commit;n("SET_TOKEN",t)},logout:function(e){var t=e.commit;t("SET_TOKEN",null)}},modules:{}})},4413:function(e,t,n){},"4e5c":function(e,t,n){},"518d":function(e,t,n){"use strict";var r=n("97a8"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("a925"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.layout,{tag:"component"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)},o=[],i="default",c={computed:{layout:function(){return"".concat(this.$route.meta.layout||i,"-layout")}}},u=c,l=(n("5c0b"),n("2877")),p=Object(l["a"])(u,s,o,!1,null,null,null),f=p.exports,d=(n("45fc"),n("d3b7"),n("96cf"),n("89ba")),m=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Person")],1)},h=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"person"},[n("label",{attrs:{for:"name"}},[e._v("Type name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{id:"name",type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("button",{on:{click:e.addPerson}},[e._v("Add person")]),e._l(e.persons,(function(t,r){return n("p",{key:r},[e._v(" "+e._s(t.name)+" "),n("button",{on:{click:function(n){return e.deletePerson(t._id)}}},[e._v(" Delete ")])])}))],2)},b=[],_=(n("b0c0"),n("f622")),O={getPersons:function(){return Object(_["a"])().get("persons")},addPerson:function(e){return Object(_["a"])().post("persons",{name:e})},updatePerson:function(e){return Object(_["a"])().patch("persons",e)},deletePerson:function(e){return Object(_["a"])().delete("persons/".concat(e))}},w={name:"Person",data:function(){return{persons:[],error:"",name:""}},created:function(){this.getPersons()},methods:{getPersons:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.getPersons();case 3:this.persons=e.sent.data,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),this.error=e.t0.message;case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(){return e.apply(this,arguments)}return t}(),addPerson:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.addPerson(this.name);case 3:return e.next=5,this.getPersons();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.error=e.t0.message;case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}(),deletePerson:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.deletePerson(t);case 3:return e.next=5,this.getPersons();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.error=e.t0.message;case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()}},y=w,k=(n("f627"),Object(l["a"])(y,g,b,!1,null,"47e59952",null)),j=k.exports,x={name:"home",data:function(){return{mode:"register-form"}},components:{Person:j}},P=x,C=Object(l["a"])(P,v,h,!1,null,null,null),E=C.exports,$=n("4360");r["a"].use(m["a"]);var R=[{path:"/",name:"home",meta:{layout:"app",requiresAuth:!0},component:E},{path:"/login",name:"login",meta:{layout:"guest"},component:function(){return Promise.resolve().then(n.bind(null,"a55b"))}},{path:"/register",name:"register",meta:{layout:"guest"},component:function(){return n.e("chunk-a0e9928a").then(n.bind(null,"73cf"))}},{path:"/404",component:function(){return n.e("chunk-c88ec1c2").then(n.bind(null,"8cdb"))}},{path:"*",redirect:"/404",hidden:!0}],A=new m["a"]({base:"/",routes:R});A.beforeEach(function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.matched.some((function(e){return e.meta.requiresAuth}))?$["a"].state.token?r():r({name:"login",query:{redirect:t.fullPath}}):r();case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}());var S=A,N=n("7704"),L=n("edd4"),T="en",D={ru:N,en:L},q={languages:[{language:"ru",title:"Русский"},{language:"en",title:"English"}]},U=n("f309"),V=n("4bd4"),F=n("8654"),B=n("ac7c"),M=n("2e4b"),z=n("43a6"),H=n("67b6"),I=n("b974"),J=n("2db4"),K=n("23a7");r["a"].use(U["a"],{components:{VForm:V["a"],VTextField:F["a"],VCheckbox:B["a"],VDatePicker:M["a"],VRadioGroup:z["a"],VRadio:H["a"],VSelect:I["a"],VSnackbar:J["a"],VFileInput:K["a"]}});var G={},W=new U["a"](G),Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[e._t("default")],2)},Z=[],Q={name:"default",components:{}},X=Q,ee=Object(l["a"])(X,Y,Z,!1,null,null,null),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"guest"},[n("guest-header"),e._t("default"),n("guest-footer")],2)},re=[],ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-header",{staticClass:"base__header--guest"})},se=[],oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"base-header"},[e._t("mobile-menu"),r("router-link",{attrs:{to:"/"}},[r("img",{staticClass:"logo",attrs:{src:n("9b19"),alt:"logo",height:"90"}})]),r("div",{staticClass:"base-header__content"},[e._t("default")],2),r("language-change")],2)},ie=[],ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language"},[n("div",{staticClass:"language__header",on:{click:function(t){e.isOpen=!e.isOpen}}},[e._v(" "+e._s(e.lang)+" ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],staticClass:"language__content"},e._l(e.languages,(function(t){return n("div",{key:t.title,staticClass:"language__item",on:{click:function(n){return e.changeLocale(t.language)}}},[e._v(" "+e._s(t.title)+" ")])})),0)])},ue=[],le=(n("4de4"),{name:"language-change",data:function(){return{isOpen:!1}},computed:{languages:function(){return q.languages},lang:function(){var e=this,t=this.languages.filter((function(t){return t.language===e.$i18n.locale}));return t[0].title[0]+t[0].title[1]}},methods:{changeLocale:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$i18n.locale=t,e.next=3,this.$store.dispatch("setLocale",t);case 3:this.isOpen=!1;case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}}),pe=le,fe=(n("1576"),Object(l["a"])(pe,ce,ue,!1,null,null,null)),de=fe.exports,me={name:"base-header",components:{LanguageChange:de}},ve=me,he=(n("b994"),Object(l["a"])(ve,oe,ie,!1,null,null,null)),ge=he.exports,be={name:"guest-header",components:{BaseHeader:ge}},_e=be,Oe=(n("e698"),Object(l["a"])(_e,ae,se,!1,null,null,null)),we=Oe.exports,ye=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ke=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"guest__footer"},[r("div",{staticClass:"footer__contacts"},[r("a",{attrs:{href:"https://www.linkedin.cn/in/луиза-тайсумова-76b5a5100/",target:"_blank"}},[r("img",{staticClass:"linkedin-icon",attrs:{width:"26",height:"26",src:n("9ed9"),alt:"inLink"}})]),r("a",{attrs:{href:"https://vk.com/id163135870",target:"_blank"}},[r("img",{staticClass:"vk-icon",attrs:{width:"26",height:"30",src:n("13e3"),alt:"vkLink"}})])]),r("p",{staticClass:"footer__copyright"},[e._v(" Made by Luiza Taysumova © 2019 ")])])}],je={name:"guest-footer"},xe=je,Pe=(n("09b2"),Object(l["a"])(xe,ye,ke,!1,null,null,null)),Ce=Pe.exports,Ee={name:"guest",components:{GuestFooter:Ce,GuestHeader:we}},$e=Ee,Re=(n("3ec2"),Object(l["a"])($e,ne,re,!1,null,null,null)),Ae=Re.exports,Se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("app-header"),e._t("default"),n("app-footer")],2)},Ne=[],Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-header",{staticClass:"app-header",scopedSlots:e._u([{key:"mobile-menu",fn:function(){return[e.isNavActive?e._e():n("span",{staticClass:"app-header__navigation--mobile",on:{click:function(t){e.isNavActive=!0}}})]},proxy:!0}])},[n("button",{directives:[{name:"show",rawName:"v-show",value:e.isNavActive,expression:"isNavActive"}],staticClass:"mobile-menu--close-btn",on:{click:function(t){e.isNavActive=!1}}}),n("app-mobile-nav",{attrs:{"is-nav-active":e.isNavActive},on:{closeNav:function(t){e.isNavActive=!1}}}),n("div",{staticClass:"app-header__navigation"},[n("ul",{staticClass:"app__navigation navigation"},e._l(e.routes,(function(t,r){return n("li",{key:r,staticClass:"navigation__item",class:e.activeRoute===t.path?"navigation__item--active":"",on:{click:function(t){e.isNavActive=!1}}},[n("router-link",{attrs:{to:t.path}},[e._v(" "+e._s(e.$t(""+t.name))+" ")])],1)})),0)]),n("header-profile",{staticClass:"app-header__profile"})],1)},Te=[],De=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isUserAuth?r("div",{staticClass:"header__profile profile"},[r("img",{staticClass:"profile__img",class:e.user.avatar?"":"profile__img--empty",attrs:{src:e.user.avatar?e.user.avatar:n("f2e9"),alt:"avatar"},on:{click:function(t){e.isOpen=!e.isOpen}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],staticClass:"profile__content",on:{click:function(t){e.isOpen=!1}}},[e._l(e.routes,(function(t,n){return r("router-link",{key:n,staticClass:"profile__route",attrs:{to:{name:t}}},[e._v(" "+e._s(e.$t(""+t))+" ")])})),r("logout-button")],2)]):r("login-form-button",{staticClass:"header__profile"})},qe=[],Ue=(n("a4d3"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),Ve=n("2f62"),Fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"profile__btn--logout",on:{click:e.logout}},[e._v(" "+e._s(e.$t("logout"))+" ")])},Be=[],Me=n("c5b9"),ze={name:"logout-button",methods:{logout:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Me["a"].logout();case 3:return e.next=5,this.$store.dispatch("logout");case 5:return e.next=7,this.$router.push({name:"login"});case 7:e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}()}},He=ze,Ie=(n("a080"),Object(l["a"])(He,Fe,Be,!1,null,null,null)),Je=Ie.exports,Ke=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-form-btn"},[r("button",{staticClass:"profile__btn--login",on:{click:function(t){e.loginIsOpen=!0}}},[e._v(" "+e._s(e.$t("login"))+" ")]),e.loginIsOpen?r("div",{staticClass:"login-modal"},[r("login-form",[r("button",{staticClass:"close-btn",on:{click:function(t){e.loginIsOpen=!1}}},[r("img",{attrs:{src:n("2c95"),alt:"close"}})]),r("router-link",{staticClass:"register-link",attrs:{to:"/register"}},[e._v(" Do not have account yet? Register -> ")])],1)],1):e._e()])},Ge=[],We=n("a55b"),Ye={name:"login-form-button",components:{LoginForm:We["default"]},data:function(){return{loginIsOpen:!1}}},Ze=Ye,Qe=(n("114c"),Object(l["a"])(Ze,Ke,Ge,!1,null,null,null)),Xe=Qe.exports;function et(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function tt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?et(n,!0).forEach((function(t){Object(Ue["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):et(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var nt={name:"header-profile",components:{LoginFormButton:Xe,LogoutButton:Je},data:function(){return{isOpen:!1,routes:["profile","qualifications","trajectories"]}},computed:tt({isUserAuth:function(){return!!this.token}},Object(Ve["b"])(["user","token"]))},rt=nt,at=(n("f7e6"),Object(l["a"])(rt,De,qe,!1,null,null,null)),st=at.exports,ot=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app__mobile-navigation",class:e.isNavActive?"app__mobile-navigation--active":""},[e.isUserAuth?n("sidebar-avatar"):e._e(),n("ul",[e._l(e.isUserAuth?e.authRoutes:e.notAuthRoutes,(function(t,r){return n("li",{key:r,staticClass:"navigation__item",class:e.activeRoute===t.path?"navigation__item--active":"",on:{click:e.closeNav}},[n("router-link",{attrs:{to:t.path}},[e._v(" "+e._s(e.$t(""+t.name))+" ")])],1)})),e.isUserAuth?n("li",[n("logout-button")],1):n("li",[n("login-form-button")],1)],2)],1)},it=[],ct=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sidebar__avatar avatar"},[r("img",{class:e.user.avatar?"":"avatar__icon",attrs:{src:e.user.avatar?e.user.avatar:n("f2e9"),alt:"avatar"}}),r("label",{staticClass:"avatar-download"},[e._v(" "+e._s(e.$t("update"))+" "),r("input",{attrs:{type:"file",accept:"image/*"},on:{change:e.handleAvatar}})]),r("v-snackbar",{staticClass:"error-block",attrs:{top:"",left:"",timeout:5e3},model:{value:e.error,callback:function(t){e.error=t},expression:"error"}},[e._v(" ERROR "),r("button",{on:{click:function(t){e.error=!1}}},[r("img",{attrs:{src:n("8b1b"),alt:"close"}})])]),r("v-snackbar",{staticClass:"success-block",attrs:{top:"",left:"",timeout:5e3},model:{value:e.success,callback:function(t){e.success=t},expression:"success"}},[e._v(" SUCCESS "),r("button",{on:{click:function(t){e.success=!1}}},[r("img",{attrs:{src:n("8b1b"),alt:"close"}})])])],1)},ut=[],lt={getProfile:function(){return Object(_["a"])().get("profile")},updateProfile:function(e){return Object(_["a"])().patch("profile",e)}};function pt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ft(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pt(n,!0).forEach((function(t){Object(Ue["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var dt={name:"sidebar-avatar",data:function(){return{success:!1,error:!1,avatar:""}},computed:ft({},Object(Ve["b"])(["user"])),methods:{handleAvatar:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{"function"===typeof FileReader&&(n=new FileReader,n.onload=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.avatar=t.target.result,e.next=3,lt.updateProfile(ft({},r.user,{avatar:r.avatar}));case 3:return e.next=5,r.$store.dispatch("setUserAvatar",r.avatar);case 5:r.success=!0;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.readAsDataURL(t.target.files[0]))}catch(a){this.error=!0}case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},mt=dt,vt=(n("518d"),Object(l["a"])(mt,ct,ut,!1,null,null,null)),ht=vt.exports;function gt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function bt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?gt(n,!0).forEach((function(t){Object(Ue["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _t={name:"app-mobile-nav",props:["isNavActive"],data:function(){return{authRoutes:[{name:"search",path:"/search"},{name:"profile",path:"/user/profile"},{name:"qualifications",path:"/user/qualifications"},{name:"trajectories",path:"/user/trajectories"}],notAuthRoutes:[{name:"search",path:"/search"}]}},components:{SidebarAvatar:ht,LoginFormButton:Xe,LogoutButton:Je},computed:bt({activeRoute:function(){return this.$route.name},isUserAuth:function(){return!!this.token}},Object(Ve["b"])(["token"])),methods:{closeNav:function(){this.$emit("closeNav")}}},Ot=_t,wt=(n("f147"),Object(l["a"])(Ot,ot,it,!1,null,null,null)),yt=wt.exports,kt={name:"app-header",data:function(){return{isNavActive:!1,routes:[{name:"search",path:"/search"}]}},components:{AppMobileNav:yt,BaseHeader:ge,HeaderProfile:st},computed:{activeRoute:function(){return this.$route.name}}},jt=kt,xt=(n("9505"),Object(l["a"])(jt,Le,Te,!1,null,null,null)),Pt=xt.exports,Ct=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"app__footer"},[e._v(" Made by Luiza Taysumova © 2019 ")])},Et=[],$t={name:"app-footer"},Rt=$t,At=(n("339e"),Object(l["a"])(Rt,Ct,Et,!1,null,null,null)),St=At.exports,Nt={name:"app",components:{AppFooter:St,AppHeader:Pt}},Lt=Nt,Tt=(n("2f11"),Object(l["a"])(Lt,Se,Ne,!1,null,null,null)),Dt=Tt.exports,qt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select__container"},[n("div",{staticClass:"select__title",class:e.isSelectOpen?"select__title--active":"",on:{click:function(t){e.isSelectOpen=!e.isSelectOpen}}},[e._t("default",[e._v(" Select option ")])],2),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isSelectOpen,expression:"isSelectOpen"}],staticClass:"select__content",on:{click:function(t){e.isSelectOpen=!1}}},[e._t("content",[n("span",{staticClass:"select__item"},[e._v(" No content ")])])],2)])},Ut=[],Vt={name:"select-input",data:function(){return{isSelectOpen:!1}},methods:{}},Ft=Vt,Bt=(n("9b82"),Object(l["a"])(Ft,qt,Ut,!1,null,null,null)),Mt=Bt.exports;r["a"].use(a["a"]),r["a"].component("default-layout",te),r["a"].component("guest-layout",Ae),r["a"].component("app-layout",Dt),r["a"].component("select-input",Mt),r["a"].config.productionTip=!1;var zt=Object.assign(D),Ht=new a["a"]({locale:T,fallbackLocale:"ru",silentTranslationWarn:!0,messages:zt});new r["a"]({i18n:Ht,router:S,store:$["a"],vuetify:W,render:function(e){return e(f)}}).$mount("#app")},5881:function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"608b":function(e,t,n){},6134:function(e,t,n){},6145:function(e,t,n){},7704:function(e){e.exports=JSON.parse('{"login":"Войти","logout":"Выйти","register":"регистрация","search":"поиск","profile":"профиль","construction":"В разработке","rights":"Все правы защищены","gender":"пол","male":"мужской","female":"женский","citizenship":"Гражданство","age1":"года","age2":"лет","age3":"год","update":"Обновить","forms":{"name":"Имя","password":"Пароль","passwordLabel":"Не менее 8 символов в верхнем и нижнем регистре и число","passwordLabel2":"Повторите пароль","email":"E-mail","submit":"Отправить"},"rules":{"password":"Не менее 8 символов в верхнем и нижнем регистре и число","passwordMatch":"Пароли не совпадают","agreement":"Необходимо согласие, чтобы продолжить!","required":"Обязательное поле","emailValid":"E-mail некорректный"}}')},"7b43":function(e,t,n){},"7e04":function(e,t,n){},"7fc6":function(e,t,n){},"8b1b":function(e,t,n){e.exports=n.p+"img/close.a3b3d1b1.svg"},9505:function(e,t,n){"use strict";var r=n("7b43"),a=n.n(r);a.a},"97a8":function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.4585671d.svg"},"9b82":function(e,t,n){"use strict";var r=n("dd76"),a=n.n(r);a.a},"9c0c":function(e,t,n){},"9ed9":function(e,t,n){e.exports=n.p+"img/linkedin.bec67ecc.svg"},a080:function(e,t,n){"use strict";var r=n("4e5c"),a=n.n(r);a.a},a55b:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{ref:"form",staticClass:"form form--login",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{rules:e.emailRules,label:"Email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("v-text-field",{attrs:{primary:"",type:"password",rules:e.passwordRules,label:e.$t("forms.password"),required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("p",{staticClass:"error-text"},[e._v(" "+e._s(e.error)+" ")]),n("button",{staticClass:"form__btn",on:{click:function(t){return t.preventDefault(),e.login(t)}}},[e._v(" "+e._s(e.$t("forms.submit"))+" ")])],1)},a=[],s=(n("96cf"),n("89ba")),o=n("c5b9"),i={name:"login-form",data:function(){var e=this;return{email:"",password:"",error:"",valid:!1,emailRules:[function(t){return!!t||e.$t("rules.required")},function(t){return/.+@.+/.test(t)||e.$t("rules.emailValid")}],passwordRules:[function(t){return!!t||e.$t("rules.required")},function(t){return/(?=.{8,})(?=.*?[0-9])(?=.*?[A-Z]).*?[a-z].*/.test(t)||e.$t("rules.password")}]}},methods:{login:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,this.error="",!this.$refs.form.validate()){e.next=12;break}return e.next=5,o["a"].login({email:this.email,password:this.password});case 5:return t=e.sent,n=t.data.token,e.next=9,this.$store.dispatch("setToken",n);case 9:return e.next=11,this.$router.push({path:"/"});case 11:this.$forceUpdate();case 12:e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),this.error=e.t0.data||"Error during login";case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));function t(){return e.apply(this,arguments)}return t}()}},c=i,u=(n("206d"),n("2877")),l=Object(u["a"])(c,r,a,!1,null,null,null);t["default"]=l.exports},af88:function(e,t,n){},b994:function(e,t,n){"use strict";var r=n("1662"),a=n.n(r);a.a},c3fe:function(e,t,n){},c5b9:function(e,t,n){"use strict";var r=n("bc3a"),a=n.n(r),s=function(){return a.a.create({})},o=n("f622");t["a"]={register:function(e){return s().post("users/register",e)},login:function(e){return s().post("users/login",e)},logout:function(){return Object(o["a"])().post("users/logout")}}},dd76:function(e,t,n){},e698:function(e,t,n){"use strict";var r=n("c3fe"),a=n.n(r);a.a},edd4:function(e){e.exports=JSON.parse('{"login":"Login","logout":"Logout","register":"register","search":"Search","profile":"Profile","construction":"Under construction","rights":"All rights reserved","gender":"gender","male":"male","female":"female","citizenship":"Citizenship(s)","age1":"years old","age2":"years old","age3":"years old","update":"Update","forms":{"name":"Name","password":"Password","passwordLabel":"8 chars min, uppercase, lowercase and number","passwordLabel2":"Re-enter password","email":"E-mail address","submit":"Submit"},"rules":{"password":"8 chars min, uppercase, lowercase and number","passwordMatch":"Passwords do not match","agreement":"You must agree to continue!","required":"This field is required","emailValid":"E-mail must be valid"}}')},f147:function(e,t,n){"use strict";var r=n("5881"),a=n.n(r);a.a},f2e9:function(e,t,n){e.exports=n.p+"img/avatar.999fe503.svg"},f622:function(e,t,n){"use strict";var r=n("bc3a"),a=n.n(r),s=n("4360");t["a"]=function(){var e=s["a"].state.token;return a.a.create({headers:{Authorization:"Bearer ".concat(e)}})}},f627:function(e,t,n){"use strict";var r=n("6134"),a=n.n(r);a.a},f7e6:function(e,t,n){"use strict";var r=n("3fe1"),a=n.n(r);a.a}});
//# sourceMappingURL=app.93674f75.js.map