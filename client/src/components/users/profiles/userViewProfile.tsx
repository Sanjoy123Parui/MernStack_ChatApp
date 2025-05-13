import { IoMdClose } from "react-icons/io";
import { FaUser, FaUpload } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Button } from "../../ui/button.tsx";
import { useUserProfileContexts } from "../../hooks/contexts/userProfileContext.ts";

// UserViewProfile functional components
const UserViewProfile: React.FC = () => {
  // declare custom hooks for destruct user profile data
  const { closeUserProfile }: any = useUserProfileContexts();

  return (
    <>
      <section className="px-6 pt-4 pb-8 max-w-lg mx-auto bg-white lg:px-4 lg:pt-1 lg:pb-6">
        {/* start div for close view user profile button content */}
        <div className="flex justify-end">
          <a
            onClick={closeUserProfile}
            className="text-gray-600 text-2xl hover:text-gray-800 transition duration-200"
          >
            <IoMdClose />
          </a>
        </div>
        {/* end div for close view user profile button content */}

        {/* start user profile main content */}
        <div className="flex flex-col items-center text-center py-8">
          {/* avatar */}
          {/* <img
            src={userProfile?.avatar || "https://via.placeholder.com/150"}
            alt="User Avatar"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-gray-300 mb-4"
          /> */}
          <div className="relative">
            <div className="w-24 h-24 overflow-hidden rounded-full lg:w-32 lg:h-32 bg-gray-100 dark:bg-gray-600 border-2 mb-4">
              <FaUser className=" w-16 h-20 lg:w-20 lg:h-24 text-gray-400 mt-7 lg:mt-8 mx-4 lg:mx-[23px]" />
            </div>
            <Button
              className="absolute h-4 w-4 lg:h-8 lg:w-8 bottom-2 right-0 bg-blue-500 text-white rounded-full p-4 lg:p-2 hover:bg-blue-600 
            transition duration-200"
            >
              <FaUpload />
            </Button>
          </div>

          <h2 className="text-xl lg:text-2xl font-medium text-gray-800">
            Sanjoy Parui
          </h2>
          <p className="text-gray-600 text-md md:text-lg mt-1">8927219178</p>
        </div>
        {/* end userprofile main content */}

        {/* start div for user profile additional content */}
        <div className="mt-2">
          <ul className="p-4 space-y-4">
            <li className="text-gray-700 py-2">
              <strong className="font-medium text-sm lg:text-lg">
                Abouts:
              </strong>
              <p className="mt-1 text-sm md:text-base">
                Hey there! I am using chat App
              </p>
            </li>
            <li className="text-gray-700 py-2">
              <strong className="font-medium text-sm lg:text-lg">
                Gender:
              </strong>
              <p className="mt-1 text-sm md:text-base">Male</p>
            </li>
            <li className="text-gray-700 py-2">
              <strong className="font-medium text-sm lg:text-lg">
                Date Of Birth:
              </strong>
              <p className="mt-1 text-sm md:text-base">07-08-1999</p>
            </li>
          </ul>
        </div>
        {/* end div for user profile additional content */}

        {/* start div for edit and delete user profile content */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-4">
          {/* start edit button */}
          <Button
            className="flex items-center justify-center bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 
          transition duration-200"
          >
            <MdEdit className="mx-2" />
            Edit
          </Button>
          {/* end edit button */}

          {/* start delete button */}
          <Button
            className="flex items-center justify-center bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 
          transition duration-200"
          >
            <MdDelete className="mx-2" />
            Delete
          </Button>
          {/* end delete button */}
        </div>
        {/* end div for edit and delete user profile content */}
      </section>
    </>
  );
};

export default UserViewProfile;
