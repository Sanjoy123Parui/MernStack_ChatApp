// import { Avatar, AvatarImage } from "../../ui/avatar.tsx";
import { FaUser } from "react-icons/fa";

// here was ContentLists functional components
const ContentLists: React.FC = () => {

  return (
    <>
      {/* start div for chat list content */}
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

        {/* start demo ul of user list */}
        <ul className="max-w-lg divide-y divide-gray-200 dark:divide-gray-700 ">
          <li className="py-4 lg:py-3">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="shrink-0">
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <FaUser className="absolute w-8 h-12 text-gray-400 left-[4px]" />
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
        {/* end demo */}
      </div>
      {/* end div */}
    </>
  );
};
// export ContentLists functional components
export default ContentLists;
