import { IoMdClose } from "react-icons/io";
import { CiCircleAlert } from "react-icons/ci";
import { useUserProfileContexts } from "../hooks/contexts/userProfileContext.ts";

// define UserRemoveModal component
const UserRemoveModal: React.FC = () => {
  // declare some custom hooks which are destruct data
  const { userRemoveAlertMessage, isUserRemove, closeUserRemove } =
    useUserProfileContexts();

  return (
    <>
      {/* start div for user profile or account remove content */}
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="relative bg-white rounded-lg shadow-lg p-6 mb-12 md:mb-96 lg:mb-80 w-11/12 sm:w-96 max-w-lg">
          {/* start button for close modal */}
          <button
            type="button"
            onClick={closeUserRemove}
            className="absolute top-3 right-3 text-gray-400 bg-transparent 
                        hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center 
                        items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <IoMdClose />
          </button>
          {/* end close modal button */}

          {/* start div for content modal popup */}
          <div className="p-4 md:p-5 text-center">
            <CiCircleAlert className="mx-auto mb-4 text-gray-400 text-2xl w-12 h-12 dark:text-gray-200" />
            {isUserRemove && (
              <h3 className="mb-5 text-base sm:text-lg font-normal text-gray-500 dark:text-gray-400">
                {userRemoveAlertMessage}
              </h3>
            )}

            <div className="flex flex-col sm:flex-row justify-center sm:justify-end px-6 space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                className="px-4 py-2 bg-red-500 text-base md:text-sm text-white 
                            rounded hover:bg-red-600 w-full sm:w-auto"
              >
                Yes, I'am confirm
              </button>
              <button
                type="button"
                onClick={closeUserRemove}
                className="px-4 py-2 bg-blue-500 text-base md:text-sm text-white 
                            rounded hover:bg-blue-600 w-full sm:w-auto"
              >
                No cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end div */}
    </>
  );
};

// export UserRemoveModal
export default UserRemoveModal;
