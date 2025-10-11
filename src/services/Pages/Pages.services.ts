import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "@/common/axios/axios";
import { ADMIN_URLS } from "@/common/urls/urls";
import { ICreatePage, IPage } from "@/types/Pages/pages.types";

const { PAGES } = ADMIN_URLS;

const { list, create, deleteByID, updateById, getById } = PAGES;

export const GetPagesAPI = () => {
  return getRequest<IPage[]>(list);
};

export const GetPageByIdAPI = (_id: IPage["_id"]) => {
  const url = getById.replace("{id}", _id);
  return getRequest<IPage>(url);
};

export const CreatePageAPI = (data: ICreatePage) => {
  return postRequest(create, data);
};

export const DeletePageAPI = (_id: IPage["_id"]) => {
  const url = deleteByID.replace("{id}", _id);
  return deleteRequest(url);
};

export const UpdatePageAPI = (data: IPage) => {
  const url = updateById.replace("{id}", data._id);
  return putRequest(url, data);
};
