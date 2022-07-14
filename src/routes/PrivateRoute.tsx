import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

import { useStore } from "../stores/Store";
import type { RouteProps } from "./types";

export const PrivateRoute = observer(({ component: Component, layout: Layout }: RouteProps) => {
  const { user } = useStore();
  const { t } = useTranslation("common");

  if (!user) {
    return <div>{t("forbidden") as string}</div>;
  }

  return (
    <Layout>
      <Component />
    </Layout>
  );
});
