import { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import UserSignupNav from "./userSignupNav.tsx";
import UserProfileNav from "./userProfileNav.tsx";
import UserNav from "../../users/headers/userNav.tsx";

// here was define Header component
const Userheaders: React.FC = () => {
  // here declare useState hook
  const [isOpen, setIsOpen] = useState<any>(false);
  const [hasUserSignup, setHasUserSignup] = useState<any>(false);
  const [hasUserProfile, setHasUserProfile] = useState<any>(false);

  useEffect(() => {
    const userSignup = localStorage.getItem("userSignup");
    const userProfile = localStorage.getItem("userProfile");
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

          {/* here loaded navbar menus component */}
          {/* <UserSignupNav isOpen={isOpen} /> */}
          {/* <UserProfileNav isOpen={isOpen} /> */}
          {/* <UserNav isOpen={isOpen} /> */}

          {hasUserSignup && hasUserProfile ? (
            <UserNav isOpen={isOpen} />
          ) : hasUserSignup && !hasUserProfile ? (
            <UserProfileNav isOpen={isOpen} />
          ) : (
            <UserSignupNav isOpen={isOpen} />
          )}

        </div>
        {/* end div container */}
      </nav>
      {/* end nav */}
    </>
  );
};

export default Userheaders;
