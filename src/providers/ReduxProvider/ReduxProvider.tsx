"use client";

import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Presistor, RootStore } from "../../@redux/reduxt/stores/RootStore";

interface IReduxPriverType {
  children: React.ReactElement;
}

export default function ReduxProvider({ children }: IReduxPriverType) {
  return (
    <Provider store={RootStore}>
      <PersistGate
        loading={null}
        persistor={Presistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
