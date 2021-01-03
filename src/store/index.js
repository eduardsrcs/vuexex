import Vue from 'vue'
import Vuex from 'vuex'
import jsonp from 'jsonp'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    results: []
  },
  mutations: {
    set(state, {type, items}) {
      state[type] = items
    }
  },
  actions: {
    search({ commit }, query) {
      const url = `https://ru.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&utf8=&format=json`

      jsonp(url, (error, response) => {
        if(error) {
          throw error
        }
        const results = response.query.search

        commit('set', { type: 'results', items: results })
      })
    }
  },
  getters: {
    results(state){
      return state.results.map((item)=>{
        item.url = `https://ru.wikiperia.org/wiki/${item.title}`
        return item
      })
    }
  },
  modules: {
  }
})
