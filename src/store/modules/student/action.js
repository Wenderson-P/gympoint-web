export function storeRequest(name, email, weight, height, age) {
  return {
    type: '@student/STORE_REQUEST',
    payload: { name, email, weight, height, age },
  };
}

export function storeSuccess(student) {
  return {
    type: '@student/STORE_SUCCESS',
    payload: { student },
  };
}
export function storeFailure() {
  return {
    type: '@student/STORE_FAILURE',
  };
}

export function updateRequest(name, email, weight, height, age, id) {
  return {
    type: '@student/UPDATE_REQUEST',
    payload: { name, email, weight, height, age, id },
  };
}

export function updateSuccess(student) {
  return {
    type: '@student/UPDATE_SUCCESS',
    payload: { student },
  };
}
export function updateFailure() {
  return {
    type: '@student/UPDATE_FAILURE',
  };
}
