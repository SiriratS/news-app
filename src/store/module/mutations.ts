import { Headline, SearchHeadline } from '@/interface/headline';
import { MutationTree } from 'vuex';
import State from './state';

const mutations: MutationTree<State> = {
  fetchHeadline(state: State, newsItems: Headline[]) {
    state.newsItems = newsItems;
  },
  getNewsByIndex(state: State, news: Headline) {
    state.news = news;
  },
  loading(state: State, isLoading: boolean) {
    state.isLoading = isLoading;
  },
  toggleFilter(state: State, isOpenFilter: boolean) {
    state.isOpenFilter = isOpenFilter;
  },
  saveSearchCriteria(state: State, search: SearchHeadline) {
    state.search = search;
  },
};

export default mutations;