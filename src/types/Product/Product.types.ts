import { IFile } from "../Gallery/gallery.types";

export interface IProudct {
  title: string;
  en_title: string;
  gallery: IFile[];
  image: IFile;
  _id?: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  en_description: string;
}
