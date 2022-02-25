import { Headline } from '@/interface/headline';

export default class State {
  newsItems!: Headline[];

  news!: Headline;

  isLoading!: boolean;
}
