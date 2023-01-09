
export type Comment = {
  _id: number;
  description: string;
  rating: number;
  user: { _id: string; username: string };
  status: boolean;
};
