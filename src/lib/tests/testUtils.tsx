import { configure, render as testRender } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider as MobXProvider } from "mobx-react";
import type { PropsWithChildren, ReactNode } from "react";
import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import { useStore } from "../../stores/Store";
import { api } from "../api/api";
import i18nTesting from "../i18n";
import { mockApi } from "./mockApi";

export { act } from "@testing-library/react";

configure({ testIdAttribute: "data-test" });

const history = createMemoryHistory();

jest.mock("react", () => {
  const React = jest.requireActual("react");

  React.Suspense = ({ children }: { children: ReactNode }) => children;

  return React;
});

const Wrapper = ({ children }: PropsWithChildren) => (
  <Suspense fallback="Loading...">
    <MobXProvider store={useStore()}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <I18nextProvider i18n={i18nTesting}>
        <BrowserRouter>{children}</BrowserRouter>
      </I18nextProvider>
    </MobXProvider>
  </Suspense>
);

export const render = (ui: Parameters<typeof testRender>[0], options?: Parameters<typeof testRender>[1]) =>
  testRender(ui, { wrapper: Wrapper, ...options });

export { history };

export const mockAllApi = () => {
  mockApi(
    Object.keys(api).reduce((acc, key) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      acc[key as keyof typeof acc] = [] as any;

      return acc;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }, {} as any)
  );
};
