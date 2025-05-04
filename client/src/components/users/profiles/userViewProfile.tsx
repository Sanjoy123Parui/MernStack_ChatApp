import { IoMdClose } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useUserProfileContexts } from "../../hooks/contexts/userProfileContext.ts";


// UserViewProfile functional components
const UserViewProfile: React.FC = () => {

  // declare custom hooks for destruct user profile data
  const { closeUserProfile, openUserRemoveProfile }: any = useUserProfileContexts();

  return (
    <>
      <section className="px-6 pt-4 pb-8 max-w-lg mx-auto bg-white lg:px-4 lg:pt-1 lg:pb-6">
        {/* start div for close view user profile button content */}
        <div className="flex justify-end">
          <a onClick={closeUserProfile} className="text-gray-600 text-2xl hover:text-gray-800 transition duration-200">
            <IoMdClose />
          </a>
        </div>
        {/* end div for close view user profile button content */}

        {/* start user profile main content */}
        <div className="flex flex-col items-center text-center py-8">

          {/* <img
            src={userProfile?.avatar || "https://via.placeholder.com/150"}
            alt="User Avatar"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-gray-300 mb-4"
          /> */}
          {/* avatar */}
          <div className="w-24 h-24 overflow-hidden rounded-full lg:w-32 lg:h-32 bg-gray-100 dark:bg-gray-600 border-2 mb-4">
            <FaUser className="w-16 h-20 lg:w-20 lg:h-24 text-gray-400 mt-7 lg:mt-8 mx-4 lg:mx-[23px]" />
          </div>
          <h2 className="text-xl lg:text-2xl font-medium text-gray-800">Sanjoy Parui</h2>
          <p className="text-gray-600 text-md md:text-lg mt-1">8927219178</p>
        </div>
        {/* end userprofile main content */}

        {/* start div for user profile additional content */}
        <div className="mt-2">
          <ul className="p-4 space-y-4">
            <li className="text-gray-700 py-2">
              <strong className="font-medium text-sm lg:text-lg">Abouts:</strong>
              <p className="mt-1 text-sm md:text-base">Hey there! I am using chat App</p>
            </li>
            <li className="text-gray-700 py-2">
              <strong className="font-medium text-sm lg:text-lg">Gender:</strong>
              <p className="mt-1 text-sm md:text-base">Male</p>
            </li>
            <li className="text-gray-700 py-2">
              <strong className="font-medium text-sm lg:text-lg">Date Of Birth:</strong>
              <p className="mt-1 text-sm md:text-base">07-08-1999</p>
            </li>
          </ul>
        </div>
        {/* end div for user profile additional content */}


        {/* start div for remove user profile content */}
        <div>
          <a onClick={openUserRemoveProfile} className="flex items-center bg-none hover:bg-slate-200 rounded space-x-4 rtl:space-x-reverse">
            <span className="shrink-0">
              <div className="w-10 h-10 overflow-hidden">
                <MdDelete className="w-8 h-12 text-sm text-gray-400 p-[2px] mx-1" />
              </div>
            </span>
            <span className="flex-1 min-w-0">
              <p className="text-sm md:text-lg font-medium truncate text-gray-800 dark:text-black">
                User Remove Profile
              </p>
            </span>
          </a>
        </div>
        {/* end div for remove user profile content */}
      </section>
    </>
  )
}

export default UserViewProfile;
