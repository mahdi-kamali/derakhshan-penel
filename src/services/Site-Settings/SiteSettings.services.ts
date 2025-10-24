import { getRequest, putRequest } from "@/common/axios/axios";
import { ADMIN_URLS } from "@/common/urls/urls";
import { ISiteSettings } from "@/types/Site-Settings/SiteSettings.types";

const { SITE_SETTINGS } = ADMIN_URLS;
const { list, update } = SITE_SETTINGS;
export const GetSiteSettingsAPI = () => {
  return getRequest<ISiteSettings>(list);
};

export const UpdateSiteSettingsAPI = (data: ISiteSettings) => {
  return putRequest(update, data);
};
