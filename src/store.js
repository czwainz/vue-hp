import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


let _api = axios.create({
  baseURL: 'https://www.potterapi.com/v1/characters?key=$2a$10$ACiYG3Qon3uDwfXZxaA0COJwmhiFMXuiMerk.UrYDHY/9HEjhEkOW&'
})

export default new Vuex.Store({
  state: {
    students: [],
    houses: {
      Hufflepuff: 0,
      Ravenclaw: 0,
      Gryffindor: 0,
      Slytherin: 0
    }
  },
  mutations: {
    setStudents(state, students) {
      state.students = students
    },
    addPoints(state, house) {
      // state.houses[house] += 5
      Vue.set(state.houses, house, state.houses[house] + 5)

    }
  },
  actions: {
    getStudents({ commit }) {
      _api.get('')
        .then(res => {
          console.log(res)
          commit('setStudents', res.data)
        })
    },
    addPoints({ commit }, house) {
      commit('addPoints', house)
    }
  }
})
