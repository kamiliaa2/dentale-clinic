import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="alll-lg" id="#appoinetement">
      <div className="left-lg">
        <h2>
          Thank you for <br /> choosing us to <br /> take care of your <br />{" "}
          smile!
        </h2>
      </div>
      <div className="right-lg">
        <div className="login-lg">
          <div className="text2-lg">
            <h3>login</h3>
            <p>login into your account</p>
          </div>
          <div className="inp-lg">
            <div className="input1-lg">
              <label htmlFor="email">enter your email</label>
              <input
                type="email"
                name="email"
                placeholder="username@gmail.com"
              />
            </div>
            <div className="input2-lg">
              <label htmlFor="password">enter your password</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="btn11-lg">
              <Link to="/profile">
                <button className="cnx-lg">
                  <b>Login</b>
                </button>
              </Link>
            </div>
            <div className="sign-up-lg">
              <p>
                Doesn’t have an account? Sign up{" "}
                <Link to={"/signup"}>Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
