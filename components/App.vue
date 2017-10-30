<template>
  <div id="app" class="container">
    <h4 class="center-align">Shopping Cart Example</h4>
    <div class="divider"></div>
    <div class="section">
      <h5>Products</h5>
      <product-list></product-list>
    </div>
    <div class="divider"></div>
    <div class="section">
      <h5>Your Cart</h5>
      <cart></cart>
    </div>
  </div>
</template>

<script>
import ProductList from './ProductList.vue'
import Cart from './Cart.vue'

export default {
  components: { ProductList, Cart }
}
</script>
