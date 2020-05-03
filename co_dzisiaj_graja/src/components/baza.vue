<template>
  <div id="baza">
    <h3>Baza filmów</h3>
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Filmy</h4>
      </li>
      <li v-for="film in filmy" v-bind:key="film.id" class="collection-item">
        <div class="chip">{{film.ocena}}</div>{{film.nazwa}}
 <!--       <router-link class="scondary-content" v-bind:to="{name:'bazaFimow'
        , params: {film_id: film.film_id}}"><i class="fa fa-eye"></i>
        </router-link>
        -->
        </li>
    </ul>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'baza',
  data() {
    return {
      filmy: [],
      loading: true
    };
  },
  created() {
    db.collection('Filmy').orderBy('ocena').get().then(
      querySnapshot => {
        querySnapshot.forEach(doc =>{
          const data ={
            'id':doc.id,
            'film_id': doc.data().film_id,
            'nazwa': doc.data().nazwa,
            'ocena': doc.data().ocena
          }
          this.filmy.push(data)
        })
      }
        )}
}
</script>