import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "@/common/axios/axios";
import { ADMIN_URLS } from "@/common/urls/urls";
import { ICategory } from "@/types/Category/Category.types";

const { CATEGORY } = ADMIN_URLS;
const { create, deleteById, getByID, list, updateById } = CATEGORY;

export const CreateCategoryAPI = (data: ICategory) => {
  return postRequest(create, data);
};

export const UpdateCategoryAPI = (data: ICategory) => {
  const url = updateById.replace("{_id}", data._id as string);
  return putRequest(url, data);
};

export const GetCateogiresAPI = () => {
  return getRequest<ICategory[]>(list);
};

export const GetCategoryAPI = (_id: ICategory["_id"]) => {
  const url = getByID.replace("{_id}", _id as string);
  return getRequest<ICategory>(url);
};

export const DeleteCategoryAPI = (_id: ICategory["_id"]) => {
  const url = deleteById.replace("{_id}", _id as string);
  return deleteRequest(url);
};
