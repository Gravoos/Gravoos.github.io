webpackJsonp([1],{"4Uwr":function(t,e,a){t.exports=a.p+"static/img/logo.a8a89d5.jpg"},Ghh6:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),n=a("kxiW"),s=a.n(n),o={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){s.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=s.a.auth().currentUser.email)},methods:{logout:function(){var t=this;s.a.auth().signOut().then(function(){t.$router.push("/login")}),location.reload()}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("div",{staticClass:"nav-wrap black"},[a("div",{staticClass:"container black"},[a("ul",{staticClass:"right"},[a("div",{attrs:{id:"navi"}},[t.isLoggedIn?a("li",[a("span",{staticClass:"nazwa"},[t._v(t._s(t.currentUser))])]):t._e(),t._v(" "),t.isLoggedIn?a("li",[a("router-link",{attrs:{to:"/film"}},[t._v("Repertuar")])],1):t._e(),t._v(" "),t.isLoggedIn?a("li",[a("router-link",{attrs:{to:"/gps"}},[t._v("Najbliższe kino")])],1):t._e(),t._v(" "),t.isLoggedIn?a("li",[a("router-link",{attrs:{to:"/baza_uzytkownikow"}},[t._v("Baza flmów")])],1):t._e(),t._v(" "),t.isLoggedIn?a("li",[a("router-link",{attrs:{to:"/nowyFilm"}},[t._v("Nowy film")])],1):t._e(),t._v(" "),a("li",[a("router-link",{attrs:{to:"/opis"}},[t._v("Opis")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/skladowe"}},[t._v("Skladowe")])],1),t._v(" "),t.isLoggedIn?t._e():a("li",[a("router-link",{attrs:{to:"/login"}},[t._v("Logowanie")])],1),t._v(" "),t.isLoggedIn?t._e():a("li",[a("router-link",{attrs:{to:"/register"}},[t._v("Rejestracja")])],1),t._v(" "),t.isLoggedIn?a("li",[a("button",{staticClass:"btn black",on:{click:t.logout}},[t._v("Wyloguj")])]):t._e()])])])])])},staticRenderFns:[]};var l={name:"App",components:{Navbar:a("VU/8")(o,r,!1,function(t){a("Ghh6")},null,null).exports},methods:{change:function(){this.$router.push("/")}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("img",{staticClass:"center",attrs:{src:a("4Uwr"),alt:"logo"},on:{click:this.change}}),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1)],1)},staticRenderFns:[]},u=a("VU/8")(l,c,!1,null,null,null).exports,d=a("/ocq"),m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home"}},[e("h1",{staticClass:"white-text center"},[this._v("Witamy w aplikacji pozwalającej w łatwy i szybki sposób \n        znaleźć najbliższe kino oraz dodać isprwadzić film w bazie użytkowników")])])}]},v=a("VU/8")({name:"home",data:function(){return{}}},m,!1,null,null,null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"skladowe"},[e("h3",{attrs:{id:"opis"}},[this._v("1 składowa")])])}]};var f=a("VU/8")({name:"skladowe",data:function(){return{}}},p,!1,function(t){a("U5vK")},null,null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"opis"},[a("h3",[t._v("OPIS")]),t._v(" "),a("p",[a("ol",[a("li",[t._v(" Adrian Janik 186641\n    grupa WZISN2-2411SI,")]),t._v(" "),a("li",[t._v(" Miłosz Zalewski 188819\n    grupa WZISN2-2411SI, ")]),t._v(" "),a("li",[t._v("Krzysztof Przybylski 187910\n    grupa WZISN2-2411SI. ")])]),t._v("\nKierownik projektu: Krzysztof Przybylski 187910 grupa WZISN2-2411SI. \n\n Nazwa aplikacji: Co dzisiaj grają? \n\n Cel aplikacji: Aplikacja dzięki której można w łatwy sposób zaplanować wyjście do kina (klienci Unlimited) \n\n Krótki opis: Aplikacja umożliwia wyszukanie najbliższego kina Cinema-City, wyświetlenie bezy użytkowników dzięki czemu możemy poznać opinię na temat filmów. \n\n Funkcje: \n"),a("ol",[a("li",[t._v("Zalogowanie / zarejestrowanie się ")]),t._v(" "),a("li",[t._v("Wyszukiwanie kin Cinema-City w odległości 10km od naszego położenia")]),t._v(" "),a("li",[t._v("Baza użytkowników")]),t._v(" "),a("li",[t._v(" Ocena filmów")])])])])}]};var g=a("VU/8")({name:"opis",data:function(){return{}}},h,!1,function(t){a("V+Ip")},null,null).exports,_=a("mtWM"),w=a.n(_),z={name:"Film",data:function(){return{godzina:0,minuta:0,country:"PL",films:[]}},computed:{godzina:function(){return this.godzina+", "+this.minuta}},methods:{findemovie:function(){var t=this,e=w.a.get(e).then(function(e){t.films=e.data.results}).catch(function(t){console.log(t.message)})}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Film"}},[a("h3",[t._v("Film")]),t._v(" "),a("div",{staticClass:"field"},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.godzina,expression:"godzina"}],attrs:{type:"number",placeholder:"Wprowadź godzinę"},domProps:{value:t.godzina},on:{input:function(e){e.target.composing||(t.godzina=e.target.value)}}}),t._v(" 00 \n    "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.godzina,expression:"godzina"}],attrs:{type:"number",placeholder:"Wprowadź minuty"},domProps:{value:t.godzina},on:{input:function(e){e.target.composing||(t.godzina=e.target.value)}}}),t._v(" 00 \n")]),t._v(" "),a("button",{staticClass:"ui button",on:{click:t.findemovie}},[t._v("Znajdź filmy")])]),t._v(" "),a("div",{ref:"film"})])},staticRenderFns:[]},k=a("VU/8")(z,y,!1,null,null,null).exports,C=(a("881v"),s.a.initializeApp({apiKey:"AIzaSyAwG_xp0fWiMs_We5MoB1mjVW28ORzdaZI",authDomain:"co-dzisiaj-graja.firebaseapp.com",databaseURL:"https://co-dzisiaj-graja.firebaseio.com",projectId:"co-dzisiaj-graja",storageBucket:"co-dzisiaj-graja.appspot.com",messagingSenderId:"412774024558",appId:"1:412774024558:web:37fc011eb1e37315afed7f",measurementId:"G-55FWPE279W"}).firestore()),b={name:"baza",data:function(){return{filmy:[],loading:!0}},created:function(){var t=this;C.collection("Filmy").orderBy("ocena").get().then(function(e){e.forEach(function(e){var a={id:e.id,film_id:e.data().film_id,nazwa:e.data().nazwa,ocena:e.data().ocena};t.filmy.push(a)})})}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"baza"}},[a("h3",[t._v("Baza filmów")]),t._v(" "),a("ul",{staticClass:"collection with-header"},[t._m(0),t._v(" "),t._l(t.filmy,function(e){return a("li",{key:e.id,staticClass:"collection-item"},[a("div",{staticClass:"chip"},[t._v(t._s(e.ocena))]),t._v(t._s(e.nazwa)+"\n      "),a("router-link",{staticClass:"scondary-content",attrs:{to:{name:"bazaFimow",params:{film_id:e.film_id}}}},[a("i",{staticClass:"fa fa-eye"})])],1)})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"collection-header"},[e("h4",[this._v("Filmy")])])}]},j=a("VU/8")(b,x,!1,null,null,null).exports,F={name:"viewfilm",data:function(){return{lat:0,lng:0,places:[]}},computed:{coordinates:function(){return this.lat+", "+this.lng}},methods:{locatorButtonPressed:function(){var t=this;navigator.geolocation.getCurrentPosition(function(e){t.lat=e.coords.latitude,t.lng=e.coords.longitude},function(t){console.log("Nie znaleziono lokalizacji")})},findCloseBuyButtonPressed:function(){var t=this,e="https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+this.lat+","+this.lng+"&radius=5000&type=movie_theater&keyword=cinema_city&key=AIzaSyDcFr6fILO2WXYFpJcBI3IO7jJ2tEAbhlw";w.a.get(e).then(function(e){t.places=e.data.results,t.addLocationsToGoogleMaps()}).catch(function(t){console.log(t.message)})},addLocationsToGoogleMaps:function(){var t=new google.maps.Map(this.$refs.map,{zoom:15,center:new google.maps.LatLng(this.lat,this.lng),mapTypeId:google.maps.MapTypeId.ROADMAP});this.places.forEach(function(e){var a=e.geometry.location.lat,i=e.geometry.location.lng;new google.maps.Marker({position:new google.maps.LatLng(a,i),map:t})});var e=new google.maps.InfoWindow;google.maps.event.addListener(marker,"click",function(){e.setContent('<div class="ui header">'+place.name+"</div><p>"+place.vicinity+"</p>"),e.open(t,marker)})}}},I={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"viewfilm"},[a("div",{staticClass:"six wide column left",attrs:{id:"opcje"}},[a("form",{staticClass:"ui segment large form"},[a("div",{staticClass:"ui segment"},[a("div",{staticClass:"field"},[a("div",{staticClass:"ui right icon input large"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coordinates,expression:"coordinates"}],attrs:{type:"text",placeholder:"Enter your address"},domProps:{value:t.coordinates},on:{input:function(e){e.target.composing||(t.coordinates=e.target.value)}}}),t._v(" "),a("i",{staticClass:"dot circle link icon",on:{click:t.locatorButtonPressed}})])]),t._v(" "),a("button",{staticClass:"ui button",on:{click:t.findCloseBuyButtonPressed}},[t._v("Znajdź najbliższe kino")])])]),t._v(" "),a("div",{staticClass:"ui segment",staticStyle:{"max-height":"500px",overflow:"scroll"}},[a("div",{staticClass:"ui divided items"},t._l(t.places,function(e){return a("div",{key:e.id,staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"meta"},[t._v(t._s(e.vicinity))])])])}),0)])]),t._v(" "),a("div",{ref:"map",staticClass:"ten wide column segment ui",attrs:{id:"mapa"}})])},staticRenderFns:[]};var E=a("VU/8")(F,I,!1,function(t){a("St58")},null,null).exports,P={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(t){var e=this;s.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){alert("Zalogowany jako: "+e.email),e.$router.push("/"),location.reload()},function(t){alert(t.message)}),t.preventDefault()}}},U={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel orange white-text center"},[a("h3",[t._v("Login")]),t._v(" "),a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("label",{staticClass:"white-text",attrs:{for:"email"}},[t._v("Email")])]),t._v(" "),a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("label",{staticClass:"white-text",attrs:{for:"password"}},[t._v("Hasło")])]),t._v(" "),a("button",{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{click:t.login}},[t._v("Zaloguj")])])])])])])])},staticRenderFns:[]},A=a("VU/8")(P,U,!1,null,null,null).exports,N={name:"register",data:function(){return{email:"",password:""}},methods:{register:function(t){var e=this;s.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(t){alert("Konto stowrzone! "+e.email)},function(t){alert(t.message)}),t.preventDefault()}}},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel grey lighten-4 black-text center"},[a("h3",[t._v("Register")]),t._v(" "),a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"email"}},[t._v("Email Address")])]),t._v(" "),a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"password"}},[t._v("Hasło")])]),t._v(" "),a("button",{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{click:t.register}},[t._v("Rejestracja")])])])])])])])},staticRenderFns:[]},L=a("VU/8")(N,$,!1,null,null,null).exports,W={name:"bazaFimow",data:function(){return{film_id:null,nazwa:null,ocena:null}},beforeRouteEnter:function(t,e,a){C.collection("Filmy").where("film_id","==",t.params.film_id).get().then(function(t){t.forEach(function(t){a(function(e){e.film_id=t.data().film_id,e.nazwa=t.data().nazwa,e.ocena=t.data().ocena})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;C.collection("Filmy").where("film_id","==",this.$route.parms.film_id).get().then(function(e){e.forEach(function(e){t.film_id=e.data().film_id,t.nazwa=e.data().nazwa,t.ocena=e.data().ocena})})}}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bazaFimow"},[e("ul",{staticClass:"collectio with-header"},[e("li",{staticClass:"collection-header"},[e("h4",{staticClass:"white-text"},[this._v("nazwa filmu: "+this._s(this.nazwa))]),this._v(" "),e("h4",{staticClass:"white-text"},[this._v("ocena: "+this._s(this.ocena))])])])])},staticRenderFns:[]},S=a("VU/8")(W,R,!1,null,null,null).exports,q={name:"nowyFilm",data:function(){return{film_id:null,nazwa:null,ocena:null}},methods:{zapiszFilm:function(){var t=this;C.collection("Filmy").add({film_id:this.film_id,nazwa:this.nazwa,ocena:this.ocena}).then(function(e){return t.$router.push("/")}).catch(function(t){return console.log(err)})}}},V={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nowyFilm"},[a("h3",[t._v("Nowy film")]),t._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.zapiszFilm(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.film_id,expression:"film_id"}],staticClass:"white-text",attrs:{type:"text",required:""},domProps:{value:t.film_id},on:{input:function(e){e.target.composing||(t.film_id=e.target.value)}}}),t._v(" "),a("label",[t._v(" Film id# ")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.nazwa,expression:"nazwa"}],staticClass:"white-text",attrs:{type:"text",required:""},domProps:{value:t.nazwa},on:{input:function(e){e.target.composing||(t.nazwa=e.target.value)}}}),t._v(" "),a("label",[t._v(" Nazwa: ")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.ocena,expression:"ocena"}],staticClass:"white-text",attrs:{type:"text",required:""},domProps:{value:t.ocena},on:{input:function(e){e.target.composing||(t.ocena=e.target.value)}}}),t._v(" "),a("label",[t._v(" Ocena: ")])])]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Zapisz")]),t._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Anuluj")])],1)])])},staticRenderFns:[]},B=a("VU/8")(q,V,!1,null,null,null).exports;i.a.use(d.a);var Z=new d.a({routes:[{path:"/",name:"home",component:v,meta:{requiresAuth:!0}},{path:"/skladowe",name:"skladowe",component:f},{path:"/opis",name:"opis",component:g},{path:"/login",name:"login",component:A,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:L,meta:{requiresGuest:!0}},{path:"/film",name:"Film",component:k,meta:{requiresAuth:!0}},{path:"/gps",name:"viewfilm",component:E,meta:{requiresAuth:!0}},{path:"/baza_uzytkownikow",name:"baza",component:j,meta:{requiresAuth:!0}},{path:"/nowyFilm",name:"nowyFilm",component:B,meta:{requiresAuth:!0}},{path:"/:film_id",name:"bazaFimow",component:S,meta:{requiresAuth:!0}}]});Z.beforeEach(function(t,e,a){t.matched.some(function(t){return t.meta.requiresAuth})?s.a.auth().currentUser?a():a({path:"/login",query:{redirect:t.fullPath}}):t.matched.some(function(t){return t.meta.requiresGuest})&&s.a.auth().currentUser?a({path:"/",query:{redirect:t.fullPath}}):a()});var M=Z;i.a.config.productionTip=!1,i.a.config.silent=!0;var O=void 0;s.a.auth().onAuthStateChanged(function(t){O||(O=new i.a({el:"#app",router:M,template:"<App/>",components:{App:u}}))})},St58:function(t,e){},U5vK:function(t,e){},"V+Ip":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d644ac2bdbf4b9f40fed.js.map