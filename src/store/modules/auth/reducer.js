import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS':
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = INITIAL_STATE.loading;
        break;
      case '@auth/SIGN_IN_REQUEST':
        draft.loading = true;
        break;
      case '@auth/SIGN_IN_FAILURE':
        draft.loading = INITIAL_STATE.loading;
        break;
      case '@auth/SIGN_OUT':
        draft.token = INITIAL_STATE.token;
        draft.signed = INITIAL_STATE.signed;
        break;
      default:
    }
  });
}
