import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Joi from "joi";

const Login = () => {
  const Schema = Joi.object({
    studentId: Joi.string(),

    password: Joi.string().required().label("Password"),
  });
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState({
    password: "",
    studentId: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsObject = Schema.validate(
      { studentId, password },
      { abortEarly: false }
    );
    const temporaryErrorObject = {
      studentId: "",
      password: "",
    };
    errorsObject.error?.details.forEach((detail) => {
      if (
        Object.keys(temporaryErrorObject).includes(detail.path[0].toString())
      ) {
        const path = detail.path[0].toString();
        temporaryErrorObject[path] = detail.message;
      }
    });
    let errorsArray = [];
    errorsObject.error?.details.forEach((error) =>
      errorsArray.push(error.path[0].toString())
    );
    Object.keys(temporaryErrorObject).forEach((error) => {
      if (!errorsArray.includes(error)) {
        temporaryErrorObject[error] = "";
      }
    });

    setErrors(temporaryErrorObject);
  };

  return (

    <div class = "bg-dark" style = {{height: "100vh"}}>


      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Login</h1>
                      </div>
                      <form class="user" method="POST" action="">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Student Id..."
                            name="login"
                            required
                            value={studentId}
                            autocomplete="off"
                            onChange={(e) => {
                              setStudentId(e.currentTarget.value);
                            }}
                          />
                          <small className="text-danger">
                            {error.studentId}
                          </small>
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            id="exampleInputPassword"
                            name="password"
                            placeholder="Password"
                            required
                            autocomplete="off"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.currentTarget.value);
                            }}
                          />
                          <small className="text-danger">
                            {error.password}
                          </small>
                        </div>
                        <div class="form-group">
                          <div class="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <input
                          onClick={(e) => {
                            handleSubmit(e);
                          }}
                          type="submit"
                          value="Login"
                          class="btn btn-primary btn-user btn-block"
                        />
                        <hr />
                      </form>
                      <div class="text-center">
                        <Link class="small" to="/register">
                          Create an Account!
                        </Link>
                      </div>
                    </div>
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

export default Login;
