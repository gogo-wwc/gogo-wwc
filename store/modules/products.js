import shop from '../../api/shop'
import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allProducts: state => state.all
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.fetchProducts().then((products) => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    // state.all is a property of state, see line 6
    state.all = products
  },

  [types.ADD_TO_CART] (state, { id }) {
    state.all.find(p => p.id === id).inventory--
  },

  // Remove from cart
  [types.REMOVE_FROM_CART] (state, { id }) {
    state.all.find(p => p.id === id).inventory++
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
