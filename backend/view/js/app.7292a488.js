(function(t){function e(e){for(var n,s,o=e[0],c=e[1],u=e[2],m=0,d=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"32e9":function(t,e,a){"use strict";a("641e")},"3a09":function(t,e,a){"use strict";a("7dd5")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("router-view"),a("Footer")],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-container"},[t._m(0),t._m(1),a("div",{staticClass:"footer-contactinfo"},[t._v("product")]),a("div",{staticClass:"footer-contactinfo"},[t._v("shipping")]),a("div",{staticClass:"footer-icons"},t._l(t.icons,(function(e){return a("v-btn",{key:e,staticClass:"mx-4",attrs:{dark:"",icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e)+" ")])],1)})),1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-iStock"},[a("strong",[t._v("iStock")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-contactinfo"},[a("div",[t._v("+201000 567 853")]),a("div",[t._v("contact-us@iStock.com")]),a("div",[t._v("1 Elsarayat St, Abbaseya, Cairo-Egypt")])])}],c={name:"Footer",data:function(){return{icons:["mdi-facebook","mdi-twitter","mdi-instagram"]}}},u=c,l=(a("8cc7"),a("2877")),m=a("6544"),d=a.n(m),p=a("8336"),v=a("132d"),f=Object(l["a"])(u,s,o,!1,null,"6a0673cd",null),g=f.exports;d()(f,{VBtn:p["a"],VIcon:v["a"]});var h={name:"App",components:{Footer:g}},_=h,b=(a("034f"),a("7496")),w=a("f6c4"),y=Object(l["a"])(_,r,i,!1,null,null,null),C=y.exports;d()(y,{VApp:b["a"],VMain:w["a"]});var x=a("f309");n["a"].use(x["a"]);var k=new x["a"]({}),S=a("8c4f"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-body"},[a("div",{staticClass:"navigationBar"},[t._m(0),a("div",{staticClass:"router_links_container"},[a("router-link",{staticClass:"router_link",attrs:{to:"/"}},[a("v-btn",{staticClass:"button1",attrs:{elevation:"0"}},[t._v(" Home ")])],1),a("v-btn",{staticClass:"button1",attrs:{elevation:"0"}},[t._v(" Shop ")]),a("v-btn",{staticClass:"button1",attrs:{elevation:"0"}},[t._v(" About Us")]),a("router-link",{staticClass:"router_link",attrs:{to:"/signin"}},[a("v-btn",{staticClass:"button1",attrs:{elevation:"0"}},[t._v(" Sign in")])],1),a("v-btn",{staticClass:"button1 cart_Button",attrs:{elevation:"0"}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-cart-minus ")]),t._v(" Your Cart ")],1)],1)]),a("v-divider"),a("v-carousel",{attrs:{"show-arrows-on-hover":"","hide-delimiter-background":"",height:"200",cycle:""}},t._l(t.carouselImages,(function(t,e){return a("v-carousel-item",{key:e,attrs:{src:t.src}})})),1),a("div",{staticClass:"shop_Text"},[t._v("Shop")]),a("v-container",{staticClass:"items_Grid",attrs:{fluid:""}},[a("v-row",{attrs:{dense:""}},t._l(t.items,(function(e){return a("v-col",{key:e._id,attrs:{cols:4}},[a("v-card",{staticClass:"item_Card",attrs:{flat:""},on:{click:function(a){return t.showItemDialogue(e)}}},[a("v-img",{staticClass:"white--text align-end",attrs:{src:e.imageUrl,height:"200px"}}),a("div",{staticClass:"item_Text"},[t._v(t._s(e.name))]),a("v-card-actions",[a("div",[t._v(t._s(e.price)+" EGP")]),a("v-spacer"),a("v-rating",{attrs:{value:e.rating,color:"amber",dense:"","half-increments":"",readonly:"",size:"20"}})],1)],1)],1)})),1)],1),a("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"700px"},model:{value:t.isItemDialogueOpen,callback:function(e){t.isItemDialogueOpen=e},expression:"isItemDialogueOpen"}},[a("v-card",[a("img",{staticClass:"pop_Image",attrs:{width:"700px",src:t.itemDialogue.imageUrl}}),a("v-card-title",[t._v(t._s(t.itemDialogue.name))]),a("v-card-text",[a("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[a("v-rating",{attrs:{value:t.itemDialogue.rating,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),a("div",{staticClass:"grey--text ms-4"},[t._v(" 3 (413) ")])],1),a("div",{staticClass:"my-2 text-subtitle-1"},[t._v(" "+t._s(t.itemDialogue.countInStock)+" units available ")]),a("div",{staticClass:"my-2 text-subtitle-1"},[t._v("• "+t._s(t.itemDialogue.price)+" EGP •")]),a("div",[t._v(t._s(t.itemDialogue.description))])],1)],1)],1)],1)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navigation_Bar_Left_Container"},[a("div",{staticClass:"navigationBar-iStock"},[a("strong",[t._v("iStock")])])])}],j=a("1da1"),I=(a("96cf"),a("bc3a")),P=a.n(I),$={data:function(){return{isItemDialogueOpen:!1,itemDialogue:{rating:"",numReviews:"",countInStock:"",description:"",imageUrl:"",name:"",price:"",_id:""},carouselImages:[{src:"https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/planet.jpg"}],items:[]}},methods:{fetchItems:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("http://localhost:3000/api/products").then((function(e){200==e.status&&(t.items=e.data)}),(function(t){t.response.status}));case 2:case"end":return e.stop()}}),e)})))()},showItemDialogue:function(t){this.itemDialogue=t,console.log(this.itemDialogue),this.isItemDialogueOpen=!0}},mounted:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetchItems();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},V=$,D=(a("3a09"),a("b0af")),R=a("99d9"),A=a("5e66"),N=a("3e35"),q=a("62ad"),M=a("a523"),U=a("169a"),B=a("ce7e"),L=a("adda"),T=a("1d4d"),z=a("0fd9"),F=a("2fa4"),G=Object(l["a"])(V,E,O,!1,null,"0387e576",null),J=G.exports;d()(G,{VBtn:p["a"],VCard:D["a"],VCardActions:R["a"],VCardText:R["b"],VCardTitle:R["c"],VCarousel:A["a"],VCarouselItem:N["a"],VCol:q["a"],VContainer:M["a"],VDialog:U["a"],VDivider:B["a"],VIcon:v["a"],VImg:L["a"],VRating:T["a"],VRow:z["a"],VSpacer:F["a"]});var H=a("2f62"),Y=a("0e44"),K=(a("ac1f"),a("5319"),{user:null}),Q={isAuthenticated:function(t){return!!t.user},StateUser:function(t){return t.user}},W={LogIn:function(t,e){return Object(j["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,a.next=3,P.a.post("http://localhost:3000/api/user/login",{email:e.email,password:e.password}).then((function(t){200==t.status&&(n("setUser",e.email),gt.replace("/"))}),(function(t){t.response.status}));case 3:case"end":return a.stop()}}),a)})))()},LogOut:function(t){return Object(j["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.commit,n=null,a("logout",n);case 3:case"end":return e.stop()}}),e)})))()}},X={setUser:function(t,e){t.user=e},logout:function(t,e){t.user=e}},Z={state:K,getters:Q,actions:W,mutations:X};n["a"].use(H["a"]);var tt=new H["a"].Store({modules:{auth:Z},plugins:[Object(Y["a"])()]}),et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"signin-container"},[a("div",{staticClass:"signin-iStock"},[t._v("iStock")]),a("div",{staticClass:"signin-Sign-In"},[t._v("Sign-In")]),a("div",{staticClass:"signin-signinform"},[a("div",{staticClass:"container"},[t._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"Enter email",name:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Enter password",name:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("div",{staticClass:"signin-button"},[a("button",{on:{click:function(e){return t.Login()}}},[t._v("Sign-In")])]),t._m(2)])]),a("div",{staticClass:"signin-terms"},[t._v("New to iStock ?")]),a("router-link",{attrs:{to:"SignUp"}},[a("div",{staticClass:"signin-button"},[a("button",[t._v("Create your iStock Account")])])])],1)},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"email"}},[a("b",[t._v("Email")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"psw"}},[a("b",[t._v("Password")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"signin-terms"},[a("div",[t._v(" By continuing you agree to iStock's Condtions ")]),a("div",[t._v(" of Use and Privacy Notice ")])])}],nt=a("5530"),rt={name:"SignIn",data:function(){return{email:"",password:""}},methods:Object(nt["a"])(Object(nt["a"])({},Object(H["b"])(["LogIn"])),{},{Login:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={email:t.email,password:t.password},e.next=3,t.LogIn(a);case 3:case"end":return e.stop()}}),e)})))()}})},it=rt,st=(a("32e9"),Object(l["a"])(it,et,at,!1,null,"4ec60c91",null)),ot=st.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"signup-container"},[a("div",{staticClass:"signup-iStock"},[t._v("iStock")]),a("div",{staticClass:"signup-Sign-In"},[t._v("Create account")]),a("div",{staticClass:"signup-signupform"},[a("div",{staticClass:"container"},[t._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"Enter name",name:"name",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"Enter email",name:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._m(2),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Enter password",name:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._m(3),a("input",{directives:[{name:"model",rawName:"v-model",value:t.repassword,expression:"repassword"}],attrs:{type:"password",placeholder:"Enter password",name:"repassword",required:""},domProps:{value:t.repassword},on:{input:function(e){e.target.composing||(t.repassword=e.target.value)}}}),t.isMatch?t._e():a("div",{staticClass:"signup-PasswordMissMatch"},[t._v("password does not match")]),t._m(4),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{type:"text",placeholder:"Enter address",name:"address",required:""},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),t._m(5),a("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],attrs:{type:"text",placeholder:"Enter city",name:"city",required:""},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}}),t._m(6),a("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"text",placeholder:"Enter mobile",name:"mobile",required:""},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}}),a("div",{staticClass:"signup-button"},[a("button",{on:{click:function(e){return t.Register()}}},[t._v("Create your iStock Account")])]),t._m(7)])]),a("div",{staticClass:"signup-signin"},[a("div",{staticClass:"signup-Already"},[t._v("Already have an account?")]),a("router-link",{attrs:{to:"SignIn"}},[a("div",{staticClass:"signup-signinbutton"},[a("button",[t._v("Sign in")])])])],1)])},ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"name"}},[a("b",[t._v("Name")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"email"}},[a("b",[t._v("Email")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"psw"}},[a("b",[t._v("Password")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"repsw"}},[a("b",[t._v("Re-enter Password")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"address"}},[a("b",[t._v("Address")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"city"}},[a("b",[t._v("City")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"mobile"}},[a("b",[t._v("Mobile")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"signup-terms"},[a("div",[t._v(" By continuing you agree to iStock's Condtions ")]),a("div",[t._v(" of Use and Privacy Notice ")])])}],lt=(a("b0c0"),{name:"SignUp",data:function(){return{email:"",name:"",address:"",mobile:"",password:"",repassword:"",city:"",isMatch:!0}},watch:{email:function(){this.email.length>2&&(this.email_exist=!0)},repassword:function(){this.password==this.repassword?this.isMatch=!0:this.isMatch=!1}},methods:{Register:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,P.a.post("http://localhost:3000/api/user/register",{email:t.email,username:t.name,password:t.password,address:t.address,city:t.city,mobile:t.mobile}).then((function(e){200==e.status&&(console.log(e.headers["content-type"]),t.$router.replace("/signin"))}),(function(t){t.response.status}));case 2:case"end":return e.stop()}}),e)})))()}}}),mt=lt,dt=(a("bf69"),Object(l["a"])(mt,ct,ut,!1,null,"b81b2652",null)),pt=dt.exports;n["a"].use(S["a"]);var vt=[{path:"/",name:"home",component:J,meta:{requiresAuth:!0}},{path:"/home",name:"home",component:J,meta:{requiresAuth:!0}},{path:"/signin",name:"signin",component:ot,meta:{guest:!0}},{path:"/signup",name:"signup",component:pt,meta:{guest:!0}}],ft=new S["a"]({routes:vt});ft.beforeEach((function(t,e,a){if(t.matched.some((function(t){return t.meta.requiresAuth}))){if(tt.getters.isAuthenticated)return void a();a("/signin")}else a()})),ft.beforeEach((function(t,e,a){if(t.matched.some((function(t){return t.meta.guest}))){if(tt.getters.isAuthenticated)return void a("/");a()}else a()}));var gt=ft;n["a"].config.productionTip=!1,new n["a"]({vuetify:k,router:gt,store:tt,render:function(t){return t(C)}}).$mount("#app")},"641e":function(t,e,a){},"7dd5":function(t,e,a){},"85ec":function(t,e,a){},"8cc7":function(t,e,a){"use strict";a("a8ba")},9329:function(t,e,a){},a8ba:function(t,e,a){},bf69:function(t,e,a){"use strict";a("9329")}});
//# sourceMappingURL=app.7292a488.js.map