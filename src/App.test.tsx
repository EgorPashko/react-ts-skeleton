import { cleanup, render } from "@testing-library/react";
import type { ReactNode } from "react";

import App, { AppInner } from "./App";
import type { User } from "./lib/api/models";
import { mockApi } from "./lib/tests/mockApi";
import { act } from "./lib/tests/testUtils";
import { useStore } from "./stores/Store";

// jest.mock("./routes", () => () => <div>TestApp</div>);

beforeEach(() => {
  jest.resetAllMocks();
  cleanup();
  const store = useStore();

  store.setUser(undefined);
});

jest.mock("react", () => {
  const React = jest.requireActual("react");

  React.Suspense = ({ children }: { children: ReactNode }) => <div data-test="mocked-suspense">{children}</div>;

  return React;
});
it("Should get user from BE", async () => {
  mockApi({
    getUserById: { id: 123 } as User,
  });
  const store = useStore();

  store.loadUser();

  const { findByText } = render(<AppInner storeLoader={() => store} />); // @todo: fix params

  expect(await findByText("Click Me")).toBeTruthy();
});

it("Should return Forbidden page when user is not authenticated", async () => {
  mockApi({
    getUserById: undefined,
  });
  const store = useStore();

  const { findByText } = render(<AppInner storeLoader={() => store} />); // @todo: fix params

  expect(await findByText("Forbidden")).toBeTruthy();
});
