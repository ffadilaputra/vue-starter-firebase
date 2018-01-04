<template>
  <div class="sign-up">
    <p>Ayo bikin Akun Baru</p>
    <input class="form-control" type="text" v-model="email" placeholder="Email">
    <br>
    <input class="form-control" type="password" v-model="password" placeholder="Password">
    <br>
    <button v-on:click="signUp" class="btn btn-primary"> Sign Up </button>
    <span>Or go Back <router-link to="/login">Login</router-link></span>
  </div>
</template>

<style scoped>
.sign-up {
    margin : auto 30%;
}
</style>

<script>

import firebase from 'firebase'

export default {
    name: 'signUp',
    data: function(){
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      signUp: function(){
        firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
          function(user){
              alert('Your Account has been created')
          },
          function(err){
            alert('Oops' + err.message)
          }
        )
      }
    }
}
</script>

