import $api from './api';
import '@/test/setup';

describe('$api', () => {
  it('it should be existing', () => {
    expect($api.headline).toBeDefined();
    expect($api.source).toBeDefined();
  });
});
