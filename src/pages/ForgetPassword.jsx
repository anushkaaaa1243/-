import React from "react";
import InstagramFont from "/src/assets/Images/InstagramFont.png";
import ForgetPasswords from "/src/assets/Images/FrogetPasswords.jpg";

import { Link } from "react-router";
import FooterPage from "../components/FooterPage";

const ForgetPassword = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="flex justify-between xl:justify-around items-center w-full mt-5 px-4">
        <img src={InstagramFont} alt="Instagram" className="w-[120px]" />
        <div className="flex gap-5">
          <Link to="/login">
            <button className="border bg-[#0095F6] font-medium text-white w-[73px] h-[35px] rounded-lg text-[14px]">
              Login
            </button>
          </Link>
          <Link to="/signUp" className="text-[#0095F6] font-semibold">
            Sign up
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full mt-5 h-[1px] bg-gray-200" />

      {/* Main Content */}
      <div className="flex-grow">
        <div className="md:border md:border-[#7373732f] bg-white mx-auto mt-8 px-6  rounded-sm w-full max-w-sm md:max-w-md flex flex-col items-center">
          <img
            src={ForgetPasswords}
            alt="Lock"
            className="w-[40%]"
          />
          <h1 className="text-center font-semibold text-[17px]">
            Trouble with logging in?
          </h1>
          <p className="text-center text-sm text-[#737373] mt-2">
            Enter your email address, phone number or username, and we'll send
            you a link to get back into your account.
          </p>

          <input
            type="text"
            placeholder="Email address, phone number or username"
            className="w-full mt-6 border border-[#efe9e0] h-[40px] p-2 rounded-lg text-sm outline-none bg-[#FAFAFA]"
          />

          <Link to="/dateofbirth" className="w-full">
            <button
              type="submit"
              className="w-full mt-4 h-9 bg-[#53bdeb] text-white opacity-80 text-[15px] font-semibold rounded-xl"
            >
              Send Login Link
            </button>
          </Link>

          <Link to="/" className="mt-4 text-[12px] text-[#00376b] hover:mt-2">
            Can't reset your password?
          </Link>

          <div className="flex items-center gap-4 mt-7 w-full">
            <div className="flex-grow border-t border-gray-200" />
            <span className="text-gray-500 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-200" />
          </div>

          <Link to="/signup">
            <h1 className="text-center hover:text-[#737373] text-[14px] font-semibold mt-5">
              Create a new account
            </h1>
          </Link>
        </div>

        {/* Back to Login Footer Section */}
        <div className="md:border-b-[2px] md:border-r-[2px] md:border-l-[2px] md:border-b-gray-300 md:border-r-gray-300 md:border-l-gray-300 w-full max-w-sm md:max-w-md mx-auto h-[50px] bg-[#FAFAFA] flex justify-center items-center  border border-[#7373732a]">
          <Link to="/login" className="text-[14px] font-semibold hover:text-[#737373]">
            Back to Login
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="hidden md:block mt-auto">
        <FooterPage />
      </div>
    </div>
  );
};

export default ForgetPassword;
