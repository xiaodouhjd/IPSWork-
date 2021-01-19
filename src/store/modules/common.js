import { common } from '@/api/dispatch'

const state = {
  common: []
}

const mutations = {
  GET_COMMONINFO: (state, data) => {
    state.data = data
  },
}

const actions = {
  abc() {
    common().then((res) => {
      console.log(res);
      commit('GET_COMMONINFO', res.data)

    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
