import axios from "axios";
import fetch from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { fetchAllOffices } from "./offices";
import { fetchOffices } from "./offices";

import expect from "expect";
import * as types from "./types";

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
      offices: [office]
    });
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it("dispatches GET_OFFICES action and return data on success", () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          data: [office]
        }
      })
    );

    const expectedActions = [{ type: types.OFFICES, offices: [office] }];

    return store.dispatch(fetchAllOffices("3o23usdjo2i32")).then(() => {
      store.dispatch(fetchOffices([office]));
      const state = store.getState();
      expect(state.offices).toEqual([office]);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
