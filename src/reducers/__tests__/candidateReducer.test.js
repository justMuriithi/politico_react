import { CANDIDATES } from "../../actions/types";
import candidateReducer from "../candidateReducer";

test("Return object with empty candidates array as initial state", () => {
    const newState = candidateReducer(undefined, {
        type: CANDIDATES,
        candidates: [
            {
                candidateName: "Kanyi"
            }
        ]
    });

    expect(newState).toEqual([

        {
            candidateName: "Kanyi"
        }

    ]);
});

test("should set state to a list of candidates", () => {
    const candidateList = [
        {
            id: 1,
            candidateName: "Kanyi",
            CandidateOffice: "President"
        },
        {
            id: 2,
            candidateName: "Phyllis",
            CandidateOffice: "President"
        }
    ];
    const newState = candidateReducer(undefined, {
        type: CANDIDATES,
        candidates: candidateList
    });
    expect(newState).toEqual(

        candidateList

    );
});
