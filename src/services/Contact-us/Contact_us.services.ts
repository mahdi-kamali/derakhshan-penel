import { getRequest, putRequest } from "@/common/axios/axios";
import { ADMIN_URLS } from "@/common/urls/urls";
import { IContactUs } from "@/types/Contact-us/Contact_us.types";

const { CONTACT_US } = ADMIN_URLS;

const { create, deleteById, getByID, list, updateById } = CONTACT_US;

export const GetContactUsAPI = () => {
  return getRequest<IContactUs[]>(list);
};

export const UpdateContactUsAPI = (data: IContactUs) => {
  const url = updateById.replace("{_id}", data._id);
  return putRequest(url, data);
};
