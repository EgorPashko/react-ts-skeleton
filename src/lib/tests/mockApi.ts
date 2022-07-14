import type { AsyncReturnType } from "type-fest";

import type { API } from "../api/api";
import { api } from "../api/api";

export function mockApi(responses: { [K in keyof API]?: AsyncReturnType<API[K]> } = {}) {
  (Object.keys(responses) as Array<keyof API>).forEach((k) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return
    api[k] = async () => responses[k] as any;
  });
}
