import { BaseAPIRequest } from './api';
import { DataList } from './data-list';

export interface HeadlineSource {
    id: number;
    name: string;
}

export interface Headline {
    source: HeadlineSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface SearchHeadlineRequest extends BaseAPIRequest {
    country?: string,
    sources?: string[];
    category?: string;
    q?: string;
}

export interface SearchHeadlineParams extends BaseAPIRequest {
    country?: DataList,
    sources?: DataList[];
    category?: DataList;
    q?: string;
}
