import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/navBar";
import axios from "axios";
import { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const getUserData = async () => {
      const { data } = await axios.get(
        "https://hackathon-backend-six.vercel.app/users?id=122344"
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
  }, []);
  return (
    <div class="bg-dark" style={{ minHeight: "100vh", height: "100%" }}>
      <NavBar />
      <div class="container emp-profile">
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
