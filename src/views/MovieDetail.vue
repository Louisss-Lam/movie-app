<template>
<div>
    <h2>Movie name: {{ movie.title }}</h2>
    <img v-bind:src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" v-bind:alt="movie.title">
    <p>{{ movie.overview }}</p>

</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'MovieDetail',
    data() {
        return {
            movie: '',
        }
    },

    created: function() {
        this.getMovieDetail()
    },

    methods: {
        getMovieDetail() {
            axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=3e21d0634b298df121ea5353d494ab2b&language=en-US`)
            .then(response => {
                this.movie = response.data
            })
            .catch(error => console.log(error))
        }
    }
}


</script>
