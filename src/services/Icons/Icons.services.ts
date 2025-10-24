import { getRequest } from "@/common/axios/axios";
import { ADMIN_URLS } from "@/common/urls/urls";

const { ICONS } = ADMIN_URLS;
const { findBySLug } = ICONS;
export const GetIconsAPI = (slug: string) => {
  const url = findBySLug.replace("{slug}", slug || "no-icon-founded");
  return getRequest<string[]>(url);
};
