import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "@/common/axios/axios";
import { ADMIN_URLS } from "@/common/urls/urls";
import { ISection } from "@/types/Pages/Sections/Sections.types";

const { SECTIONS } = ADMIN_URLS;
const { updateById, create, deleteById } = SECTIONS;

export const CreateSectionAPI = (data: ISection) => {
  return postRequest<ISection>(create, data);
};

export const DeleteSectionByIdAPI = (section_id: ISection["_id"]) => {
  const url = deleteById.replace("{_id}", section_id);
  return deleteRequest(url);
};

export const UpdateSectionAPI = (data: ISection) => {
  console.log(data);
  const url = updateById.replace("{_id}", data._id);
  return putRequest(url, data);
};


export const DeleteSection = (_id : ISection["_id"])=>{
  const url = deleteById.replace("{id}",_id)
  return deleteRequest(url)
}