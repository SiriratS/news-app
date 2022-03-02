import $api from '@/api/api';
import actions from './action';

jest.mock('@/api/api');

describe('actions', () => {
  describe('findNews', () => {
    it('should it commit correct event when get success response from API', async () => {
      const commit = jest.fn();

      $api.headline.find.mockReturnValue(Promise.resolve({
        data: {
          articles: [],
        },
      }));

      await actions.findNews({ commit }, null);

      expect(commit).toHaveBeenCalledWith('loading', true);

      expect(commit).toHaveBeenCalledWith('fetchHeadline', []);
      expect(commit).toHaveBeenCalledWith('setToggleFilter', false);
      expect(commit).toHaveBeenCalledWith('saveSearchCriteria', null);

      expect(commit).toHaveBeenCalledWith('loading', false);
    });

    it('should it commit correct event when get error response from API', async () => {
      const commit = jest.fn();
      const mock = 'error na ja';

      $api.headline.find.mockReturnValue(Promise.reject(mock));

      await actions.findNews({ commit }, null);

      expect(commit).toHaveBeenCalledWith('loading', true);

      expect(commit).toHaveBeenCalledWith('setError', mock);

      expect(commit).toHaveBeenCalledWith('loading', false);
    });
  });

  describe('callInvalidUrl', () => {
    it('should it commit correct event when get error response from API', async () => {
      const commit = jest.fn();
      const mock = 'error na ja';

      $api.invalid.get.mockReturnValue(Promise.reject(mock));

      await actions.callInvalidUrl({ commit }, null);

      expect(commit).toHaveBeenCalledWith('loading', true);

      expect(commit).toHaveBeenCalledWith('setError', mock);

      expect(commit).toHaveBeenCalledWith('loading', false);
    });
  });

  describe('findNewsByIndex', () => {
    it('should commit getNewsByIndex event with correct item', () => {
      const commit = jest.fn();
      const state = {
        newsItems: [
          {
            title: 'xxxxx',
            author: 'sssssss',
            urlToImage: 'http://xxxx.com',
            url: 'http://yyyyy.com',
            publishedAt: '2022-02-27T05:37:30Z',
          },
        ],
      };

      actions.findNewsByIndex({ commit, state }, 0);

      expect(commit).toHaveBeenCalledWith('getNewsByIndex', state.newsItems[0]);
    });

    it('should commit getNewsByIndex event with undefined and code should will breaking when call with invalid index', () => {
      const commit = jest.fn();
      const state = {
        newsItems: [
          {
            title: 'xxxxx',
            author: 'sssssss',
            urlToImage: 'http://xxxx.com',
            url: 'http://yyyyy.com',
            publishedAt: '2022-02-27T05:37:30Z',
          },
        ],
      };

      actions.findNewsByIndex({ commit, state }, 1);

      expect(commit).toHaveBeenCalledWith('getNewsByIndex', undefined);
    });
  });

  describe('toggleFilter', () => {
    it('should commit setToggleFilter event with correct value', () => {
      const commit = jest.fn();

      actions.toggleFilter({ commit }, true);

      expect(commit).toHaveBeenCalledWith('setToggleFilter', false);
    });
  });

  describe('submitNewsTitle', () => {
    it('should commit updateNewsTitle event with correct value', () => {
      const commit = jest.fn();
      const mock = { title: 'xxxx', index: 2 };

      actions.submitNewsTitle({ commit }, mock);

      expect(commit).toHaveBeenCalledWith('updateNewsTitle', mock);
    });
  });

  describe('fetchSource', () => {
    it('should it commit correct event when get success response from API', async () => {
      const commit = jest.fn();

      $api.source.get.mockReturnValue(Promise.resolve({
        data: {
          sources: [],
        },
      }));

      await actions.fetchSource({ commit });

      expect(commit).toHaveBeenCalledWith('loading', true);

      expect(commit).toHaveBeenCalledWith('filterUniqueSource', []);
      expect(commit).toHaveBeenCalledWith('filterUniqueCountry', []);
      expect(commit).toHaveBeenCalledWith('filterUniqueCategory', []);

      expect(commit).toHaveBeenCalledWith('loading', false);
    });
  });
});
