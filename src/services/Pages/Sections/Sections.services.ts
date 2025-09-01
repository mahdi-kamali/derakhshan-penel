import { deleteRequest, getRequest, postRequest } from "@/common/axios/axios";
import { ADMIN_URLS } from "@/common/urls/urls";
import { IPage } from "@/types/Pages/pages.types";
import { ISection } from "@/types/Pages/Sections/Sections.types";

const { PAGES } = ADMIN_URLS;
const { SECTIONS } = PAGES;
const { list, create, deleteById } = SECTIONS;
export const GetPageSectionsAPI = (_id: IPage["_id"]) => {
  const url = list.replace("{page_id}", _id);
  return getRequest(url).then((res) => res.data);
};

export const CreateSectionAPI = (_id: IPage["_id"], data: ISection) => {
  const url = list.replace("{page_id}", _id);
  return postRequest(url, data);
};

export const DeleteSectionByIdAPI = (
  page_id: IPage["_id"],
  section_id: ISection["_id"],
) => {
  const url = deleteById
    .replace("{page_id}", page_id)
    .replace("{section_id}", section_id);
  return deleteRequest(url);
};
