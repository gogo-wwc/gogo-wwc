import * as types from './mutation-types'

// Step 5: Action executes
export const addToCart = ({ commit }, product) => {
  console.log('Step 5: Action executes');
  if (product.inventory > 0) {
    // Step 6 (part 1): Start modifying store
    console.log('Step 6 (part 1): Start modifying store')
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  }
}

// Remove from cart
export const removeFromCart = ({ commit }, id) => {
  commit(types.REMOVE_FROM_CART, {id})
}
