import { Route, Routes as BaseRoutes } from "react-router-dom";

import { MainLayout } from "../modules/MainLayout";
import { TicketsInfo } from "../modules/TickestInfo";
import { PublicRoute } from "./PublicRoute";

const Routes = () => (
  <BaseRoutes>
    <Route element={<PublicRoute component={TicketsInfo} layout={MainLayout} />} path="/" />
  </BaseRoutes>
);

export default Routes;
