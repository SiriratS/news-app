import { shallowMount } from '@vue/test-utils';
import ErrorView from './ErrorView.vue';
import '@/test/setup';

describe('ErrorView.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ErrorView, {
      mocks: {
        $router: {
          go: jest.fn(),
        },
      },
    });
  });

  it('it should be renders', () => {
    expect(wrapper).toBeDefined();
  });

  it('should call router', () => {
    wrapper.vm.back();

    expect(wrapper.vm.$router.go).toHaveBeenCalled();
  });
});
