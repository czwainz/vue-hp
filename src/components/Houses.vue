<template>
  <div class="houses row">
    <div class="col-3 card" v-for="(value, key) in houses">
      <h2>{{key}}</h2>
      <h6>{{value}}</h6>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'houses',
    data() {
      return {

      }
    },
    computed: {
      houses() {
        return this.$store.state.houses
      }
    },
    methods: {}
  }

</script>

<style>


</style>