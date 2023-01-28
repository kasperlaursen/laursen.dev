export interface Post {
  path: string;
  meta: PostMeta;
}

export interface PostMeta {
  title: string;
  date: string;
  categories: string[];
  teaser: string;
  image: string;
}

export interface PostResult {
  metadata: PostMeta;
}
