import { IoMdClose } from "react-icons/io";
import { CiCircleAlert } from "react-icons/ci";
import { useRemoveAccountModal } from "../../hooks/contexts/userSettingContexts.ts";

// define remove accounts  modal popup component
const UserRemoveAccounts: React.FC = () => {

    // here was declare custom hooks with cotext where desteruct data of user account removal
    const { hideUserAccountRemoveModal }: any = useRemoveAccountModal();

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="relative bg-white rounded-lg shadow-lg mb-8 md:mb-[30rem] lg:mb-12 p-6 w-96">
                    {/* start button for cancel popup */}
                    <button type="button" onClick={hideUserAccountRemoveModal} className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                        <IoMdClose />
                    </button>
                    {/* end button for cancel popup */}

                    {/* start div for content of user account remove modal */}
                    <div className="p-4 md:p-5 text-center">
                        <CiCircleAlert className="mx-auto mb-4 text-gray-400 text-xl w-12 h-12 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you confirm to Remove Account?
                        </h3>

                        <div className="flex justify-end space-x-4">
                            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                                Yes, I'am confirm
                            </button>
                            <button type="button" onClick={hideUserAccountRemoveModal} className="px-4 py-2 bg-blue-500 text-white rounded 
                            hover:bg-blue-700">
                                No, cancel
                            </button>
                        </div>
                    </div>
                    {/* end div for content of user account remove modal */}
                </div>
            </div>
        </>
    );
}
// export UserRemoveAccounts component
export default UserRemoveAccounts;
