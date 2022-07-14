import type { RouteProps } from "./types";

export const PrivateRoute = ({ component: Component, layout: Layout }: RouteProps) => {
  return (
    <Layout>
      <Component />
    </Layout>
  );
};
