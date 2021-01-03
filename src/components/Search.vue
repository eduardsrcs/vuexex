<template>
  <div>
    <input type="text" v-model="query">
    <button @click="search">Find</button>
  </div>
</template>

<script>
// import store from '../store'
export default {
  name: 'search',
  data: () => ({
    query: ''
  }),
  methods: {
    search() {
      this.$store.dispatch('search', this.query)
    }
  }
}
</script>