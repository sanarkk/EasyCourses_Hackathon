import React from "react";
import {Link} from 'react-router-dom';

const Register = () => {
  return (
    <div class = "background">
        <div class="container">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          <div class="row">
            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div class="col-lg-7">
              <div class="p-5">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form
                  class="user"
                  method="POST"
                  action="{% url 'account_signup' %}"
                >
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        name="first_name"
                        class="form-control form-control-user"
                        id="exampleFirstName"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="text"
                        name="last_name"
                        class="form-control form-control-user"
                        id="exampleLastName"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      name="email"
                      class="form-control form-control-user"
                      id="exampleInputEmail"
                      placeholder="Student Email Address"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      name="phone_number"
                      class="form-control form-control-user"
                      id="exampleInputPhone"
                      placeholder="Student id"
                    />
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        name="password1"
                        class="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="password"
                        name="password2"
                        class="form-control form-control-user"
                        id="exampleRepeatPassword"
                        placeholder="Repeat Password"
                      />
                    </div>
                  </div>
                  <div class="select">
                  </div>
                  <br />
                  <hr />
                  <input
                    value="Register"
                    type="submit"
                    class="btn btn-primary btn-user btn-block"
                  />
                </form>
                <hr />
                <div class="text-center">
                  <Link class="small" to="/login"
                    >Already have an account? Login!
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