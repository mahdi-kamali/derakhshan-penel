import { createSlice } from "@reduxjs/toolkit";

export const PageMetaSlice = createSlice({
  name: "PageMeta",
  initialState: {
    title: "صفحه اصلی",
  },
  reducers: {
    setPageMeta: (state: any, { payload }) => {
      return payload;
    },
  },
});

export default PageMetaSlice.reducer;
