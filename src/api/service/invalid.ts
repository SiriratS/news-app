import { AxiosInstance } from 'axios';

export default class InvalidAPI {
  constructor(private $axios: AxiosInstance, private API_KEY: string) {
    this.$axios = $axios;
    this.API_KEY = API_KEY;
  }

  get() {
    return this.$axios.get('sources?apiKey');
  }
}
