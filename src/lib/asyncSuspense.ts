export const asyncSuspense =
  <T>(func: () => Promise<T>, name = "suspense") =>
  () => {
    let status: "init" | "done" | "error" = "init";
    let result: T;

    const loading = func()
      .then((r) => {
        result = r;
        status = "done";
      })
      .catch(() => {
        // add error logger?
        status = "error";
      });

    return () => {
      if (status === "init") {
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw loading;
      } else if (status === "error") {
        throw new Error(`${name} loading failed`);
      }

      return result;
    };
  };
