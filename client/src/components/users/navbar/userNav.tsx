import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RiDonutChartFill } from "react-icons/ri";
import { MdOutlineChatBubble, MdGroups } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
// import { userNavListItem, actionListItems } from "../../models/userModel.ts";
// import {
//   useSettingUserContext,
//   useUserNavMenuContext,
// } from "../../hooks/contexts/userSettingContexts.ts";
// import { useUserLogoutModalContext } from "../../hooks/contexts/userSignupContext.ts";
import { userNavListItem, actionListItems } from "../../../models/userModel.ts";
import {
  useSettingUserContext,
  useUserNavMenuContext,
} from "../../../hooks/contexts/userSettingContexts.ts";
import { useUserLogoutModalContext } from "../../../hooks/contexts/userSignupContext.ts";

// here define UserNav component
const UserNav: React.FC = () => {
  // declare custom hooks for manage navbar
  const { handleNavMenuClose }: any = useUserNavMenuContext();
  const { showUserAccessories }: any = useSettingUserContext();
  const { openLogoutModal }: any = useUserLogoutModalContext();

  // here define for all action nav functions
  const handleAccounts = (): any => {
    showUserAccessories();
    handleNavMenuClose();
  };

  const handleLogout = (): any => {
    openLogoutModal();
    handleNavMenuClose();
  };

  // here declare nav list link or action contents
  const chatNavItem: userNavListItem[] = [
    {
      listIcon: <MdOutlineChatBubble />,
      listItem: "Chat",
      itemPath: "/user/content/chats",
      itemActions: handleNavMenuClose,
    },

    {
      listIcon: <MdGroups />,
      listItem: "Groups",
      itemPath: "/user/content/groups",
      itemActions: handleNavMenuClose,
    },

    {
      listIcon: <RiDonutChartFill />,
      listItem: "Status",
      itemPath: "/user/content/stories",
      itemActions: handleNavMenuClose,
    },

    {
      listIcon: <BiSupport />,
      listItem: "Help",
      itemPath: "/user/content/supports-feedback/help",
      itemActions: handleNavMenuClose,
    },
  ];

  const actionItem: actionListItems[] = [
    {
      actionItemsName: "Accounts",
      actionIcon: <CgProfile className="mx-1" />,
      handleAction: handleAccounts,
    },

    {
      actionItemsName: "Signout",
      actionIcon: <FiLogOut className="mx-1" />,
      handleAction: handleLogout,
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
        className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2 
        lg:gap-4 p-2 rounded-2xl shadow-xl bg-white/80 lg:bg-transparent 
        backdrop-blur-md transition-all duration-500"
      >
        {/* navbar links */}
        {chatNavItem.map((items: any, i: any) => {
          const { listIcon, listItem, itemPath, itemActions }: any = items;

          return (
            <li key={i}>
              <NavLink
                to={itemPath}
                onClick={itemActions}
                className={({ isActive }) =>
                  isActive
                    ? `flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 shadow-md text-white font-semibold hover:bg-purple-500 transition-all duration-300`
                    : `flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 lg:bg-transparent text-gray-700 lg:text-slate-300 
                      hover:bg-purple-100 lg:hover:bg-white/20 hover:text-purple-700 lg:hover:text-gray-300 transition-all duration-300`
                }
              >
                <span className="flex lg:hidden font-semibold tracking-wide">
                  {listItem}
                </span>
                <span className="px-2 lg:px-[5px] mt-[0.2rem] text-xl">
                  {listIcon}
                </span>
              </NavLink>
            </li>
          );
        })}

        {/* navbar actions */}
        <li>
          <div className="flex flex-col lg:flex-row items-center lg:items-end space-y-2 lg:space-y-0 lg:space-x-4">
            {actionItem.map((items: any, i: any) => {
              const { actionItemsName, actionIcon, handleAction }: any = items;

              return (
                <div key={i}>
                  <a
                    onClick={handleAction}
                    data-modal-target="popup-modal"
                    data-modal-toggle="popup-modal"
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl 
                    shadow-md bg-white/80 lg:bg-transparent 
                    hover:bg-purple-100 lg:hover:bg-white/20 
                    transition-all duration-300 
                    text-gray-700 lg:text-white hover:text-purple-700 
                    lg:hover:text-gray-300 backdrop-blur-md cursor-pointer`}
                  >
                    <span className="flex lg:hidden font-semibold tracking-wide">
                      {actionItemsName}
                    </span>
                    <span className="mt-1.5 text-xl">{actionIcon}</span>
                  </a>
                </div>
              );
            })}
          </div>
        </li>
      </ul>
    </>
  );
};

// exporting UserNav component
export default UserNav;
