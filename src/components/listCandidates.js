import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

const BASE_URL = "https://murmuring-atoll-51852.herokuapp.com/api/v2";
export class ListCandidates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: []
    };
  }

  render() {
    const { candidates, office_name } = this.props;
    const officecandidates = candidates.filter(candidate => candidate.office === office_name)
    return (
      <div data-test="form-app">
        <select>
          {officecandidates.map((candidate, i) => (
            <React.Fragment key={`${candidate.id}-${i}`}>
              <option value="" />
              <option value="">
                {candidate.id}.{candidate.candidate}
              </option>
            </React.Fragment>
          ))}
        </select>
      </div>
    );
  }
}

export default ListCandidates
