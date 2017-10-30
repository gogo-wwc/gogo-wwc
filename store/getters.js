
/**
 * 
 * Getters:
 * - Computed state properties (read-only)
 * - Getter's result is cached based on it's dependencies, it will only re-evaluate 
 *   when some of dependencies have changed.
 * 
 * Loop through state.cart.added[] array (which only contains id and quantity of each item),
 * find each id in state.products.all[] array (which contains full product info).
 * Return cart added array of {id, title, price, quantity}.
 * 
 * Similar to SQL Query:
 * select id, title, price, quantity from TABLE_ADDED inner join TABLE_PRODUCTS on TABLE_ADDED.id = TABLe_PRODUCTS.id
 * 
 * Data sync: (State driven rendering)
 * When quantity updated, the result will automatically updated, which will cause DOM (HTML) be updated.
 */
export const cartProducts = state => {
  return state.cart.added.map(({ id, quantity }) => {
    const product = state.products.all.find(p => p.id === id)
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity
    }
  })
}
