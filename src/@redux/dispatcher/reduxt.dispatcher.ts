import { Dispatch } from "redux";
import { RootStore } from "../reduxt/stores/RootStore";

export function ConfigActions<
  T extends Record<string, (...args: any[]) => any>,
>(actions: T, options?: { log?: boolean }): T {
  const dispatch = RootStore.dispatch;

  const wrappedActions: Partial<T> = {};

  for (const key in actions) {
    const actionCreator = actions[key];
    if (typeof actionCreator === "function") {
      wrappedActions[key] = ((...args: any[]) => {
        return dispatch(actionCreator(...args));
      }) as T[typeof key];
    } else {
      wrappedActions[key] = actionCreator;
    }
  }

  return wrappedActions as T;
}
