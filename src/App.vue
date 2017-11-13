/* eslint-disable no-trailing-spaces */
<template>
  <div id="app" class="container">
    <ul class="nav justify-content-end">
      <li class="nav-item" v-for="item in generalNav">
        <router-link class="nav-link active" :to="item.src" >{{item.title}}</router-link>
      </li>
    </ul>
      <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  name: 'app',
  created () {
    axios.get('https://entonystark.github.io/json.github.io/project.json')
      .then((response) => {
        this.$store.dispatch('addNav', response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  computed: {
    ...mapGetters({
      generalNav: 'getMainNav'
    })
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
