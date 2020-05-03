<template>
    <div class="bazaFimow">
        <ul class="collectio with-header">
            <li class="collection-header">
                <h4 class='white-text'>nazwa filmu: {{nazwa}}</h4>
                <h4 class='white-text'>ocena: {{ocena}}</h4>
            </li>
        </ul>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'bazaFimow',
    data()
    {
        return {
        film_id: null,
        nazwa: null,
        ocena: null
    }
    },
    beforeRouteEnter (to,form,next){
        db.collection('Filmy').where('film_id', '==', to.params.film_id)
        .get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.film_id = doc.data().film_id
                    vm.nazwa = doc.data().nazwa
                    vm.ocena = doc.data().ocena
                })
            })
        })
    },watch: {
        '$route': 'fetchData'
    },
    methods:{
        fetchData(){
            db.collection('Filmy').where('film_id', '==', this.$route.parms.film_id)
            .get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.film_id = doc.data().film_id
                    this.nazwa = doc.data().nazwa
                    this.ocena = doc.data().ocena
                })
            })
        }
    }
}
</script>