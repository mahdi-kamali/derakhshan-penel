import { ConfigActions } from "../dispatcher/reduxt.dispatcher";
import { PageMetaSlice } from "./page.slice";

export const PageMetaActions = ConfigActions(PageMetaSlice.actions);
