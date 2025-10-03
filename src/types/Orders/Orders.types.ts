export enum INDUSTRY_ENUM {
  FOOD = "FOOD",
  COSMETICS = "COSMETICS",
  HELTHCARE = "HELTHCARE",
  OTHER = "OTHER",
}

export interface IOrder {
  user: User;
  product: Product;
  _id: string;
  companyName: string;
  industry: INDUSTRY_ENUM;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Product {
  dimensions: Dimensions;
  type: string;
  weight: number;
  quantity: number;
  image: Image;
}

interface Image {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

interface Dimensions {
  length: number;
  width: number;
  height: number;
}

interface User {
  name: string;
  family: string;
  phone: string;
  email: string;
}
