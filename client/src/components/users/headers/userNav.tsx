import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri"
import { isOpenheaderProps, isDropdownProps, navListItem, themesListMode } from '../../models/userModel.ts';

// here define dropdownthems props funcional component
const Themesdropdownprops: React.FC<isDropdownProps> = ({ isDropdownOpen }) => {

    // here declare themes drop down list item
    const themesList: themesListMode[] = [
        {
            themesItem: "Dark",

        },
        {
            themesItem: "Light"
        }
    ];

    return (
        <>
            {/* here declare themes drop-down content show or hide */}
            {isDropdownOpen && (
                <ul className="block absolute bg-white rounded-2xl shadow-lg 
                h-40 w-48 right-0 top-full p-4 space-y-2">
                    {themesList.map((subItem: any, j: any) => (
                        <li key={j} className="p-[5px] md:p-0 md:text-left">
                            <a className="block px-4 mt-3 text-sm md:text-base text-gray-700 hover:text-black">
                                {subItem.themesItem}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}


// here define usernav functional component
const UserNav: React.FC<isOpenheaderProps> = ({ isOpen }) => {

    // here declare useState hooks for toggle dropdown of themes
    const [isDropdownOpen, setIsDropdownOpen] = useState<any>(false);

    // here declare nav list content
    const chatNavItem: navListItem[] = [
        {
            listItem: "Chat",
            itemPath: "/user/content/chat"
        },
        {
            listItem: "Stories",
            itemPath: "/user/content/story"
        },
        {
            listItem: "Groups",
            itemPath: "/user/content/groups"
        },
        {
            listItem: "MyProfile",
            itemPath: "/user/content/profile"
        },
        {
            listItem: "Logout",
            itemPath: "#"
        },
    ];

    return (
        <>
            {/* start ul for chat list nav content */}
            <ul className={`md:flex ${isOpen ? "block" : "hidden"} absolute md:relative rounded-2xl shadow-lg md:shadow-none md:rounded-none  
            h-auto bg-slate-100 md:bg-transparent w-48 md:w-auto md:h-auto right-0 top-full 
            md:top-auto p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-4`}>

                {/* here are declare drop-down of themes */}
                <li
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    className="relative group mx-6 md:mx-auto p-[5px] md:p-0 md:text-right">

                    {/*  button of drop-down */}
                    <a className="flex items-center text-gray-600 md:text-white 
                    hover:text-black md:hover:text-gray-300 transition-colors">
                        Themes
                        <RiArrowDropDownLine className="mr-2" />
                    </a>

                    {/* here load Themesdropdownprops component */}
                    <Themesdropdownprops isDropdownOpen={isDropdownOpen} />

                </li>



                {/* here decalare chat navlink list items */}
                {chatNavItem.map((items: any, i: any) => (
                    <li key={i} className=" mx-6 md:mx-auto p-[5px] md:p-0 md:text-right">
                        <NavLink
                            to={items.itemPath}
                            className="block text-gray-600 md:text-white md:text-base 
                        hover:text-black md:hover:text-gray-300 transition-colors">
                            {items.listItem}
                        </NavLink>
                    </li>
                ))}

            </ul>
            {/* end ul */}
        </>
    );
}

// export userNav functional component
export default UserNav;