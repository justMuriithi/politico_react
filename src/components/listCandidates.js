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
  componentDidMount() {
    const { office_id } = this.props;
    fetch(`${BASE_URL}/offices/${office_id}/candidates`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 200) {
          var candidates = document.getElementById(
            `candidate-list-${office_id}`
          );
          this.setState({ candidates: data.data });
        } else if (tokenError(data.status)) {
          console.log("Expired token");
        } else {
          displayError(data.error);
          console.log(data.status);
        }
      })
      .catch(error => {
        displayError("Please check your connection");
      });
  }
  render() {
    const { candidates } = this.state;
    return (
      <div data-test="form-app">
        <select>
          {candidates.map(candidate => (
            <React.Fragment key={candidate.id}>
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
function mapStateToProps(state) {
  const { user } = state;
  console.log(user);

  return { user };
}
export default connect(mapStateToProps)(ListCandidates);
