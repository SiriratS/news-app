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
