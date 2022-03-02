import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VisitedNewsDialog from './VisitedNewsDialog.vue';
import '@/test/setup';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('VisitedNewsDialog.vue', () => {
  let wrapper;

  const state = {
    visitedNews: [
      'aaa',
      'bbbb',
      'cccc',
    ],
  };
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state,
    });

    wrapper = shallowMount(VisitedNewsDialog, {
      localVue,
      store,
      propsData: {
        dialog: false,
      },
    });
  });

  it('it should be renders', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.vm.editingTitle).toEqual(wrapper.vm.title);
  });

  it('should set correct value', () => {
    wrapper.vm.toggleDialog(true);
    expect(wrapper.vm.dialog).toBeFalsy();

    wrapper.vm.toggleDialog(false);
    expect(wrapper.vm.dialog).toBeTruthy();
  });
});
