import { Headline, SearchHeadline } from '@/interface/headline';

export default class State {
  newsItems!: Headline[];

  news!: Headline;

  isLoading!: boolean;

  isOpenFilter!: boolean;

  search: SearchHeadline = {
    q: '',
    sources: '',
  };
}
