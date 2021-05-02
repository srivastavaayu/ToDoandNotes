import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ToDoandNotesLogo from "../img/ToDoandNotesLogo.png";

function Header() {
  let [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (loggedIn === true) {
      document.getElementsByClassName("nav-item")[1].style.display =
        "list-item";
      document.getElementsByClassName("nav-item")[2].style.display =
        "list-item";
      document.getElementsByClassName("nav-item")[4].style.display =
        "list-item";
      document.getElementsByClassName("nav-item")[3].style.display = "None";
      document.getElementsByClassName("nav-item")[5].style.display = "None";
    } else {
      document.getElementsByClassName("nav-item")[1].style.display = "None";
      document.getElementsByClassName("nav-item")[2].style.display = "None";
      document.getElementsByClassName("nav-item")[4].style.display = "None";
      document.getElementsByClassName("nav-item")[3].style.display =
        "list-item";
      document.getElementsByClassName("nav-item")[5].style.display =
        "list-item";
    }
  }, []);
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand d-flex" to="/">
              <img src={ToDoandNotesLogo} alt="" width="auto" height="70vh" />
              <h1 className="navbar-text">To-Do and Notes</h1>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#Navbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div id="Navbar" className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto align-items-center">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/ToDos">
                    To-Do
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Notes">
                    Notes
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/About">
                    About
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    @
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <div className="dropdown-divider"></div>
                    <li>
                      <a class="dropdown-item" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Authenticator">
                    <button className="btn btn-outline-primary">
                      Get Started!
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
