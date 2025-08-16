import { getRequest, postRequest } from "@/common/axios/axios";
import { USERS_URLS } from "@/common/urls/urls";
import { IUser } from "@/types/User/user.types";

const { list } = USERS_URLS;

export const GetUsersAPI = (params: any) => {
  return getRequest<IUser[]>(list, params);
};
