import React, { useState } from "react";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import StoryData from "../components/StoryData/StoryData";

const Story = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < StoryData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    
    <div className="relative w-full max-w-[650px] mx-auto px-2">
      {/* Story list */}
      <div className="flex gap-5 p-2 mt-3 overflow-hidden">
        {StoryData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center shrink-0"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2px] bg-gradient-to-r from-pink-500 to-yellow-500 object-cover cursor-pointer">
              <img
                src={item.url}
                alt={item.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="truncate text-xs mt-1 w-14 sm:w-16 text-center">
              {item.name}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full px-2 flex justify-between z-10">
        <button
          className="bg-white shadow-md rounded-full p-1 sm:p-2"
          onClick={handlePrev}
        >
          <FaLessThan className="text-gray-400 text-xs sm:text-sm" />
        </button>
        <button
          onClick={handleNext}
          className="bg-white shadow-md rounded-full p-1 sm:p-2"
        >
          <FaGreaterThan className="text-gray-400 text-xs sm:text-sm" />
        </button>
      </div>
    </div>
  );
};

export default Story;
