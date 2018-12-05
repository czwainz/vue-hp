<template>
  <div class="houses row">
    <div class="col-3" v-for="(value, key) in houses">
      <h1>{{key}}</h1>
      <h4>{{value}}</h4>
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