import { Route, Routes as BaseRoutes } from "react-router-dom";

import { MainLayout } from "../modules/layouts/MainLayout";
import { TicketsInfo } from "../modules/TickestInfo";
import IndexRedirect from "./IndexRedirect";
import { PrivateRoute } from "./PrivateRoute";
import { NavigationUrls } from "./useNavigation";

const Routes = () => (
  <BaseRoutes>
    <Route element={<IndexRedirect />} path="/" />
    <Route element={<PrivateRoute component={TicketsInfo} layout={MainLayout} />} path={NavigationUrls.home} />
  </BaseRoutes>
);

export default Routes;
