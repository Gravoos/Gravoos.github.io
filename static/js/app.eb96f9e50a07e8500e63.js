webpackJsonp([1],{"4Uwr":function(t,e,a){t.exports=a.p+"static/img/logo.a8a89d5.jpg"},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),n=a("kxiW"),s=a.n(n),o={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){s.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=s.a.auth().currentUser.email)},methods:{logout:function(){var t=this;s.a.auth().signOut().then(function(){t.$router.push("/login")}),location.reload()}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("div",{staticClass:"nav-wrap black"},[a("div",{staticClass:"container black"},[a("router-link",{staticClass:"brand-logo center black",attrs:{to:"/"}},[t._v("Co dziś grają?")]),t._v(" "),a("ul",{staticClass:"right"},[t.isLoggedIn?a("li",[a("span",{staticClass:"nazwa"},[t._v(t._s(t.currentUser))])]):t._e(),t._v(" "),t.isLoggedIn?a("li",[a("router-link",{attrs:{to:"/film"}},[t._v("Repertuar")])],1):t._e(),t._v(" "),t.isLoggedIn?a("li",[a("router-link",{attrs:{to:"/gps"}},[t._v("Najbliższe kino")])],1):t._e(),t._v(" "),t.isLoggedIn?a("li",[a("router-link",{attrs:{to:"/baza_uzytkownikow"}},[t._v("Baza flmów")])],1):t._e(),t._v(" "),a("li",[a("router-link",{attrs:{to:"/opis"}},[t._v("Opis")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/skladowe"}},[t._v("Skladowe")])],1),t._v(" "),t.isLoggedIn?t._e():a("li",[a("router-link",{attrs:{to:"/login"}},[t._v("Logowanie")])],1),t._v(" "),t.isLoggedIn?t._e():a("li",[a("router-link",{attrs:{to:"/register"}},[t._v("Rejestracja")])],1),t._v(" "),t.isLoggedIn?a("li",[a("button",{staticClass:"btn black",on:{click:t.logout}},[t._v("Wyloguj")])]):t._e()])],1)])])},staticRenderFns:[]};var l={name:"App",components:{Navbar:a("VU/8")(o,r,!1,function(t){a("qaDc")},null,null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("navbar"),this._v(" "),e("img",{staticClass:"center",attrs:{src:a("4Uwr"),alt:"logo"}}),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1)],1)},staticRenderFns:[]},u=a("VU/8")(l,c,!1,null,null,null).exports,d=a("/ocq"),m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home"}},[e("h1",{staticClass:"white-text center"},[this._v("Witamy w aplikacji pozwalającej w łatwy i szybki sposób znaleźć najbliższe kino oraz sprawdzić repertuar")])])}]},p=a("VU/8")({name:"home",data:function(){return{}}},m,!1,null,null,null).exports,v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"skladowe"},[e("h3",{attrs:{id:"opis"}},[this._v("1 składowa")])])}]};var g=a("VU/8")({name:"skladowe",data:function(){return{}}},v,!1,function(t){a("U5vK")},null,null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"opis"},[a("h3",[t._v("OPIS")]),t._v(" "),a("p",[a("ol",[a("li",[t._v(" Adrian Janik 186641\n    grupa WZISN2-2411SI,")]),t._v(" "),a("li",[t._v(" Miłosz Zalewski 188819\n    grupa WZISN2-2411SI, ")]),t._v(" "),a("li",[t._v("Krzysztof Przybylski 187910\n    grupa WZISN2-2411SI. ")])]),t._v("\nKierownik projektu: Krzysztof Przybylski 187910 grupa WZISN2-2411SI. \n\n Nazwa aplikacji: Co dzisiaj grają? \n\n Cel aplikacji: Aplikacja dzięki której można w łatwy sposób zaplanować wyjście do kina (klienci Unlimited) \n\n Krótki opis: Aplikacja umożliwia wyszukanie najbliższego kina Cinema-City, wyświetlenie bezy użytkowników dzięki czemu możemy poznać opinię na temat filmów. \n\n Funkcje: \n"),a("ol",[a("li",[t._v("Zalogowanie / zarejestrowanie się ")]),t._v(" "),a("li",[t._v("Wyszukiwanie kin Cinema-City w odległości 10km od naszego położenia")]),t._v(" "),a("li",[t._v("Baza użytkowników")]),t._v(" "),a("li",[t._v(" Ocena filmów")])])])])}]};var h=a("VU/8")({name:"opis",data:function(){return{}}},f,!1,function(t){a("V+Ip")},null,null).exports,_=a("mtWM"),w=a.n(_),k={name:"Film",data:function(){return{godzina:0,minuta:0,country:"PL",films:[]}},computed:{godzina:function(){return this.godzina+", "+this.minuta}},methods:{findemovie:function(){var t=this,e=w.a.get(e).then(function(e){t.films=e.data.results}).catch(function(t){console.log(t.message)})}}},z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Film"}},[a("h3",[t._v("Film")]),t._v(" "),a("div",{staticClass:"field"},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.godzina,expression:"godzina"}],attrs:{type:"number",placeholder:"Wprowadź godzinę"},domProps:{value:t.godzina},on:{input:function(e){e.target.composing||(t.godzina=e.target.value)}}}),t._v(" 00 \n    "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.godzina,expression:"godzina"}],attrs:{type:"number",placeholder:"Wprowadź minuty"},domProps:{value:t.godzina},on:{input:function(e){e.target.composing||(t.godzina=e.target.value)}}}),t._v(" 00 \n")]),t._v(" "),a("button",{staticClass:"ui button",on:{click:t.findemovie}},[t._v("Znajdź filmy")])]),t._v(" "),a("div",{ref:"film"})])},staticRenderFns:[]},y=a("VU/8")(k,z,!1,null,null,null).exports,b=(a("881v"),s.a.initializeApp({apiKey:"AIzaSyAwG_xp0fWiMs_We5MoB1mjVW28ORzdaZI",authDomain:"co-dzisiaj-graja.firebaseapp.com",databaseURL:"https://co-dzisiaj-graja.firebaseio.com",projectId:"co-dzisiaj-graja",storageBucket:"co-dzisiaj-graja.appspot.com",messagingSenderId:"412774024558",appId:"1:412774024558:web:37fc011eb1e37315afed7f",measurementId:"G-55FWPE279W"}).firestore()),C={name:"baza",data:function(){return{filmy:[],loading:!0}},created:function(){b.collection("filmy").get().then(function(t){t.forEach(function(t){console.log(t.data())})})}},j={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"baza"}},[e("h3",[this._v("Baza filmów")]),this._v(" "),e("div",{staticClass:"fixed-action-btn"})])}]},x=a("VU/8")(C,j,!1,null,null,null).exports,I={name:"viewfilm",data:function(){return{lat:0,lng:0,places:[]}},computed:{coordinates:function(){return this.lat+", "+this.lng}},methods:{locatorButtonPressed:function(){var t=this;navigator.geolocation.getCurrentPosition(function(e){t.lat=e.coords.latitude,t.lng=e.coords.longitude},function(t){console.log("Nie znaleziono lokalizacji")})},findCloseBuyButtonPressed:function(){var t=this,e="https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+this.lat+","+this.lng+"&radius=5000&type=movie_theater&keyword=cinema_city&key=AIzaSyDcFr6fILO2WXYFpJcBI3IO7jJ2tEAbhlw";w.a.get(e).then(function(e){t.places=e.data.results,t.addLocationsToGoogleMaps()}).catch(function(t){console.log(t.message)})},addLocationsToGoogleMaps:function(){var t=new google.maps.Map(this.$refs.map,{zoom:15,center:new google.maps.LatLng(this.lat,this.lng),mapTypeId:google.maps.MapTypeId.ROADMAP});this.places.forEach(function(e){var a=e.geometry.location.lat,i=e.geometry.location.lng;new google.maps.Marker({position:new google.maps.LatLng(a,i),map:t})});var e=new google.maps.InfoWindow;google.maps.event.addListener(marker,"click",function(){e.setContent('<div class="ui header">'+place.name+"</div><p>"+place.vicinity+"</p>"),e.open(t,marker)})}}},E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"viewfilm"},[a("div",{staticClass:"six wide column left",attrs:{id:"opcje"}},[a("form",{staticClass:"ui segment large form"},[a("div",{staticClass:"ui segment"},[a("div",{staticClass:"field"},[a("div",{staticClass:"ui right icon input large"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coordinates,expression:"coordinates"}],attrs:{type:"text",placeholder:"Enter your address"},domProps:{value:t.coordinates},on:{input:function(e){e.target.composing||(t.coordinates=e.target.value)}}}),t._v(" "),a("i",{staticClass:"dot circle link icon",on:{click:t.locatorButtonPressed}})])]),t._v(" "),a("button",{staticClass:"ui button",on:{click:t.findCloseBuyButtonPressed}},[t._v("Znajdź najbliższe kino")])])]),t._v(" "),a("div",{staticClass:"ui segment",staticStyle:{"max-height":"500px",overflow:"scroll"}},[a("div",{staticClass:"ui divided items"},t._l(t.places,function(e){return a("div",{key:e.id,staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"meta"},[t._v(t._s(e.vicinity))])])])}),0)])]),t._v(" "),a("div",{ref:"map",staticClass:"ten wide column segment ui",attrs:{id:"mapa"}})])},staticRenderFns:[]};var U=a("VU/8")(I,E,!1,function(t){a("St58")},null,null).exports,P={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(t){var e=this;s.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){alert("Zalogowany jako: "+e.email),e.$router.push("/"),location.reload()},function(t){alert(t.message)}),t.preventDefault()}}},A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel orange white-text center"},[a("h3",[t._v("Login")]),t._v(" "),a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("label",{staticClass:"white-text",attrs:{for:"email"}},[t._v("Email")])]),t._v(" "),a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("label",{staticClass:"white-text",attrs:{for:"password"}},[t._v("Hasło")])]),t._v(" "),a("button",{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{click:t.login}},[t._v("Zaloguj")])])])])])])])},staticRenderFns:[]},L=a("VU/8")(P,A,!1,null,null,null).exports,W={name:"register",data:function(){return{email:"",password:""}},methods:{register:function(t){var e=this;s.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(t){alert("Konto stowrzone! "+e.email)},function(t){alert(t.message)}),t.preventDefault()}}},F={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel grey lighten-4 black-text center"},[a("h3",[t._v("Register")]),t._v(" "),a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"email"}},[t._v("Email Address")])]),t._v(" "),a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"password"}},[t._v("Hasło")])]),t._v(" "),a("button",{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{click:t.register}},[t._v("Rejestracja")])])])])])])])},staticRenderFns:[]},N=a("VU/8")(W,F,!1,null,null,null).exports;i.a.use(d.a);var R=new d.a({routes:[{path:"/",name:"home",component:p,meta:{requiresAuth:!0}},{path:"/skladowe",name:"skladowe",component:g},{path:"/opis",name:"opis",component:h},{path:"/baza_uzytkownikow",name:"baza",component:x,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:L,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:N,meta:{requiresGuest:!0}},{path:"/film",name:"Film",component:y,meta:{requiresAuth:!0}},{path:"/gps",name:"viewfilm",component:U,meta:{requiresAuth:!0}}]});R.beforeEach(function(t,e,a){t.matched.some(function(t){return t.meta.requiresAuth})?s.a.auth().currentUser?a():a({path:"/login",query:{redirect:t.fullPath}}):t.matched.some(function(t){return t.meta.requiresGuest})&&s.a.auth().currentUser?a({path:"/",query:{redirect:t.fullPath}}):a()});var S=R;i.a.config.productionTip=!1,i.a.config.silent=!0;var $=void 0;s.a.auth().onAuthStateChanged(function(t){$||($=new i.a({el:"#app",router:S,template:"<App/>",components:{App:u}}))})},St58:function(t,e){},U5vK:function(t,e){},"V+Ip":function(t,e){},qaDc:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.eb96f9e50a07e8500e63.js.map