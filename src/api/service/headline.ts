import { AxiosInstance } from 'axios';
import { Headline, SearchHeadline } from '../../interface/headline';

export default class HeadlineAPI {
  data: Headline[] = [];

  constructor(private $axios: AxiosInstance, private API_KEY: string) {
    this.$axios = $axios;
    this.API_KEY = API_KEY;
  }

  async find(search: SearchHeadline) {
    const params = {
      ...search,
      ...{
        apiKey: this.API_KEY,
        country: 'us',
      },
    };

    return this.$axios.get('top-headlines', {
      params,
    });
  }
}
