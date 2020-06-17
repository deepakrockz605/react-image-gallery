import React, { Component } from "react";
import { register } from "./UserFunctions";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();

    let userExp = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;
    let passExp = "^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$";
    let emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

    const state = this.state;
    if (
      state.first_name === "" ||
      state.last_name === "" ||
      state.username === "" ||
      state.email === "" ||
      state.password === ""
    ) {
      toastr.error(
        "Text Fields Cannot be Empty. Please Fill all Fields Correctly !!"
      );
    } else {
      if (
        !this.state.username.match(userExp) &&
        this.state.username.length <= 8
      ) {
        toastr.error("Username Should be Alphanumeric !!");
      } else if (
        !this.state.password.match(passExp) &&
        this.state.password.length <= 8
      ) {
        toastr.error(
          "Password Should be Alphanumeric & Minimum 8 Characters !!"
        );
      } else if (!this.state.email.match(emailExp)) {
        toastr.error("Email not Valid");
      } else {
        const newUser = {
          first_name: state.first_name,
          last_name: state.last_name,
          username: state.username,
          email: state.email,
          password: state.password,
        };
        register(newUser).then((res) => {
          if (!res.error) {
            this.props.history.push(`/login`);
            toastr.success("Signup Succesful !!");
          } else {
            toastr.error(res.error);
          }
        });
      }
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal text-center">
                Register
              </h1>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                  maxLength={50}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your lastname name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                  maxLength={50}
                />
              </div>

              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.onChange}
                  maxLength={50}
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
                  maxLength={50}
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
                  maxLength={50}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
