import React from "react";
import {Link} from 'react-router-dom';


const CoursesPage = () => {
    return (
        <div class="background-div">
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
                  <Link class="nav-link active" to="/courses">Courses</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/profile">Profile</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="/aboutus">About us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="bg-cd">
            <div class="row row-cols-1 row-cols-md-4 g-4" style={{marginLeft: "200px"}}>
            <div class="col" style={{right: "90px"}}>
              <div class="card" style={{width: "20rem"}}>
                <img
                  class="card-img-top"
                  style={{width: "319px", height: "340px"}}
                  src=""
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">course name</h5>
                  <p class="card-text">Credits: credits</p>
                  <p class="card-text">Price: price</p>
                  <Link to="#" class="btn btn-primary">Add course</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
};

export default CoursesPage;







