import Swal from "sweetalert2";
import { OFFICES } from "./types";

const BASE_URL = "https://murmuring-atoll-51852.herokuapp.com/api/v2";

export const fetchOffices = offices => {
  return {
    type: OFFICES,
    offices
  };
};

export const fetchAllOffices = token => {
  console.log(token);
  return dispatch => {
    return fetch(`${BASE_URL}/offices`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ` + token
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 200) {
          var offices = document.getElementById("office-list");
          dispatch(fetchOffices(data.data));
        } 
      })
      .catch(error => {
        console.log(error.response.data.error);
        Swal.fire("", error.response.data.error, "error");
      });
  };
};
