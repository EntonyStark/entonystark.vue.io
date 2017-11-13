<template>
  <div class="row">
    <div class="col-3">
      <div class="card ">
        <img class="card-img-top rounded float-left" :src="nav.navigation[index].Src" alt="Card image cap">
       <div class="card-body">
        <h4 class="card-title">{{nav.navigation[index].Title}}</h4>
        <p class="card-text">Not intresting text</p>
        <a href="#" class="btn btn-primary">Go out</a>
      </div>
</div>
    </div>
    <div>
      <h1>{{nav.navigation[index].Title}}</h1>
      <p>{{nav.navigation[index].Description}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'thearticle',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      nav: 'getNav'
    })
  },
  props: {
    index: { type: Number, require: true }
  }
}
</script>