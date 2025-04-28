import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiDonutChartFill } from "react-icons/ri";
import { MdOutlineChatBubble, MdGroups } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { userNavListItem, actionListItems } from "../../models/userModel.ts";
import UserLogout from "../signup/userLogout.tsx";
import { useUserLogoutModal } from "../../hooks/signuphooks.ts";
import { useSettingUserContext } from "../../hooks/contexts/userSettingContexts.ts";

const UserActionNav: React.FC = () => {
  // here was declare custom hooks
  const { showUserAccessories }: any = useSettingUserContext();
  const { isLogoutModal, openLogoutModal, closeLogoutModal }: any =
    useUserLogoutModal();

  // here declare custom hooks
  const [actionItem] = useState<actionListItems[]>([
    {
      actionItemsName: "Accounts",
      actionIcon: <CgProfile className="mx-1" />,
      handleAction: showUserAccessories,
    },
    {
      actionItemsName: "Logout",
      actionIcon: <FiLogOut className="mx-1" />,
      handleAction: openLogoutModal,
    },
  ]);

  // here was define userLogout modal close
  const onUserLogoutModal = () => {
    closeLogoutModal();
  };

  // here was define userLogout  cancel
  const onUserLogoutCancel = () => {
    closeLogoutModal();
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:items-end space-y-2 lg:space-y-0 lg:space-x-4">
        {actionItem.map((items, i) => (
          <div key={i}>
            <a
              onClick={items.handleAction}
              data-modal-target="popup-modal"
              data-modal-toggle="popup-modal"
              className="flex text-gray-600 lg:text-white hover:text-black lg:hover:text-gray-300 transition-colors"
            >
              <p className="flex lg:hidden">{items.actionItemsName}</p>
              <p className="mt-1.5">{items.actionIcon}</p>
            </a>
          </div>
        ))}
      </div>

      {isLogoutModal && (
        <div>
          <UserLogout
            onUserLogoutModal={onUserLogoutModal}
            onUserLogoutCancel={onUserLogoutCancel}
          />
        </div>
      )}
    </>
  );
};

// here define usernav functional component
const UserNav: React.FC = () => {
  // here declare nav list content
  const [chatNavItem] = useState<userNavListItem[]>([
    {
      listIcon: <MdOutlineChatBubble />,
      listItem: "Chat",
      itemPath: "/user/content/chat",
    },

    {
      listIcon: <RiDonutChartFill />,
      listItem: "Stories",
      itemPath: "/user/content/story",
    },
    {
      listIcon: <MdGroups />,
      listItem: "Groups",
      itemPath: "/user/content/groups",
    },
    {
      listIcon: <BiSupport />,
      listItem: "Supports",
      itemPath: "/user/customer/support"
    }
  ]);

  return (
    <>
      {chatNavItem.map((items: any, i: any) => (
        <li key={i} className="mx-6 lg:mx-auto p-[5px] lg:p-0 lg:text-right">
          <NavLink
            to={items.itemPath}
            className={({ isActive }) =>
              isActive
                ? `flex text-black lg:text-white 
           hover:text-black lg:hover:text-gray-300 transition-colors`
                : `flex text-gray-600 lg:text-slate-300 
           hover:text-black lg:hover:text-gray-300 transition-colors`
            }
          >
            <p className="flex lg:hidden">{items.listItem}</p>
            <p className="px-4 lg:px-[5px] mt-[0.4rem]">{items.listIcon}</p>
          </NavLink>
        </li>
      ))}

      <li className="mx-6 lg:mx-auto p-[5px] lg:p-0 lg:text-right">
        <UserActionNav />
      </li>
    </>
  );
};

// export userNav functional component
export default UserNav;
