import { getRequest } from "@/common/axios/axios";
import { ADMIN_URLS } from "@/common/urls/urls";
import { ICareerApply } from "@/types/Career/applys/Applys.types";

const { CAREERS } = ADMIN_URLS;

const { list } = CAREERS.APPLYS;

export const GetCareerApplys = () => {
  return getRequest<ICareerApply[]>(list);
};
