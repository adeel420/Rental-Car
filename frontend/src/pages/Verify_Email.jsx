import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/Assets";
import axios from "axios";

const Verify_Email = () => {
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [otpInfo, setOtpInfo] = useState({
    code: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyotpInfo = { ...otpInfo };
    copyotpInfo[name] = value;
    setOtpInfo(copyotpInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { code } = otpInfo;
    if (!code) {
      return setErrMsg("Please Enter Otp");
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/user/verify-email`,
        otpInfo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setSuccessMsg("OTP verified successfully");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setErrMsg(response.data.error || "OTP failed. Please try again.");
      }
    } catch (err) {
      setErrMsg("Error occurred during verify email");
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
          <h1 className="font-bold text-3xl ">Verify your account</h1>

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
              type="text"
              placeholder="Enter verification code"
              name="code"
              onChange={handleChange}
              value={otpInfo.code}
              className="border border-[gray] border-1 w-full max-w-[400px] p-1 text-lg outline-0 rounded "
            />
            <button
              type="submit"
              className="button text-lg w-full max-w-[400px] "
            >
              Verify Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verify_Email;
