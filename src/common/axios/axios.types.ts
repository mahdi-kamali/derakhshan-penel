export interface ISort<T> {
  key: keyof T;
  value: "DESC" | "ASC";
}

export type ISearch<T> = Partial<Record<keyof T, any>>;

export interface IParams<T> {
  sorts?: ISort<T>[];
  page?: number;
  per_page?: number;
  others?: any;
}

export interface IPaginationType {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  from: number;
  to: number;
}
