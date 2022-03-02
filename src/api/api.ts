import { $axios, API_KEY } from '@/plugins/axios';
import HeadlineAPI from './service/headline';
import InvalidAPI from './service/invalid';
import SourceAPI from './service/source';

const $api = {
  headline: new HeadlineAPI($axios, API_KEY),
  source: new SourceAPI($axios, API_KEY),
  invalid: new InvalidAPI($axios, API_KEY),
};

export default $api;
