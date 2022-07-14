import { cast, flow, types } from "mobx-state-tree";

import { api } from "../lib/api/api";
import type { User } from "../lib/api/models";
import { asyncSuspense } from "../lib/asyncSuspense";
import { sleep } from "../lib/sleep";
import { UserStore } from "./UserStore";

export const Store = types
  .model("Store", {
    user: types.maybeNull(UserStore),
  })
  .actions((self) => ({
    setUser: (user: User | undefined) => {
      self.user = cast(user);
    },
  }))
  .actions((self) => ({
    loadUser: flow(function* () {
      // imitate real work with BE
      yield sleep(1000);
      const user: User = yield api.getUserById(333);

      if (user) {
        self.setUser(user);
      }
    }),
  }));

const store = Store.create({});

export const useStore = () => store;

export const initializeStore = asyncSuspense(async () => {
  await store.loadUser();

  return store;
}, "store");
