import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HiChatLogo from "../../assets/hichat_brand_logo.svg";
import { BsThreeDotsVertical } from "react-icons/bs";
import UserSignupNav from "../users/navbar/userSignupNav.tsx";
import UserProfileNav from "../users/navbar/userProfileNav.tsx";
import UserNav from "../users/navbar/userNav.tsx";
import { useUserNavMenuContext } from "../hooks/contexts/userSettingContexts.ts";

// define Headers component
const Headers: React.FC = () => {
  // declare some hooks of routes regarding
  const navigate: any = useNavigate();

  // declare useState hook
  const [hasUserSignup, setHasUserSignup] = useState<any>("");
  const [hasUserProfile, setHasUserProfile] = useState<any>("");

  // destruct data from custom hook
  const { isNavMenu, handleNavMenuOpen }: any = useUserNavMenuContext();

  // here was get auth
  const userSignup: any = localStorage.getItem("userSignup");
  const userProfile: any = localStorage.getItem("userProfile");

  // here will be appear useEffect hook
  useEffect(() => {
    // here was component mount
    const intervalId: any = setInterval(() => {}, 1000);

    setHasUserSignup(userSignup);
    setHasUserProfile(userProfile);

    // here was component will unmount with cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <nav
        className="bg-gradient-to-r from-pink-500 via-purple-500 
      to-indigo-500 sticky shadow-lg font-sans top-0 z-10 p-4 
      transition-all duration-500"
      >
        {/* start div of container */}
        <div
          className="container mx-auto relative flex 
        justify-between px-2 md:px-8 items-center"
        >
          <a
            onClick={() => navigate("/")}
            className="inline-flex items-center select-none"
            aria-label="Go to home"
            title="hiChat home"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
              {/* logo brand */}
              <img
                src={HiChatLogo}
                alt="hiChat logo"
                className="w-6 h-6 md:w-11 md:h-11 object-contain"
              />
            </div>
          </a>

          {/* start button for drop-down button */}
          <button
            type="button"
            onClick={handleNavMenuOpen}
            className="text-white lg:hidden p-2 
          rounded-full hover:bg-white/20 transition-colors duration-300 
          focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle Menu"
          >
            <BsThreeDotsVertical size={24} />
          </button>
          {/* end button */}

          {/* start ul */}
          <ul
            className={`absolute lg:relative rounded-2xl shadow-2xl lg:shadow-none lg:rounded-none h-auto bg-white/80 lg:bg-transparent w-56 lg:w-auto text-base lg:text-lg lg:h-auto right-0 top-full lg:top-auto p-4 lg:p-0 space-y-2 lg:space-y-0 lg:space-x-4 transition-all duration-500 backdrop-blur-md ${
              isNavMenu
                ? `opacity-100 translate-y-0 pointer-events-auto`
                : `opacity-0 -translate-y-2 pointer-events-none`
            } lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto lg:flex`}
          >
            {/* here was loaded for all navbar component */}
            {hasUserSignup && hasUserProfile ? (
              <UserNav />
            ) : hasUserSignup && !hasUserProfile ? (
              <UserProfileNav />
            ) : (
              <UserSignupNav />
            )}
          </ul>
          {/* end navlist  */}
        </div>
        {/* end ul */}
      </nav>
    </>
  );
};

// exporting Headers component
export default Headers;
