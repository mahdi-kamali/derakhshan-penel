import { getRequest } from "@/common/axios/axios";
import { ADMIN_URLS } from "@/common/urls/urls";
import { IPage } from "@/types/Pages/pages.types";

const { PAGES } = ADMIN_URLS;
const { SECTIONS } = PAGES;
const { list } = SECTIONS;
export const GetPageSectionsAPI = (_id: IPage["_id"]) => {
  const url = list.replace("{id}", _id);
  return getRequest(url).then((res) => res.data);
};
