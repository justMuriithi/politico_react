import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import ListCandidates from "./listCandidates";
import img from "./images/default.jpg";


const BASE_URL = "https://murmuring-atoll-51852.herokuapp.com/api/v2";
class ViewOffices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offices: []
    };
  }
  componentDidMount() {
    fetch(`${BASE_URL}/offices`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 200) {
          var offices = document.getElementById("office-list");
          this.setState({ offices: data.data });
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
    const { offices } = this.state;
    return (
      <div>
        {offices.map(office => (
          <div className="content-section" key={office.id}>
            <div className="media">
              <img
                className="rounded-circle account-img"
                src={img}
              />
              <div className="media-body">
                <legend className="border-bottom mb-4">
                  {office.id}.{office.name}
                </legend>
                <h2>{office.category}</h2>
                <form >
                  <div name="candidate_g" id="candidate-list-{office.id}">
                  <ListCandidates office_id={office.id}/>

                  </div>
                  <br />
                  <br />
                  <input type="submit" />
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ViewOffices;
