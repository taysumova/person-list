(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bf05644"],{"206d":function(e,r,t){"use strict";var a=t("4413"),s=t.n(a);s.a},4413:function(e,r,t){},a55b:function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-form",{ref:"form",staticClass:"form form--login",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(r){e.valid=r},expression:"valid"}},[t("v-text-field",{attrs:{rules:e.emailRules,label:"Email",required:""},model:{value:e.email,callback:function(r){e.email=r},expression:"email"}}),t("v-text-field",{attrs:{primary:"",type:"password",rules:e.passwordRules,label:e.$t("forms.password"),required:""},model:{value:e.password,callback:function(r){e.password=r},expression:"password"}}),t("p",{staticClass:"error-text"},[e._v(" "+e._s(e.error)+" ")]),t("button",{staticClass:"form__btn",on:{click:function(r){return r.preventDefault(),e.login(r)}}},[e._v(" "+e._s(e.$t("forms.submit"))+" ")])],1)},s=[],n=(t("96cf"),t("89ba")),i=t("c5b9"),o={name:"login-form",data:function(){var e=this;return{email:"",password:"",error:"",valid:!1,emailRules:[function(r){return!!r||e.$t("rules.required")},function(r){return/.+@.+/.test(r)||e.$t("rules.emailValid")}],passwordRules:[function(r){return!!r||e.$t("rules.required")},function(r){return/(?=.{8,})(?=.*?[0-9])(?=.*?[A-Z]).*?[a-z].*/.test(r)||e.$t("rules.password")}]}},methods:{login:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,this.error="",!this.$refs.form.validate()){e.next=12;break}return e.next=5,i["a"].login({email:this.email,password:this.password});case 5:return r=e.sent,t=r.data.token,e.next=9,this.$store.dispatch("setToken",t);case 9:return e.next=11,this.$router.push({path:"/"});case 11:this.$forceUpdate();case 12:e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),this.error=e.t0.data||"Error during login";case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));function r(){return e.apply(this,arguments)}return r}()}},l=o,u=(t("206d"),t("2877")),c=Object(u["a"])(l,a,s,!1,null,null,null);r["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2bf05644.530fa18b.js.map