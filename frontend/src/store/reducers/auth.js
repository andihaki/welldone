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
      return authStart(state, action);
    case AUTH_FAIL:
      return authFail(state, action);
    case AUTH_SUCCESS:
      return authSuccess(state, action);
    case AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
