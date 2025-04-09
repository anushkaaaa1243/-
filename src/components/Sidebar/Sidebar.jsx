import React from "react";
import { Link } from "react-router-dom";
import {
  MdHomeFilled,
  MdOutlineSearch,
  MdOutlineExplore,
} from "react-icons/md";
import { LuSquarePlay } from "react-icons/lu";
import {
  FaFacebookMessenger,
  FaRegHeart,
  FaRegSquarePlus,
  FaRegCircleUser,
} from "react-icons/fa6";
import { HiOutlineBars3 } from "react-icons/hi2";
import InstagramFont from "/src/assets/Images/InstagramFont.png";
import { FaInstagram } from "react-icons/fa";

const icons = [
  { name: "Home", icon: <MdHomeFilled />, link: "/home" },
  { name: "Search", icon: <MdOutlineSearch />, link: "/search" },
  { name: "Explore", icon: <MdOutlineExplore />, link: "/explore" },
  { name: "Reels", icon: <LuSquarePlay />, link: "/reels" },
  { name: "Messages", icon: <FaFacebookMessenger />, link: "/messages" },
  { name: "Notifications", icon: <FaRegHeart />, link: "/notifications" },
  { name: "Create", icon: <FaRegSquarePlus />, link: "/create" },
  { name: "Your Profile", icon: <FaRegCircleUser />, link: "/profile" },
];

const Sidebar = () => {
  return (
    <div className="h-screen border-r border-[#DBDBDB] md:p-4">
      <img
        src={InstagramFont}
        alt="Instagram Logo"
        className="w-[130px] mt-6 cursor-pointer hidden xl:block"
      />
      <FaInstagram className=" text-2xl  mx-5 mt-6 hover:bg-[#dbdbdbb7]  xl:hidden" />

      <div className="flex flex-col gap-2 xl:gap-3 mt-10 mx-2 xl:mx-0">
        {icons.map((item) => (
          <Link
            to={item.link}
            key={item.name}
            className="flex items-center gap-4 p-2 xl:w-[200px] cursor-pointer hover:bg-[#dbdbdbb7] rounded-lg"
          >
            <span className="text-[25px] xl:text-2xl lg:hover:bg-[#dbdbdbb7] rounded-lg">
              {item.icon}
            </span>
            <span className="text-[17px] hidden xl:block">{item.name}</span>
          </Link>
        ))}
        <div className="flex items-center gap-4 p-2 xl:w-[200px] cursor-pointer hover:bg-[#dbdbdbb7] rounded-lg ">
          <HiOutlineBars3 className="text-2xl " />
          <span className="text-[17px] hidden xl:block">More</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
