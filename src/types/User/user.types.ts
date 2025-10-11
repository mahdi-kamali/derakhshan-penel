export interface ILoginResponse {
  data: IUser;
  message: string;
  status: string;
  token: string;
}

export interface IUser {
  _id: string;
  phone: string;
  name: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  token: string;
}
