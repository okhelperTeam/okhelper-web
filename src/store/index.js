/**
 * Created by zc on 2017/3/16.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex);

new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  // strict: process.env.NODE_ENV !== 'production'
})

export default {store}
