import React, { useState, useEffect } from "react";
import Header from "./Header";

function Authenticator() {
  let [AuthMode, setAuthMode] = useState("Login");
  let [PageTitle, setPageTitle] = useState();
  useEffect(() => {
    if (AuthMode === "Login") {
      setPageTitle("Login to To-Do and Notes");
      document.getElementsByClassName("Form")[0].style.display = "block";
      document.getElementsByClassName("Form")[1].style.display = "None";
    } else {
      setPageTitle("Register on To-Do and Notes");
      document.getElementsByClassName("Form")[0].style.display = "None";
      document.getElementsByClassName("Form")[1].style.display = "block";
    }
  }, [AuthMode]);
  return (
    <>
      <Header />
      <main>
        <h2 className="PageTitle text-center">{PageTitle}</h2>
        <form className="Form" action="" method="POST">
          <label htmlFor="InputLoginUsername" className="form-label mt-4">
            Username
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input
              type="text"
              className="form-control"
              id="InputLoginUsername"
              placeholder="Username"
            />
          </div>
          <label htmlFor="InputLoginPassword" className="form-label">
            Password
          </label>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              id="InputLoginPassword"
              placeholder="Password"
            />
            <button className="btn btn-outline-warning">Forgot Password</button>
          </div>
          <button className="btn btn-success float-end" type="submit">
            Login
          </button>
          <button
            type="button"
            className="btn btn-primary float-start"
            onClick={() => {
              setAuthMode("Register");
            }}
          >
            New to To-Do and Notes? Register here!
          </button>
        </form>
        <form className="Form" action="" method="POST">
          <label htmlFor="InputRegisterEmail" className="form-label mt-4">
            Email Address
          </label>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              id="InputRegisterEmail"
              placeholder="Email Address"
            />
          </div>
          <label htmlFor="InputRegisterUsername" className="form-label">
            Username
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input
              type="text"
              className="form-control"
              id="InputRegisterUsername"
              placeholder="Username"
            />
            <span className="form-text text-muted">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </span>
          </div>
          <label htmlFor="InputRegisterPassword" className="form-label">
            Password
          </label>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              id="InputRegisterPassword"
              placeholder="Password"
            />
          </div>
          <label htmlFor="InputRegisterConfirmPassword" className="form-label">
            Confirm Password
          </label>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              id="InputRegisterConfirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <button className="btn btn-success float-end" type="submit">
            Register
          </button>
          <button
            type="button"
            className="btn btn-primary float-start"
            onClick={() => {
              setAuthMode("Login");
            }}
          >
            Already have an account? Login here!
          </button>
        </form>
      </main>
    </>
  );
}

export default Authenticator;
