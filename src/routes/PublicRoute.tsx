import type { RouteProps } from "./types";

export const PublicRoute = ({ component: Component, layout: Layout }: RouteProps) => {
  return (
    <Layout>
      <Component />
    </Layout>
  );
};
