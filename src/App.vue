<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>导航：
      <router-link to="/">首页</router-link> |
      <router-link to="/params/198/qspinach website is very good">params</router-link> |
      <router-link to="/goParams/200/qspinach website is very good">goParams</router-link> |
      <router-link to="/hi">hi页</router-link> |
      <router-link :to="{name: 'hi1', params:{ username: 'syq' }}">hi页面1</router-link> |
      <router-link to="/hi/hi2">hi页面2</router-link> |
      <router-link to="/bbbbbb">我是瞎写的</router-link>
      <button @click="goback">后退</button>
      <button @click="goHome">回到首页</button>
    </p>
    <p>{{ $route.name }}</p>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goback(){
      this.$router.go(-1);
    },
    goHome(){
      this.$router.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
