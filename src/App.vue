<template>
<div>
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-view/>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },


}

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 10px;
}

.movie-img {
   &:hover {
     .overview {
       transform: translateY(0);
     }

  .overview {
            line-height: 1.5;
            position: absolute;
            bottom: 0;
            background-color: rgba(201, 38, 2, 0.9);
            padding: 12px;
            color: #fff;
            transform: translateY(100%);
            transition: 0.3s ease-in-out all;
          }    
   }
}

</style>