import { AxiosInstance } from 'axios';
import { Headline, SearchHeadlineParams } from '../../interface/headline';

export default class HeadlineAPI {
  data: Headline[] = [];

  constructor(private $axios: AxiosInstance, private API_KEY: string) {
    this.$axios = $axios;
    this.API_KEY = API_KEY;
  }

  async find(search: SearchHeadlineParams) {
    let searchCriteria = {};
    if (!HeadlineAPI.shouldSetDefaultSearchCriteria({ ...search })) {
      searchCriteria = {

        country: search.country?.label,
        category: search.category?.label,
        sources: search?.sources?.map((source) => source.value).toString(),
      };
    }

    const params = {
      ...{
        apiKey: this.API_KEY,
        country: 'us',
        q: search?.q,
      },
      ...searchCriteria,
    };

    return this.$axios.get('top-headlines', {
      params,
    });
  }

  static shouldSetDefaultSearchCriteria(search: SearchHeadlineParams) {
    return !search?.category
    && !search?.country
    && (!search?.sources || !search?.sources?.length);
  }
}
