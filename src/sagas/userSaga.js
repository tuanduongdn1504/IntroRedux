import * as actionTypes from '../actions/type'
import { put, call, take, fork, cancel, takeLatest } from 'redux-saga/effects'
//import { resolve } from 'path';

const fetchUserApi = (delay) => new Promise(resolve => {
  setTimeout(() => {
    resolve({
      name: 'StormBear',
      position: 'Mobile Developer',
      email: 'tuan.duong@enouvo.com'
    })
  }, delay);
})

function* fetchUser() {
  try {
    const response = yield call(fetchUserApi, 1000)
    yield put({ type: actionTypes.FETCH_USER_SUCCESS, payload: response })
  } catch (error) {
    yield put({ type: actionTypes.CANCEL_FETCHING_USER })
  }
}

export function* watchFetchUser() {
  yield takeLatest(actionTypes.FETCH_USER, fetchUser)
  while (yield take(FETCH_USER)) {
    const getUser = yield fork(fetchUser)
    yield take(CANCEL_FETCHING_USER)
    yield cancel(getUser)
  }
}