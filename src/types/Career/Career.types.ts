import { IFile } from "../Gallery/gallery.types";



export interface ICareer {
  EN: IData;
  FA: IData;
  _id?: string;
 
}

interface IData {
  title: string;
  skills: string[];
  description: string;
  isActive: boolean;
  image: IFile;
  type: "SPECIAL" | "NORMAL";
}



