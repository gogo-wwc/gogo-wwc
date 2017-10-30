<template>
  <ul class="product collection">
    <li v-for="p in products" v-bind:key="p.id" class="collection-item grey lighten-4 teal-text text-darken-2">
      <p>{{ p.title }} - {{ p.price | currency }}</p>
      <button class="waves-effect waves-light btn"
        :disabled="!p.inventory"
        @click="add(p)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      products: 'allProducts'
    })
  },
  methods: {
    add (products) {
      this.$store.dispatch('addToCart', products)
    }
  },
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>
