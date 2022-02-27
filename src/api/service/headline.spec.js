import HeadlineAPI from './headline';

describe('HeadlineAPI', () => {
  const mockAxios = {
    get: jest.fn(),
  };

  const key = 'xxx';

  const headline = new HeadlineAPI(mockAxios, key);
  it('it should be existing', () => {
    expect(headline).toBeDefined();
  });

  describe('find', () => {
    it('should call get method with default params', async () => {
      await headline.find();

      expect(mockAxios.get).toHaveBeenCalledWith('top-headlines', {
        params: {
          apiKey: key,
          country: 'us',
          q: undefined,
        },
      });
    });

    it('should call get method with country, q params', async () => {
      await headline.find({
        country: {
          label: 'xxxx', value: 'ae',
        },
        q: 'test',
      });

      expect(mockAxios.get).toHaveBeenCalledWith('top-headlines', {
        params: {
          apiKey: key,
          country: 'ae',
          q: 'test',
          category: undefined,
          sources: undefined,
        },
      });
    });

    it('should call get method with category params', async () => {
      await headline.find({
        category: {
          label: 'Business', value: 'business',
        },
      });

      expect(mockAxios.get).toHaveBeenCalledWith('top-headlines', {
        params: {
          apiKey: key,
          country: undefined,
          q: undefined,
          category: 'business',
          sources: undefined,
        },
      });
    });

    it('should call get method with sources params', async () => {
      await headline.find({
        sources: [
          { label: 'AA', value: 'aa' },
          { label: 'BB', value: 'bb' },
        ],
      });

      expect(mockAxios.get).toHaveBeenCalledWith('top-headlines', {
        params: {
          apiKey: key,
          country: undefined,
          q: undefined,
          category: undefined,
          sources: 'aa,bb',
        },
      });
    });
  });
});
