import { observer } from "mobx-react-lite";
import { Route, Routes as BaseRoutes } from "react-router-dom";

import { MainLayout } from "../modules/layouts/MainLayout";
import { TicketsInfo } from "../modules/TicketsInfo";
import IndexRedirect from "./IndexRedirect";
import { PrivateRoute } from "./PrivateRoute";
import { NavigationUrls } from "./useNavigation";

const Routes = observer(() => (
  <BaseRoutes>
    <Route element={<IndexRedirect />} path="/" />
    <Route element={<PrivateRoute component={TicketsInfo} layout={MainLayout} />} path={NavigationUrls.home} />
  </BaseRoutes>
));

export default Routes;
