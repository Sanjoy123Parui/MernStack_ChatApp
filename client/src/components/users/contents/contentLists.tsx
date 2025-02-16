import { Avatar, AvatarImage } from "../../ui/avatar.tsx";

// here was ContentLists functional components
const ContentLists: React.FC = () => {
  return (
    <>
      {/* start div for chat list content */}
      <div className="border-t px-4">
        {/* start ul of user list */}
        <ul className="max-w-lg divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-4 lg:py-3">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="shrink-0">
                <Avatar>
                  <AvatarImage
                    src=""
                    className="w-full h-full rounded-full"
                    alt="avatar image"
                  />
                </Avatar>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm md:text-base font-medium truncate dark:text-white">
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
        </ul>
        {/* end ul */}
      </div>
      {/* end div */}
    </>
  );
};
// export ContentLists functional components
export default ContentLists;
