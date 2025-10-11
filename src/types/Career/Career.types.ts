import { IFile } from "../Gallery/gallery.types";

export interface ICareer {
  isActive: boolean;
  _id?: string;
  title: string;
  skills: string[];
  description: string;
  createdAt: string;
  updatedAt: string;
  image: IFile;
  type: "SPECIAL" | "NORMAL";
}
