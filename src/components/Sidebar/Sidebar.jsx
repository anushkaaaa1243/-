import React from "react";
import { Link } from "react-router-dom";
import InstagramFont from "/src/assets/Images/InstagramFont.png";
import ProfilePhoto from "/src/assets/Images/ProfilePhoto.avif";

// Icons
import { MdHomeFilled, MdOutlineSearch, MdOutlineExplore, MdOutlineSmartDisplay } from "react-icons/md";
import { LiaFacebookMessenger } from "react-icons/lia";
import { FaRegHeart, FaInstagram, FaThreads, FaRegCircle } from "react-icons/fa6";
import { LuSquarePlus } from "react-icons/lu";
import { HiOutlineBars4 } from "react-icons/hi2";

const navItems = [
  { name: "Home", icon: <MdHomeFilled />, link: "/home" },
  { name: "Search", icon: <MdOutlineSearch />, link: "/search" },
  { name: "Explore", icon: <MdOutlineExplore />, link: "/explore" },
  { name: "Reels", icon: <MdOutlineSmartDisplay />, link: "/reels" },
  { name: "Message", icon: <LiaFacebookMessenger />, link: "/message" },
  { name: "Notifications", icon: <FaRegHeart />, link: "/notification" },
  { name: "Create", icon: <LuSquarePlus />, link: "/create" },
];

const Sidebar = () => {
  return (
    <div>
      {/* Desktop Sidebar (md and up) */}
      <div className="hidden md:flex flex-col mt-6 lg:pl-6 xl:pl-4 2xl:pl-2 pr-6 pt-4 cursor-pointer">
        {/* Logo */}
        <div className="w-full flex items-center justify-center lg:justify-start p-2">
          <Link to="/home">
            <img
              src={InstagramFont}
              alt="Instagram"
              className="hidden xl:block lg:w-[103px] lg:h-[29px] 2xl:w-[120px] 2xl:h-[40px] object-contain"
            />
            <FaInstagram className="text-2xl xl:hidden" />
          </Link>
        </div>

        {/* Navigation */}
        <div className="mt-5">
          {navItems.map((item, index) => (
            <Link to={item.link} key={index}>
              <div className="flex items-center justify-center lg:justify-start gap-4 mt-3 h-11 hover:bg-gray-100 rounded-lg xl:p-2">
                <span className="lg:text-[28px] xl:text-[30px]">{item.icon}</span>
                <span className="text-[17px] hidden xl:block">{item.name}</span>
              </div>
            </Link>
          ))}

          {/* Profile Link */}
          <Link to="/profile">
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-3 h-11 hover:bg-gray-100 rounded-lg xl:p-2">
              <img src={ProfilePhoto} alt="Profile" className="w-9 h-9 rounded-full" />
              <span className="text-[17px] hidden xl:block">Profile</span>
            </div>
          </Link>
        </div>

        {/* 2XL only: Meta AI & Threads */}
        <div className="hidden 2xl:flex flex-col mt-24 ">
          <div className="flex items-center gap-4 h-11 hover:bg-gray-100 rounded-lg xl:p-2 ">
            <FaRegCircle className="text-[25px]" />
            <span className="text-[17px] ">Meta AI</span>
          </div>
          <div className="flex items-center gap-4 mt-2 h-11 hover:bg-gray-100 rounded-lg xl:p-2">
            <FaThreads className="text-[25px]" />
            <span className="text-[17px]">Threads</span>
          </div>
        </div>

        {/* More (bottom) */}
        <div className="mt-4 hidden md:flex  gap-4 h-11 hover:bg-gray-100 rounded-lg xl:p-2">
          <HiOutlineBars4 className="text-[25px]" />
          <span className="text-[17px] hidden xl:block">More</span>
        </div>
      </div>

      {/* Top bar for small screens (sm only) */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white z-20 border-b border-gray-200 px-4 py-2 flex justify-between items-center">
        <img src={InstagramFont} alt="Instagram" className="w-[100px]" />
        <div className="flex items-center gap-4">
          <div className="relative">
            <MdOutlineSearch className="absolute top-2 left-3 text-gray-500 text-[20px]" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-[#EFEFEF] rounded-lg text-[15px] focus:outline-none"
            />
          </div>
          <FaRegHeart className="text-[24px]" />
        </div>
      </div>

      {/* Bottom navigation bar for small screens (sm only) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white z-20 border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center text-[26px]">
          <Link to="/home"><MdHomeFilled /></Link>
          <Link to="/explore"><MdOutlineExplore /></Link>
          <Link to="/reels"><MdOutlineSmartDisplay /></Link>
          <Link to="/create"><LuSquarePlus /></Link>
          <Link to="/message"><LiaFacebookMessenger /></Link>
          <Link to="/profile">
            <img src={ProfilePhoto} alt="Profile" className="w-8 h-8 rounded-full" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
