import { useTranslation } from "react-i18next";

import { Button } from "../components/Button";

export const TicketsInfo = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <Button text={t("clickMe")} />
    </div>
  );
};
