import { DataList } from '@/interface/data-list';
import { Headline, SearchHeadlineParams } from '@/interface/headline';

export default class State {
  newsItems: Headline[] = [];

  news!: Headline;

  isLoading = false;

  isOpenFilter!: boolean;

  search: SearchHeadlineParams = {
    q: undefined,
    sources: [],
    country: undefined,
    category: undefined,
  };

  searchCriteria!: string;

  countries!: DataList[];

  sources!: DataList[];

  categories!: DataList[];

  errorMessage!: string;

  visitedNews: string[] = [];
}
