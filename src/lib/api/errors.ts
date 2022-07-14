import type { AxiosError } from "axios";

type NewType<T> = AxiosError<T>;

export function isAxiosError<T>(error: unknown): error is NewType<T> {
  return (error as AxiosError)?.isAxiosError;
}
