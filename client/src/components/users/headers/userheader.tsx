import {
  useState,
  // useEffect
} from "react";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
// import UserSignupNav from "./userSignupNav.tsx";
// import UserProfileNav from "./userProfileNav.tsx";
import UserNav from "../../users/headers/userNav.tsx";
import HiChatLogo from "../../../assets/hichat_brand_logo.svg";

// here was define Header component
const Userheader: React.FC = () => {
  const navigate: any = useNavigate();
  // here declare useState hook
  const [isOpen, setIsOpen] = useState<any>(false);
  // const [hasUserSignup, setHasUserSignup] = useState<any>(false);
  // const [hasUserProfile, setHasUserProfile] = useState<any>(false);

  // const userSignup = localStorage.getItem("userSignup");
  // const userProfile = localStorage.getItem("userProfile");

  // useEffect(() => {
  //   setHasUserSignup(userSignup);
  //   setHasUserProfile(userProfile);
  // }, []);

  return (
    <>
      {/* start nav */}
      <nav className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 sticky shadow-lg font-sans top-0 z-10 p-4 transition-all duration-500">
        {/* start div container */}
        <div className="container mx-auto relative flex justify-between px-2 md:px-8 items-center">
          {/* logo brand only */}
          <a
            onClick={() => navigate("/")}
            className="inline-flex items-center select-none"
            aria-label="Go to home"
            title="hiChat home"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
              <img
                src={HiChatLogo}
                alt="hiChat logo"
                className="w-6 h-6 md:w-11 md:h-11 object-contain"
              />
            </div>
          </a>

          {/* start button for open drop-down */}
          <button
            className="text-white lg:hidden p-2 rounded-full hover:bg-white/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <BsThreeDotsVertical size={24} />
          </button>
          {/* end button */}

          {/* start list content */}
          <ul
            className={`absolute lg:relative rounded-2xl shadow-2xl lg:shadow-none lg:rounded-none h-auto bg-white/80 lg:bg-transparent w-56 lg:w-auto text-base lg:text-lg lg:h-auto right-0 top-full lg:top-auto p-4 lg:p-0 space-y-2 lg:space-y-0 lg:space-x-4 transition-all duration-500 backdrop-blur-md
              ${
                isOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }
              lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto lg:flex
            `}
          >
            {/* here loaded navbar menus component */}
            {/* <UserSignupNav isOpen={isOpen} /> */}
            {/* <UserProfileNav isOpen={isOpen} /> */}
            {/* <UserNav isOpen={isOpen} /> */}
            <UserNav />
            {/* {hasUserSignup && hasUserProfile ? (
              <UserNav />
            ) : hasUserSignup && !hasUserProfile ? (
              <UserProfileNav />
            ) : (
              <UserSignupNav />
            )} */}
          </ul>
          {/* end list content */}
        </div>
        {/* end div container */}
      </nav>
      {/* end nav */}
      {/* Removed custom style tag, using Tailwind for animation */}
    </>
  );
};

export default Userheader;
