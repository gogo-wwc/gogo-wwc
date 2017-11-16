/**
 * Mocking client-server processing
 */
const _products = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5},
  {"id": 4, "title": "Kitty stuffed animal", "price": 59.99, "inventory": 1}
]

export default {
  fetchProducts() {
    return new Promise((resolve) => {
      // Make some GET ajax call (Mock data here)
      setTimeout(() => resolve(_products), 100);
    })
  },

  buyProducts (products) {
    return new Promise((resolve, reject) => {
      // Make some POST ajax call (Mock data here)
      setTimeout(() => (Math.random() > 0.5) ? resolve() : reject(), 100);
    })
  }
}
