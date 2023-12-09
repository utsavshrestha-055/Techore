import "../auth.css";

import { NavLink } from "react-router-dom";
import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";

const Signup = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-form-box">
        <RiAccountCircleFill size={110} />
        <div className="auth-form">
          <form>
            <div className="input-container">
              <label>Enter Your Email</label>
              <input type="text" placeholder="Eg. arc@gmail.com" />
            </div>
            <div className="input-container">
              <label>Enter Your Name</label>
              <input type="text" placeholder="Eg. arc@gmail.com" />
            </div>
            <div className="input-container">
              <label>Enter Your Password</label>
              <input
                type="password"
                placeholder="..........................."
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input type="submit" className="auth-submit-btn" />
            </div>
          </form>
        </div>
        <span>
          Already have an Account? {""}
          <NavLink to={"/admin/login"}>Signin</NavLink>
        </span>
      </div>
    </div>
  );
};

export default Signup;
