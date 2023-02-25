import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Easycourses
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/">
                Main
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/courses">
                Courses
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active  " to="/profile">
                Profile
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/aboutus">
                About us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;