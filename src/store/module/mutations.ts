import { Headline, SearchHeadlineParams } from '@/interface/headline';
import { Source } from '@/interface/source';
import { AxiosError } from 'axios';
import { MutationTree } from 'vuex';
import State from './state';

function getSearchCriteriaMessage(search: SearchHeadlineParams) {
  const items = [];

  if (search.q) {
    items.push(`Keyword "${search.q}"`);
  }

  if (search.category) {
    items.push(` Category "${search.category.label}"`);
  }

  if (search.country) {
    items.push(` Country "${search.country.label}"`);
  }

  if (search.sources?.length) {
    items.push(` Sources "${search?.sources?.map((source) => source.label).toString()}"`);
  }

  return `Search by ${items.join('and')}`;
}

const mutations: MutationTree<State> = {
  fetchHeadline(state: State, newsItems: Headline[]) {
    if (!newsItems.length) {
      state.errorMessage = `
        We're not found any news based on your search criteria, 
        please try again with new search criteria`;
    }

    state.newsItems = newsItems;
  },

  getNewsByIndex(state: State, news: Headline) {
    state.news = news;
  },

  updateNewsTitle(state: State, { title, index }) {
    state.newsItems[index].title = title;
  },

  filterUniqueSource(state: State, sources: Source[]) {
    const sourcesDataList = sources.map((source) => ({
      label: source.name,
      value: source.id,
    }));

    state.sources = [
      ...new Map(sourcesDataList.map((item) => [item.value, item])).values(),
    ];
  },

  filterUniqueCountry(state: State, sources: Source[]) {
    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

    const countriesDataList = sources.map((source) => ({
      label: regionNames.of(source.country.toUpperCase()) as string,
      value: source.country,
    }));

    state.countries = [
      ...new Map(countriesDataList.map((item) => [item.value, item])).values(),
    ];
  },

  filterUniqueCategory(state: State, sources: Source[]) {
    const categoriesDataList = sources.map((source) => ({
      label: source.category.charAt(0).toUpperCase() + source.category.slice(1),
      value: source.category,
    }));

    state.categories = [
      ...new Map(categoriesDataList.map((item) => [item.value, item])).values(),
    ];
  },

  loading(state: State, isLoading: boolean) {
    state.isLoading = isLoading;
  },

  setToggleFilter(state: State, isOpenFilter: boolean) {
    state.isOpenFilter = isOpenFilter;
  },

  saveSearchCriteria(state: State, search: SearchHeadlineParams) {
    if (search) {
      state.searchCriteria = getSearchCriteriaMessage(search);
    }

    state.search = search;
  },

  setError(state: State, error: AxiosError) {
    state.errorMessage = error.response?.data.message;
  },
};

export default mutations;
