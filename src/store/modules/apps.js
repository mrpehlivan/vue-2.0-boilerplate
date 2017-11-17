import api from '../../api'
import {
  TEST_SUCCESS,
  TEST_FAILURE
} from '../types'

const state = {
  "message" : ""
}

// actions
const actions = {
  postLogin ({ commit},testId,data){
    api.postData(testId,data).then(response => {
      if(!response.ok){
        return commit(TEST_FAILURE)
      }
      commit(TEST_SUCCESS, { message: response.data.message })
    }, response => {
      commit(TEST_FAILURE)
    })
  },
  getData ({ commit}){
    api.getData().then(response => {
      if(!response.ok){
        return commit(TEST_FAILURE)
      }
      commit(TEST_SUCCESS, { message: response.data.message })
    }, response => {
      commit(TEST_FAILURE)
    })
  }
}

const mutations = {
  [TEST_SUCCESS](state , action){
    state.message = action.message
  },
  [TEST_FAILURE](state , action){
    state.message = action.message
  }
}

export default {
  state,
  actions,
  mutations
}

