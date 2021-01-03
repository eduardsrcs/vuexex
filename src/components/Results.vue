<template>
<div class="resuults">
  <h2>Results</h2>
  <div class="result" v-for="(item, index) in results" :key="index">
    <a :href="item.url | wikiFixer">{{item.title}}</a>
    <div>{{item.url | wikiFixer}}</div>
    <div v-html="item.snippet"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'results',
  computed: {
    results() {
      return this.$store.getters.results
    }
  },
  filters: {
    wikiFixer: (value)=> value.replace('wikiperia', 'wikipedia')
    
  }
}
</script>

<style scoped>
  .result{
    padding: 1rem;
  }
</style>
