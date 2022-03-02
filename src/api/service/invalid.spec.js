import InvalidAPI from './invalid';

describe('InvalidAPI', () => {
  const mockAxios = {
    get: jest.fn(),
  };

  const key = 'xxx';

  const source = new InvalidAPI(mockAxios, key);
  it('it should be existing', () => {
    expect(source).toBeDefined();
  });

  describe('get', () => {
    it('should call get method with correct endpoint', async () => {
      await source.get();

      expect(mockAxios.get).toHaveBeenCalledWith('sources?apiKey');
    });
  });
});
