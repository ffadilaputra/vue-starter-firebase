<template>
  <div class="main-board">
    <h1> Hello Dashboard</h1>

    <div class="panel-body">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book.title">
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td><span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeBook(book)"></span></td>
          </tr>
        </tbody>
      </table>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Add New Books</h3>
        </div>
        <div class="panel-body">
          <form id="form" class="form-outline" v-on:submit.prevent="addBooks">
            <div class="form-group">
              <label for="bookTitle">Title:</label>
              <input type="text" id="bookTitle" class="form-control" v-model="newBook.title">
            </div>
            <div class="form-group">
              <label for="bookAuthor">Author:</label>
              <input type="text" id="bookAuthor" class="form-control" v-model="newBook.author">
            </div>
          <div class="form-group">
              <input type="submit" class="btn btn-primary" value="Add Book">
              <button class="btn btn primary" v-on:click="logout">Logout</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .main-board {
    margin: auto 30%;
  }
</style>


<script>
  import firebase from 'firebase'
  import VueFire from 'vuefire'
  import {
    db,
    booksRef
  } from '../config'

  // let booksRef =  firebase.database().ref('books')
  // console.log(booksRef)
  export default {
    name: 'Board',
    firebase: {
      books: booksRef,
    },
    data() {
      return {
        newBook: {
          title: '',
          author: ''
        }
      }
    },
    methods: {
      logout: function() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        })
      },
      addBooks: function() {
        booksRef.push(this.newBook)
        this.newBook.title = '';
        this.newBook.author = '';
      },
      removeBook: function(book){
        booksRef.child(book['.key']).remove()
      }
    },
  }
</script>
