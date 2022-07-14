import { flow } from "lodash";
import { cast, types } from "mobx-state-tree";

import type { User } from "../lib/api/models";
import { userApi } from "../lib/api/user";
import { UserStore } from "./UserStore";

const Store = types
  .model("Store", {
    user: types.maybeNull(UserStore),
  })
  .actions((self) => ({
    loadUser: flow(function* () {
      const user: User = yield userApi.get(123);

      if (user) {
        self.user = cast(user);
      }
    }),
  }));

const store = Store.create({});

export const useStore = () => store;
