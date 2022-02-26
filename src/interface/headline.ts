import { BaseAPIRequest } from './api';

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

export interface SearchHeadline extends BaseAPIRequest {
    country?: string,
    sources?: string;
    q?: string;
}
