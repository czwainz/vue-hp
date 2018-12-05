<template>
  <div class="student col-3 card">
    <h3>{{s.name}}</h3>
    <button @click="addPoints" type="btn btn-success">Add Points</button>
  </div>
</template>

<script>
  export default {
    name: 'student',
    props: ['s'],
    data() {
      return {

      }
    },
    computed: {},
    methods: {
      addPoints() {
        this.$store.dispatch('addPoints', this.s.house)
      }
    }
  }

</script>

<style>


</style>