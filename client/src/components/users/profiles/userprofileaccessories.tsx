import { FaUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import {
  useSettingUserContext,
  useUserSettingToggleContext,
} from "../../hooks/contexts/userSettingContexts.ts";
import { useUserProfileContexts } from "../../hooks/contexts/userProfileContext.ts";
import Settings from "./settings.tsx";

// declare Userprofileaccessories component
const Userprofileaccessories = () => {
  // declare variables for user profile settings accessories
  let fullName: string = `Neil Sims`;
  let abouts: string = `I am a Software Engineer`;

  // here destruct custom hooks data
  const { hideUserAccessories }: any = useSettingUserContext();
  const { isThemes }: any = useUserSettingToggleContext();
  const { openUserProfile }: any = useUserProfileContexts();

  return (
    <>
      <div className="px-4 sm:px-6 md:px-8 lg:px-10">
        {/* here button of close settings */}
        {/* <a
          onClick={hideUserAccessories}
          className={`text-gray-600 text-lg p-2 mt-1 justify-end flex 
          lg:text-2xl font-bold mb-2 mx-auto cursor-pointer 
        hover:text-gray-800`}
        > */}
        <a
          onClick={hideUserAccessories}
          className={`text-lg p-2 mt-1 ${
            !isThemes
              ? `text-gray-600 hover:text-gray-800`
              : `text-slate-50 hover:text-white`
          } justify-end flex 
          lg:text-2xl font-semibold mb-2 mx-auto cursor-pointer 
        `}
        >
          <IoMdClose className="w-4 h-4 md:w-6 md:h-6" />
        </a>

        {/* start ul content for user profile accessories */}
        <ul className="max-w-lg mx-auto space-y-6">
          {/* <li
            onClick={openUserProfile}
            className={`py-4 lg:py-3 px-6 lg:px-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all`}
          > */}
          <li
            onClick={openUserProfile}
            className={`py-4 lg:py-3 px-6 lg:px-4 cursor-pointer ${
              !isThemes
                ? `hover:bg-gray-100 dark:hover:bg-gray-700`
                : `hover:bg-gray-400 dark:hover:bg-black/5`
            }  rounded-lg transition-all`}
          >
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              {/* avatar content */}
              <div className="shrink-0">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 overflow-hidden 
                bg-gray-100 rounded-full dark:bg-gray-600"
                >
                  <FaUser
                    className="w-8 h-12 sm:w-10 sm:h-16 text-gray-400 
                  p-[2px] mx-[5px]"
                  />
                </div>
              </div>

              {/* user name and abouts */}
              <div className="flex-1 min-w-0">
                {/* <h4 className="text-sm md:text-base font-medium truncate dark:text-black"> */}
                <h4
                  className={`text-sm md:text-base ${
                    !isThemes
                      ? `text-gray-700 dark:text-black`
                      : `text-slate-100 dark:text-white`
                  } font-medium truncate `}
                >
                  {fullName}
                </h4>
                {/* <p className="text-xs sm:text-sm text-gray-500 truncate dark:text-gray-400"> */}
                <p
                  className={`text-xs sm:text-sm ${
                    !isThemes
                      ? `text-gray-500 dark:text-gray-400`
                      : `text-slate-200 dark:text-white/10`
                  } truncate`}
                >
                  {abouts}
                </p>
              </div>
            </div>
          </li>

          {/* here loaded settings component */}
          <Settings />
        </ul>
        {/* end ul */}
      </div>
    </>
  );
};

// exporting Userprofileaccessories component
export default Userprofileaccessories;
