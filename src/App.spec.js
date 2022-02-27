import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import App from './App.vue';
import '@/test/setup';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('App.vue', () => {
  const state = {
    isLoading: true,
  };
  let store;
  let wrapper;

  beforeEach(() => {
    store = new Vuex.Store({
      state,
    });

    wrapper = shallowMount(App, {
      localVue,
      store,
      stubs: ['router-view'],
    });
  });

  it('it should be renders', () => {
    expect(wrapper).toBeDefined();
  });
});
