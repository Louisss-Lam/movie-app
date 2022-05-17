<template>
<div>
  <nav class="navbar navbar-light bg-primary">
    <span class="navbar-brand mb-0 h1">Navabr</span>
  </nav>
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


</style>