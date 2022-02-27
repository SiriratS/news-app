import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import HomeView from './HomeView.vue';
import '@/test/setup';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('HomeView.vue', () => {
  const state = {
    newsItems: [],
    errorMessage: null,
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

    wrapper = shallowMount(HomeView, {
      localVue,
      store,
    });
  });

  it('it should be renders', () => {
    expect(wrapper).toBeDefined();

    expect(actions.findNews).toHaveBeenCalled();
  });
});
