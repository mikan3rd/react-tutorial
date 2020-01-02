import { AxiosError } from 'axios';

export type AxiosResponse<T> = {
  data?: T;
  error?: AxiosError;
  isSuccess: boolean;
};
