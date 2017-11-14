import shop from '../../api/shop'
import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  added: [],
  checkoutStatus: null   // options: null | successful | failed
}

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus
}

// actions
const actions = {
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.added]
    commit(types.CHECKOUT_REQUEST)
    shop.buyProducts(products).then(
      () => commit(types.CHECKOUT_SUCCESS),
      () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
    )
  }
}

// mutations
const mutations = {
  // Step 6 (part 2): How you want to modify store
  [types.ADD_TO_CART] (state, { id }) {
    console.log('Step 6 (part 2): How you want to modify store');
    // state.checkoutStatus is a property of state, see line 8
    state.checkoutStatus = null
    const record = state.added.find(p => p.id === id)
    if (!record) {
      // state.added is a property of state, see line 7
      // Step 7: Update store
      console.log('Step 7: Update store');
      state.added.push({
        id,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },

  // Remove from cart
  [types.REMOVE_FROM_CART] (state, {id}) {
    const record = state.added.find(p => p.id === id)
    let quantity = record.quantity;
    if(quantity === 1) {
      const index = state.added.indexOf(record);
      state.added.splice(index, 1);
    } else {
      record.quantity--
    }
  },

  [types.CHECKOUT_REQUEST] (state) {
    // clear cart
    state.added = []
    state.checkoutStatus = null
  },

  [types.CHECKOUT_SUCCESS] (state) {
    state.checkoutStatus = 'successful'
  },

  [types.CHECKOUT_FAILURE] (state, { savedCartItems }) {
    // rollback to the cart saved before sending the request
    state.added = savedCartItems
    state.checkoutStatus = 'failed'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
