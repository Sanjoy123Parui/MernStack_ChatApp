import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { 
  isOpenheaderProps, 
  isDropdownProps,
  userSignupListItem 
} from "../../models/userModel.tsx";

// here define props functionality which pass in same functional component
const Dropdown: React.FC<isDropdownProps> = ({ isDropdownOpen }) => {


  // here was declare drop-down content array
  const accountDropdownList: userSignupListItem[] = [
    {
      listItem: "ChangePassword",
      itemPath: "/user/change-password",
    },
    {
      listItem: "DeleteAccount",
      itemPath: "#",
    },
  ];

  return (
    <>
      {/* here show and hide drop down content */}
      {isDropdownOpen && (
        <ul className="block absolute bg-white rounded-2xl shadow-lg 
          h-40 w-48 right-0 top-full p-4 space-y-2">
          {accountDropdownList.map((subItem: any, j: any) => (
            <li key={j} className="p-[5px] md:p-0 md:text-left">
              <NavLink to={subItem.itemPath} className="block px-4 mt-3 text-sm md:text-base text-gray-700 hover:text-black">
                {subItem.listItem}
              </NavLink>
            </li>
          ))}
        </ul>
      )}

    </>
  );
};






// here define userSignupNav functional component
const UserSignupNav: React.FC<isOpenheaderProps> = ({ isOpen }) => {

  // here declare useState hooks for drop-down open
  const [isDropdownOpen, setIsDropdownOpen] = useState<any>(false);


  // here declare nav list items
  const signupList: userSignupListItem[] = [
    {
      listItem: "Login",
      itemPath: "/",
    },
    {
      listItem: "Register",
      itemPath: "/user/Register",
    },
  ];

  return (
    <>
      {/* start ul for nav link */}
      <ul className={`md:flex ${isOpen ? "block" : "hidden"} absolute md:relative rounded-2xl shadow-lg md:shadow-none md:rounded-none  
          h-48 bg-slate-100 md:bg-transparent w-48 md:w-auto md:h-auto right-0 top-full 
          md:top-auto p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-4`}>

        {/* here declare navlink list item */}
        {signupList.map((items: any, i: any) => {
          return (
            <li
              key={i}
              className=" mx-6 md:mx-auto p-[5px] md:p-0 md:text-right"
            >
              <NavLink
                to={items.itemPath}
                className="block text-gray-600 md:text-white md:text-base hover:text-black md:hover:text-gray-300 transition-colors"
              >
                {items.listItem}
              </NavLink>
            </li>
          );
        })}

        {/* here start li declare drop-down */}
        <li
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          className="relative group mx-6 md:mx-auto p-[5px] md:p-0 md:text-right">
          {/*  button of drop-down */}
          <a className="flex items-center text-gray-600 md:text-white hover:text-black md:hover:text-gray-300 transition-colors">
            Account
            <RiArrowDropDownLine className="mr-2" />
          </a>

          {/* declare drop-down props  conponent*/}
          <Dropdown isDropdownOpen={isDropdownOpen} />
        </li>
        {/* end li */}
      </ul>
      {/* end ul */}
    </>
  );
};

// export UserSigupNav functional component
export default UserSignupNav;