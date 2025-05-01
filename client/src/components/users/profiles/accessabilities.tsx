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
            <div className="px-4">
                {/* start button of close accessories */}
                <a onClick={hideUserAccessories} className="text-gray-600 text-lg p-2 mt-1 justify-end flex lg:text-2xl font-bold mb-2 mx-auto">
                    <IoMdClose />
                </a>
                {/* end button of close accessories */}

                {/* start here ul for all list content of accessories */}
                <ul className="max-w-lg ">
                    {/* start this li for profile content */}
                    <li onClick={openUserProfile} className="py-4 lg:py-3">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            {/* start div for user Profile image content */}
                            <div className="shrink-0">
                                <div className="w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                    <FaUser className="w-8 h-12 text-gray-400 p-[2px] mx-[3px]" />
                                </div>
                            </div>
                            {/* end div for user profile image content */}

                            {/* start this div for user profile name and abouts content */}
                            <div className="flex-1 min-w-0">
                                <p className="text-sm md:text-base font-medium truncate dark:text-black">
                                    Neil Sims
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
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
