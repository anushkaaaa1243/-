import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Suggestion from "../../components/Suggestion/Suggestion";

const PageLayout = () => {
  const { pathname } = useLocation();

  // Routes where full layout (sidebar + suggestion) should be hidden
  const hideLayoutRoutes = ["/", "/signup", "/dateOfbirth", "/verification"];
  const showLayout = !hideLayoutRoutes.includes(pathname);

  // Hide suggestion on explore
  const hideSuggestionRoutes = ["/explore","/Profile"];
  const showSuggestion = !hideSuggestionRoutes.includes(pathname);
  if (!showLayout) return <Outlet />;

  return (
    <div >
      <div className="flex flex-col md:flex-row mt-7" >
      <div className="md:fixed md:top-0 lg:left-0  md:h-screen w-[60px] md:w-[90px] xl:w-[250px] md:border-r bg-white md:z-10 ">
        <Sidebar />
      </div>

      {/* Main content + suggestion */}
      <div className=" flex flex-col md:flex-row w-full md:ml-[85px] xl:ml-[250px] px-4  sm:px-4  gap-4">
        {/* Main Content like Search or Home */}
        <div className="flex-1">
          <Outlet />
        </div>

        {/* Suggestion panel - visible only on xl and above, hidden on explore */}
        {showSuggestion && (
          <div className="hidden xl:block xl:w-[300px] shrink-0">
            <Suggestion />
          </div>
        )}
      </div>
      </div>
      {/* Sidebar */}
    
    </div>
  );
};

export default PageLayout;
