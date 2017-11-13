<template>
  <div>
    <h1>Choose the section you want to see</h1>
    <ul class="nav">
      <li class="nav-item" v-for="(item, index) in nav.navigation" >
        <a href="#" class="nav-link" @click.prevent="newInfo(index)" >{{item.Title}}</a>
      </li>
    </ul>
    <transition name="card">
      <thesection  v-if="pictureVisible && typeof(index) === 'number'" :index="index"></thesection>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import thesection from '@/components/section'
export default {
  name: 'nav',
  data () {
    return {
      pictureVisible: false
    }
  },
  computed: {
    ...mapGetters({
      nav: 'getNav',
      index: 'getIndex'
    })
  },
  methods: {
    newInfo (index) {
      this.pictureVisible === false ? this.pictureVisible = true : this.pictureVisible = false
      this.$store.dispatch('setIndex', index)
    }
  },
  components: {
    thesection
  }
}
</script>

<style>

.card-enter-active {
  animation: show-menu 1s forwards;
}

.card-leave-active {
  animation: hide-menu 1s forwards;
}

@keyframes show-menu {
    0% { margin-top: -50px; }
   50% { margin-top: 50px; }
  100% { margin-top:0; }
}

@keyframes hide-menu {
    0% { margin-top: 0px; opacity:1; }
   50% { margin-top: 50px; opacity: 0.5;}
  100% { margin-top:-50px; opacity: 0; }
}
</style>
