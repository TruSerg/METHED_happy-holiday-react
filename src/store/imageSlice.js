import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { URI_API } from "../const/const";

export const fetchImage = createAsyncThunk(
  "image/fetchImage",
  async (holiday) => {
    const res = await fetch(`${URI_API}image/${holiday}`);
    const data = await res.json();
    return data;
  }
);

export const fetchImageId = createAsyncThunk(
  "image/fetchImageId",
  async (id) => {
    const res = await fetch(`${URI_API}image/${id}`);
    const data = await res.json();
    return data;
  }
);

const imageSlice = createSlice({
  name: "image",

  initialState: {
    urlImg: "",
    idImg: "",
    isLoading: "",
  },
  extraReducers: {
    [fetchImage.pending]: (state) => {
      state.isLoading = "loading";
    },
    [fetchImage.fulfilled]: (state, action) => {
      state.isLoading = "success";

      state.urlImg = action.payload.urlImg;
      state.idImg = action.payload.idImg;
    },
    [fetchImage.rejected]: (state) => {
      state.isLoading = "failed";

      state.urlImg = "";
      state.idImg = "";
    },
    [fetchImageId.pending]: (state) => {
      state.isLoading = "loading";
    },
    [fetchImageId.fulfilled]: (state, action) => {
      state.isLoading = "success";

      state.urlImg = action.payload.urlImg;
      state.idImg = action.payload.idImg;
    },
    [fetchImageId.rejected]: (state) => {
      state.isLoading = "failed";

      state.urlImg = "";
      state.idImg = "";
    },
  },
});

export default imageSlice.reducer;
