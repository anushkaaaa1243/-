import React from "react";
import InstagramFont from "/src/assets/Images/InstagramFont.png";
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { LiaFacebookMessenger } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router";
import ProfilePhoto from "/src/assets/Images/ProfilePhoto.avif";
import { HiOutlineBars4 } from "react-icons/hi2";

const icons = [
  {
    name: "Home",
    icons: <MdHomeFilled />,
    link: "/home",
  },
  {
    name: "Search",
    icons: <MdOutlineSearch />,
    link: "/search",
  },
  {
    name: "Explore",
    icons: <MdOutlineExplore />,
    link: "/explore",
  },
  {
    name: "Reels",
    icons: <MdOutlineSmartDisplay />,
    link: "/reels",
  },
  {
    name: "Message",
    icons: <LiaFacebookMessenger />,
    link: "/messgae",
  },
  {
    name: "Notifications",
    icons: <FaRegHeart />,
    link: "/Notification",
  },
  {
    name: "Create",
    icons: <FaRegSquarePlus />,
    link: "/create",
  },
];

const Sidebar = () => {
  return (
    <div>
      {/* For lg Screem */}
      <div className=" hidden md:flex flex-col  mt-7 pl-[25px] pr-[25px] pt-[16px] cursor-pointer">
        <div className="">
          <div className="w-full p-2 flex items-center justify-center lg:justify-start">
            <img
              src={InstagramFont}
              alt=""
              srcset=""
              className=" w-[103px] h-[29px] overflow-hidden object-contain hidden xl:block"
            />
            <FaInstagram className=" text-2xl    xl:hidden" />
          </div>
        </div>
        <div>
          <div>
            {icons.map((item, index) => (
              <Link to={item.link}>
                <div
                  key={index}
                  className="flex items-center justify-center lg:justify-start gap-3 mt-3 h-11  hover:bg-gray-100 rounded-lg xl:p-2"
                >
                  <span className="text-[28px]">{item.icons}</span>
                  <span className="text-[17px] hidden xl:block">
                    {item.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/Profile">
            <div className="w-full ">
              <div className="flex items-center justify-center lg:justify-start gap-3 mt-3 xl:p-2 h-11  hover:bg-gray-100 rounded-lg ">
                <img
                  src={ProfilePhoto}
                  alt=""
                  className="w-9 h-9 rounded-full "
                />
                <span className="text-[17px] hidden xl:block">Profile</span>
              </div>
            </div>
          </Link>
          <div>
            <div className="flex items-center lg:justify-start justify-center gap-3 mt-2 xl:p-2 h-11  hover:bg-gray-100 rounded-lg ">
              <span className="text-[28px]">
                <HiOutlineBars4 />
              </span>
              <span className="text-[17px] hidden xl:block">More</span>
            </div>
          </div>
        </div>
      </div>







      {/* For md Screen */}
      <div className="  md:hidden flex  justify-between fixed top-0 left-0 w-full bg-white z-20 border-b border-gray-200 px-4 py-2">
        <img src={InstagramFont} alt="" srcset="" className="w-[130px]" />
        <div className="flex items-center gap-5">
          <div className=" relative w-full max-w-md">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
              <MdOutlineSearch className="text-[23px]" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2  bg-[#EFEFEF] focus:outline-none  text-[16px] rounded-lg"
            />
        </div>
        <div>
          <span className="text-[25px]">
            <FaRegHeart />
          </span>
        </div>
          </div>
      </div>
      
    



{/* For sm screen */}
<div className="lg:hidden fixed bottom-0 left-0 w-full bg-white z-20 border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center text-[27px]">
          <Link to="/home"><MdHomeFilled /></Link>
          <Link to="/explore"><MdOutlineExplore /></Link>
          <Link to="/reels"><MdOutlineSmartDisplay/></Link>
          <Link to="/create"><FaRegSquarePlus /></Link>
          <Link to="/messages"><LiaFacebookMessenger  /></Link>
          <Link to="/profile">
          <div className="w-full ">
              <div className="flex items-center justify-center lg:justify-start gap-3 mt-3 xl:p-2 h-11  hover:bg-gray-100 rounded-lg ">
                <img
                  src={ProfilePhoto}
                  alt=""
                  className="w-9 h-9 rounded-full "
                />
                
              </div>
            </div>
          </Link>
          </div>
</div>
    </div>
  );
};

export default Sidebar;
