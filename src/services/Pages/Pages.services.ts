import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "@/common/axios/axios";
import { ADMIN_URLS } from "@/common/urls/urls";
import { ICreatePage, IPage } from "@/types/Pages/pages.types";
import { ISection } from "@/types/Pages/Sections/Sections.types";

const { PAGES } = ADMIN_URLS;

const { list, create, deleteByID, updateById, getById, addSection } = PAGES;

export const GetPagesAPI = () => {
  return getRequest<IPage[]>(list);
};

export const GetPageByIdAPI = (_id: IPage["_id"]) => {
  const url = getById.replace("{id}", _id);
  return getRequest<IPage>(url);
};

export const AddSectionToPageAPI = ({
  page_id,
  section_id,
}: {
  page_id: IPage["_id"];
  section_id: ISection["_id"];
}) => {
  const url = addSection
    .replace("{page_id}", page_id)
    .replace("{section_id}", section_id);
  return putRequest(url);
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
