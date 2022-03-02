import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import SearchHistory from './SearchHistory.vue';
import '@/test/setup';

const vuetify = new Vuetify();

const localVue = createLocalVue();
localVue.use(Vuex);

describe('SearchHistory.vue', () => {
  const state = {
    isOpenFilter: false,
    search: {
      q: undefined,
      sources: [],
      country: undefined,
      category: undefined,
    },
    searchCriteria: null,
    countries: [
      { label: 'xxxx', value: 'ru' },
      { label: 'bbbbb', value: 'dd' },
    ],
    sources: [
      { label: 'ABC', value: 'abc' },
      { label: 'CCBB', value: 'cc-bb' },
    ],
    categories: [
      { label: 'Business', value: 'business' },
      { label: 'Sport', value: 'sport' },
    ],
  };
  let store;

  const actions = {
    findNews: jest.fn(),
  };

  let wrapper;

  beforeEach(() => {
    store = new Vuex.Store({
      state,
      actions,
    });

    wrapper = shallowMount(SearchBar, {
      localVue,
      store,
      vuetify,
    });
  });

  it('it should be renders', () => {
    expect(wrapper).toBeDefined();
  });

  describe('isExistingSearchParams', () => {
    it('it should be return false when all state search are empty', () => {
      state.search = {
        q: undefined,
        sources: [],
        country: undefined,
        category: undefined,
      };

      expect(wrapper.vm.isExistingSearchParams()).toBeFalsy();
    });

    it('it should be return true when any state search is not empty', () => {
      state.search = {
        q: 'test',
        sources: [],
        country: undefined,
        category: undefined,
      };

      expect(wrapper.vm.isExistingSearchParams()).toBeTruthy();
    });
  });

  it('it should call findNews and reset search form when trigger submit', () => {
    wrapper.vm.submit();

    expect(actions.findNews).toHaveBeenCalled();
    expect(wrapper.vm.searchForm).toEqual({
      q: '',
      sources: [],
      country: '',
      category: '',
    });
  });
});
