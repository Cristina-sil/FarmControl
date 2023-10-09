import { put, takeLatest } from 'redux-saga/effects';

interface FetchUserAction {
  type: 'FETCH_USER';
  payload: string
}

function* fetchUser(action: FetchUserAction) {
  try {
    const name = action.payload;

    yield put({type: 'USER/setDataUser', payload: name});
  } catch (error) {
    console.log(error);
  }
}

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
}

export default userSaga;
