export interface IGallery {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  images: IFile[];
}

export interface IGalleryCU {
  title: string;
}


export interface IFile {
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
  __v: number;
}
