import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { StaticRouter } from "react-router-dom";

import EnzymeAdapter from "enzyme-adapter-react-16";
import App, { UnconnectedApp } from "../App";
import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

test("renders without error", () => {
  const wrapper = mount(
    <StaticRouter>
      <App />
    </StaticRouter>
  );
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});
test("renders form", () => {
  const wrapper = mount(
    <StaticRouter>
      <App />
    </StaticRouter>
  );
  const appForm = wrapper.find("[data-test='form-app']");
  expect(appForm.length).toBe(1);
});

jest.spyOn(axios, "post");
const mockStore = configureMockStore([thunk]);
window.localStorage = {
  setItem: jest.fn()
};

const dispatch = jest.fn();

const data = {
  firstname: "Tony",
  lastname: "Muriithi",
  national_id: "123456",
  email: "test@gmail.com",
  password: "pass123",
  confirm_password: "pass123"
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
  it("test sign up", done => {
    const history = {
      push: path => {
        expect(path).toBe("/login");
        done();
      }
    };
    axios.post.mockImplementation(() =>
      Promise.resolve({
        data: {
          data: [
            {
              token:
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjE2MjMwNTcsIm5iZiI6MTU2MTYyMzA1NywianRpIjoiY2NiYmJiNGMtMTNkYS00MGY4LTk5ZGItMTc5YjBmYWQzN2VkIiwiZXhwIjoxNTYxNjIzOTU3LCJpZGVudGl0eSI6NiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.s_y9cA8aLS4Md9oEEUFeaYxop6cqve5qGfuQVN3nP70",
              user: {
                admin: false,
                email: "test@gmail.com",
                firstname: "Tony",
                id: 6,
                lastname: "Muriithi",
                national_id: "123456"
              }
            }
          ],
          message: "Success",
          status: 201
        }
      })
    );

    const wrapper = shallow(<UnconnectedApp history={history} />);
    wrapper.instance().handleSubmit({
      preventDefault: jest.fn()
    });
  });
});
