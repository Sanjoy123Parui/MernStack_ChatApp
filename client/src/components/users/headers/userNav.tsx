import { useState } from "react";
import { NavLink } from "react-router-dom";

import { RiArrowDropDownLine, RiDonutChartFill } from "react-icons/ri";

import { MdOutlineChatBubble, MdGroups, MdSunny } from "react-icons/md";

import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoIosMoon } from "react-icons/io";

import {
  isOpenheaderProps,
  isDropdownProps,
  userNavListItem,
  themesListMode,
} from "../../models/userModel.tsx";

// here define dropdownthems props funcional component
const Themesdropdownprops: React.FC<isDropdownProps> = ({ isDropdownOpen }) => {
  // here declare themes drop down list item
  const themesList: themesListMode[] = [
    {
      themesIcon: <IoIosMoon />,
      themesItem: "Dark",
    },
    {
      themesIcon: <MdSunny />,
      themesItem: "Light",
    },
  ];

  return (
    <>
      {/* here declare themes drop-down content show or hide */}
      {isDropdownOpen && (
        <ul
          className="block absolute bg-white rounded-2xl shadow-lg 
                h-40 w-48 right-0 top-full p-4 space-y-2"
        >
          {themesList.map((subItem: any, j: any) => (
            <li key={j} className="p-[5px] md:p-0 md:text-left">
              <a className="flex px-4 mt-3 text-gray-700 hover:text-black">
                {subItem.themesItem}
                <p className="px-4 mt-[0.4rem]">{subItem.themesIcon}</p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

// here define usernav functional component
const UserNav: React.FC<isOpenheaderProps> = ({ isOpen }) => {
  // here declare useState hooks for toggle dropdown of themes
  const [isDropdownOpen, setIsDropdownOpen] = useState<any>(false);

  // here declare nav list content
  const chatNavItem: userNavListItem[] = [
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
  ];

  return (
    <>
      {/* start ul for chat list nav content */}
      <ul
        className={`lg:flex ${
          isOpen ? "block" : "hidden"
        } absolute lg:relative rounded-2xl shadow-lg lg:shadow-none lg:rounded-none  
            h-auto bg-slate-100 lg:bg-transparent w-48 lg:w-auto text-base lg:text-lg lg:h-auto right-0 top-full 
            lg:top-auto p-4 lg:p-0 space-y-2 lg:space-y-0 lg:space-x-4`}
      >
        {/* here are declare drop-down of themes */}
        <li
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          className="relative group mx-6 lg:mx-auto p-[5px] lg:p-0 lg:text-right"
        >
          {/*  button of drop-down */}
          <a
            className="flex items-center text-gray-600 sm:px-0 md:px-6 lg:px-0 lg:text-white 
                    hover:text-black lg:hover:text-gray-300 transition-colors"
          >
            Themes
            <RiArrowDropDownLine className="mx-1" />
          </a>

          {/* here load Themesdropdownprops component */}
          <Themesdropdownprops isDropdownOpen={isDropdownOpen} />
        </li>

        {/* here decalare chat navlink list items */}
        {chatNavItem.map((items: any, i: any) => (
          <li key={i} className="mx-6 lg:mx-auto p-[5px] lg:p-0 lg:text-right">
            <NavLink
              to={items.itemPath}
              className="flex text-gray-600 lg:text-white 
                        hover:text-black lg:hover:text-gray-300 transition-colors"
            >
              {items.listItem}
              <p className="px-4 lg:px-[5px] mt-[0.4rem]">{items.listIcon}</p>
            </NavLink>
          </li>
        ))}

        {/* here can declare myProfile button */}
        <li className="mx-6 lg:mx-auto p-[5px] lg:p-0 lg:text-right">
          <a
            className="flex items-center text-gray-600 lg:text-white 
                    hover:text-black lg:hover:text-gray-300 transition-colors"
          >
            MyProfile
            <CgProfile className="mx-1" />
          </a>
        </li>

        {/* here can declare logout button */}
        <li className="mx-6 lg:mx-auto p-[5px] lg:p-0 lg:text-right">
          <a
            className="flex items-center text-gray-600 lg:text-white 
                    hover:text-black lg:hover:text-gray-300 transition-colors"
          >
            Logout
            <FiLogOut className="mx-1" />
          </a>
        </li>
      </ul>
      {/* end ul */}
    </>
  );
};

// export userNav functional component
export default UserNav;
