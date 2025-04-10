import React from "react";
import { Link } from "react-router-dom";
import FooterPage from "../components/FooterPage";

const Login = () => {
  return (
    <div>
      <div className="md:border md:boder-[#737373] w-[350px] flex mx-auto  mt-3 h-[400px]  flex-col">
        <div>
          <img
            src="src/assets/Images/InstagramFont.png"
            alt=""
            className="w-44 block mt-10 mx-auto"
          />
        </div>
        {/* Button */}

        <div className="flex-col flex justify-center items-center  mt-5 gap-y-2">
          <div className="relative">
            <input
              type="text"
              id="username"
              className="peer border w-[258px] h-10 text-sm p-2 rounded-sm border-[#5555552c] outline-none "
              required
            />
            <label
              htmlFor="username"
              className="absolute left-2 top-2 text-gray-400 text-xs transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-xs "
            >
              Phone number, username, or email address
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              id="password"
              className="peer border w-[258px] h-10 text-sm p-2 rounded-sm border-[#5555552c] outline-none "
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
        <div className="mx-auto">
          {/* Button */}
          <Link to="/home">
            <button className=" w-[258px]  mx-aut0 mt-4 h-8 bg-[#1877F2] text-white text-[15px] font-[600] rounded-xl hover:bg-[#1877F2]">
              Log in
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-4 mt-4">
          <div className="w-[100px] border border-gray-200 h-[2px]" />
          <div className="text-gray-500 font-semibold text-base">OR</div>
          <div className="w-[100px] border border-gray-200 h-[2px]" />
        </div>
        <div className="flex justify-center items-center gap-2 mt-4 text-[#0095F6]">
          <div>
            {/* Facbook image */}
            <img
              src="/src/assets/Images/Facebook.png"
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
        <Link>
          <h1 className="text-center ml-8 mt-5 text-[#00376B]">
            Forgotten your password?
          </h1>
        </Link>
      </div>

      <div className="md:border md:boder-[#737373] w-[350px] mx-auto  mt-3 h-20 ">
        <div className=" gap-1 mt-5 flex justify-center items-center">
          <h1 className="text-center text-[15px] font-normal">
            Have an account?
          </h1>
          <Link
            to="/signup"
            className="flex items-center justify-center text-[#0095F6] font-semibold "
          >
            Sign up
          </Link>
        </div>
      </div>

      {/* Facbook Div */}

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
      <div>
        <FooterPage />
      </div>
    </div>
  );
};

export default Login;
