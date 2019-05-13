import axios from "axios";

export const AUTH_START = "AUTH_START";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";
export const AUTH_LOGOUT = "AUTH_LOGOUT";
// export const AUTH_LOGIN = "AUTH_LOGIN";
// export const AUTH_SIGNUP = "AUTH_SIGNUP";

export const authStart = () => {
  return {
    type: AUTH_START
  };
};

export const authSuccess = token => {
  return {
    type: AUTH_SUCCESS,
    token
  };
};

export const authFail = error => {
  return {
    type: AUTH_FAIL,
    error
  };
};

export const authLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiredTime");
  return {
    type: AUTH_LOGOUT
  };
};

const isExpired = expiredTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(authLogout);
    }, expiredTime * 1000);
  };
};

export const authLogin = (username, password) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post(`https://kodebaik.herokuapp.com/rest-auth/login/`, {
        username,
        password
      })
      .then(res => {
        const token = res.data.key;
        const expiredInHour = new Date(new Date().getTime() + 3600 * 1000);
        // const expiredInHour = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expiredTime", expiredInHour);
        dispatch(authSuccess(token));
        dispatch(isExpired(3600));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};

export const authSignup = (username, email, password1, password2) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post(`https://kodebaik.herokuapp.com/rest-auth/registration/`, {
        username,
        email,
        password1,
        password2
      })
      .then(res => {
        const token = res.data.key;
        const expiredInHour = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expiredTime", expiredInHour);
        dispatch(authSuccess(token));
        dispatch(isExpired(3600));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};

export const isHasToken = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(authLogout());
    } else {
      const expiredTime = new Date(localStorage.getItem("expiredTime"));
      if (expiredTime <= new Date()) {
        dispatch(authLogout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          isExpired((expiredTime.getTime() - new Date().getTime()) / 1000)
        );
      }
    }
  };
};
