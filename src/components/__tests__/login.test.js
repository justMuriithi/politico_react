import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { StaticRouter } from "react-router-dom";

import EnzymeAdapter from "enzyme-adapter-react-16";
import Login from "../login";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  // const wrapper = mount(
  //   <StaticRouter>
  //     <Login />
  //   </StaticRouter>
  // );
  // const appComponent = wrapper.find("[data-test='component-app']");
  // expect(appComponent.length).toBe(1);
});
test("renders form", () => {
  // const wrapper = mount(
  //   <StaticRouter>
  //     <Login />
  //   </StaticRouter>
  // );
  // const appForm = wrapper.find("[data-test='form-app']");
  // expect(appForm.length).toBe(1);
});