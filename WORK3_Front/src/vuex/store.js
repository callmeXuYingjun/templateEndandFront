// 4. new Vuex.Store() 实例，得到一个 数据仓储对象

import { createStore } from 'vuex'
import axios from 'axios'

var store = createStore({
  state: {
    wangge_id: "all",
    testData: {}
  },
  mutations: {
    testData_Update(state, data) {
      state.testData = data
    },
  },
  actions: {
    async getTestData_action({ commit }) {
      let response = await axios.get('/algorithm/getTestView')
      commit('testData_Update', response.data)
      console.log(response.data)
    },
  },
  getters: {
  }
})

export default store