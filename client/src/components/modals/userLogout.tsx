import { IoMdClose } from "react-icons/io";
import { CiCircleAlert } from "react-icons/ci";
import { useUserLogoutModalContext } from "../hooks/contexts/userSignupContext.ts";

const UserLogout: React.FC = () => {

    // here was declare custom hooks for destruct data
    const { closeLogoutModal }: any = useUserLogoutModalContext();

    return (
        <>
            {/* start div for logout component content */}
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="relative bg-white rounded-lg shadow-lg mb-8 md:mb-[30rem] lg:mb-12 p-6 w-96">
                    {/* start button of close modal popup */}
                    <button type="button" onClick={closeLogoutModal} className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                        <IoMdClose />
                    </button>
                    {/* end button of popup */}

                    {/* start div for content logout popup */}
                    <div className="p-4 md:p-5 text-center">
                        <CiCircleAlert className="mx-auto mb-4 text-gray-400 text-xl w-12 h-12 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to log out?
                        </h3>
                        <div className="flex justify-end space-x-4">
                            <button type="button" className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                                Yes, I'am sure
                            </button>

                            <button type="button" onClick={closeLogoutModal} className="px-4 py-2 bg-gray-600 text-white rounded 
                            hover:bg-gray-700">
                                No, cancel
                            </button>
                        </div>
                        {/* end div */}
                    </div>
                </div>
            </div>
            {/* end div */}
        </>
    )
}

export default UserLogout;
