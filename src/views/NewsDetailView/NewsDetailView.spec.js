import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import NewsDetailView from './NewsDetailView.vue';
import '@/test/setup';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('NewsDetailView.vue', () => {
  const state = {
    news: null,
  };
  let store;

  const actions = {
    findNewsByIndex: jest.fn(),
  };

  let wrapper;

  beforeEach(() => {
    store = new Vuex.Store({
      state,
      actions,
    });

    wrapper = shallowMount(NewsDetailView, {
      localVue,
      store,
      mocks: {
        $router: {
          go: jest.fn(),
          push: jest.fn(),
        },
        $route: {
          params: {
            index: '1',
          },
        },
      },
    });
  });

  it('it should be renders', () => {
    expect(wrapper).toBeDefined();

    expect(actions.findNewsByIndex).toHaveBeenCalled();
  });

  it('should call router', () => {
    wrapper.vm.back();

    expect(wrapper.vm.$router.go).toHaveBeenCalled();
  });

  it('should return date string format', () => {
    const result = wrapper.vm.formatDate('2022-02-27T05:37:30Z');

    expect(result).toEqual('Sun Feb 27 2022');
  });

  it('it should call router.push when state news is empty', () => {
    state.news = null;

    expect(wrapper.vm.news).toEqual(state.news);
    expect(wrapper.vm.$router.push).toHaveBeenCalled();
  });

  it('it should not call router.push when state news is not empty', () => {
    wrapper.vm.$router.push = jest.fn();
    state.news = {
      title: 'xxxxx',
    };

    expect(wrapper.vm.news).toEqual(state.news);
    expect(wrapper.vm.$router.push).not.toHaveBeenCalled();
  });
});
