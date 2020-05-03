<template>
    <div class="nowyFilm">
        <h3>Nowy film</h3>
        <div class="row">
            <form @submit.prevent='zapiszFilm' class='col s12'>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="nazwa"
                        required class=white-text>
                        <label> Nazwa: </label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="ocena" 
                        required class=white-text>
                        <label> Ocena: </label>
                    </div>
                </div>
                <button type="submit" class='btn'>Zapisz</button>
                <router-link to="/" class="btn grey">Anuluj</router-link>
            </form>
        </div>
    </div>
</template>
<script>
import db from './firebaseInit'
export default {
    name:'nowyFilm',
    data(){
        return{
            film_id: null,
            nazwa: null,
            ocena: null
        }
    },
    methods:{
        zapiszFilm(){
            db.collection('Filmy').add({
                film_id: this.film_id,
                nazwa: this.nazwa,
                ocena: this.ocena
            })
            .then(docRef => this.$router.push('/'))
            .catch(error => console.log(err))
        }
    }
}
</script>