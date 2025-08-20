import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
  FilesSystem,
} from "@/common/axios/axios";
import { ADMIN_URLS } from "@/common/urls/urls";
import { IFile, IGallery, IGalleryCU } from "@/types/Gallery/gallery.types";

const { list, create, update, IMAGES } = ADMIN_URLS.GALLERY;

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

export const DeleteGalleryImageAPI = (data: {
  _id: IFile["_id"];
  gallery_id: IGallery["_id"];
}) => {
  return deleteRequest<IGallery[]>(ADMIN_URLS.GALLERY.delete, {
    params: data,
  });
};

export const AddImagesGalleryAPI = (data: {
  images: File[];
  gallery_id: IGallery["_id"];
}) => {
  const url = IMAGES.add;
  return FilesSystem.uploadFileRequest(url, data);
};
