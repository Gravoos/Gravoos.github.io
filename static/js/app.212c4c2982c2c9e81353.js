webpackJsonp([1],{"4Uwr":function(t,e,a){t.exports=a.p+"static/img/logo.a8a89d5.jpg"},Doiu:function(t,e){},H8eZ:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s=a("kxiW"),n=a.n(s),r={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){n.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=n.a.auth().currentUser.email)},methods:{logout:function(){var t=this;n.a.auth().signOut().then(function(){t.$router.push("/login")})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("div",{staticClass:"nav-wrap"},[a("div",{staticClass:"container",attrs:{id:"mobile"}},[a("router-link",{staticClass:"brand-logo center",attrs:{to:"/"}},[t._v("Co dziś grają?")]),t._v(" "),a("ul",{staticClass:"right"},[t.isLoggedIn?a("li",[a("span",{staticClass:"email black-text"},[t._v(t._s(t.currentUser))])]):t._e(),t._v(" "),t.isLoggedIn?a("li",[a("router-link",{attrs:{to:"/film"}},[t._v("Repertuar")])],1):t._e(),t._v(" "),t.isLoggedIn?a("li",[a("router-link",{attrs:{to:"/gps"}},[t._v("Najbliższe kino")])],1):t._e(),t._v(" "),t.isLoggedIn?t._e():a("li",[a("router-link",{attrs:{to:"/login"}},[t._v("Logowanie")])],1),t._v(" "),t.isLoggedIn?t._e():a("li",[a("router-link",{attrs:{to:"/register"}},[t._v("Rejestracja")])],1),t._v(" "),t.isLoggedIn?a("li",[a("button",{staticClass:"btn black",on:{click:t.logout}},[t._v("Wyloguj")])]):t._e()])],1)])])},staticRenderFns:[]};var l={name:"App",components:{Navbar:a("VU/8")(r,o,!1,function(t){a("H8eZ")},null,null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("navbar"),this._v(" "),e("img",{staticClass:"center",attrs:{src:a("4Uwr"),alt:"logo"}}),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1)],1)},staticRenderFns:[]},u=a("VU/8")(l,c,!1,null,null,null).exports,d=a("/ocq"),m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home"}},[e("h1",{staticClass:"white-text center"},[this._v("Witamy w aplikacji pozwalającej w łatwy i szybki sposób znaleźć najbliższe kino oraz sprawdzić repertuar")])])}]},p=a("VU/8")({name:"home",data:function(){return{}}},m,!1,null,null,null).exports,v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"Film"}},[e("h3",[this._v("Film")])])}]},g=a("VU/8")({name:"Film",data:function(){return{}}},v,!1,null,null,null).exports,h=a("mtWM"),f=a.n(h),_={name:"viewfilm",data:function(){return{lat:0,lng:0,places:[]}},computed:{coordinates:function(){return this.lat+", "+this.lng}},methods:{locatorButtonPressed:function(){var t=this;navigator.geolocation.getCurrentPosition(function(e){t.lat=e.coords.latitude,t.lng=e.coords.longitude},function(t){console.log("Nie znaleziono lokalizacji")})},findCloseBuyButtonPressed:function(){var t=this,e="https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+this.lat+","+this.lng+"&radius=5000&type=movie_theater&keyword=cinema_city&key=AIzaSyDcFr6fILO2WXYFpJcBI3IO7jJ2tEAbhlw";f.a.get(e).then(function(e){t.places=e.data.results,t.addLocationsToGoogleMaps()}).catch(function(t){console.log(t.message)})},addLocationsToGoogleMaps:function(){var t=new google.maps.Map(this.$refs.map,{zoom:15,center:new google.maps.LatLng(this.lat,this.lng),mapTypeId:google.maps.MapTypeId.ROADMAP});this.places.forEach(function(e){var a=e.geometry.location.lat,i=e.geometry.location.lng;new google.maps.Marker({position:new google.maps.LatLng(a,i),map:t})});var e=new google.maps.InfoWindow;google.maps.event.addListener(marker,"click",function(){e.setContent('<div class="ui header">'+place.name+"</div><p>"+place.vicinity+"</p>"),e.open(t,marker)})}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vievfilm"},[a("div",{staticClass:"six wide column left",attrs:{id:"opcje"}},[a("form",{staticClass:"ui segment large form"},[a("div",{staticClass:"ui segment"},[a("div",{staticClass:"field"},[a("div",{staticClass:"ui right icon input large"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coordinates,expression:"coordinates"}],attrs:{type:"text",placeholder:"Enter your address"},domProps:{value:t.coordinates},on:{input:function(e){e.target.composing||(t.coordinates=e.target.value)}}}),t._v(" "),a("i",{staticClass:"dot circle link icon",on:{click:t.locatorButtonPressed}})])]),t._v(" "),a("button",{staticClass:"ui button",on:{click:t.findCloseBuyButtonPressed}},[t._v("Znajdź najbliższe kino")])])]),t._v(" "),a("div",{staticClass:"ui segment",staticStyle:{"max-height":"500px",overflow:"scroll"}},[a("div",{staticClass:"ui divided items"},t._l(t.places,function(e){return a("div",{key:e.id,staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"meta"},[t._v(t._s(e.vicinity))])])])}),0)])]),t._v(" "),a("div",{ref:"map",staticClass:"ten wide column segment ui",attrs:{id:"mapa"}})])},staticRenderFns:[]};var C=a("VU/8")(_,w,!1,function(t){a("Doiu")},null,null).exports,b={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(t){var e=this;n.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){alert("Zalogowany jako: "+e.email),e.$router.push("/")},function(t){alert(t.message)}),t.preventDefault()}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel orange white-text center"},[a("h3",[t._v("Login")]),t._v(" "),a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("label",{staticClass:"white-text",attrs:{for:"email"}},[t._v("Email")])]),t._v(" "),a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("label",{staticClass:"white-text",attrs:{for:"password"}},[t._v("Hasło")])]),t._v(" "),a("button",{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{click:t.login}},[t._v("Zaloguj")])])])])])])])},staticRenderFns:[]},k=a("VU/8")(b,y,!1,null,null,null).exports,j={name:"register",data:function(){return{email:"",password:""}},methods:{register:function(t){var e=this;n.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(t){alert("Konto stowrzone! "+e.email)},function(t){alert(t.message)}),t.preventDefault()}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel grey lighten-4 black-text center"},[a("h3",[t._v("Register")]),t._v(" "),a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"email"}},[t._v("Email Address")])]),t._v(" "),a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"password"}},[t._v("Hasło")])]),t._v(" "),a("button",{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{click:t.register}},[t._v("Rejestracja")])])])])])])])},staticRenderFns:[]},z=a("VU/8")(j,x,!1,null,null,null).exports;i.a.use(d.a);var I=new d.a({routes:[{path:"/",name:"home",component:p,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:k,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:z,meta:{requiresGuest:!0}},{path:"/film",name:"Film",component:g,meta:{requiresAuth:!0}},{path:"/gps",name:"viewfilm",component:C,meta:{requiresAuth:!0}}]});I.beforeEach(function(t,e,a){t.matched.some(function(t){return t.meta.requiresAuth})?n.a.auth().currentUser?a():a({path:"/login",query:{redirect:t.fullPath}}):t.matched.some(function(t){return t.meta.requiresGuest})&&n.a.auth().currentUser?a({path:"/",query:{redirect:t.fullPath}}):a()});var L=I;a("881v"),n.a.initializeApp({apiKey:"AIzaSyAwG_xp0fWiMs_We5MoB1mjVW28ORzdaZI",authDomain:"co-dzisiaj-graja.firebaseapp.com",databaseURL:"https://co-dzisiaj-graja.firebaseio.com",projectId:"co-dzisiaj-graja",storageBucket:"co-dzisiaj-graja.appspot.com",messagingSenderId:"412774024558",appId:"1:412774024558:web:37fc011eb1e37315afed7f",measurementId:"G-55FWPE279W"}).firestore();i.a.config.productionTip=!1,i.a.config.silent=!0;var A=void 0;n.a.auth().onAuthStateChanged(function(t){A||(A=new i.a({el:"#app",router:L,template:"<App/>",components:{App:u}}))})}},["NHnr"]);
//# sourceMappingURL=app.212c4c2982c2c9e81353.js.map