import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  storeSuccess,
  storeFailure,
  updateSuccess,
  updateFailure,
} from './action';

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

    history.push('/students');
  } catch (error) {
    yield put(storeFailure());
  }
}
export function* update({ payload }) {
  try {
    const { name, email, weight, height, age, id } = payload;
    const response = yield call(api.put, 'students', {
      name,
      email,
      weight,
      height,
      age,
      id,
    });

    yield put(updateSuccess(payload));
    history.push('/students');
  } catch (error) {
    toast.error('Erro ao atualizar estudante');
    yield put(updateFailure());
  }
}

export default all([
  takeLatest('@student/STORE_REQUEST', store),
  takeLatest('@student/UPDATE_REQUEST', update),
]);
