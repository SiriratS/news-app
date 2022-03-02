import { shallowMount } from '@vue/test-utils';
import ErrorView from './ErrorView.vue';
import '@/test/setup';

describe('ErrorView.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ErrorView);
  });

  it('it should be renders', () => {
    expect(wrapper).toBeDefined();
  });
});
