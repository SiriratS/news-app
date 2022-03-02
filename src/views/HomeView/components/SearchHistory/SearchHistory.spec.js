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
    search: {
      q: undefined,
      sources: [],
      country: undefined,
      category: undefined,
    },
    searchCriteria: null,
  };
  let store;

  let wrapper;

  beforeEach(() => {
    store = new Vuex.Store({
      state,
    });

    wrapper = shallowMount(SearchHistory, {
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
});
