import { useNavigate } from "react-router";

export enum NavigationUrls {
  "home" = "/home",
}

export const useNavigation = () => {
  const navigate = useNavigate();

  return {
    goHome: () => navigate(NavigationUrls.home),
  };
};
