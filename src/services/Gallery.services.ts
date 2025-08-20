import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "@/common/axios/axios";
import { ADMIN_URLS } from "@/common/urls/urls";
import { IGallery, IGalleryCU } from "@/types/Gallery/gallery.types";

const { list, create, update } = ADMIN_URLS.GALLERY;

export const GetAllGalleriesAPI = (params: any) => {
  return getRequest<IGallery[]>(list, params);
};

export const CreateGalleryAPI = (gallery: IGalleryCU) => {
  return postRequest<IGallery>(create, gallery);
};

export const UpdateGalleryAPI = (gallery: IGallery) => {
  const url = update.replace("{_id}", gallery._id);
  return putRequest<IGallery[]>(url, gallery);
};

export const DeleteGalleryAPI = (gallery: IGallery) => {
  const url = update.replace("{_id}", gallery._id);
  return deleteRequest<IGallery[]>(url);
};
