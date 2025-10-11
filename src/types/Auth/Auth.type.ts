import { IUser } from "../User/user.types";

export interface ILogin {
  phone: IUser["phone"];
  password: string;
}
