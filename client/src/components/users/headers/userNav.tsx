import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiDonutChartFill } from "react-icons/ri";
import { MdOutlineChatBubble, MdGroups } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { isOpenheaderProps, userNavListItem, actionListItems } from "../../models/userModel.tsx";


// here define NavActions functional component
const NavActions: React.FC = () => {

  const [actionItem] = useState<actionListItems[]>([
    {
      actionItemsName: "Accounts",
      actionIcon: <CgProfile className="mx-1" />,
      // actionHandler
    },
    {
      actionItemsName: "Logout",
      actionIcon: <FiLogOut className="mx-1" />
    }
  ]);

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:items-end space-y-2 lg:space-y-0 lg:space-x-4">
        {actionItem.map((items, i) => (
          <div key={i}>
            <a className="flex text-gray-600 lg:text-white hover:text-black lg:hover:text-gray-300 transition-colors">
              <p className="flex lg:hidden">{items.actionItemsName}</p>
              <p className="mt-1.5">{items.actionIcon}</p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}


// here define usernav functional component
const UserNav: React.FC<isOpenheaderProps> = ({ isOpen }) => {

  // here declare nav list content
  const [chatNavItem] = useState<userNavListItem[]>([
    {
      listIcon: <MdOutlineChatBubble />,
      listItem: "Chat",
      itemPath: "/user/content/chat",
    },
    // {
    //   listIcon: <MdOutlineChatBubble />,
    //   listItem: "Chat",
    //   itemPath: "/",
    // },
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
      {/* start ul for chat list nav content */}
      <ul className={`lg:flex ${isOpen ? "block" : "hidden"} absolute lg:relative rounded-2xl shadow-lg 
      lg:shadow-none lg:rounded-none h-auto bg-slate-100 lg:bg-transparent w-48 lg:w-auto text-base 
      lg:text-lg lg:h-auto right-0 top-full lg:top-auto p-4 lg:p-0 space-y-2 lg:space-y-0 lg:space-x-4`}>

        {/* here decalare chat navlink list items */}
        {chatNavItem.map((items: any, i: any) => (
          <li key={i} className="mx-6 lg:mx-auto p-[5px] lg:p-0 lg:text-right">
            <NavLink to={items.itemPath} className="flex text-gray-600 lg:text-white 
           hover:text-black lg:hover:text-gray-300 transition-colors">
              <p className="flex lg:hidden">{items.listItem}</p>
              <p className="px-4 lg:px-[5px] mt-[0.4rem]">{items.listIcon}</p>
            </NavLink>
          </li>
        ))}


        {/* here can declare myProfile and logout buttons in one li */}
        <li className="mx-6 lg:mx-auto p-[5px] lg:p-0 lg:text-right">
          <NavActions />
        </li>

      </ul>
      {/* end ul */}
    </>
  );
};

// export userNav functional component
export default UserNav;
