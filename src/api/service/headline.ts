import { AxiosInstance } from 'axios';
import { Headline } from '../../interface/headline';

export default class HeadlineAPI {
  data: Headline[] = [];

  constructor(private $axios: AxiosInstance, private API_KEY: string) {
    this.$axios = $axios;
    this.API_KEY = API_KEY;
  }

  async find(search: any) {
    return this.$axios.get(`top-headlines?country=us&apiKey=${this.API_KEY}`);
  }
}
