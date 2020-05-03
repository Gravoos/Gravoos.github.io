<template>
    <nav>
<div class="nav-wrap black">
            <div class="container black">
                     <ul class="right">
                        <div id="navi"><li v-if="isLoggedIn"><span class="nazwa">{{currentUser}}</span></li>
                        <li v-if="isLoggedIn"><router-link to='/film'>Repertuar</router-link></li>
                        <li v-if="isLoggedIn"><router-link to='/gps'>Najbliższe kino</router-link></li>
                        <li v-if="isLoggedIn"><router-link to='/baza_uzytkownikow'>Baza flmów</router-link></li>
                        <li v-if="isLoggedIn"><router-link to='/nowyFilm'>Nowy film</router-link></li>
                        <li><router-link to='/opis'>Opis</router-link></li>
                        <li><router-link to='/skladowe'>Skladowe</router-link></li>
                        <li v-if="!isLoggedIn"><router-link to='/login'>Logowanie</router-link></li>
                        <li v-if="!isLoggedIn"><router-link to='/register'>Rejestracja</router-link></li>
                        <li v-if="isLoggedIn"><button v-on:click="logout" class="btn black">Wyloguj</button></li></div>
                    </ul>    
            </div>  
        </div>  
    </nav>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'navbar',
    data() {
        return {
            isLoggedIn: false,
            currentUser: false
        };
    },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
    methods: {
        logout: function() {
            firebase
            .auth()
            .signOut()
            .then(() => {
                this.$router.push('/login');
            });
            location.reload();
        }
    }
    
}
</script>

<style>
@media screen and (max-width: 1000px) {
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: gold;
  width: 42px;
} 

li{
  display: block;
  background-color: black;
  border-bottom: 2px solid gold;
  
}
.nazwa{
    color: gold;
}
}
</style>