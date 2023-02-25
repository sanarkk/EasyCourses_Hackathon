import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/navBar";

const Profile = () => {
  return (
    <div class="bg-dark" style={{minHeight: "100vh", height: "100%" }}>
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
              <Link class="nav-link active" to="/profile">
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
    </nav>      <div class="container emp-profile">
        <br />
        <br />
        <div class="row">
          <div class="col-md-4">
            <div class="profile-img">
              <td>
                <div className="prof-img-div" style={{ borderRadius: "50%" }}>
                  
                </div>
              </td>
            </div>
          </div>
          <div class="col-md-6">
            <div class="profile-head">
              <h5>First name last name</h5>
              <h6>SOME TEXT FOR FUTURE</h6>
              <br />
              <br />
              <br />
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="profile-work">
              <p>Courses</p>
              <a href="">skill 1</a>
              <br />
              <a href="">skill 2</a>
              <br />
              <a href="">skill 3</a>
              <br />
              <a href="">skill 4</a>
              <br />
              <a href="">skill 5</a>
              <br />
            </div>
          </div>
          <div class="col-md-8">
            <div class="tab-content profile-tab" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="row">
                  <div class="col-md-6">
                    <label>First name</label>
                  </div>
                  <div class="col-md-6">
                    <p>first name</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Last name</label>
                  </div>
                  <div class="col-md-6">
                    <p>last name</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Email</label>
                  </div>
                  <div class="col-md-6">
                    <p>email</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Student id</label>
                  </div>
                  <div class="col-md-6">
                    <p>student id</p>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div class="row">
                  <div class="col-md-6">
                    <label>Experience</label>
                  </div>
                  <div class="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Hourly Rate</label>
                  </div>
                  <div class="col-md-6">
                    <p>10$/hr</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Total Projects</label>
                  </div>
                  <div class="col-md-6">
                    <p>230</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>English Level</label>
                  </div>
                  <div class="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Availability</label>
                  </div>
                  <div class="col-md-6">
                    <p>6 months</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <label>Your Bio</label>
                    <br />
                    <p>Your detail description</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
