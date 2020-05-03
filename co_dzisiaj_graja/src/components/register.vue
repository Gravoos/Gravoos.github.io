<template>
  <div>
    <div class="container">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="login card-panel white-text center" id="color-black">
          <h3 class="text" >Rejestracja</h3>
          <form action="index.html">
            <div class="input-field">
              <input type="email" id="email" v-model="email">
              <label for="email">Email</label>
            </div>
            <div class="input-field">
              <input type="password" id="password" v-model="password">
              <label for="password">Hasło</label>
            </div>
            <button v-on:click="register" class="btn btn-large btn-extended black-text" id="color">Rejestracja</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'register',
  data: function() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    register: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            // console.log(user);
            alert(`Konto stowrzone! ${this.email}`);
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    }
  }
};
</script>

<style>
#color{
background: rgb(255, 143, 50);
}
.text{
  color:rgb(255, 143, 50);
}
#color-black{
  background: black;
}
</style>