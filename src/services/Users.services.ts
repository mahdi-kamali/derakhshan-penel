import { getRequest, postRequest, putRequest } from "@/common/axios/axios";
import { ADMIN_URLS } from "@/common/urls/urls";
import { IUser } from "@/types/User/user.types";

const { list, create, update, getById } = ADMIN_URLS.USERS;

export const GetUsersAPI = (params: any) => {
  return getRequest<IUser[]>(list, params);
};

export const CreateUserAPI = (data: IUser) => {
  return postRequest(create, data);
};

export const UpdateUserAPI = (data: IUser) => {
  const url = update.replace("{_id}", data._id || "");
  return putRequest(url, data);
};

export const GetUserByIdAPI = (_id: IUser["_id"]) => {
  const url = getById.replace("{_id}", _id || "");
  return getRequest<IUser>(url);
};
