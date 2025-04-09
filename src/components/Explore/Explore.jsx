import React from "react";
import ExploreData from "./ExploreData";

const Explore = () => {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {ExploreData.map((items,index) => (
          <div key={index} className="relative group cursor-pointer">
            <img
              src={items.Explore}
              alt={items.alt}
              className="w-full h-full object-cover rounded-sm transition-transform duration-300 "
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white font-semibold text-sm">
            💬 300
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
