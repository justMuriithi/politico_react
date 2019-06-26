import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { ListCandidates } from "./listCandidates";

test("renders candidates form", () => {
  const wrapper = shallow(
    <ListCandidates
      candidates={[
        {
          candidate: "Kanyi"
        }
      ]}
    />
  );
  const candidateForm = wrapper.find("[data-test='form-app']");
  expect(candidateForm.length).toBe(1);
});
