import { ActionContext, ActionTree } from 'vuex';
import $api from '@/api/api';
import { SearchHeadlineParams } from '@/interface/headline';
import { Route } from 'vue-router';
import State from './state';

const actions: ActionTree<State, State> = {
  async findNews({ commit }: ActionContext<State, State>, search?: SearchHeadlineParams) {
    try {
      commit('loading', true);
      const response = await $api.headline.find(search as SearchHeadlineParams);

      commit('setToggleFilter', false);
      commit('saveSearchCriteria', search);
      commit('fetchHeadline', response.data.articles);
    } catch (error) {
      commit('setError', error);
    } finally {
      commit('loading', false);
    }
  },

  async callInvalidUrl({ commit }: ActionContext<State, State>) {
    try {
      commit('loading', true);
      await $api.invalid.get();
    } catch (error) {
      commit('setError', error);
    } finally {
      commit('loading', false);
    }
  },

  findNewsByIndex({ commit, state }: ActionContext<State, State>, index?: number) {
    const news = state.newsItems?.find((_item, i) => i === index);
    commit('getNewsByIndex', news);
  },

  toggleFilter({ commit }, isOpen: boolean) {
    commit('setToggleFilter', !isOpen);
  },

  submitNewsTitle({ commit }: ActionContext<State, State>, { title, index }) {
    commit('updateNewsTitle', { title, index });
  },

  async fetchSource({ commit }: ActionContext<State, State>) {
    try {
      commit('loading', true);

      const response = await $api.source.get();

      commit('filterUniqueSource', response.data.sources);
      commit('filterUniqueCountry', response.data.sources);
      commit('filterUniqueCategory', response.data.sources);
    } finally {
      commit('loading', false);
    }
  },
};

export default actions;
