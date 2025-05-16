import { IoMdClose } from "react-icons/io";
import { useUserProfileContexts } from "../hooks/contexts/userProfileContext.ts";
import ProfileEditForm from "../forms/profileEditForm.tsx";

// It is UserEditProfile component
const UserEditProfile: React.FC = () => {
  // here destruct data for custom hooks
  const { userProfileHeading, closeUserEdit }: any = useUserProfileContexts();

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="relative w-full max-w-[90%] md:max-w-2xl mx-4">
          {/* start modal content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border dark:border-gray-700">
            {/* start modal header */}
            <div className="p-4 sm:p-6 border-b dark:border-gray-700">
              <button
                type="button"
                onClick={closeUserEdit}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              >
                <IoMdClose className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-gray-900 dark:text-white">
                {userProfileHeading}
              </h3>
            </div>

            {/* start div form content */}
            <div className="p-4 sm:p-6">
              <ProfileEditForm />
            </div>
            {/* end div */}
          </div>
          {/* end modal content */}
        </div>
      </div>
    </>
  );
};

export default UserEditProfile;
