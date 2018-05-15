<template>
  <div>
    {{ msg }}
    <hr/>
    <h3>{{ $store.state.a.count }}</h3>
    <div>
      <button @click="$store.commit({ type: 'add', amount: 10 })">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </div>

    <div>
      <button @click="add">+</button>
      <button @click="reduce">-</button>
    </div>

    <div>
      <button @click="add">add</button>
    </div>

    <p>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </p>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';
  export default {
    name: 'count',
    data () {
      return {
        msg: "Hello Vuex",
      }
    },
    mounted () {
      // console.log(typeof this.countAdd);
    },
    methods: {
      ...mapMutations({
        add: 'add', // methods 映射为 store.commit 调用
        reduce: 'reduce',
      }),
      ...mapActions(['addAction','reduceAction']),
    },
    computed: {
      computed1: () => {

      },

      computed2: () => {

      },
      // ...mapState(['count']),
      ...mapGetters([
        'countAdd',
      ])
    }

    // computed: mapState({
    //   count: state=>state.count
    // })
    // computed: mapState(['count']) //当映射的计算属性的名称与 state 的子节点名称相同时
  }
</script>

<style scoped>

</style>
