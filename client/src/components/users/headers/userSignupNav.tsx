// here import some libraries methods and components
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { userSignupListItem } from "../../models/userModel.tsx";
import { useUserNavMenuContext } from "../../hooks/contexts/userSettingContexts.ts";

// here define userSignupNav functional component
const UserSignupNav: React.FC = () => {
  // declare custom hook for navlist items close
  const { handleNavMenuClose }: any = useUserNavMenuContext();

  // here declare nav list items
  const signupList: userSignupListItem[] = [
    {
      listItem: "Signin",
      itemPath: "/",
      itemActions: handleNavMenuClose,
    },
    {
      listItem: "Signup",
      itemPath: "/user/register",
      itemActions: handleNavMenuClose,
    },
  ];

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
        className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2 lg:gap-4 p-2 rounded-2xl shadow-md 
      bg-white/80 lg:bg-transparent backdrop-blur-md transition-all duration-500"
      >
        {signupList.map((items: any, i: any) => (
          <li key={i} onClick={handleNavMenuClose}>
            <NavLink
              to={items.itemPath}
              className={({ isActive }) =>
                isActive
                  ? `flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 shadow-md text-white font-semibold hover:bg-purple-500 transition-all duration-300`
                  : `flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 lg:bg-transparent text-gray-700 lg:text-slate-300 hover:bg-purple-100 lg:hover:bg-white/20 hover:text-purple-700 lg:hover:text-white font-semibold transition-all duration-300`
              }
            >
              <span className="font-semibold tracking-wide">
                {items.listItem}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserSignupNav;
