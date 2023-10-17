import { put, select, takeLatest } from "redux-saga/effects";
import { mammalsListState, mammalsState } from "../../reducer/mammals";
import { ReduxState } from "../../reducer";

interface FetchMammalsAction {
  type: "FETCH_MAMMALS";
  payload: mammalsState;
}

interface FetchEditMammalsAction {
  type: 'FETCH_EDIT_MAMMALS';
  payload: mammalsListState;
}

interface FetchExcludMammalsAction {
  type: 'FETCH_EXCLUD_MAMMALS';
  payload: mammalsListState;
}

function* fetchMammals(action: FetchMammalsAction) {
  try {
    const mammalsState = yield select((state: ReduxState) => state.mammals.data.mammals);
    const data = action.payload;

    const list = [data]

    const newList = [].concat(mammalsState, list);

    yield put({ type: "MAMMALS/setMammals", payload: newList });
  } catch (error) {
    console.log(error);
  }
}

function* fetchEditMammals(action: FetchEditMammalsAction) {
  try {
    const data = action.payload;

    yield put({ type: "MAMMALS/setMammals", payload: data });
  } catch (error) {
    console.log(error);
  }
}

function* fetchExcludMammals(action: FetchExcludMammalsAction) {
  try {
    const data = action.payload;

    yield put({ type: "MAMMALS/setMammals", payload: data });
  } catch (error) {
    console.log(error);
  }
}

function* mammalsSaga() {
  yield takeLatest("FETCH_MAMMALS", fetchMammals);
  yield takeLatest("FETCH_EDIT_MAMMALS", fetchEditMammals);
  yield takeLatest("FETCH_EXCLUD_MAMMALS", fetchExcludMammals);
}

export default mammalsSaga;
