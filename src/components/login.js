import React, { Component } from "react";
import {
  Route,
  Link,
  BrowserRouter as Router,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/login";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(prop) {
    return event => {
      this.setState({
        [prop]: event.target.value
      });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state, this.props.history);
  }
  render() {
    return (
      <div>
        <nav>
          <div className="topnav">
            <header className="header">
              <a href="" className="logo">
                <h1>Politico</h1>
              </a>
            </header>
          </div>
        </nav>
        <main role="main" className="container">
          <div className="row">
            <div className="col-md-1">
              <h1>Promoting Transparency</h1>
              <p>
                Secure online platform enabling citizens give their mandate to
                politicians running for different government offices
              </p>
            </div>
            <div className="col-md-2">
              <div className="content-section">
                <form onSubmit={this.handleSubmit}>
                  <fieldset className="form-group">
                    <legend className="border-bottom mb-1">Login</legend>
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="email">
                        Email
                      </label>

                      <input
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        required
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange("email")}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="password">
                        Password
                      </label>

                      <input
                        className="form-control form-control-lg"
                        id="password"
                        name="password"
                        required
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange("password")}
                      />
                    </div>
                  </fieldset>
                  <div className="form-group">
                    <input
                      className="btn btn-outline-info"
                      id="submit"
                      name="submit"
                      type="submit"
                      value="Log In"
                    />
                  </div>
                </form>
              </div>
              <div className="border-top pt-1">
                <small className="text-muted">
                  Forgot Password? No need to worry.
                  <Link
                    to="/login"
                    className="ml-2"
                    // onClick="onResetPassword();"
                  >
                    Reset password
                  </Link>
                </small>
                <br />
                <small className="text-muted">
                  Don't Have An Account Yet?{" "}
                  <Link to="/" className="ml-2">
                    Sign Up
                  </Link>
                </small>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { login }
  )(Login)
);
