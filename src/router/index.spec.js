import { shallowMount, createLocalVue } from '@vue/test-utils';
import ErrorView from '@/views/ErrorView/ErrorView.vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import router from '@/router/index';
import store from '@/store/index';

jest.mock('@/store/index');

const localVue = createLocalVue();
localVue.use(VueRouter, Vuex);

describe('Router', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ErrorView, {
      localVue,
      store,
      router,
    });
  });
  it('should call store.commit when route to news details page', () => {
    store.commit = jest.fn();

    router.push('/news/0');

    expect(store.commit).toHaveBeenCalledWith('pushVisitedNews', expect.anything());
  });

  it('should not call store.commit when not route to news details page', () => {
    store.commit = jest.fn();

    router.push('/anything');

    expect(store.commit).not.toHaveBeenCalled();
  });
});
