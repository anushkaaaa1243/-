import React from "react";

const FooterPage = () => {
  const links = [
    "About",
    "Help",
    "Press",
    "API",
    "Jobs",
    "Privacy",
    "Terms",
    "Locations",
    "Language",
    "Meta Verified",
  ];

  return (
    <div>
      <footer className="text-[13px] text-[#D2D2D2] py-6   font-semibold mt-5">
        <div className="flex flex-wrap   mb-2 text-center">
          {links.map((link) => (
            <div key={link}>
              <span className="hover:underline cursor-pointer ">{link}</span>
              <span className="mx-1">·</span>
            </div>
          ))}
        </div>
        <p className="text-xs">© 2025 Instagram from Meta</p>
      </footer>
    </div>
  );
};

export default FooterPage;
