<template>
  <div class="component">
    <p>{{title}}: {{total}}</p>
    <p v-show="isFreeShipping" class="deep-orange-text text-darken-2">Free shipping!</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    // prop example: free-shipping-rule defaults to 5
    freeShippingRule: {
      type: Number,
      default: 5
    }
  },
  computed: {
    total() {
      return this.$store.state.cart.added.reduce((total, p) => {
        return total + p.quantity;
      }, 0)
    },
    isFreeShipping() {
      // prop example: free-shipping-rule if totals items in cart >= the prop rule FREE SHIPPING!!!!
      return this.total >= this.freeShippingRule;
    }
  }
}
</script>
