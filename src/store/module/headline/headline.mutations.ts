import { Headline } from '@/interface/headline';
import { MutationTree } from 'vuex';
import State from './headline.state';

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
};

export default mutations;
