import { FaUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import UserAccounts from "../signup/userAccounts.tsx";
import { useSettingUserContext } from "../../hooks/contexts/userSettingContexts.ts";
import { useUserProfileContexts } from "../../hooks/contexts/userProfileContext.ts";
import Settings from "./settings.tsx";

// here define Accessabilities functional component
const Accessabilities: React.FC = () => {

    // here was destruct custom hooks data
    const { hideUserAccessories }: any = useSettingUserContext();
    const { openUserProfile }: any = useUserProfileContexts();


    return (
        <>
            <div className="px-4 sm:px-6 md:px-8 lg:px-10">
                {/* start button of close accessories */}
                <a onClick={hideUserAccessories} className="text-gray-600 text-lg p-2 mt-1 justify-end flex lg:text-2xl font-bold mb-2 mx-auto cursor-pointer hover:text-gray-800">
                    <IoMdClose />
                </a>
                {/* end button of close accessories */}

                {/* start here ul for all list content of accessories */}
                <ul className="max-w-lg mx-auto space-y-6">
                    {/* start this li for profile content */}
                    <li onClick={openUserProfile} className="py-4 lg:py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            {/* start div for user Profile image content */}
                            <div className="shrink-0">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                    <FaUser className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 p-[2px] mx-[3px]" />
                                </div>
                            </div>
                            {/* end div for user profile image content */}

                            {/* start this div for user profile name and abouts content */}
                            <div className="flex-1 min-w-0">
                                <p className="text-sm md:text-base font-medium truncate dark:text-black">
                                    Neil Sims
                                </p>
                                <p className="text-xs sm:text-sm text-gray-500 truncate dark:text-gray-400">
                                    I am a Software Engineer
                                </p>
                            </div>
                            {/* end div user profile and abouts contents */}
                        </div>
                    </li>
                    {/* end li of profile content */}

                    {/* loaded Settings component */}
                    <Settings />


                    {/* start li for user account remove content */}
                    <li className="py-8">
                        <UserAccounts />
                    </li>
                    {/* end li for user account remove content */}
                </ul>
                {/* end ul of accessories content */}
            </div>
        </>
    );
}
// export Accessabilities component
export default Accessabilities;
