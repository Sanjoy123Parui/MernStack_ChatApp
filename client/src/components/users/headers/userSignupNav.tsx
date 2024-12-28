import { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { isOpenheaderProps, isDropdownProps, signupListItem } from "../../models/userModel.ts";

// here define props functionality which pass in same functional component
const Dropdown: React.FC<isDropdownProps> = ({ isDropdownOpen }) => {


  // here was declare drop-down content array
  let accountDropdownList: signupListItem[] = [
    {
      listItem: "Change Password",
      itemPath: "#",
    },
    {
      listItem: "Delete Account",
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
              <Link to={subItem.itemPath} className="block px-4 mt-3 text-sm md:text-base text-gray-700 hover:text-black">
                {subItem.listItem}
              </Link>
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
  let signupList: signupListItem[] = [
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
      <ul className={`${isOpen ? "block" : "hidden"}  
        md:flex absolute md:relative rounded-2xl shadow-lg md:shadow-none md:rounded-none  
          h-48 bg-slate-100 md:bg-transparent w-48 md:w-auto md:h-auto right-0 top-full 
          md:top-auto p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-4`}>
        {signupList.map((items: any, i: any) => {
          return (
            <li
              key={i}
              className=" mx-6 md:mx-auto p-[5px] md:p-0 md:text-right"
            >
              <Link
                to={items.itemPath}
                className="block text-gray-600 md:text-white md:text-base hover:text-black md:hover:text-gray-300 transition-colors"
              >
                {items.listItem}
              </Link>
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