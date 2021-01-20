import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Chakra from '@chakra-ui/vue'
// import store from './store'
import Vuex from 'vuex'

Vue.use(Chakra)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    clipboard: {
      clipboardId: '',
      items: []
    },
    archivedClipboards: []
  },
  mutations: {
    setClipboard(state, payload) {
      state.clipboard.clipboardId = payload.clipboardId
      state.clipboard.items = payload.items
    },
    unsetClipboard(state) {
      state.archivedClipboards.push(state.clipboard)
      state.clipboard = {clipboardId: '', items: []}
    },
    addItemToClipboard(state, payload) {
      const newItem = {
        id: payload.id,
        content: payload.content
      }

      state.clipboard.items = [...state.clipboard.items, newItem]
    },
    removeItemFromClipboard(state, payload) {
      state.clipboard.items = state.clipboard.items.filter(item => item.id != payload.itemId)
    }
  },
  getters: {
    clipboardId(state) {
      return state.clipboard.clipboardId
    },
    clipboardItems(state) {
      return state.clipboard.items
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
