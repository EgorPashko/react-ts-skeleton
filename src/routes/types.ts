import type { ReactNode } from "react";

export type ChildrenProps = { children?: ReactNode };
export type BasicComponent = (props: ChildrenProps) => JSX.Element;
export type RouteProps = {
  component: BasicComponent;
  layout: BasicComponent;
  visible?: boolean;
};
