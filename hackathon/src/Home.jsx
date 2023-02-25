import React from "react";
import {Link} from 'react-router-dom';
import image from './img/books2.png'
import NavBar from './components/navBar'

const Home = () => {
  return (
    <div class = "bg-dark" style = {{height:"100vh"}}>
      <NavBar />

      <div class = "maindiv">
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
                <a target={"_blank"} class = "btn btn-primary" href="http://t.me/guide_hlp_stud_bot">Help</a>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Home;
