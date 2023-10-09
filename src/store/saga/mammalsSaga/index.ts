import { put, takeLatest } from 'redux-saga/effects';
import { mammalsState } from '../../reducer/mammals';

interface FetchMammalsAction {
  type: 'FETCH_MAMMALS';
  payload: mammalsState
}

function* fetchMammals(action: FetchMammalsAction) {
  try {
    const data = action.payload;

    yield put({type: 'MAMMALS/setMammals', payload: data});
  } catch (error) {
    console.log(error);
  }
}

function* mammalsSaga() {
  yield takeLatest('FETCH_MAMMALS', fetchMammals);
}

export default mammalsSaga;
