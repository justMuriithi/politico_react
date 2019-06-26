import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import ListCandidates from "./listCandidates";
import img from "./images/default.jpg";
import { connect } from "react-redux";
import { fetchAllOffices } from "../actions/offices";
const BASE_URL = "https://murmuring-atoll-51852.herokuapp.com/api/v2";
class ViewOffices extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { fetchAllOffices } = this.props;
    fetchAllOffices(localStorage.getItem("token"));
  }
  render() {
    const { offices, candidates } = this.props;
    const officeNum = Array.isArray(this.props.offices[0])
      ? this.props.offices[0]
      : [];
    const officeList = officeNum.map(office => {
      return (
        <div key={office.id} data-test='office-component-app'>
          <div className="content-section" key={office.id}>
            <div className="media">
              <img className="rounded-circle account-img" src={img} />
              <div className="media-body">
                <legend className="border-bottom mb-4">
                  {office.id}.{office.name}
                </legend>
                <h2>{office.category}</h2>
                <form>
                  <div name="candidate_g" id="candidate-list-{office.id}">
                    <ListCandidates candidates={candidates} office_id={office.id} office_name={office.name} />
                  </div>
                  <br />
                  <br />
                  <input type="submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <div>{officeList}</div>;
  }
}
function mapStateToProps(state) {
  return {
    offices: state.offices,
    user: state.user,
    candidates: state.candidates
  };
}
export default connect(
  mapStateToProps,
  { fetchAllOffices }
)(ViewOffices);
