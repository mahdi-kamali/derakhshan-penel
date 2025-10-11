import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "@/common/axios/axios";
import { ADMIN_URLS } from "@/common/urls/urls";
import { ICareer } from "@/types/Career/Career.types";
import { ISection } from "@/types/Pages/Sections/Sections.types";

const { CAREERS } = ADMIN_URLS;
const { create, list, getByID, updateById, deleteById } = CAREERS;

export const CreateCareerAPI = (data: ICareer) => {
  console.log(data);
  return postRequest(create, data);
};

export const UpdateCareerAPI = (data: ICareer) => {
  const url = updateById.replace("{_id}", data._id as string);
  return putRequest<ICareer>(url, data);
};

export const GetCareersAPI = () => {
  return getRequest<ICareer[]>(list);
};

export const GetCareerByIDAPI = (_id: string) => {
  const url = getByID.replace("{_id}", _id);
  return getRequest<ICareer>(url);
};

export const DeleteCareerByIDAPI = (_id: string) => {
  const url = deleteById.replace("{_id}", _id);
  return deleteRequest<ICareer>(url);
};
