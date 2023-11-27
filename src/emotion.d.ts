import "@emotion/react";

import type { Theme as MainTheme } from "components/theme";

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MainTheme {}
}
