import { all, takeLatest, call, put } from 'redux-saga/effects';
import { storeSuccess, storeFailure } from './action';
import api from '~/services/api';
import history from '~/services/history';

export function* store({ payload }) {
  try {
    const { name, email, weight, height, age } = payload;
    const response = yield call(api.post, 'students', {
      name,
      email,
      weight,
      height,
      age,
    });

    yield put(storeSuccess(payload));
  } catch (error) {
    console.log(error);
    yield put(storeFailure());
  }
}

export default all([takeLatest('@student/STORE_REQUEST', store)]);
