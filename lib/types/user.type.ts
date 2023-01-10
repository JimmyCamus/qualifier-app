export interface User {
  id: number;
  username: string;
  email: string;
}

export type Action = { type: "login" | "singout"; user: User | {} };
