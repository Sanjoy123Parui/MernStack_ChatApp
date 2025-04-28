import { FaUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import UserAccounts from "../signup/userAccounts.tsx";
import { useSettingUserContext } from "../../hooks/contexts/userSettingContexts.ts";
import Settings from "./settings.tsx";

// here define Accessabilities functional component
const Accessabilities: React.FC = () => {

    // here was destruct custom hooks data
    const { hideUserAccessories }: any = useSettingUserContext()

    return (
        <>
            {/* start div for all accessories content */}
            <div className="py-3 lg:py-4">
                <div className="mb-0 px-8">

                    {/* start close button of accessories setting */}
                    <a onClick={hideUserAccessories} className="text-gray-600 text-lg p-2 justify-end flex lg:text-2xl font-bold mb-2 mx-auto">
                        <IoMdClose />
                    </a>
                    {/* end close button */}

                    {/* start div for only user details content */}
                    <div className="flex items-center p-4 space-x-4 rtl:space-x-reverse">
                        <div className="contents">
                            <div className="w-10 h-10 overflow-hidden border font-bold bg-gray-100 
                            rounded-full dark:bg-gray-600">
                                <FaUser className="w-8 h-12 text-gray-400 p-[2px] mx-[3px]" />
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <a className="text-base md:text-lg font-medium truncate text-gray-800">
                                Neil sims
                            </a>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                I am a Software Engineer
                            </p>
                        </div>
                    </div>
                    {/* end div */}

                    {/* start div for settings component content */}
                    <div className="border-t pt-4">
                        <Settings />
                    </div>
                    {/* end div for settings component content */}

                    {/* start div for remove account from user component */}
                    <div className="py-8">
                        <UserAccounts />
                    </div>
                    {/* end div for remove user account component */}
                </div>
            </div>
        </>
    );
}
// export Accessabilities component
export default Accessabilities;
