<template>
  <div>
    <ul>
      <li>
        <h4 id="color-center">Filmy</h4>
      </li>
      <li v-for="film in filmy" v-bind:key="film.id" id="color">
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

<style>
#color{
color: rgb(255, 143, 50);
font-size: 20px;
}
.text{
  color:rgb(255, 143, 50);
}
#color-center{
color: rgb(255, 143, 50);
text-align: center;
font-size: 40px;
}

</style>