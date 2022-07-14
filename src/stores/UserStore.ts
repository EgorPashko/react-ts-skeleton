import { types } from "mobx-state-tree";

export const UserStore = types
  .model("User", {
    id: types.number,
  })
  .views((self) => ({
    get isAuthenticated() {
      return !!self.id;
    },
  }));
