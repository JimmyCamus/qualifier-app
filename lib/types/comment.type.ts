import { User } from "./user.type";

export type Comment = {
  id: number;
  description: string;
  rating: number;
  user: User;
  status: boolean;
};
