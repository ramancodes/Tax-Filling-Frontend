import { PayloadAction } from "@reduxjs/toolkit";
import { applicationState } from './slice'

export const reducers = {
  setApplicationState(
    state: applicationState,
    action: PayloadAction<any>
  ) {
    const { bearerToken, id, email } = action.payload;
    state.bearerToken = bearerToken;
    state.id = id;
    state.email = email;
  },

  setApiState(
    state: applicationState,
    action: PayloadAction<{ isError: boolean; status: number; message: string }>
  ) {
    state.apiState = action.payload;
  },

  setIsLoginError(state: applicationState, action: PayloadAction<{ isLoginError: boolean }>) {
    state.isLoginError = action.payload.isLoginError;
  }
};
