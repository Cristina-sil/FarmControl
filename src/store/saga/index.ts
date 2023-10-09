import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import mammalsSaga from "./mammalsSaga";

function* rootSaga() {
  yield all([userSaga(), mammalsSaga()]);
}

export default rootSaga;
