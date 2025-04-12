// here import some libraries methods and components
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { userSignupListItem } from "../../models/userModel.tsx";

// here define userSignupNav functional component
const UserSignupNav: React.FC = () => {

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
      {signupList.map((items: any, i: any) => (
        <li key={i} className=" mx-6 lg:mx-auto p-[5px] lg:p-0 lg:text-right">
          <NavLink to={items.itemPath} className={({ isActive }) => isActive ? `block text-gray-700 lg:text-white lg:text-base 
            hover:text-black lg:hover:text-gray-300 transition-colors`: `block text-gray-600 lg:text-slate-300 lg:text-base 
            hover:text-black lg:hover:text-gray-300 transition-colors`}>{items.listItem}</NavLink>
        </li>
      ))}
    </>
  );
};

// export UserSigupNav functional component
export default UserSignupNav;
