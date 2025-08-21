import { FiLogOut } from "react-icons/fi";
import { useUserLogoutModalContext } from "../../hooks/contexts/userSignupContext.ts";

const UserProfileNav: React.FC = () => {
  // here was declare custom hooks
  const { openLogoutModal }: any = useUserLogoutModalContext();
  return (
    <>
      <ul className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2 lg:gap-4 p-2 rounded-2xl shadow-xl bg-white/80 lg:bg-transparent backdrop-blur-md transition-all duration-500">
        <li>
          <a
            onClick={openLogoutModal}
            className="flex items-center gap-2 px-4 py-2 rounded-xl shadow-md bg-white/80 lg:bg-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 lg:hover:bg-white/20 transition-all duration-300 text-gray-700 lg:text-white hover:text-white lg:hover:text-gray-300 backdrop-blur-md cursor-pointer font-semibold"
          >
            <span className="flex lg:hidden font-semibold tracking-wide">
              Logout
            </span>
            <span className="mt-1.5 text-xl">
              <FiLogOut />
            </span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default UserProfileNav;
