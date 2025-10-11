import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { persistRoot, presistConfig } from "../reducers/reducer";

const presistedReducer = persistReducer(presistConfig, persistRoot);

const RootStore = configureStore({
  reducer: presistedReducer,
});

const Presistor = persistStore(RootStore);
export { RootStore, Presistor };
