import { AxiosInstance } from 'axios';
import { Headline } from '../../interface/headline';

export default class HeadlineAPI {
  data: Headline[] = [];

  constructor(private $axios: AxiosInstance, private API_KEY: string) {
    this.$axios = $axios;
    this.API_KEY = API_KEY;
  }

  async find() {
    try {
      const response = await this.$axios.get(`top-headlines?country=us&apiKey=${this.API_KEY}`);
      this.data = response.data.articles;

      return this.data;
    } catch (error) {
      return error;
    }
  }

  findByIndex(index: number) {
    return this.data?.find((_item, i) => i === index);
  }
}
