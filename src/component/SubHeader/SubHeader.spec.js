import { shallowMount } from '@vue/test-utils';
import SubHeader from './SubHeader.vue';
import '@/test/setup';

describe('SubHeader.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SubHeader, {
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
