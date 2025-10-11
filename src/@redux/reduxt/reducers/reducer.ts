import PageMetaSlice from "../../pageMeta/page.slice";
import UserSlice from "@/@redux/user/user.slice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const presistConfig = {
  key: "starter-panel",
  storage,
};

const persistRoot = combineReducers({
  user: UserSlice.reducer,
  pageMeta: PageMetaSlice,
});

export { presistConfig, persistRoot };
