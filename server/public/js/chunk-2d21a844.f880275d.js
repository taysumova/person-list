(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a844"],{bc9f:function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("person-form",{staticClass:"add-person",attrs:{title:e.$t("general.addPerson")},on:{"person-action":e.addPerson}},[t("p",{staticClass:"error-text"},[e._v(" "+e._s(e.error)+" ")])])},o=[],a=(t("a4d3"),t("4de4"),t("4160"),t("e439"),t("dbb4"),t("b64b"),t("159b"),t("2fa7")),c=(t("96cf"),t("89ba")),s=t("7d9f"),i=t("b510");function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(t,!0).forEach((function(r){Object(a["a"])(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(t).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var b={components:{PersonForm:i["a"]},data:function(){return{error:""}},methods:{addPerson:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(r){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,this.error="",t=r.photo,!t){e.next=9;break}return e.next=6,s["a"].uploadImage({photo:t});case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0="";case 10:return n=e.t0,e.next=13,s["a"].addPerson(p({},r,{photo:n?n.data.image_url:""}));case 13:return e.next=15,this.$router.go(-1);case 15:e.next=20;break;case 17:e.prev=17,e.t1=e["catch"](0),this.error=e.t1;case 20:case"end":return e.stop()}}),e,this,[[0,17]])})));function r(r){return e.apply(this,arguments)}return r}()}},f=b,d=t("2877"),l=Object(d["a"])(f,n,o,!1,null,null,null);r["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d21a844.f880275d.js.map