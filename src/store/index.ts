import Vue from 'vue';
import Vuex from 'vuex';
import actions from './module/headline/headline.action';
import getters from './module/headline/headline.getters';
import mutations from './module/headline/headline.mutations';
import State from './module/headline/headline.state';

Vue.use(Vuex);

export default new Vuex.Store({
  state: new State(),
  getters,
  mutations,
  actions,
});
