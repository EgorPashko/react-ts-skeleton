import { useTranslation } from "react-i18next";

export const TicketsInfo = () => {
  const { t } = useTranslation("common");

  return <div>{t("ticketsInformation")}</div>;
};
