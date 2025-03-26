// here import some libraries methods and components
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { isOpenheaderProps, userSignupListItem, } from "../../models/userModel.tsx";

// here define userSignupNav functional component
const UserSignupNav: React.FC<isOpenheaderProps> = ({ isOpen }) => {

  // here declare nav list items
  const [signupList] = useState<userSignupListItem[]>([
    {
      listItem: "Login",
      itemPath: "/"
    },
    {
      listItem: "Register",
      itemPath: "/user/Register"
    },
  ]);

  return (
    <>
      {/* start ul for nav link */}
      <ul
        className={`lg:flex ${isOpen ? "block" : "hidden"
          } absolute lg:relative rounded-2xl shadow-lg lg:shadow-none lg:rounded-none  
          h-48 bg-slate-100 lg:bg-transparent w-48 lg:w-auto lg:h-auto right-0 top-full 
          lg:top-auto p-4 lg:p-0 space-y-2 lg:space-y-0 lg:space-x-4`}
      >
        {/* here declare navlink list item */}
        {signupList.map((items: any, i: any) => (
          <li key={i} className=" mx-6 lg:mx-auto p-[5px] lg:p-0 lg:text-right">
            <NavLink to={items.itemPath} className="block text-gray-600 lg:text-white lg:text-base hover:text-black 
                lg:hover:text-gray-300 transition-colors">{items.listItem}</NavLink>
          </li>
        ))}

      </ul>
      {/* end ul */}
    </>
  );
};

// export UserSigupNav functional component
export default UserSignupNav;
