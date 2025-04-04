import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/Assets";

const Login = () => {
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = signupInfo;
    if (!email || !password) {
      return setErrMsg("All fields are required");
    }
    if (password.length < 5) {
      return setErrMsg("Length of password must be 5 characters long");
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/user/login`,
        signupInfo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setSuccessMsg("Login Successful");
        localStorage.setItem("token", response.data.token);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setErrMsg(response.data.error || "Login failed. Please try again.");
      }
    } catch (err) {
      setErrMsg("Error occurred during login");
    }
  };

  const handleFocus = (e) => {
    e.target.style.border = "4px solid #b0cffd";
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === "name" && value.length < 3) {
      e.target.style.border = "4px solid #f4a098";
    } else if (name === "password" && value.length < 5) {
      e.target.style.border = "4px solid #f4a098";
    } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      e.target.style.border = "4px solid #f4a098";
    } else {
      e.target.style.border = "4px solid #b0cffd";
    }
  };
  return (
    <div className="linear-page">
      <div
        className="flex items-center flex-wrap absolute top-[50%] left-[50%] shadow-2xl w-[80%] h-[80%] rounded-lg "
        style={{ transform: "translate(-50%, -50%)" }}
      >
        {/* main-img */}
        <div className="w-[50%]">
          <img
            src={assets.mainImg}
            className="w-full h-full max-w-[500px] max-h-[500px] "
          />
        </div>

        {/* Form */}
        <div className="flex flex-col items-center w-[50%]">
          <h1 className="font-bold text-3xl ">Login your account</h1>

          {/* Danger */}
          {errMsg && (
            <span className="bg-[#efcfd0] text-[brown] max-w-[400px] w-full p-2 text-lg mt-5 rounded border border-brown ">
              {errMsg}
            </span>
          )}

          {/* Success */}
          {successMsg && (
            <span className="bg-[#d1e6dd] text-[#003c40] max-w-[400px] w-full p-2 text-lg mt-5 rounded border border-[#003c40] ">
              {successMsg}
            </span>
          )}

          <form
            className="flex flex-col gap-3 mt-8 items-center w-full"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={signupInfo.email}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="border border-[gray] border-1 w-full max-w-[400px] p-1 text-lg outline-0 rounded "
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={signupInfo.password}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="border border-[gray] border-1 w-full max-w-[400px] p-1 text-lg outline-0 rounded "
            />
            <button
              type="submit"
              className="button text-lg w-full max-w-[400px] "
            >
              Login
            </button>
            <span>
              Don't have an account?{" "}
              <Link to={"/signup"} className="text-[#3563E9] font-semibold ">
                Signup
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
