<template>
  <div class="row">
    <div class="col-3">
      <div class="card ">
        <img class="card-img-top rounded float-left" :src="nav.navigation[index].Src" alt="Card image cap"></img>
       <div class="card-body">
        <h4 class="card-title">{{nav.navigation[index].Title}}</h4>
        <p class="card-text">Click to get information</p>
        <a href="#" class="btn btn-primary" @click.prevent="newPage(nav, index)">More</a>
      </div>
</div>
    </div>
    <div class="col-7">
      <h1>Some info: </h1>
      <p>{{nav.navigation[index].Description[counter].someText}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'thearticle',
  data () {
    return {
      counter: 0
    }
  },
  computed: {
    ...mapGetters({
      nav: 'getNav'
    })
  },
  methods: {
    newPage (nav, index) {
      this.counter++
      if (this.counter === nav.navigation[index].Description.length) {
        this.counter = 0
      }
    }
  },
  props: {
    index: { type: Number, require: true }
  }
}
</script>