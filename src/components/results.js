import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class Results extends Component {
  render() {
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
          <div className="account-heading">
            <h2>Election Results</h2>
          </div>
          <div className="row">
            <div id="result-list" className="col-md-2" />
          </div>
        </main>
      </div>
    );
  }
}

export default Results;
