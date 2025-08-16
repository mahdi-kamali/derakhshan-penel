import UserSlice from "./user.slice";
import { ConfigActions } from "../dispatcher/reduxt.dispatcher";

export const UserActions = ConfigActions(UserSlice.actions);
