import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "@/common/axios/axios";
import { ADMIN_URLS } from "@/common/urls/urls";
import { IProudct } from "@/types/Product/Product.types";

const { PRODUCTS } = ADMIN_URLS;
const { create, deleteById, getByID, list, updateById } = PRODUCTS;
export const CreateProductAPI = (data: IProudct) => {
  return postRequest(create, data);
};

export const GetProductsAPI = () => {
  return getRequest<IProudct[]>(list);
};
export const GetProductByIdAPI = (_id: IProudct["_id"]) => {
  const url = getByID.replace("{_id}", _id as string);
  return getRequest<IProudct>(url);
};

export const UpadateProductByIdAPI = (data: IProudct) => {
  const url = updateById.replace("{_id}", data._id as string);
  return putRequest<IProudct>(url, data);
};

export const DeleteProductByIdAPI = (_id: IProudct["_id"]) => {
  const url = deleteById.replace("{_id}", _id as string);
  return deleteRequest<IProudct>(url);
};
