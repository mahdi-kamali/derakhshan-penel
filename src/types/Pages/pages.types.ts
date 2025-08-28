import { ISectionsBase } from "./Sections/Sections.types";

export interface IPage {
  _id: string;
  title: string;
  slug: string;
  sections: ISectionsBase[];
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}



export interface ICreatePage {
  title : string ,
  slug : string
}