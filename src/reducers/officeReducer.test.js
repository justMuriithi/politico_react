import { OFFICES } from "../actions/types";
import officeReducer from "./officeReducer";

test("Return object with empty offices array as initial state", () => {
  const newState = officeReducer(undefined, {
    type: OFFICES,
    offices: [
      {
        category: "Presidential"
      }
    ]
  });

  expect(newState).toEqual([
    [
      {
        category: "Presidential"
      }
    ]
  ]);
});

test("should set state to a list of offices", () => {
  const officeList = [
      {
        id: 1,
        officeName: "President",
        officeType: "Federal"
      },
      {
        id: 2,
        officeName: "Deputy President",
        officeType: "Federal"
      }
  ];
  const newState = officeReducer(undefined, {
    type: OFFICES,
    offices: officeList
  });
  expect(newState).toEqual(
    [
       officeList
    ]
  );
});
