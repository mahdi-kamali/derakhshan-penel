import { IFile } from "../Gallery/gallery.types";
import { IProudct } from "../Product/Product.types";

export interface ICategory {
  _id?: string;
  image: IFile;
  title: string;
  createdAt: string;
  updatedAt: string;
  products: IProudct[];
}
