import Vue from 'vue'
import Vuex from 'vuex'
import {getters} from './getters'
Vue.use(Vuex)
const state = {
	count: 0,
	arr: [1,2,3,4]
}
export default new Vuex.Store({
  state,
  getters,
  // actions,
  // mutations
})