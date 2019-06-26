import Swal from "sweetalert2";
import { OFFICES, CANDIDATES } from "./types";
// import fetch from "fetch";

const BASE_URL = "https://murmuring-atoll-51852.herokuapp.com/api/v2";

export const fetchOffices = offices => {
  return {
    type: OFFICES,
    offices
  };
};

const fetch = require("node-fetch");


export const setCandidates = candidates => {
  return {
    type: CANDIDATES,
    candidates
  }
}

export const fetchCandidatesInAnOffice = (office_id, token) => {
  return fetch(`${BASE_URL}/offices/${office_id}/candidates`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
}

export const fetchAllCandidates = (offices, token, dispatch) => {

  console.log("officePromises")
  const officeIds = offices.map((office) => office.id)
  return Promise.all(officeIds.map(id => fetchCandidatesInAnOffice(id, token))).then(function (values) {
    return values.map(candidateinfo => candidateinfo.data).reduce(
      function (accumulator, currentValue) {
        return accumulator.concat(currentValue);
      },
      []
    )
  })
    .then(candidates => dispatch(setCandidates(candidates)))
}

export const fetchAllOffices = token => {
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
          console.log(data.data);
          fetchAllCandidates(data.data, token, dispatch)
          dispatch(fetchOffices(data.data));
        }
      })
      .catch(error => {
        console.log(error.response);
        Swal.fire("", error.response.data.error, "error");
      });
  };
};
