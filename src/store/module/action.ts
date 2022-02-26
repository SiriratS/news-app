import { ActionContext, ActionTree } from 'vuex';
import $api from '@/api/api';
import { SearchHeadline } from '@/interface/headline';
import State from './state';

const actions: ActionTree<State, State> = {
  async findNews({ commit }: ActionContext<State, State>, search?: SearchHeadline) {
    commit('toggleFilter', false);
    commit('loading', true);
    const response = await $api.headline.find(search as SearchHeadline);

    commit('fetchHeadline', response.data.articles);
    commit('loading', false);
  },
  findNewsByIndex({ commit, state }: ActionContext<State, State>, index?: number) {
    const news = state.newsItems?.find((_item, i) => i === index);
    commit('getNewsByIndex', news);
  },
  openFilter({ commit }) {
    commit('toggleFilter', true);
  },
};

export default actions;
