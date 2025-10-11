export enum CONTACT_US_STATUS_ENUM {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

export interface IContactUs {
  status: CONTACT_US_STATUS_ENUM;
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  website?: string;
  address?: string;
}
