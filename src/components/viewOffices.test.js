import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { createStore, compose, applyMiddleware } from "redux";

import ViewOffices from "./viewOffices";
import rootReducer from "../reducers";


Enzyme.configure({ adapter: new EnzymeAdapter() });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, {
  offices: [[
    {
      "category": "National",
      "id": 1,
      "name": "President"
    }]]
}, composeEnhancer(applyMiddleware(thunk)));



test("renders without error", () => {
  const wrapper = mount(
    <ViewOffices store={store} />
  );
  const appComponent = wrapper.find("[data-test='office-component-app']");
  expect(appComponent.length).toBe(1);
});
