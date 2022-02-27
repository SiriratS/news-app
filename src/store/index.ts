import Vue from 'vue';
import Vuex from 'vuex';
import actions from './module/action';
import mutations from './module/mutations';
import State from './module/state';

Vue.use(Vuex);

export default new Vuex.Store({
  state: new State(),
  mutations,
  actions,
});
