import { Comment } from "./comment.type";

export type Game = {
  id: number;
  title: string;
  description: string;
  rating: number;
  images: Array<string>;
  comments: Array<Comment>;
  categories: Array<string>;
};
