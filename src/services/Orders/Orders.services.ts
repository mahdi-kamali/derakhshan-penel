import { deleteRequest, getRequest } from "@/common/axios/axios";
import { ADMIN_URLS } from "@/common/urls/urls";
import { IOrder } from "@/types/Orders/Orders.types";

const { ORDERS } = ADMIN_URLS;
const { list, create, deleteById, getByID, updateById } = ORDERS;

export const GetOrdersAPI = () => {
  return getRequest<IOrder[]>(list);
};

export const DeleteOrderByIdAPI = (_id: IOrder["_id"]) => {
  const url = deleteById.replace("{_id}", _id);
  return deleteRequest(url);
};
