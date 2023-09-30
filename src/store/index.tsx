// src/redux/store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer, { UserState } from "./reducer";
import userSaga from "./saga";

export interface ReduxState {
  user: UserState;
}

const rootReducer = combineReducers({
  user: userReducer,
});

const middlewares: any[] = [];

if (__DEV__) {
  const createDebugger = require("redux-flipper").default;
  middlewares.push(createDebugger());
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, ...middlewares),
});

sagaMiddleware.run(userSaga);

export default store;
