(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ec35659"],{"5d22":function(t,e,n){"use strict";var r=n("6369"),a=n.n(r);a.a},6369:function(t,e,n){},8418:function(t,e,n){"use strict";var r=n("c04e"),a=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var c=r(e);c in t?a.f(t,c,s(0,n)):t[c]=n}},"99af":function(t,e,n){"use strict";var r=n("23e7"),a=n("d039"),s=n("e8b5"),c=n("861d"),o=n("7b0b"),i=n("50c4"),u=n("8418"),l=n("65f0"),f=n("1dde"),d=n("b622"),p=d("isConcatSpreadable"),h=9007199254740991,_="Maximum allowed index exceeded",m=!a((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),v=f("concat"),b=function(t){if(!c(t))return!1;var e=t[p];return void 0!==e?!!e:s(t)},w=!m||!v;r({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,r,a,s,c=o(this),f=l(c,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(s=-1===e?c:arguments[e],b(s)){if(a=i(s.length),d+a>h)throw TypeError(_);for(n=0;n<a;n++,d++)n in s&&u(f,d,s[n])}else{if(d>=h)throw TypeError(_);u(f,d++,s)}return f.length=d,f}})},ae07:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("panel",{staticClass:"person-view",attrs:{title:t.fullName,actions:!0,text:t.deleteText},on:{"delete-confirm":t.deletePerson},scopedSlots:t._u([{key:"avatar",fn:function(){},proxy:!0}])},[n("div",{staticClass:"person-view__contacts contacts"},[n("a",{staticClass:"contacts__item contacts__email",attrs:{href:"#"}},[t._v(t._s(t.person.email))]),n("a",{staticClass:"contacts__item contacts__phone",attrs:{href:"tel:"+t.person.phone}},[t._v(" "+t._s(t.person.phone)+" ")]),n("span",{staticClass:"contacts__item contacts__address"},[t._v(t._s(t.person.address))])]),n("article",{staticClass:"person-view__additional additional"},[n("h4",{staticClass:"additional__title"},[t._v(t._s(t.$t("additionalInfo")))]),n("p",{staticClass:"additional__text"},[t._v(t._s(t.person.comments))])])])},a=[],s=(n("99af"),n("b0c0"),n("96cf"),n("89ba")),c=n("7d9f"),o={data:function(){return{person:"",error:""}},created:function(){this.getPerson()},computed:{fullName:function(){var t=this.person,e=t.name,n=t.surname,r=t.middleName;return"".concat(n," ").concat(e," ").concat(r)},deleteText:function(){return"Are you sure you want to delete the person<br/><b>".concat(this.fullName,"</b>?")}},methods:{getPerson:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].getPerson(this.$route.params.id);case 3:this.person=t.sent.data,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.error=t.t0;case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(){return t.apply(this,arguments)}return e}(),deletePerson:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].deletePerson(this.$route.params.id);case 3:return t.next=5,this.$router.go(-1);case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),this.error=t.t0;case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}()}},i=o,u=(n("5d22"),n("2877")),l=Object(u["a"])(i,r,a,!1,null,null,null);e["default"]=l.exports},b0c0:function(t,e,n){var r=n("83ab"),a=n("9bf2").f,s=Function.prototype,c=s.toString,o=/^\s*function ([^ (]*)/,i="name";!r||i in s||a(s,i,{configurable:!0,get:function(){try{return c.call(this).match(o)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-2ec35659.ccb781e6.js.map