import React from "react";
import {Link} from 'react-router-dom';
import image from './img/books2.png'

const Home = () => {
  return (
    <div class = "bg-dark" style = {{height:"100vh"}}>
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Easycourses</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Main</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/courses">Courses</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/profile">Profile</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/aboutus">About us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <section class = "p-5 text-light text-right">
          <div class = "container">
            <div class = "d-sm-flex">
              <img class = "img-fluid w-50 mr-5" src={image} alt = ""/>
              <div class = "ml-5">
                <h1 class = "mt-4">Choose Fast, Learn Faster</h1>
                <br></br>
                <p class = "paragraph-us text-right">
                  Registering for your courses has never been easier. Easycourses was designed for students by students. Our goal is to make registering for courses easier, so that students can foucs on studying the course over wasting time figuring out how to register for the course.
                </p>
                <br></br>
                <p class = "paragraph-us text-right">
                  Don't know where to start? Ask our telgram chatbot for directions.
                </p>
                <button class = "btn btn-primary btn-lg">Help</button>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Home;
