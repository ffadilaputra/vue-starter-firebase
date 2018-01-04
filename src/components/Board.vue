<template>
    <div class="main-board">
        <h1> Hello Dashboard</h1>
        <button  class="btn btn primary" v-on:click="logout">Logout</button>
    </div>
</template>

<style scoped>
    .main-board {
      margin: auto 30%;
    }
</style>


<script>

import firebase from 'firebase'

export default {
    name: 'Board',
    methods: {
      logout : function(){
          firebase.auth().signOut().then(() => {
              this.$router.replace('login')
          })
      }
    }
}
</script>
