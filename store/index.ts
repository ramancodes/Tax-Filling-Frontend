import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { userSlice } from "./user/slice";
import { applicationSlice } from "./applications/slice";
import { bankSlice } from './bankDetails/slice'
import { incomeSourceSlice } from './incomeSources/slice'

export const store = configureStore({
  reducer: {
    [applicationSlice.name]: applicationSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [bankSlice.name]: bankSlice.reducer,
    [incomeSourceSlice.name]: incomeSourceSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
