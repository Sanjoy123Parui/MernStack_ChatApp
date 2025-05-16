// import { Avatar, AvatarImage } from "../../ui/avatar.tsx";
import { FaUser } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
// define MessageHeading component
const MessagesHeading: React.FC = () => {
  return (
    <>
      {/* start div for message heading */}
      <div className="bg-purple-600 py-4 lg:py-3">
        <div className="mb-0 px-4">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* start div for user profile and back button  */}
            <div className="contents">
              <a className="text-white text-lg mr-1 flex lg:hidden lg:text-2xl font-bold">
                <GoArrowLeft />
              </a>
              {/* <Avatar className="border-white border-[2px] font-bold">
                <AvatarImage
                  src=""
                  className="w-full h-fit rounded-full"
                  alt="avatar image"
                />
              </Avatar> */}

              {/* <div className="relative w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100 
              rounded-full dark:bg-gray-600">
                <FaUser className="absolute w-8 h-12 text-gray-400 left-[3px]" />
              </div> */}

              <div
                className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100 
              rounded-full dark:bg-gray-600"
              >
                <FaUser className="w-8 h-12 text-gray-400 p-[2px] mx-[3px]" />
              </div>
            </div>
            {/* end div */}

            {/* start div flex from show which user profile are open */}
            <div className="flex-1 min-w-0">
              <a className="text-base md:text-lg font-medium truncate text-white">
                Neil sims
              </a>
            </div>
            {/* end div */}

            {/* start div for menu button content */}
            <div className="inline-flex items-center text-base lg:text-2xl text-white">
              <BsThreeDotsVertical />
            </div>
            {/* end div */}
          </div>
        </div>
      </div>
      {/* end div */}
    </>
  );
};
// export MessageHeading component
export default MessagesHeading;
