import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { FaUser, FaUpload } from "react-icons/fa";
import { Button } from "../../ui/button.tsx";
import Groupadditional from "../groupscontent/groupsadditional.tsx";
import Groupsoptions from "../groupscontent/groupsoptions.tsx";
import Groupsmembers from "../groupscontent/groupsmembers.tsx";
import { useGroupsContext } from "../../../hooks/contexts/userContentContext.ts";
import { useUserSettingToggleContext } from "../../../hooks/contexts/userSettingContexts.ts";

const Groupsprofile: React.FC = () => {
  // destruct data from custom hooks
  const { isThemes }: any = useUserSettingToggleContext();
  const { hideGroupsProfile }: any = useGroupsContext();

  // declare useEffect hook
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
      <section
        className={`px-6 pt-4 pb-8 max-w-lg mx-auto
          ${!isThemes ? `bg-slate-50` : `bg-gray-800`}
      lg:px-4 lg:pt-1 lg:pb-6`}
      >
        {/* start div for close button content */}
        <div className="flex justify-end">
          <a
            onClick={hideGroupsProfile}
            className={`text-2xl font-semibold ${
              !isThemes
                ? `text-gray-600 hover:text-gray-800`
                : `text-slate-50 hover:text-white`
            } transition duration-200`}
          >
            <IoMdClose className="w-4 h-4 md:w-6 md:h-6" />
          </a>
        </div>
        {/* end div */}

        {/* start div for groups profile images */}
        <div className="flex flex-col items-center text-center py-8">
          <div className="relative">
            <div className="w-24 h-24 overflow-hidden rounded-full lg:w-32 lg:h-32 bg-gray-100 dark:bg-gray-600 border-2 mb-4">
              <FaUser
                className="w-16 h-20 lg:w-20 lg:h-24 
              text-gray-400 mt-7 lg:mt-8 mx-4 lg:mx-[23px]"
              />
            </div>
            <Button
              type="button"
              className="absolute h-4 w-4 lg:h-8 lg:w-8 bottom-2 right-0 bg-blue-500 text-white rounded-full p-4 lg:p-2 hover:bg-blue-600 
            transition duration-200"
            >
              <FaUpload />
            </Button>
          </div>
        </div>
        {/* end div */}

        {/* start div for groups additional content */}
        <div className="border-t mt-2">
          <Groupadditional />
        </div>
        {/* end div */}

        {/* start div for options in group profiles */}
        <div className="border-t mt-2">
          <Groupsoptions />
        </div>
        {/* end div */}

        {/* start div for groups members content */}
        <div className="border-t mt-2">
          <Groupsmembers />
        </div>
        {/* end div */}
      </section>
    </>
  );
};
// exporting Groupsprofile component
export default Groupsprofile;
