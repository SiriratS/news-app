import mutations from './mutations';

describe('mutations', () => {
  describe('fetchHeadline', () => {
    it('it should set state ErrorMessage when newsItems is empty', () => {
      const state = {
        errorMessage: null,
        newsItems: [],
      };

      mutations.fetchHeadline(state, []);

      expect(state.errorMessage).toBeDefined();
      expect(state.newsItems).toEqual([]);
    });

    it('it should not set state ErrorMessage when newsItems is not empty', () => {
      const mock = [
        {
          title: 'xxxxx',
          author: 'sssssss',
          urlToImage: 'http://xxxx.com',
          url: 'http://yyyyy.com',
          publishedAt: '2022-02-27T05:37:30Z',
        },
      ];
      const state = {
        errorMessage: null,
        newsItems: [],
      };

      mutations.fetchHeadline(state, mock);

      expect(state.errorMessage).toBeNull();
      expect(state.newsItems).toEqual(mock);
    });
  });

  describe('getNewsByIndex', () => {
    it('should set correct state', () => {
      const mock = {
        title: 'xxxxx',
        author: 'sssssss',
        urlToImage: 'http://xxxx.com',
        url: 'http://yyyyy.com',
        publishedAt: '2022-02-27T05:37:30Z',
      };
      const state = {
        news: null,
      };

      mutations.getNewsByIndex(state, mock);

      expect(state.news).toEqual(mock);
    });
  });

  describe('filterUniqueSource', () => {
    it('should set correct state and filter duplicate value', () => {
      const mock = [
        {
          name: 'ABC',
          id: 'abc',
        },
        {
          name: 'ABC',
          id: 'abc',
        },
        {
          name: 'BBCC',
          id: 'bb-cc',
        },
      ];

      const state = {
        sources: null,
      };

      mutations.filterUniqueSource(state, mock);

      expect(state.sources).toEqual([
        {
          label: 'ABC',
          value: 'abc',
        },
        {
          label: 'BBCC',
          value: 'bb-cc',
        },
      ]);
    });
  });

  describe('filterUniqueCountry', () => {
    it('should set correct state and filter duplicate value', () => {
      const mock = [
        {
          country: 'ae',
        },
        {
          country: 'ae',
        },
        {
          country: 'at',
        },
      ];

      const state = {
        countries: null,
      };

      mutations.filterUniqueCountry(state, mock);

      expect(state.countries).toEqual([
        {
          label: 'United Arab Emirates',
          value: 'ae',
        },
        {
          label: 'Austria',
          value: 'at',
        },
      ]);
    });
  });

  describe('filterUniqueCategory', () => {
    it('should set correct state and filter duplicate value', () => {
      const mock = [
        {
          category: 'business',
        },
        {
          category: 'business',
        },
        {
          category: 'technology',
        },
      ];

      const state = {
        categories: null,
      };

      mutations.filterUniqueCategory(state, mock);

      expect(state.categories).toEqual([
        {
          label: 'Business',
          value: 'business',
        },
        {
          label: 'Technology',
          value: 'technology',
        },
      ]);
    });
  });

  describe('loading', () => {
    it('should set correct state', () => {
      const state = {
        isLoading: false,
      };

      mutations.loading(state, true);

      expect(state.isLoading).toBeTruthy();
    });
  });

  describe('setToggleFilter', () => {
    it('should set correct state', () => {
      const state = {
        isOpenFilter: false,
      };

      mutations.setToggleFilter(state, true);

      expect(state.isOpenFilter).toBeTruthy();
    });
  });

  describe('saveSearchCriteria', () => {
    it('should not set searchCriteria when search is empty', () => {
      const state = {
        searchCriteria: null,
        search: null,
      };

      mutations.saveSearchCriteria(state, null);

      expect(state.searchCriteria).toBeNull();
      expect(state.search).toBeNull();
    });

    it('should contain search.q on state searchCriteria and set state search when search.q is not empty', () => {
      const mock = {
        q: 'test',
      };
      const state = {
        searchCriteria: null,
        search: null,
      };

      mutations.saveSearchCriteria(state, mock);

      expect(state.searchCriteria).toContain(mock.q);
      expect(state.search).toEqual(mock);
    });

    it('should contain search.country.label on state searchCriteria and set state search when search.country is not empty', () => {
      const mock = {
        country: {
          label: 'United Arab Emirates',
          value: 'ae',
        },
      };
      const state = {
        searchCriteria: null,
        search: null,
      };

      mutations.saveSearchCriteria(state, mock);

      expect(state.searchCriteria).toContain(mock.country.label);
      expect(state.search).toEqual(mock);
    });

    it('should contain search.sources on state searchCriteria and set state search when search.sources is not empty', () => {
      const mock = {
        sources: [
          {
            label: 'AA',
            value: 'aa',
          },
          {
            label: 'BB',
            value: 'bb',
          },
        ],
      };
      const state = {
        searchCriteria: null,
        search: null,
      };

      mutations.saveSearchCriteria(state, mock);

      expect(state.searchCriteria).toContain(mock.sources.map((source) => source.label).toString());
      expect(state.search).toEqual(mock);
    });

    it('should contain search.category.label on state searchCriteria and set state search when search.category is not empty', () => {
      const mock = {
        category: {
          label: 'Sports',
          value: 'sports',
        },
      };
      const state = {
        searchCriteria: null,
        search: null,
      };

      mutations.saveSearchCriteria(state, mock);

      expect(state.searchCriteria).toContain(mock.category.label);
      expect(state.search).toEqual(mock);
    });
    it('should contain correct search on state searchCriteria when have multiple search parameter', () => {
      const mock = {
        q: 'test',
        country: {
          label: 'United Arab Emirates',
          value: 'ae',
        },
      };
      const state = {
        searchCriteria: null,
        search: null,
      };

      mutations.saveSearchCriteria(state, mock);

      expect(state.searchCriteria).toContain(mock.q);
      expect(state.searchCriteria).toContain(mock.country.label);
      expect(state.search).toEqual(mock);
    });
  });

  describe('setError', () => {
    it('should set correct state', () => {
      const mock = {
        response: {
          data: {
            message: 'error from API',
          },
        },
      };
      const state = {
        errorMessage: null,
      };

      mutations.setError(state, mock);

      expect(state.errorMessage).toEqual(mock.response.data.message);
    });
  });
});
