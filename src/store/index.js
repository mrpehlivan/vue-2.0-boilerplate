import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import apps from './modules/apps'
import * as actions from './actions'
import * as getters from './getters'


const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    apps
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
