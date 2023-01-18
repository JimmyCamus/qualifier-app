export interface User {
  id: number;
  username: string;
  email: string;
  role: number;
}

export enum UserRole {
  USER = 0,
  ADMIN = 1,
}

export type Action = { type: "login" | "singout"; user: User | {} };
