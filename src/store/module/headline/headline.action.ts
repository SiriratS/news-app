import { ActionContext, ActionTree } from 'vuex';
import $api from '@/api/api';
import State from './headline.state';

const actions: ActionTree<State, State> = {
  async find({ commit }: ActionContext<State, State>, search?: any) {
    commit('loading', true);
    const response = await $api.headline.find(search);

    commit('fetchHeadline', response.data.articles);
    commit('loading', false);
  },
  findByIndex({ commit, state }: ActionContext<State, State>, index?: number) {
    const news = state.newsItems?.find((_item, i) => i === index);
    commit('getNewsByIndex', news);
  },
};

export default actions;
