<template>
  <div class='viewfilm'>
    <div id="opcje" class="six wide column left">
    <form class="ui segment large form">
      <div class="ui segment">
        <div class="field">
          <div class="ui right icon input large">
            <input type="text" placeholder="Wprowadź adres" v-model="coordinates" />
                        <i class="dot circle link icon" @click="locatorButtonPressed"></i>
          </div>
        </div>
        <button class="ui button" @click="findCloseBuyButtonPressed">Znajdź najbliższe kino</button>
      </div>
    </form>
    <div class="ui segment"  style="max-height:500px;overflow:scroll">
    <div class="ui divided items">
        <div class="item" v-for="place in places" :key="place.id">
            <div class="content">
                <div class="header">{{place.name}}</div>
                <div class="meta">{{place.vicinity}}</div>
            </div>
        </div>
    </div>
</div>
</div>
<div id="mapa" class="ten wide column segment ui" ref="map"></div>
</div>
</template>
<script>
import axios from "axios";

export default {
    name: 'viewfilm',
    data() {
    return {
      lat: 0,
      lng: 0,
      places: []
    };
},
computed: {
    coordinates() {
      return `${this.lat}, ${this.lng}`;
    }
},
methods: {
  locatorButtonPressed() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      },
      error => {
        console.log("Nie znaleziono lokalizacji");
      }
    );
  },
  findCloseBuyButtonPressed() {
	const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
        this.lat
      },${this.lng}&radius=5000&type=movie_theater&keyword=cinema_city&key=AIzaSyDcFr6fILO2WXYFpJcBI3IO7jJ2tEAbhlw`;
        
	axios.get(URL).then(response => {
		this.places = response.data.results;
		this.addLocationsToGoogleMaps();
	}).catch(error => {
    console.log(error.message);
  
  });
        
},
addLocationsToGoogleMaps() {
	var map = new google.maps.Map(this.$refs['map'], {
    zoom: 14,
		center: new google.maps.LatLng(this.lat, this.lng),
		mapTypeId: google.maps.MapTypeId.ROADMAP
    });
	this.places.forEach((place) => {
		const lat = place.geometry.location.lat;
		const lng = place.geometry.location.lng;
		let marker = new google.maps.Marker({
			position: new google.maps.LatLng(lat, lng),
			map: map
		});
    });

var infowindow = new google.maps.InfoWindow();
google.maps.event.addListener(marker, "click", () => {
	infowindow.setContent(`<div class="ui header">${place.name}</div><p>${place.vicinity}</p>`);
	infowindow.open(map, marker);
});

}
}
}
</script>

<style>
#mapa{
    float: left; 
    width: 45vw;
    height: 80vh;
    margin:0 auto 20px auto;
}
#opcje{
    width: 300px;
    float:left; 

}

@media screen and (max-width: 1000px) {
#mapa{
    float: left; 
    width: 90vw;
    height: 300px;
}
#opcje{
    width: 300px;
    float:left; 

}
}
</style>


