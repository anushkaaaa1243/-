import React from "react";
import { Link } from "react-router-dom";
import FooterPage from "../components/FooterPage";

// Importing images
import Facebook from "/src/assets/Images/Facebook.png";
import GooglePlay from "/src/assets/Images/GooglePlay.png";
import Microsoft from "/src/assets/Images/Microsoft.png";
import InstagramFont from "/src/assets/Images/InstagramFont.png";

const Signup = () => {
  return (
    <div>
      <div className="md:border md:border-[#737373] w-[350px] flex mx-auto mt-3 h-[620px] flex-col">
        <div>
          <img
            src={InstagramFont}
            alt="Instagram logo"
            className="w-44 block mt-10 mx-auto"
          />
        </div>

        {/* Heading */}
        <div>
          <h1 className="text-center text-[16px] font-semibold text-[#737373ea] mx-10 mt-5 leading-5">
            Sign up to see photos and videos from your friends.
          </h1>
        </div>

        {/* Facebook login button */}
        <div className="flex justify-center items-center gap-4 mt-4 border w-[260px] mx-auto h-9 rounded-lg bg-[#0095F6]">
          <button>
            <img src={Facebook} alt="Facebook logo" className="w-5 h-5" />
          </button>
          <button className="text-white font-semibold text-[14px] h-8">
            Log in with Facebook
          </button>
        </div>

        {/* OR divider */}
        <div className="flex justify-center items-center gap-4 mt-4">
          <div className="w-[100px] border border-gray-200" />
          <div className="text-gray-500 font-normal text-sm">OR</div>
          <div className="w-[100px] border border-gray-200" />
        </div>

        {/* Input fields */}
        <div className="flex flex-col justify-center items-center mt-5 gap-y-2">
          <input
            type="text"
            className="border w-[258px] h-9 text-sm p-2 rounded-sm border-[#5555552c] outline-none"
            placeholder="Mobile number or email address"
          />
          <input
            type="password"
            placeholder="Password"
            className="border w-[258px] h-9 text-sm p-2 rounded-sm border-[#5555552c] outline-none"
          />
          <input
            type="text"
            className="border w-[258px] h-9 text-sm p-2 rounded-sm border-[#5555552c] outline-none"
            placeholder="Full Name"
          />
          <input
            type="text"
            placeholder="Username"
            className="border w-[258px] h-9 text-sm p-2 rounded-sm border-[#5555552c] outline-none"
          />
        </div>

        {/* Terms and conditions */}
        <div>
          <h1 className="text-center text-[12px] mx-9 text-[#737373] mt-5 leading-5">
            People who use our service may have uploaded your contact
            information to Instagram.{" "}
            <Link to="/LearnMore" className="text-[#00376B] font-normal">
              Learn More
            </Link>
          </h1>
        </div>
        <div>
          <h1 className="text-center text-[12px] mx-8 text-[#737373] mt-5">
            By signing up, you agree to our
            <Link
              to="/TermandCondition"
              className="text-[#00376B] font-normal mx-1"
            >
              Terms, Privacy
            </Link>
          </h1>
        </div>
        <div className="flex justify-center items-center gap-1 mt-2">
          <Link to="/policy" className="text-[#00376B] font-normal text-[12px]">
            Policy
          </Link>
          <h1 className="text-center text-[12px] text-[#737373]">and</h1>
          <Link to="/cookies" className="text-[#00376B] font-normal text-[12px]">
            Cookies Policy.
          </Link>
        </div>

        {/* Submit button */}
        <div className="mx-auto mb-16">
          <Link to="/dateofbirth">
            <button
              type="submit"
              className="w-[268px] mt-4 h-8 bg-[#53bdeb] text-white text-[15px] font-[600] rounded-xl"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Login redirect */}
      <div className="md:border md:border-[#737373] w-[350px] mx-auto mt-3 h-20">
        <div className="gap-1 mt-5">
          <h1 className="text-center text-[15px] font-normal">
            Have an account?
          </h1>
          <Link
            to="/login"
            className="flex items-center justify-center text-[#0095F6] font-semibold"
          >
            Log in
          </Link>
        </div>
      </div>

      {/* App download */}
      <div>
        <h1 className="text-center mt-5 font-normal text-[15px]">
          Get the app.
        </h1>
      </div>
      <div className="flex justify-center items-center gap-4 mt-4">
        <div className="w-36 h-10">
          <img src={GooglePlay} alt="Google Play" />
        </div>
        <div className="w-28 h-10">
          <img src={Microsoft} alt="Microsoft Store" />
        </div>
      </div>

      {/* Footer */}
      <div>
        <FooterPage />
      </div>
    </div>
  );
};

export default Signup;
