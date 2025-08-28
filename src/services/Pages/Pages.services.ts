import { deleteRequest, getRequest, postRequest } from "@/common/axios/axios";
import { ADMIN_URLS } from "@/common/urls/urls";
import { ICreatePage, IPage } from "@/types/Pages/pages.types";

const { PAGES } = ADMIN_URLS;

const { list, create, deleteByID } = PAGES;

export const GetPagesAPI = () => {
  return getRequest(list);
};

export const CreatePageAPI = (data: ICreatePage) => {
  return postRequest(create, data);
};

export const DeletePageAPI = (_id: IPage["_id"]) => {
  const url = deleteByID.replace("{id}", _id);
  return deleteRequest(url);
};
