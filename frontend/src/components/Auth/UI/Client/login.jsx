import "../auth.css";

import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { RiAccountCircleFill } from "react-icons/ri";
import useFetch from "../../../../utils/usefetch";

const Login = () => {
  const [email, set_email] = useState();
  const [password, set_password] = useState();
  const handle_signin_submit = async (e) => {
    e.preventDefault();
  };
  let { data } = useFetch(
    `/api/clients?populate=*&filters[email]=${email}&filters[password]=${password}`
  );
  const navigate = useNavigate();
  const login_data = () => {
    if (!data.data[0]) {
      console.log(data);
      alert("wrong data");
    } else {
localStorage.setItem('client_email',JSON.stringify(email))
      alert("log success");
    navigate("/get-in-touch/dashboard");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-form-box">
        <RiAccountCircleFill size={110} />
        <div className="auth-form">
          <form onSubmit={handle_signin_submit}>
            <div className="input-container">
              <label>Enter Your Email</label>

              <input
                type="text"
                value={email}
                onChange={(e) => set_email(e.target.value)}
                name="email"
                id="email"
                placeholder="Eg. arc@gmail.com"
              />
            </div>
            <div className="input-container">
              <label>Enter Your Password</label>
              <input
                type="password"
                value={password}
                name="password"
                onChange={(e) => set_password(e.target.value)}
                id="password"
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
              <button
                onClick={() => login_data()}
                type="submit"
                className="auth-submit-btn"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <span>
          Don't have an Account? {""}
          <NavLink to={"/client/signup"}>Signup</NavLink>
        </span>
      </div>
    </div>
  );
};

export default Login;
