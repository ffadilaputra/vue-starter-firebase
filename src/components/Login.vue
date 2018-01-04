<template>
  <div class="login">
    <h3>Sign In</h3>
    <input class="form-control" type="text" v-model="email" placeholder="Email">
    <br>
    <input class="form-control" type="text" v-model="password" placeholder="Password">
    <br>
    <button v-on:click="signIn" class="btn btn-primary">Login</button>
    <p>Dont Have Account ? Yo can register <router-link to="/">Here</router-link></p>
  </div>
</template>

<style>
  .login {
    margin: auto 30%;
  }
</style>


<script>

import firebase from 'firebase'

export default {
    name: 'Login',
    data: function(){
      return {
        email:'',
        password:''
      }
    },
    methods: {
      signIn: function(){
        firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(
          function(user){
            alert('Succeessfully Login')
          },
          function(err){
            alert('Opps something wrong' + err.message)
          }
        )
      }
    }
}
</script>


