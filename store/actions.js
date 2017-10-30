import * as types from './mutation-types'

export const addToCart = ({ commit }, product) => {
  if (product.inventory > 0) {
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  }
}

// Feature - Remove from cart
// export const removeFromCart = ({ commit }, id) => {
//   commit(types.REMOVE_FROM_CART, {id})
// }
