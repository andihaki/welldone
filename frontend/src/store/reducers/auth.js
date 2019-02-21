import {
  AUTH_START,
  AUTH_FAIL,
  AUTH_SUCCESS,
  AUTH_LOGOUT
} from "../actions/auth";

import { updateObject } from "../utility";

const initialState = {
  token: null,
  error: null,
  loading: false
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const authSuccess = (state, action) => {
  // console.log(action.token);
  return updateObject(state, {
    token: action.token,
    error: false,
    loading: false
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      authStart(state, action);
      break;
    case AUTH_FAIL:
      authFail(state, action);
      break;
    case AUTH_SUCCESS:
      authSuccess(state, action);
      break;
    case AUTH_LOGOUT:
      authLogout(state, action);
      break;
    default:
      return state;
  }
};

export default reducer;
