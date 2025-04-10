import React from "react";
import { Link } from "react-router-dom";
import FooterPage from "../components/FooterPage";
import GooglePlay from "/src/assets/Images/GooglePlay.png";
import Microsoft from "/src/assets/Images/Microsoft.png";
import VerificationEmail from "/src/assets/Images/VerificationEmail.jpg"

const VerificationPage = () => {
  return (
    <div>
      <div className="border boder-[#737373] w-[350px]  mx-auto  mt-3 h-[380px]">
        {/* Image and text */}
        <div>
          <img
            src={VerificationEmail}
            alt="verification"
            className="mx-auto w-[100px]"
          />
          <h1 className="text-center font-semibold text-[14px]">
            Enter confirmation code
          </h1>
        </div>
        {/* ConfirmationCode */}
        <div className="">
          <h1 className="text-center text-[14px] mx-9 ">
            Enter the confirmation code that we sent to Email.
            <span className="mx-1 font-semibold text-[#0095F6]">
              Resend Code.
            </span>
          </h1>
        </div>
        {/* Input text */}
        <div className="mx-auto mt-5 flex justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Confirmation code"
            className="w-[268px] h-[40px] border-[1.9px]  border-[#737373] px-2 rounded-md bg-[#FAFAFA] outline-none text-[14px] font-medim"
          />
        </div>
        {/* Button */}
        <div>
          <Link to="/home">
            <button className="bg-[#B2DFFC] w-[268px] h-[32px] text-white  text-[14px] rounded-lg mt-4 mx-auto block">
              Next
            </button>
          </Link>
          <Link
            to="/signup"
            className="flex justify-center items-center mt-4 text-[#0095F6] font-semibold text-[14px]"
          >
            Go back
          </Link>
        </div>
      </div>
      <div className="md:border md:boder-[#737373] w-[350px] mx-auto  mt-3 h-20">
        <div className=" gap-1 mt-5 ">
          <h1 className="text-center text-[15px] font-normal">
            Have an account?
          </h1>
          <Link
            to="/login"
            className="flex items-center justify-center text-[#0095F6] font-semibold text-[14px]"
          >
            Log in
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-center mt-5 font-normal text-[15px]">
          Get the app.
        </h1>
      </div>
      <div className="flex justify-center items-center gap-4 mt-4">
        <div className="w-36 h-10">
          <img src={GooglePlay} alt="" />
        </div>
        <div className="w-28 h-10">
          <img src={Microsoft} alt="" />
        </div>
      </div>
      <div>
        <FooterPage />
      </div>
    </div>
  );
};

export default VerificationPage;
