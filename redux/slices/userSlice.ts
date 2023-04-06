import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL } from "@/utils/global";
export interface User {
  fullname?: string;
  id?: number;
  email?: string;
  imageUrl?: string;
}
export interface userState {
  user: User;
}
const initialState: userState = {
  user: {},
};

export const getUser: any = createAsyncThunk(
  "user/getUser",
  async (email: string, thunkAPI) => {
    return axios
      .post(`${BASEURL}/user/fetchUser`, {
        email: email,
      })
      .then((res) => {
        console.log(res);
        // return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  // extraReducers: {
  //   [getUser.pending]: (state: any) => {
  //     // state.loading = true;
  //   },
  //   [getUser.fulfilled]: (state: any, action: any) => {
  //     state.user = action.payload;

  //     // state.loading = false;
  //   },
  //   [getUser.pending]: (state: any) => {
  //     // state.loading = false;
  //   },
  // },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
