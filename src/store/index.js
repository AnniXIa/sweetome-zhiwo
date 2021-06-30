import Vue from 'vue'
import Vuex from 'vuex'
import cityList from './modules/cityList'

Vue.use(Vuex)

const state = {
  userInfo: {
    avatarUrl: '',
    nickName: "扬帆"
  },
  balance: 8888
}
const mutations = {
  add(state, params) {
    state.balance = (state.balance + params.num) > 0 ? (state.balance + params.num) : 0
  }
}
export default new Vuex.Store({
  state,
  mutations,
  modules: {
    cityList
  },
})