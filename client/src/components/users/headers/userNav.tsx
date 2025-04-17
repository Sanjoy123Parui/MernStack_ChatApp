import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiDonutChartFill } from "react-icons/ri";
import { MdOutlineChatBubble, MdGroups } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { userNavListItem, actionListItems } from "../../models/userModel.ts";
import UserLogout from "../signup/userLogout.tsx";

const UserActionNav: React.FC = () => {
  // declare useState hook
  const [isUserlogoutModal, setIsUserlogoutModal] = useState<any>(false);

  const [actionItem] = useState<actionListItems[]>([
    {
      actionItemsName: "Accounts",
      actionIcon: <CgProfile className="mx-1" />,
      handleAction: () => {
        console.log("Navigate page");
      },
    },
    {
      actionItemsName: "Logout",
      actionIcon: <FiLogOut className="mx-1" />,
      handleAction: () => {
        setIsUserlogoutModal(true);
      },
    },
  ]);

  // here was define userLogout modal close
  const onUserLogoutModal = () => {
    setIsUserlogoutModal(false);
  };

  // here was define userLogout  cancel
  const onUserLogoutCancel = () => {
    setIsUserlogoutModal(false);
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

      {isUserlogoutModal && (
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
