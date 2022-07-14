import React from "react";
import { Navigate } from "react-router-dom";

import { NavigationUrls } from "./useNavigation";

const IndexRedirect = () => <Navigate to={NavigationUrls.home} />;

export default IndexRedirect;
