import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { CiCircleAlert } from "react-icons/ci";
// import { useUserLogoutModalContext } from "../hooks/contexts/userSignupContext.ts";
import { useUserLogoutModalContext } from "../../hooks/contexts/userSignupContext.ts";

const UserLogout: React.FC = () => {
  // here was declare custom hooks for destruct data
  const { userLogoutAlertMessage, closeLogoutModal }: any =
    useUserLogoutModalContext();
  const navigate: any = useNavigate();

  // declare state for pending
  const [isLogoutPending, setIsLogoutPending] = useState<boolean>(false);

  const handleLogout = () => {
    setIsLogoutPending(true);
    setTimeout(() => {
      localStorage.clear();
      navigate("/");
      closeLogoutModal();
      setIsLogoutPending(false);
    }, 3000);
  };

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
      {/* start div for logout component content */}
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="relative bg-white rounded-lg shadow-lg p-6 mb-12 md:mb-96 lg:mb-80 w-11/12 sm:w-96 max-w-lg">
          {/* start button of close modal popup */}
          <button
            type="button"
            onClick={closeLogoutModal}
            className="absolute top-3 right-3 text-gray-400 bg-transparent 
                    hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center 
                    items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <IoMdClose />
          </button>
          {/* end button of close modal popup */}

          {/* start div for content logout popup */}
          <div className="p-4 md:p-5 text-center">
            <CiCircleAlert className="mx-auto mb-4 text-gray-400 text-2xl w-12 h-12 dark:text-gray-200" />
            <h3 className="mb-5 text-base sm:text-lg font-normal text-gray-500 dark:text-gray-400">
              {userLogoutAlertMessage}
            </h3>

            <div className="flex flex-col sm:flex-row justify-center sm:justify-end px-6 space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                onClick={handleLogout}
                disabled={isLogoutPending}
                className="px-4 py-2 bg-red-500 text-white rounded 
                hover:bg-red-600 h-10 md:h-12 w-full sm:w-auto"
              >
                {isLogoutPending ? "...Thank you" : "Logout"}
              </button>

              <button
                type="button"
                onClick={closeLogoutModal}
                className="px-4 py-2 bg-green-500 text-white rounded 
                            hover:bg-green-600 h-10 md:h-12 w-full sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
          {/* end div */}
        </div>
      </div>
      {/* end div */}
    </>
  );
};

export default UserLogout;
