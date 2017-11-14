<template>
  <div class="component">
    <h5>{{title}}</h5>
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['title'],
  computed: {
    ...mapGetters({
      products: 'allProducts'
    })
  },
  methods: {
    add (products) {
      // Step 4: Vue trigger action
      console.log('Step 4: Vue trigger action');
      this.$store.dispatch('addToCart', products)
    }
  },
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>
