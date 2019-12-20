import { all, takeLatest, call, put } from 'redux-saga/effects';
import { signInSuccess } from './action';
import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  const { email, password } = payload;
  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  yield put(signInSuccess(token, user));

  history.push('/dashboard');
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
