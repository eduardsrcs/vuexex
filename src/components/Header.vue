<template>
<header>
  <h1>{{hello}}</h1>
  <p></p>
</header>
</template>

<script>
export default {
  name:'headr',
  data: () => {
    return {
        hello: 'Hello Booble!'
      }
    }
  }
</script>

<style scoped>
h1{
background-color: #ddd;
padding: 1rem;
text-align: center;
}
</style>
