import { useTranslation } from "react-i18next";

import type { Theme } from "../components/theme";
import { css } from "@emotion/react";

const styles = {
  container: (theme: Theme) =>
    css({
      display: "flex",
      height: "100vh",
      background: "linear-gradient(rgb(241, 135, 79) 0%, rgb(194, 58, 134) 100%)",
      //
    }),
};

export const CV = () => {
  const { t } = useTranslation("common");

  return <div css={styles.container}>//</div>;
};
