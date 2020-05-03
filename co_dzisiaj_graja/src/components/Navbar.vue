<template>
    <nav>
<div class="nav-wrap">
  <nav>
            <div class="container">
                     <ul class="right">
                        <div><li v-if="isLoggedIn"><span class="nazwa">{{currentUser}}</span></li>
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
  </nav>
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
   body{
     margin: 0;
     padding: 0;
   }
   nav{
     width: 100vw;
     background:black;
     margin-bottom: 20px;
     align-items: center;
     margin: 0 auto;
     border-bottom: 1px solid gold;
   }

@media screen and (max-width: 1000px) {
   body{
     margin: 0;
     padding: 0;
   }
   nav{
     width: 100vw;
     background:black;
     margin-bottom: 20px;
     align-items: center;
     margin: 0 auto;
   }
   ul{
     margin: 0 auto;
     padding: 0;
     text-align: center;
     align-items: center;
     
   }
   ul li{
     list-style: none;
     display: inline-block;
     border: 1px solid gold;
     width: 100vw;
     text-align:center;
   }

   ul li a{
     color: gold;
     text-decoration: none;
   }
}
</style>