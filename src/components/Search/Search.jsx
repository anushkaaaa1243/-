import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full max-w-[500px] mt-10">
      <h2 className="text-2xl font-bold mb-4">Search</h2>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg outline-none"
      />
      {/* You can map search results here */}
    </div>
  );
};

export default Search;
