import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducer";
import { userDetailsModel } from "../../models/user";
export interface userState {
  userDetails: {
    details: any;
  };
}

const initialState: userState = {
  userDetails: {
    details: userDetailsModel(),
  },
};

export const userSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: reducers,
});

export const userActions = userSlice.actions;
