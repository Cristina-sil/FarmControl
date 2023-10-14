import { put, select, takeLatest } from "redux-saga/effects";
import { mammalsState } from "../../reducer/mammals";
import { ReduxState } from "../../reducer";

interface FetchMammalsAction {
  type: "FETCH_MAMMALS";
  payload: mammalsState;
}

function* fetchMammals(action: FetchMammalsAction) {
  try {
    const mammalsState = yield select((state: ReduxState) => state.mammals.data.mammals);
    const data = action.payload;

    const list = [data]

    const newList = [].concat(mammalsState, list);

    console.log(newList);

    yield put({ type: "MAMMALS/setMammals", payload: newList });
  } catch (error) {
    console.log(error);
  }
}

function* mammalsSaga() {
  yield takeLatest("FETCH_MAMMALS", fetchMammals);
}

export default mammalsSaga;
