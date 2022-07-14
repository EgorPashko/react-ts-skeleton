import type { User } from "./models";

export const userApi = {
  get: (id: number): Promise<User> => {
    // make call to get user by id
    return Promise.resolve({ id });
  },
};
