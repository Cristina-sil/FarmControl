import { combineReducers } from "@reduxjs/toolkit";

import userReducer, { UserState } from "./user";

export interface ReduxState {
  user: UserState;
}


export const rootReducer = combineReducers({
  user: userReducer,
});