import { IUser } from "@/types/User/user.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {} as IUser,
  reducers: {
    login: (state, { payload }: PayloadAction<IUser>) => {
      return payload;
    },
    logout: () => {
      return {} as any;
    },
    fetchUser: (state) => {
      return state;
    },
    updateUser: (state, { payload }) => {
      const user = payload;

      return {
        ...state,
        user,
      };
    },
  },
});

export default UserSlice;
