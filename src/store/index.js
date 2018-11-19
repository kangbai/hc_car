/*
 * @Author: kangbai
 * @Date: 2018-10-22 15:15:08
 * @Last Modified by: kangbai
 * @Last Modified time: 2018-10-30 10:06:21
 */

import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
