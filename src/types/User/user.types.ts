export interface ILoginResponse {
  data: IUser;
  message: string;
  status: string;
  token: string;
}

export interface IUser {
  _id?: string;
  phone: string;
  name: string;
  role: "Admin" | "User";
  token: string;
  password?: string;
  createdAt: string;
  updatedAt: string;
}
