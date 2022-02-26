import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import App from './App.vue';
import '@/test/setup';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('App.vue', () => {
  let state = {
    isLoading: true
  };
  let store: Store<{ isLoading: boolean; }>;

  beforeEach(() => {
    store = new Vuex.Store({
        state,
    });
  });

  it('it should be renders', () => {
    const wrapper = shallowMount(App, { 
      localVue, 
      store,
      stubs: ['router-view']
    });

    expect(wrapper).toBeDefined(); 
  });
});
