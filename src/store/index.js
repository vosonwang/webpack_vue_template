import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';


// initial state
const state = {

};



const mutations = {



};



const actions = {

};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  strict: debug,
  plugins: debug !== debug ? [createLogger()] : []
})
