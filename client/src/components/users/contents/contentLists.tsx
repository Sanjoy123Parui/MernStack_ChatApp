// import { Avatar, AvatarImage } from "../../ui/avatar.tsx";
import { FaUser } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { Button } from "../../ui/button.tsx";

// here was ContentLists functional components
const ContentLists: React.FC = () => {
  return (
    <>
      <div className="border-t px-4">
        {/* start real ul of user list */}
        {/* <ul className="max-w-lg divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-4 lg:py-3">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="shrink-0">
                <Avatar>
                  <AvatarImage
                    src=""
                    className="w-full h-fit rounded-full"
                    alt="avatar image"
                  />
                </Avatar>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm md:text-base font-medium truncate dark:text-black">
                  Neil sims
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Hii
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white px-2">
                1
              </div>
            </div>
          </li>
        </ul> */}
        {/* end real ul */}

        {/* start  ul of user chatList list */}
        <ul className="max-w-lg divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-4 lg:py-3">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="shrink-0">
                <div className="w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <FaUser className="w-8 h-12 text-gray-400 p-[2px] mx-1" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm md:text-base font-medium truncate dark:text-black">
                  Neil Sims
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Hii
                </p>
              </div>
            </div>
          </li>
        </ul>
        {/* end ul of user chat list */}

        {/* start div for contact button action content */}
        {/* <div className="sticky z-0 top-[35rem] sm:left-[20rem]"> */}
        <div className="relative">
          <div className="absolute -bottom-72 right-4  md:-bottom-80 md:right-8 z-50">
            <Button
              className="flex w-14 h-14 items-center [&_svg]:size-7 [&_svg]:mx-2 text-white justify-center bg-gradient-to-r 
            from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
            focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg rounded-full transition-colors"
            >
              <IoMdPersonAdd />
            </Button>
          </div>
        </div>
        {/* end div */}
      </div>
    </>
  );
};
// export ContentLists functional components
export default ContentLists;
