import { getRequest, postRequest } from "@/common/axios/axios";
import { AUTH_URLS } from "@/common/urls/urls";
import { ILogin } from "@/types/Auth/Auth.type";
import { IUser } from "@/types/User/user.types";

const { logOut, loginWithPassword } = AUTH_URLS;

export const LoginAPI = (data: ILogin) => {
  return postRequest<IUser, { token: string }>(loginWithPassword, data);
};

export const LogOutUser = () => {
  return getRequest(logOut);
};
