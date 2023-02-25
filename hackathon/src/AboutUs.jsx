import React from "react";
import {Link} from 'react-router-dom';
import image from './imgs/about-us.jpeg'

const AboutUs = () => {
  return (
    <div class="bg-dark" style={{height: "100vh"}}>
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">Easycourses</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/">Main</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/courses">Courses</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/profile">Profile</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/aboutus">About us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="paragraph-box">
          <h1 className="h1-us">
            ABOUT US
          </h1>
            <p className="paragraph-us">
                Easy Course, as the name suggests, allows you to register for university courses in an easy and efficient way.
                 The engaging student-friendly course directory allows students to look up their courses for availability and get notified when it's available. We even have a chat-bot to help you out
                with the overwhelming content on the website.
            </p>
            <img src={image} className="img-us"></img>
        </div> 

    </div>

  );
};

export default AboutUs;