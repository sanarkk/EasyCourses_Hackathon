import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/navBar";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate("");
  const [userId, setUserId] = useState("");
  useEffect(() => {
    let _userId = JSON.parse(localStorage.getItem("user"));
    _userId = _userId ? (_userId.data ? _userId.data._id : false) : false;
    if (_userId) {
      console.log(_userId);
      setUserId(_userId);
    } else {
      navigate("/login");
    }
  });

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    _id: "",
    faculty: "",
  });
  useEffect(() => {
    const getUserData = async () => {
      const { data } = await axios.get(
        `https://hackathon-backend-six.vercel.app/users?id=${userId}`
      );
      if (data) {
        setUser(data.data);
      } else {
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          _id: "",
          faculty: "",
        });
      }
    };
    try {
      getUserData();
    } catch (error) {
      console.log(error);
    }
  }, [userId]);
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
                <div
                  className="prof-img-div  text-white"
                  style={{
                    borderRadius: "50%",
                    fontSize: "120px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {user.firstName.length > 0 && user.firstName[0]}
                </div>
              </td>
            </div>
          </div>
          <div class="col-md-6">
            <div class="profile-head">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h5 className=" mr-4">{user.firstName}</h5>
                <h5>{user.lastName}</h5>
              </div>
              <h6>{user.faculty}</h6>
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
                    <p>{user.firstName}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Last name</label>
                  </div>
                  <div class="col-md-6">
                    <p>{user.lastName}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Email</label>
                  </div>
                  <div class="col-md-6">
                    <p>{user.email}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Student id</label>
                  </div>
                  <div class="col-md-6">
                    <p>{user._id}</p>
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
