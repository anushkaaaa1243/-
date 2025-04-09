import React from "react";
import { Link } from "react-router-dom"; // Fix import
import SuggestionData from "./SuggestionData";
import FooterPage from "./FooterPage";

const Suggestion = () => {
  return (
    <div className="hidden xl:flex flex-col space-y-4 text-sm">
      {/* Profile preview */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="User profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-semibold">Kriti_Sharma_253</p>
            <p className="text-gray-500 text-sm">Kriti</p>
          </div>
        </div>
        <button className="text-blue-500 text-sm font-semibold hover:text-[#00376B]">
          Switch
        </button>
      </div>

      {/* Suggestions Header */}
      <div className="flex justify-between items-center mt-2">
        <p className="text-gray-400 font-semibold">Suggested for you</p>
        <Link to="/SeeAll" className="text-sm font-semibold text-black hover:underline">
          See All
        </Link>
      </div>

      {/* Suggestion List */}
      <div className="space-y-3">
        {SuggestionData.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.username}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold">{item.username}</p>
                <p className="text-xs text-gray-500">{item.name}</p>
              </div>
            </div>
            <button className="text-blue-500 text-sm font-semibold hover:text-[#00376B]">
              Follow
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <FooterPage />
    </div>
  );
};

export default Suggestion;
