import { ISection } from "./Sections/Sections.types";

export interface IPage {
  _id: string;
  title: string;
  title_en: string;
  slug: string;
  sections: ISection[];
  status: string;
  createdAt: string;
  updatedAt: string;
  nav: {
    show: boolean;
    icon: string;
  };
}

export interface ICreatePage {
  title: string;
  title_en: string;
  slug: string;
  nav: {
    show: false;
    icon: "";
  };
}
