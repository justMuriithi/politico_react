import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import img from "./images/default.jpg";

class Profile extends Component {
  render() {
    let styles = {
      margin: "margin-top:5rem"
    };
    return (
      <div data-test='component-app'>
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
                  <Link to="/vote">Vote</Link>
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
                <img className="rounded-circle account-img" src={img} />
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
          <h2 className="account-heading">Candidates you have voted for</h2>
          <div className="row">
            <div id="voting-history" className="col-md-3" />
          </div>
        </main>
      </div>
    );
  }
}

export default Profile;
