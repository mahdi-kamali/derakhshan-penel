import { IPageMeta } from "../PageMeta/page.types";
import { IUser } from "../User/user.types";

export interface IRootState {
  user: IUser;
  pageMeta: IPageMeta;
}
