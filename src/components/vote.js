import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import ViewOffices from "./viewOffices";

import img from "./images/default.jpg";
const BASE_URL = "https://murmuring-atoll-51852.herokuapp.com/api/v2";
class Vote extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {}

  render() {
    let styles = {
      margin: "margin-top:5rem"
    };
    return (
      <div>
        <nav>
          <div className="topnav">
            <header className="header">
              <a href="" className="logo">
                <h1>Politico</h1>
              </a>
              <input className="menu-btn" type="checkbox" id="menu-btn" />
              <label className="menu-icon" htmlFor="menu-btn">
                <span className="navicon" />
              </label>
              <ul className="menu">
                <li>
                  <Link to="/vie">Vie</Link>
                </li>
                <li>
                  <Link to="/results">Results</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/login">Logout</Link>
                </li>
              </ul>
            </header>
          </div>
        </nav>
        <main role="main" className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="media" style={styles}>
                <img
                  className="rounded-circle account-img"
                  src={img}
                />
                <div className="media-body">
                  <legend className="border-bottom mb-4">Account Info</legend>
                  <h2 id="firstname">Antoine</h2>
                  <p className="text-secondary" id="national_id">
                    31607749
                  </p>
                  <p className="text-secondary" id="email">
                    demo@demo.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="account-heading">Choose your candidate</h2>
          <div className="row">
            <div id="office-list" className="col-md-2" />
            <ViewOffices />
          </div>
          <div className="button-center">
            <form>
              <div className="form-group">
                <input
                  className="btn btn-outline-info"
                  id="submit"
                  name="submit"
                  type="submit"
                  value="Cast your vote"
                />
              </div>
            </form>
          </div>
        </main>
      </div>
    );
  }
}

export default Vote;
