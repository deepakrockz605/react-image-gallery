import React, { Component } from "react";
import { login } from "./UserFunctions";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { loginUtil } from '../utils';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const state = this.state;
    if (state.username === "" || state.email === "" || state.password === "") {
      toastr.error(
        "Text Fields Cannot be Empty. Please Fill all Fields Correctly !!"
      );
    } else {
      const user = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      };

      login(user).then((res) => {
        if (!res.error) {
          loginUtil();
          this.props.history.push(`/dashboard`);
          toastr.success("Logged In Succesful !!");
        } else {
          toastr.error(res.error);
        }
      });
    }
  }

  render() {
    return (
      <div className="container Login">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal text-center">Log In</h1>

              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
