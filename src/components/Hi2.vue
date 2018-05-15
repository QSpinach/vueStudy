<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="goHome">回到首页了</button>
  </div>
</template>

<script>
export default {
  name: 'hi2',
  data () {
    return {
      msg: 'Hi, I am Hi2!'
    }
  },
  methods: {
    goHome () {
      this.$router.push('/');
    },
  },
}
</script>

<style scoped>

</style>
