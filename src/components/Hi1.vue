<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ $route.params.username }}</p>
  </div>
</template>

<script>
export default {
  name: 'hi1',
  data () {
    return {
      msg: 'Hi, I am Hi1!'
    }
  }
}
</script>

<style scoped>

</style>
