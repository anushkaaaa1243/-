import React from "react";
import FooterPage from "../components/FooterPage";
import { Link } from "react-router";
import FirstPageImage from "/src/assets/Images/FirstPageImage.png"
import Facebook from "/src/assets/Images/Facebook.png"
const Auth = () => {
  return (
    <div>
      {/* Main Div */}
      <div className="w-full h-full flex mt-24 justify-evenly">
        {/* Image div */}

        <div className="h-full hidden md:block">
          <img
            src={FirstPageImage}
            className="h-[450px] object-cover"
          />
        </div>
        {/* Login div */}
        <div className="lg:mr-12">
          <div>
            <img
              src="src/assets/Images/InstagramFont.png"
              alt=""
              className="w-44 block mx-auto"
            />
          </div>
          <div className="mt-8 flex flex-col gap-4">
            {/* Username or Email Input */}
            <div className="relative">
              <input
                type="text"
                id="username"
                className="peer border w-[260px] md:w-[300px] h-10 text-sm p-2 rounded-sm border-[#5555552c] outline-none "
                required
              />
              <label
                htmlFor="username"
                className="absolute left-2 top-2 text-gray-400 text-xs transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-xs "
              >
                Phone number, username, or email address
              </label>
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type="password"
                id="password"
                className="peer border w-[260px] md:w-[300px] h-10 text-sm p-2 rounded-sm border-[#5555552c] outline-none "
                required
              />
              <label
                htmlFor="password"
                className="absolute left-2 top-2 text-gray-400 text-xs transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-xs "
              >
                Password
              </label>
            </div>
          </div>
          <div>
            {/* Button */}
            <Link to="/home">
              <button className="w-full max-w-[300px]   mt-4 h-8 bg-[#53bdeb] text-white text-[15px] font-[600] rounded-xl hover:bg-[#1877F2]">
                {" "}
                Log in
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="w-full border border-gray-200 h-0.1" />
            <div className="text-gray-500 font-semibold text-base">OR</div>
            <div className="w-full border border-gray-200 h-0.1" />
          </div>

          {/* Facbook Div */}
          <div className="flex justify-center items-center gap-2 mt-4 text-[#0095F6]">
            <div>
              {/* Facbook image */}
              <img
                src={Facebook}
                alt="Facebook Logo"
                className="w-6 h-6 inline-block "
              />
            </div>
            <div>
              <h1 className="font-semibold text-[14px] hover:text-blue-900">
                Log in with Facebook
              </h1>
            </div>
          </div>
          {/* Forget Password */}
          <Link>
            <h1 className="text-center ml-8 mt-5 text-[#00376B]">
              Forgotten your password?
            </h1>
          </Link>
          {/* SignUp div */}
          <div className="flex gap-1 justify-center items-center mt-8">
            <h1 className="text-center text-[15px] font-normal">
              Don't have an account?
            </h1>
            <Link to="/signup" className="text-[#0095F6] font-semibold">
              Sign Up
            </Link>
          </div>
          {/* Get app */}
          <div>
            <h1 className="text-center mt-5 font-normal text-[15px]">
              Get the app.
            </h1>
          </div>
          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="w-36 h-10">
              <img src="src/assets/Images/GooglePlay.png" alt="" />
            </div>
            <div className="w-28 h-10">
              <img src="src/assets/Images/Microsoft.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div>
        <FooterPage />
      </div>
    </div>
  );
};

export default Auth;
