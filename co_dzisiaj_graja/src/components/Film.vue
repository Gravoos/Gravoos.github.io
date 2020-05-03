
<template>
    <div id ='Film'>
        <h1 class="white-text center">Strona w budowie</h1>   
        <div class="field">
    <div> 
    </div> 
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


