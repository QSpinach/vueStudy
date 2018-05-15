/**
 * Author: Shen Yanqiu
 * Date: 2018-02-07
 * Time: 16:57
 *
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
  count:0
}
const mutations={
  add(state, payload){
    state.count = state.count + payload.amount;
  },
  reduce(state){
    state.count--;
  }
}
const getters = {
  countAdd: function(state){
    return state.count += 100;
  }
}

const actions ={
  addAction(context){
    setTimeout(() => {
      context.commit('add')
    }, 1000)
    console.log('我比add提前执行');
  },
  reduceAction({commit}){
    commit('reduce')
  }
}
const moduleA = {
  state,
  mutations,
  getters,
  actions,
};
export default new Vuex.Store({
  modules: { a: moduleA },
})
