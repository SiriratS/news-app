import { shallowMount } from '@vue/test-utils';
import EditTitleDialog from './EditTitleDialog.vue';
import '@/test/setup';

describe('EditTitleDialog.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(EditTitleDialog, {
      propsData: {
        title: 'xxxx',
        index: 1,
      },
    });
  });

  it('it should be renders', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.vm.editingTitle).toEqual(wrapper.vm.title);
  });
});
