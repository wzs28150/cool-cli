import axios from 'axios'

export const state = () => ({
  authnav: null
})

export const mutations = {
  SET_NAV: function (state, nav) {
    state.authnav = nav
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authnav) {
      commit('SET_NAV', req.session.authnav)
    }
  },
  async login({ commit }, { authname, authkey }) {
    try {
      const { data } = await axios.post('/login', { authname, authkey })
      // console.log(data.data);
      commit('SET_NAV', data)
    } catch (error) {
      // console.log(error);
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout({ commit }) {
    await axios.post('/api/logout')
    commit('SET_NAV', null)
  }

}
