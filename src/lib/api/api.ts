import type { User } from "./models";

export const api = {
  getUserById: (id: number): Promise<User> => {
    // make call to get user by id
    return Promise.resolve({ id });
  },
};

export type API = typeof api;
