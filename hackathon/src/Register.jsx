import React from "react";
import { Link } from "react-router-dom";
import Joi from "joi";
import { useState } from "react";
const Register = () => {
  const Schema = Joi.object({
    email: Joi.string()
      .min(3)
      .max(100)
      .email({ minDomainSegments: 2, tlds: { allow: false } })
      .label("Email"),
    password: Joi.string().required().label("Password"),
    lastName: Joi.string().required().label("Last Name"),
    firstName: Joi.string().required().label("First Name"),
    studentId: Joi.string().required().label("Student Id"),
    confirmPassword: Joi.string().required().label("Confirm Password"),
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [faculty, setFaculty] = useState("");
  const [studentId, setStudentId] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsObject = Schema.validate(
      { email, password, confirmPassword, firstName, lastName, studentId },
      { abortEarly: false }
    );
    console.log(errorsObject);
    if (errorsObject.error) {
      const temporaryErrorObject = {
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        studentId,
      };
      errorsObject.error.details.forEach((detail) => {
        if (
          Object.keys(temporaryErrorObject).includes(detail.path[0].toString())
        ) {
          const path = detail.path[0].toString();
          temporaryErrorObject[path] = detail.message;
        }
        if (confirmPassword !== password) {
          temporaryErrorObject.confirmPassword =
            "Confirm Password must match Password";
        }
      });
      let errorsArray = [];
      errorsObject.error.details.forEach((error) =>
        errorsArray.push(error.path[0].toString())
      );
      Object.keys(temporaryErrorObject).forEach((error) => {
        if (!errorsArray.includes(error)) {
          temporaryErrorObject[error] = "";
        }
        if (confirmPassword !== password) {
          temporaryErrorObject.confirmPassword =
            "Confirm password must match password";
        } else {
          temporaryErrorObject.confirmPassword = "";
        }
      });
      console.log(temporaryErrorObject);
      setErrors(temporaryErrorObject);
    }
  };
  console.log(errors);

  return (
    <div className="background pt-5">
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg ">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      Create an Account!
                    </h1>
                  </div>
                  <form
                    className="user"
                    method="POST"
                    action="{% url 'account_signup' %}"
                  >
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          name="first_name"
                          className="form-control form-control-user"
                          id="exampleFirstName"
                          placeholder="First Name"
                          value={firstName}
                          onChange={(e) => {
                            setFirstName(e.currentTarget.value);
                          }}
                        />
                        <small className="text-danger">
                          {errors.firstName}
                        </small>
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          name="last_name"
                          className="form-control form-control-user"
                          id="exampleLastName"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={(e) => {
                            setLastName(e.currentTarget.value);
                          }}
                        />
                        <small className="text-danger">{errors.lastName}</small>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="Student Email Address"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.currentTarget.value);
                        }}
                      />
                      <small className="text-danger">{errors.email}</small>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone_number"
                        className="form-control form-control-user"
                        id="exampleInputPhone"
                        placeholder="Student id"
                        value={studentId}
                        onChange={(e) => {
                          setStudentId(e.currentTarget.value);
                        }}
                      />
                      <small className="text-danger">{errors.studentId}</small>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="password"
                          name="password1"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.currentTarget.value);
                          }}
                        />
                        <small className="text-danger">{errors.password}</small>
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="password"
                          name="password2"
                          className="form-control form-control-user"
                          id="exampleRepeatPassword"
                          placeholder="Repeat Password"
                          value={confirmPassword}
                          onChange={(e) => {
                            setConfirmPassword(e.currentTarget.value);
                          }}
                        />
                        <small className="text-danger">
                          {errors.confirmPassword}
                        </small>
                      </div>
                    </div>
                    <div className="select"></div>
                    <br />
                    <hr />
                    <input
                      onClick={(e) => handleSubmit(e)}
                      value="Register"
                      type="submit"
                      className="btn btn-primary btn-user btn-block"
                    />
                  </form>
                  <hr />
                  <div className="text-center">
                    <Link className="small" to="/login">
                      Already have an account? Login!
                    </Link>
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

export default Register;
