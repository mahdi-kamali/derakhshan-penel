import { getRequest, postRequest } from "@/common/axios/axios";
import { ADMIN_URLS } from "@/common/urls/urls";
import { IPage } from "@/types/Pages/pages.types";
import { ISectionsBase } from "@/types/Pages/Sections/Sections.types";

const { PAGES } = ADMIN_URLS;
const { SECTIONS } = PAGES;
const { list, create } = SECTIONS;
export const GetPageSectionsAPI = (_id: IPage["_id"]) => {
  const url = list.replace("{id}", _id);
  return getRequest(url).then((res) => res.data);
};

export const CreateSectionAPI = (_id: IPage["_id"], data: ISectionsBase) => {
  const url = list.replace("{id}", _id);
  return postRequest(url, data);
};
