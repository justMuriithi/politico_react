import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { login } from "../login";

import * as types from "../types";

jest.spyOn(axios, "post");
const mockStore = configureMockStore([thunk]);
window.localStorage = {
  setItem: jest.fn()
};
const history = {
  push: jest.fn()
};
const dispatch = jest.fn();

const data = {
  email: "test@gmail.com",
  password: "pass123"
};
describe("User actions", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      user: []
    });
  });

  afterEach(() => {
    fetchMock.restore();
  });
  it("test login", () => {
    axios.post.mockImplementation(() =>
      Promise.resolve({
        data: {
          data: [
            {
              token:
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjE2MjMwNTcsIm5iZiI6MTU2MTYyMzA1NywianRpIjoiY2NiYmJiNGMtMTNkYS00MGY4LTk5ZGItMTc5YjBmYWQzN2VkIiwiZXhwIjoxNTYxNjIzOTU3LCJpZGVudGl0eSI6NiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.s_y9cA8aLS4Md9oEEUFeaYxop6cqve5qGfuQVN3nP70",
              user: {
                admin: false,
                email: "tonywamuriithi@gmail.com",
                firstname: "Antony",
                id: 6,
                lastname: "Muriithi",
                national_id: "31607749"
              }
            }
          ],
          message: "Success",
          status: 200
        }
      })
    );
    return store.dispatch(login(data, history)).then(() => {
      expect(history.push).toHaveBeenCalled();
    });
  });
});
