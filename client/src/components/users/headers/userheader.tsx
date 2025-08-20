import { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import UserSignupNav from "./userSignupNav.tsx";
import UserProfileNav from "./userProfileNav.tsx";
import UserNav from "../../users/headers/userNav.tsx";

// here was define Header component
const Userheader: React.FC = () => {
  // here declare useState hook
  const [isOpen, setIsOpen] = useState<any>(false);
  const [hasUserSignup, setHasUserSignup] = useState<any>(false);
  const [hasUserProfile, setHasUserProfile] = useState<any>(false);

  const userSignup = localStorage.getItem("userSignup");
  const userProfile = localStorage.getItem("userProfile");

  useEffect(() => {
    setHasUserSignup(userSignup);
    setHasUserProfile(userProfile);
  }, []);

  return (
    <>
      {/* start nav */}
      <nav className="bg-gradient-to-r from-pink-400 to-purple-500 sticky shadow-md font-sans top-0 z-0 p-4">
        {/* start div container */}
        <div className="container mx-auto relative flex justify-between px-0 md:px-8 items-center">
          {/* brand name */}
          <h1 className="text-white text-lg font-bold">hiChat</h1>

          {/* start button for open drop-down */}
          <button
            className="text-white lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <BsThreeDotsVertical />
          </button>
          {/* end button */}

          {/* start list content */}
          <ul
            className={`lg:flex ${
              isOpen ? "block" : "hidden"
            } absolute lg:relative rounded-2xl shadow-lg 
          lg:shadow-none lg:rounded-none h-auto bg-slate-100 lg:bg-transparent w-48 lg:w-auto text-base 
          lg:text-lg lg:h-auto right-0 top-full lg:top-auto p-4 lg:p-0 space-y-2 lg:space-y-0 lg:space-x-4`}
          >
            {/* here loaded navbar menus component */}
            {/* <UserSignupNav isOpen={isOpen} /> */}
            {/* <UserProfileNav isOpen={isOpen} /> */}
            {/* <UserNav isOpen={isOpen} /> */}

            {hasUserSignup && hasUserProfile ? (
              <UserNav />
            ) : hasUserSignup && !hasUserProfile ? (
              <UserProfileNav />
            ) : (
              <UserSignupNav />
            )}
          </ul>
          {/* end list content */}
        </div>
        {/* end div container */}
      </nav>
      {/* end nav */}
    </>
  );
};

export default Userheader;
