import State from './state';

describe('state', () => {
  const state = new State();

  it('should be existing', () => {
    expect(state).toBeDefined();
  });
});
