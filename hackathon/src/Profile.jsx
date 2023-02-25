import React from "react";
import {Link} from 'react-router-dom';


const Profile = () => {
    return (
        <div>
            <div class="container emp-profile">
            <br />
            <br />
            <div class="row">
                <div class="col-md-4">
                <div class="profile-img">
                    <td>
                    <img
                        style={{borderRadius: "10%"}}
                        src=""
                    />
                    </td>
                    <td>
                    <img
                        src=""
                    />
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
                        >About</a
                        >
                    </li>
                    </ul>
                </div>
                </div>
                <div class="col-md-2">
                <a
                    class="dropdown-item"
                    href=""
                >
                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Update Profile
                </a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                <div class="profile-work">
                    <p>WORK LINK</p>
                    <a href="">link 1</a><br />
                    <a href="">link 2</a><br />
                    <a href="">link 3</a>
                    <p>SKILLS</p>
                    <a href="">skill 1</a><br />
                    <a href="">skill 2</a><br />
                    <a href="">skill 3</a><br />
                    <a href="">skill 4</a><br />
                    <a href="">skill 5</a><br />
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
                        <label>Phone</label>
                        </div>
                        <div class="col-md-6">
                        <p>slogan</p>
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
                        <label>Your Bio</label><br />
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