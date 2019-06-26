import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import {
  fetchOffices,
  setCandidates,
  fetchAllOffices,
  fetchCandidatesInAnOffice,
  fetchAllCandidates
} from "../offices";

import * as types from "../types";

jest.spyOn(axios, "get");

const mockStore = configureMockStore([thunk]);

const office = {
  category: "National",
  id: 1,
  name: "President"
};
describe("Office actions", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      offices: []
    });
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it("dispatches GET_OFFICES action and return data on success", () => {
    axios.get
      .mockImplementationOnce(() =>
        Promise.resolve({
          data: {
            data: [office],
            message: "success",
            status: 200
          }
        })
      )
      .mockImplementation(() =>
        Promise.resolve({
          data: {
            data: [],
            message: "Success",
            status: 200
          }
        })
      );

    const expectedActions = [{ type: types.OFFICES, offices: [office] }];

    return store.dispatch(fetchAllOffices("fjeorhf")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("setCandidates should return an object with type and candidates as object properties", () => {
    const result = setCandidates([]);
    expect(result).toEqual({
      type: types.CANDIDATES,
      candidates: []
    });
  });
  it("test fetchCandidatesInAnOffice", () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: [],
        message: "Success",
        status: 200
      })
    );
    fetchCandidatesInAnOffice("id", "token").then(data => {
      expect(data).toEqual([]);
    });
  });
  it("should fetch all candidates for all offices", () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: {
          data: [],
          message: "Success",
          status: 200
        }
      })
    );
    const dispatch = jest.fn();

    fetchAllCandidates([office], "token", dispatch).then(() => {
      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toBeCalledWith({ candidates: [], type: "CANDIDATES" });
    });
  });
});
