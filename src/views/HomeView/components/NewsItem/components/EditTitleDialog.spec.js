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

  it('should be restore editingTitle to the original title and set dialog as false when trigger cancel', () => {
    wrapper.vm.editingTitle = 'gggggg';

    wrapper.vm.cancel();

    expect(wrapper.vm.editingTitle).toEqual(wrapper.vm.title);
    expect(wrapper.vm.dialog).toBeFalsy();
  });

  it('should be call submitNewsTitle with correct data and set dialog as false when submit cancel', () => {
    wrapper.vm.editingTitle = 'gggggg';
    wrapper.vm.submitNewsTitle = jest.fn();

    wrapper.vm.submit();

    expect(wrapper.vm.submitNewsTitle).toBeCalledWith({
      title: wrapper.vm.editingTitle,
      index: wrapper.vm.index,
    });
    expect(wrapper.vm.dialog).toBeFalsy();
  });
});
