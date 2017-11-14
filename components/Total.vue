<template>
  <div class="component">{{title}}: {{total}}</div>
</template>

<script>
export default {
  props: ['title'],
  computed: {
    total() {
      return this.$store.state.cart.added.reduce((total, p) => {
        return total + p.quantity;
      }, 0)
    }
  }
}
</script>
