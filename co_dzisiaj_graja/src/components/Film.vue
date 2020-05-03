
<template>
    <div id ='Film'>
        <h3>Film</h3>   
        <div class="field">
    <div> 
        <input type="number" placeholder="Wprowadź godzinę" v-model="godzina"> 00 
        <input type="number" placeholder="Wprowadź minuty"  v-model="godzina"> 00 
    </div> 
    <button class="ui button" @click="findemovie">Znajdź filmy</button>
    </div>    
    <div ref="film"></div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    
    name: 'Film',
        data() {
    return {
        godzina: 0,
        minuta: 0,
        country: "PL",
        films: []
    };
        },
computed: {
    godzina() {
      return `${this.godzina}, ${this.minuta}`;
    }
},
methods: {
findemovie() {
    const URL = 
    
	axios.get(URL).then(response => {
		this.films = response.data.results;
	}).catch(error => {
    console.log(error.message);
  
  });
        
},
}

}
</script>


