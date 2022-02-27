import { shallowMount } from '@vue/test-utils';
import GeneralError from './GeneralError.vue';
import '@/test/setup';

describe('GeneralError.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(GeneralError, {
      propsData: {
        message: 'error something',
      },
    });
  });

  it('it should be renders', () => {
    expect(wrapper).toBeDefined();
  });

  it('it should contain correct message', () => {
    expect(wrapper.text()).toContain(wrapper.vm.message);
  });
});
