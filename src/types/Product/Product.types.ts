import { IFile } from "../Gallery/gallery.types";

export interface IProudct {
  title: string;
  gallery: IFile[];
  image: IFile;
  _id?: string;
  createdAt: string;
  updatedAt: string;
  description: string;
}
