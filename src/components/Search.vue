<template>
  <div class="mainsearch">
    <input type="text" v-model="query" @keyup.enter="search">
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

<style scoped>
.mainsearch {
background-color: #eeb;
border-radius: 5px;
padding: 1rem;
}
</style>
