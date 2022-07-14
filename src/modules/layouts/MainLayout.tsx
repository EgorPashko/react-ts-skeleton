import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryErrorResetBoundary } from "react-query";

import { Loader } from "../../components/Loader";
import type { ChildrenProps } from "../../routes/types";
import ErrorFallback from "../ErrorFallback";

export const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
          <Suspense fallback={<Loader />}>
            <div>{children}</div>
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};
