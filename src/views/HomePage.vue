<template>
    <div>
        <h2>Popular movies</h2>
        <ul>
          <li v-for="movie of movies" :key="movie.id" @click="movie.showDetail = !movie.showDetail">
            <router-link :to="{ name: 'MovieDetail', params: {id: movie.id}}">
            <img class="movie-img" v-bind:src="'https://image.tmdb.org/t/p/w500' + movie.poster_path "  v-bind:alt="movie.title">
            </router-link>
          </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';


const API_KEY = "api_key=3e21d0634b298df121ea5353d494ab2b";
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = '/discover/movie?sort_by=popularity.desc&' + API_KEY;

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      movies: [],
      showDetail: false,

    }
  },

  created: function () { 
    this.loadData()
  },

  methods: {
    loadData() {
      axios.get(BASE_URL + API_URL)
        .then(response => {
          console.log(response.data)
          this.movies = response.data.results
          for (let i = 0; i < this.movies.length; i++) {
            this.movies[i].showDetail = false
          }
        })
        .catch(error => console.log(error))
    }
  }
}

</script>

<style>


</style>