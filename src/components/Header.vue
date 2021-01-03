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