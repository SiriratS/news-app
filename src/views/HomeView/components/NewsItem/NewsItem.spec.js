import { shallowMount } from '@vue/test-utils';
import NewsItem from './NewsItem.vue';
import '@/test/setup';

describe('NewsItem.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(NewsItem, {
      propsData: {
        data: {
          title: 'xxxxx',
          author: 'sssssss',
          urlToImage: 'http://xxxx.com',
          url: 'http://yyyyy.com',
          publishedAt: '2022-02-27T05:37:30Z',
        },
        index: 1,
      },
    });
  });

  it('it should be renders', () => {
    expect(wrapper).toBeDefined();
  });

  it('should be return date string format', () => {
    const result = wrapper.vm.formatDate('2022-02-27T05:37:30Z');

    expect(result).toEqual('Sun Feb 27 2022');
  });
});
