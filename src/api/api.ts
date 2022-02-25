import { $axios, API_KEY } from '@/plugins/axios';
import HeadlineAPI from './service/headline';
import SourceAPI from './service/source';

const $api = {
  headline: new HeadlineAPI($axios, API_KEY),
  source: new SourceAPI($axios, API_KEY),
};

export default $api;
