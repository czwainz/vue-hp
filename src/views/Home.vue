<template>
  <div class="home container">
    <div class="row">
      <div class="col-12">
        <h1 class="title">WITCHCRAFT AND WIZARDRY</h1>
      </div>
      <div class="col-12">
        <houses></houses>
      </div>
      <student v-for="student in students" :key="student._id" :s="student"></student>
    </div>
  </div>
  </div>
</template>

<script>
  import Student from '@/components/Student.vue'
  import Houses from '@/components/Houses.vue'

  export default {
    name: 'home',
    //equivalent of running a method on instantiation of constructor in controller or service in vanilla
    mounted() {
      this.$store.dispatch('getStudents')
    },
    computed: {
      // hufflepuff() {
      //   return this.$store.state.students.filter(s => s.house == 'Hufflepuff')
      // }
      students() {
        return this.$store.state.students.filter(c => c.role == 'student')
      }
    },
    components: {
      Student,
      Houses
    }
  }
</script>

<style>
  .container {
    background-color: var(--light)
  }

  .title {
    font-family: 'Marck Script', cursive;
  }
</style>