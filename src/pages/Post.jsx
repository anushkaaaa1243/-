import React, { useState } from "react";
import PostData from "../components/Post/PostData";
import ProfileData from "../components/Profile/ProfileData";
import { Picker } from "emoji-mart";


const Post = () => {
  return (
    <div className="flex flex-col gap-10 px-2 sm:px-4 md:px-6 py-5 w-full max-w-[650px] mx-auto">
      {PostData.map((post, index) => {
        const profile = ProfileData[index];
        const [comment, setComment] = useState("");
        const [showPicker, setShowPicker] = useState(false);

        const addEmoji = (e) => {
          let emoji = e.native;
          setComment((prev) => prev + emoji);
        };

        return (
          <div key={index} className="w-full">
            {/* Post Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <img
                  src={profile.Profile}
                  alt={profile.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                  <p className="font-semibold text-sm">{profile.name}</p>
                  <span className="text-xs text-gray-500">{profile.icon}</span>
                  <p className="text-xs text-gray-500">{profile.Time}</p>
                </div>
              </div>
              <span className="cursor-pointer">{profile.icon2}</span>
            </div>

            {/* Post Image */}
            <img
              src={post.Post}
              alt={`Post by ${post.username}`}
              className="w-full rounded-sm object-cover"
            />

            {/* Action Icons */}
            <div className="flex gap-4 text-xl sm:text-2xl mt-3 justify-between">
              <div className="flex gap-4">
                <span className="hover:text-gray-400">{post.icon}</span>
                <span className="hover:text-gray-400">{post.icon2}</span>
                <span className="hover:text-gray-400">{post.icon3}</span>
              </div>
              <span className="hover:text-gray-400">{post.icon4}</span>
            </div>

            {/* Likes + Views */}
            <div className="flex flex-col gap-2 mt-3">
              <p className="font-semibold text-sm">{post.liked}</p>
              <p className="text-sm text-gray-500">{post.views}</p>
            </div>

            {/* Comment Box */}
            <div className="mt-2 text-sm text-black relative">
              <div className="flex items-center gap-2 border-b border-gray-200 py-2">
                <input
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="outline-none bg-transparent flex-1 text-sm placeholder-gray-500"
                />
                <button onClick={() => setShowPicker(!showPicker)}>😊</button>
              </div>
              

              {showPicker && (
                <div className="absolute bottom-12 left-0 z-20">
                  <Picker onSelect={addEmoji} />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
