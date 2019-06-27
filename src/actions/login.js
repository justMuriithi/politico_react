import Swal from "sweetalert2";
import { LOGIN, PROFILE } from "./types";
import axios from "axios";

const BASE_URL = "https://murmuring-atoll-51852.herokuapp.com/api/v2";

export const login = (data, history) => {
  return dispatch => {
    return axios
      .post(`${BASE_URL}/auth/login`, data)
      .then(data => {
        if (data.data.status === 200) {
          // Swal.fire("", data.data.message, "success");
          dispatch(profileSuccess(data));
          localStorage.setItem("token", data.data.data[0].token);
          history.push("/vote");
        }
      })
      .catch(error => {
        Swal.fire("", error.response.data.error, "error");
      });
  };
};

export const profileSuccess = data => {
  const { user, token } = data.data.data[0];
  return {
    type: PROFILE,
    payload: {
      token: token,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      national_id: user.national_id,
      admin: user.admin,
      uid: user.id
    }
  };
};

export const loginSuccess = data => {
  return {
    type: LOGIN,
    payload: {
      email: data.email,
      password: data.password
    }
  };
};
