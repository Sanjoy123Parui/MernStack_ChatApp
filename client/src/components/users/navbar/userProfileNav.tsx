// Consuming some modules and libraries
import { useEffect } from "react";
import { FiLogOut } from "react-icons/fi";
import { useUserLogoutModalContext } from "../../hooks/contexts/userSignupContext.ts";
import { useUserNavMenuContext } from "../../hooks/contexts/userSettingContexts.ts";

// here define UserProfileNav component
const UserProfileNav: React.FC = () => {
  // here was declare custom hooks
  const { openLogoutModal }: any = useUserLogoutModalContext();
  const { handleNavMenuClose }: any = useUserNavMenuContext();

  // define wrapper function which are wrapped custom hooks funtion
  const handleWrapLogout = () => {
    openLogoutModal();
    handleNavMenuClose();
  };

  // here will be appear useEffect hook
  useEffect(() => {
    // here was component mount
    const intervalId: any = setInterval(() => {}, 1000);

    // here was component will unmount with cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <ul
        className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2 
      lg:gap-4 p-2 rounded-2xl shadow-xl bg-white/80 lg:bg-transparent 
      backdrop-blur-md transition-all duration-500"
      >
        <li>
          {/* start button for logout */}
          <a
            onClick={handleWrapLogout}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl shadow-md 
                bg-white/80 lg:bg-transparent hover:bg-gradient-to-r 
                hover:from-purple-400 hover:to-pink-400 lg:hover:bg-white/20 
                transition-all duration-300 text-gray-700 lg:text-white 
                hover:text-white lg:hover:text-gray-300 backdrop-blur-md 
                cursor-pointer font-semibold`}
          >
            <span className="flex lg:hidden font-semibold tracking-wide">
              Logout
            </span>
            <span className="mt-1.5 text-xl">
              <FiLogOut />
            </span>
          </a>
          {/* end button */}
        </li>
      </ul>
    </>
  );
};
// exporting UserProfileNav component
export default UserProfileNav;
