<template>
<div>
    <h2>This is a movie detail page</h2>
    <p>The movie id is {{ $route.params.id }}</p>
    <h3>movie name: {{ $route.params.overview }}</h3>
</div>
</template>

<script>
// import axios from 'axios'

export default {
    name: 'MovieDetail',
    data() {
        return {
            movie:'',
            id:'',
        }
    },

    created: function() {
        this.id = this.$route.params.id
    },

    methods: {
        // getMovieDetail() {
        //     axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.movie.id}?api_key=3e21d0634b298df121ea5353d494ab2b&language=en-US`)
        //     .then(response => {
        //         this.movie = response.data
        //     })
        //     .catch(error => console.log(error))
        // }
    }
}


</script>
