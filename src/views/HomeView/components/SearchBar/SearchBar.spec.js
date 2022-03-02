import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import SearchBar from './SearchBar.vue';
import '@/test/setup';

const vuetify = new Vuetify();

const localVue = createLocalVue();
localVue.use(Vuex);

describe('SearchBar.vue', () => {
  const state = {
    isOpenFilter: false,
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
