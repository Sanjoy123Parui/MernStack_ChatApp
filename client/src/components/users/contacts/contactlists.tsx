import { useEffect } from "react";
import { Button } from "../../ui/button.tsx";
import { FaUser } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import Contactheadings from "./contactheadings.tsx";
import Contactsearch from "./contactsearch.tsx";
// import { useUserSettingToggleContext } from "../../hooks/contexts/userSettingContexts.ts";
import { useUserSettingToggleContext } from "../../../hooks/contexts/userSettingContexts.ts";

// define contactlist component
const Contactlists: React.FC = () => {
  // declare contact heading
  const userContactHeading: string = "Contacts";

  const userName = `Neil Sims`;

  // declare for consuming the custom hooks for manage state
  const { isThemes }: any = useUserSettingToggleContext();

  // here will be appear useEffect hook
  useEffect(() => {
    // here was component mount
    const intervalId: any = setInterval(() => {}, 1000);
    // here was component will unmount with cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div>
        <Contactheadings userContactHeading={userContactHeading} />
      </div>
      <div>
        <Contactsearch />
        <div className="border-t px-4">
          <ul className="max-w-lg divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-4 lg:py-3">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                {/* start div for user contact avatar content */}
                <div className="shrink-0">
                  <div className="w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <FaUser className="w-8 h-12 text-gray-400 p-[2px] mx-1" />
                  </div>
                </div>
                {/* end div */}

                {/* start div for user contact name or phone number */}
                <div className="flex-1 min-w-0">
                  <h4
                    className={`text-sm md:text-base ${
                      !isThemes
                        ? `text-black dark:text-black`
                        : `text-white dark:text-white`
                    } font-medium truncate`}
                  >
                    {userName}
                  </h4>
                </div>
              </div>
            </li>
          </ul>

          {/* start div for add contact form toggle button */}
          <div className="relative">
            <div className="absolute -bottom-72 right-4  md:-bottom-80 md:right-8 z-50">
              <Button
                type="button"
                className="flex w-14 h-14 items-center [&_svg]:size-7 [&_svg]:mx-2 text-white justify-center bg-gradient-to-r 
            from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
            focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg rounded-full transition-colors"
              >
                <IoMdAdd className="w-5 h-5" />
              </Button>
            </div>
          </div>
          {/* end div */}
        </div>
      </div>
    </>
  );
};

// exporting contactlist component
export default Contactlists;
