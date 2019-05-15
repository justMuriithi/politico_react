import React, { Component } from "react";
import {
  Route,
  Link,
  BrowserRouter as Router,
  withRouter
} from "react-router-dom";
import Swal from 'sweetalert2'

const BASE_URL = "https://murmuring-atoll-51852.herokuapp.com/api/v2";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      national_id: "",
      email: "",
      password: "",
      confirm_password: ""
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
    const {
      firstname,
      lastname,
      national_id,
      email,
      password,
      confirm_password
    } = this.state;
    event.preventDefault();

    if (password !== confirm_password) {
      Swal.fire("","Passwords don't match", 'error')
      return;
    }

    let payload = {
      firstname,
      lastname,
      national_id,
      admin: false,
      email,
      password
    };

    fetch(`${BASE_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.status === 201) {
          Swal.fire("",data.message, 'success')
          var user = data.data[0].user;

          // Save user profile to local storage
          localStorage.setItem("token", data.data[0].token);
          localStorage.setItem("firstname", user.firstname);
          localStorage.setItem("lastname", user.lastname);
          localStorage.setItem("email", user.email);
          localStorage.setItem("admin", user.admin);
          localStorage.setItem("uid", user.id);
          // Redirect to login after successful signup
          this.props.history.push("/login");
        } else {
          Swal.fire("",data.error, 'error')
          console.log(data.error);
        }
      })
      .catch(error => {
        Swal.fire("","Please check your connection", 'error')
      });
  }

  render() {
    return (
      <div>
        <nav>
          <div className="topnav">
            <header className="header">
              <a href="" className="logo">
                {" "}
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
                    <legend className="border-bottom mb-1">Join Today</legend>
                    <div className="form-group">
                      <label
                        className="form-control-label"
                        htmlFor="first_name"
                      >
                        First Name
                      </label>

                      <input
                        className="form-control form-control-lg"
                        id="first_name"
                        name="first_name"
                        required
                        type="text"
                        value={this.state.firstname}
                        onChange={this.handleChange("firstname")}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="lastname">
                        Last Name
                      </label>

                      <input
                        className="form-control form-control-lg"
                        id="last_name"
                        name="last_name"
                        required
                        type="text"
                        value={this.state.lastname}
                        onChange={this.handleChange("lastname")}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        className="form-control-label"
                        htmlFor="national_id"
                      >
                        National ID
                      </label>

                      <input
                        className="form-control form-control-lg"
                        id="national_id"
                        name="national_id"
                        required
                        type="text"
                        value={this.state.national_id}
                        onChange={this.handleChange("national_id")}
                      />
                    </div>
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
                    <div className="form-group">
                      <label
                        className="form-control-label"
                        htmlFor="confirm_password"
                      >
                        Confirm Password
                      </label>

                      <input
                        className="form-control form-control-lg"
                        id="confirm_password"
                        name="confirm_password"
                        required
                        type="password"
                        value={this.state.confirm_password}
                        onChange={this.handleChange("confirm_password")}
                      />
                    </div>
                  </fieldset>
                  <div className="form-group">
                    <input
                      className="btn btn-outline-info"
                      id="submit"
                      name="submit"
                      type="submit"
                      value="Sign Up"
                    />
                  </div>
                </form>
              </div>
              <div className="border-top pt-1">
                <small className="text-muted">
                  Already Have An Account?{" "}
                  <Link to="/login" className="ml-2">
                    Sign In
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

export default withRouter(App);
