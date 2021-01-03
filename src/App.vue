<template>
  <div id="app">
    <Header />
    <Search />
    <Results />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: {
    Header, Search, Results
  }
}
</script>

<style>

</style>
