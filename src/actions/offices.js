import Swal from "sweetalert2";
import { OFFICES, CANDIDATES } from "./types";
import { get } from "../helpers/action_helpers";

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
  };
};

export const fetchCandidatesInAnOffice = (office_id, token) =>
  get(BASE_URL + "/offices/" + office_id + "/candidates", token).then(res => {
    return res.data;
  });

export const fetchAllCandidates = (offices, token, dispatch) => {
  const officeIds = offices.map(office => office.id);
  return Promise.all(officeIds.map(id => fetchCandidatesInAnOffice(id, token)))
    .then(function(values) {
      return values
        .map(candidateinfo => candidateinfo.data)
        .reduce(function(accumulator, currentValue) {
          return accumulator.concat(currentValue);
        }, []);
    })
    .then(candidates => {
      dispatch(setCandidates(candidates));
    });
};

export const fetchAllOffices = token => {
  return dispatch =>
    get(BASE_URL + "/offices", token)
      .then(res => {
        return res.data;
      })
      .then(data => {
        if (data.status === 200) {
          fetchAllCandidates(data.data, token, dispatch);
          dispatch(fetchOffices(data.data));
        }
      })
      .catch(error => {
        Swal.fire("", error.response.data.error, "error");
      });
};
