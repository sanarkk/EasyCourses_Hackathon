import React from "react";
import {Link} from 'react-router-dom';
import image from './img/books2.png'

const Home = () => {
  return (
    <div>
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

      <div class = "bg-dark">
        <section class = "p-5 text-light text-center">
          <div class = "container">
            <div class = "d-sm-flex">
              <img class = "img-fluid w-25 mr-5" src={image} alt = ""/>
              <div class = "ml-5">
                <h1 class = "mt-4">Choose Fast</h1>
                <h1>Learn Faster</h1>
                <br></br>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel leo commodo neque aliquet cursus a eu nunc. Phasellus ac elit eu nibh suscipit fringilla eu sed nibh. Nam congue, libero eu viverra consequat, odio ante posuere diam, sed malesuada sapien lorem in nibh.
                </p>
                <br></br>
                <p>
                  Don't know where to start? Ask our chatbot for directions.
                </p>
                <button class = "btn btn-primary">Help</button>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Home;
