<template>
  <div>
    <div class="container">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="login card-panel white-text center" id="color-black">
          <h3 class="text">Login</h3>
          <form action="index.html">
            <div class="input-field">
              <input type="email" id="email" v-model="email">
              <label class="text" for="email">Email</label>
            </div>
            <div class="input-field">
              <input type="password" id="password" v-model="password">
              <label class="text" for="password">Hasło</label>
            </div>
            <button v-on:click="login" class="btn btn-large btn-extended lighten-4 black-text" id="color">Zaloguj</button>
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
    name: 'login',
     data: function() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`Zalogowany jako: ${this.email}`);
            this.$router.push('/');
            location.reload();
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