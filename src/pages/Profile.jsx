import React, { useState } from "react";
import ProfilePhoto from "/src/assets/Images/ProfilePhoto.avif";
import Options2 from "/src/assets/Images/Options2.png";
import { MdGridOn, MdOutlineSmartDisplay, MdOutlinePerson } from "react-icons/md";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");

  const renderTabContent = () => {
    switch (activeTab) {
      case "posts":
        return <div className="mt-10 text-center">Posts content goes here</div>;
      case "reels":
        return <div className="mt-10 text-center">Reels content goes here</div>;
      case "saved":
        return <div className="mt-10 text-center">Saved content goes here</div>;
      case "tagged":
        return <div className="mt-10 text-center">Tagged content goes here</div>;
      default:
        return null;
    }
  };

  return (
    <div className="px-4 sm:px-10 md:px-20">
      {/* Profile Header */}
      <div className="mt-10 flex flex-col md:flex-row md:items-start gap-8">
        <img
          src={ProfilePhoto}
          alt="Profile"
          className="w-28 h-28 md:w-40 md:h-40 rounded-full object-cover mx-auto md:mx-0"
        />
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <h1 className="text-center sm:text-left font-semibold text-lg">
              Kriti_Sharma_253
            </h1>
            <div className="flex justify-center sm:justify-start gap-2">
              <button className="bg-[#DBDBDB] h-8 px-4 rounded-lg text-sm font-medium">
                Edit Profile
              </button>
              <button className="bg-[#DBDBDB] h-8 px-4 rounded-lg text-sm font-medium">
                View archive
              </button>
              <img src={Options2} alt="Options" className="w-5 h-5 mt-1 cursor-pointer" />
            </div>
          </div>

          <div className="mt-6 flex justify-center md:justify-start gap-8 text-center">
            <span>
              <p className="font-medium">0</p>
              <p className="text-sm text-[#737373]">posts</p>
            </span>
            <span>
              <p className="font-medium">0</p>
              <p className="text-sm text-[#737373]">followers</p>
            </span>
            <span>
              <p className="font-medium">0</p>
              <p className="text-sm text-[#737373]">following</p>
            </span>
          </div>

          <div className="mt-4 font-semibold text-sm sm:text-base">Kriti</div>
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-12 flex flex-col items-center md:items-start md:ml-12">
        <div className="w-20 h-20 border rounded-full overflow-hidden p-1">
          <img
            src={ProfilePhoto}
            alt="Highlight"
            className="w-full h-full rounded-full object-cover cursor-pointer"
          />
        </div>
        <h1 className="mt-2 text-sm font-medium">Highlights</h1>
      </div>

      {/* Tabs */}
      <div className="w-full border-t border-gray-300 mt-10">
        <div className="flex justify-center md:gap-20 gap-6">
          {[
            { label: "Posts", icon: <MdGridOn size={18} />, value: "posts" },
            { label: "Reels", icon: <MdOutlineSmartDisplay size={18} />, value: "reels" },
            { label: "Saved", icon: <MdOutlineSmartDisplay size={18} />, value: "saved" },
            { label: "Tagged", icon: <MdOutlinePerson size={18} />, value: "tagged" },
          ].map((tab) => (
            <div
              key={tab.value}
              className={`flex items-center gap-1 sm:gap-2 cursor-pointer pt-3 pb-2 ${
                activeTab === tab.value
                  ? "border-t-2 border-black text-black"
                  : "text-[#737373]"
              }`}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.icon}
              <span className="text-sm font-medium">{tab.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default Profile;
