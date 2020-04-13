/* eslint-disable camelcase */

export interface INewsItemStory {
  story_id?: number;
  story_url?: string;
  story_title?: string;
  story_text?: string;
}

export interface INewsItem extends INewsItemStory {
  objectID: number;
  title: string;
  url: string;
  author: string;
  points: number;
  num_comments: number;
  parent_id?: number;
  created_at: string;
  created_at_i: number;
}

export interface INewsItemFrontPageResponse {
  hits: INewsItem;
  nbPages: number;
  page: number;
}
