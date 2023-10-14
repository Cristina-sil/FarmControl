import { combineReducers } from "@reduxjs/toolkit";

import userReducer, { UserState } from "./user";
import mammals, { mammalsListState } from "./mammals";

export interface ReduxState {
  user: UserState;
  mammals: mammalsListState;
}

export const rootReducer = combineReducers({
  user: userReducer,
  mammals: mammals,
});
