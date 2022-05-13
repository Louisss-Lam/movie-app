<template>
    <h2>This is a movie detail page</h2>
    <!-- <h2>{{ this.movie.title }}</h2> -->
</template>

<script>
import axios from 'axios'

export default {
    name: 'MovieDetail',
    data() {
        return {
            movie: null,
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
