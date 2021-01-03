<template>
<div class="resuults">
  <h2>Results</h2>
  <div class="result" v-for="(item, index) in results" :key="index">
    <a :href="item.url">{{item.title}}</a>
    <div>{{item.url}}</div>
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
  }
}
</script>