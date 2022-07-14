import React from "react";
import type { FallbackProps } from "react-error-boundary";

import { Button } from "../components/Button";
import { isAxiosError } from "../lib/api/errors";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  let message = <h1>Something went wrong.</h1>;

  if (isAxiosError(error) && Number(error.response?.status) === 403) {
    message = (
      <div>
        <h2>You don&apos;t have permission to access this page.</h2>
      </div>
    );

    return <div>{message}</div>;
  }

  return isAxiosError(error) ? (
    <div role="alert">
      <p>Something went wrong:</p>
      <h2>{error.message}</h2>
      <Button text="Try again" onClick={resetErrorBoundary}></Button>
    </div>
  ) : (
    <div>{message}</div>
  );
};

export default ErrorFallback;
