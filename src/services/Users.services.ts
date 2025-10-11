import { getRequest, postRequest } from "@/common/axios/axios";
import { ADMIN_URLS } from "@/common/urls/urls";
import { IUser } from "@/types/User/user.types";

const { list } = ADMIN_URLS.USERS;

export const GetUsersAPI = (params: any) => {
  return getRequest<IUser[]>(list, params);
};
