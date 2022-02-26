import { Headline, SearchHeadlineParams } from '@/interface/headline';
import { Source } from '@/interface/source';
import { MutationTree } from 'vuex';
import State from './state';

const mutations: MutationTree<State> = {
  fetchHeadline(state: State, newsItems: Headline[]) {
    state.newsItems = newsItems;
  },
  getNewsByIndex(state: State, news: Headline) {
    state.news = news;
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
      const searchCriteria = [];
      if (search.q) {
        searchCriteria.push(`Keyword "${search.q}"`);
      }

      if (search.category) {
        searchCriteria.push(` Category "${search.category.label}"`);
      }

      if (search.country) {
        searchCriteria.push(` Country "${search.country.label}"`);
      }

      if (search.sources?.length) {
        searchCriteria.push(` Sources "${search?.sources?.map((source) => source.label).toString()}"`);
      }

      state.searchCriteria = `Search by ${searchCriteria.join('and')}`;
    }
    state.search = search;
  },
};

export default mutations;
