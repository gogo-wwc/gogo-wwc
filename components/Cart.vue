<template>
  <div class="cart component">
    <h5>{{title}}</h5>
    <!-- whether or not to show this text is driven by cartProducts getter, which is driven by state.cart -->
    <p v-show="!products.length" class="deep-orange-text text-lighten-1"><i>Please add some products to cart.</i></p>
    <ul>
      <!-- Render products -->
      <li v-for="p in products" v-bind:key="p.id" class="teal-text text-darken-2">
        <span>{{ p.title }} - {{ p.price | currency }} x {{ p.quantity }}</span>
        <!-- Remove from cart -->
        <span><button @click="remove(p.id)" class="remove btn deep-orange darken-2">Remove</button></span>
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <p><button class="waves-effect waves-light btn indigo darken-4" :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['title'],
  computed: {
    // grab some existing getters into component
    ...mapGetters({
      // Step 3 and 8: Listening the store, and render on page if it changes
      products: 'cartProducts',
      checkoutStatus: 'checkoutStatus'
    }),
    // computed property only be used in this component
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  },
  methods: {
    // Remove from cart
    remove(id) {
      this.$store.dispatch('removeFromCart', id)
    },
    checkout (products) {
      this.$store.dispatch('checkout', products)
    }
  },
  mounted() {
    console.log('Step 3 and 8: Listening the store, and render on page if it changes');
  },
  updated() {
    console.log('Step 3 and 8: Listening the store, and render on page if it changes');
  }
}
</script>
