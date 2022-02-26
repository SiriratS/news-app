import Vue from 'vue';
import Vuex from 'vuex';
import actions from './module/action';
import getters from './module/getters';
import mutations from './module/mutations';
import State from './module/state';

Vue.use(Vuex);

export default new Vuex.Store({
  state: new State(),
  getters,
  mutations,
  actions,
});
