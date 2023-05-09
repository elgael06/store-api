export interface IserviceResponce<T> {
  message: string;
  status: boolean;
  isError: boolean;
  data: T;
}
