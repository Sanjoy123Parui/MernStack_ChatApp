import { useEffect } from "react";
// import { Avatar, AvatarImage } from "../../ui/avatar.tsx";
import { useMatch } from "react-router-dom";
import { FaUser, FaCamera } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { MdGroupAdd } from "react-icons/md";
import { Button } from "../../ui/button.tsx";
import { useUserSettingToggleContext } from "../../hooks/contexts/userSettingContexts.ts";
import { useUserContactActionContext } from "../../hooks/contexts/userContactContext.ts";

// here was ContentLists functional components
const ContentLists: React.FC = () => {
  let chatUser: string = `Neil Sims`;
  let messages: string = `Hii`;

  // declare useMatch hooks for check url path are matched or not
  // const chatsPathMatch: any = useMatch("/");
  const chatsPathMatch: any = useMatch("/user/content/chats");
  const groupsPathMatch: any = useMatch("/user/content/groups");
  const storiesPathMatch: any = useMatch("/user/content/stories");

  // declare custom hooks for manage some states in this component
  const { isThemes }: any = useUserSettingToggleContext();
  const { showContacts }: any = useUserContactActionContext();

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
                <h4
                  className={`text-sm md:text-base ${
                    !isThemes
                      ? `text-black dark:text-black`
                      : `text-white dark:text-white`
                  }  font-medium truncate `}
                >
                  {chatUser}
                </h4>
                <p
                  className={`text-sm ${
                    !isThemes
                      ? `text-gray-500 dark:text-gray-400`
                      : `text-white dark:text-slate-100`
                  }  truncate `}
                >
                  {messages}
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
            {chatsPathMatch && (
              <Button
                type="button"
                onClick={showContacts}
                className="flex w-14 h-14 items-center [&_svg]:size-7 [&_svg]:mx-2 text-white justify-center bg-gradient-to-r 
            from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
            focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg rounded-full transition-colors"
              >
                <IoMdPersonAdd className="w-5 h-5" />
              </Button>
            )}

            {groupsPathMatch && (
              <Button
                type="button"
                className="flex w-14 h-14 items-center [&_svg]:size-7 [&_svg]:mx-2 text-white justify-center bg-gradient-to-r 
            from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
            focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg rounded-full transition-colors"
              >
                <MdGroupAdd className="w-5 h-5" />
              </Button>
            )}

            {storiesPathMatch && (
              <Button
                type="button"
                className="flex w-14 h-14 items-center [&_svg]:size-7 [&_svg]:mx-2 text-white justify-center bg-gradient-to-r 
            from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
            focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg rounded-full transition-colors"
              >
                <FaCamera className="w-5 h-5" />
              </Button>
            )}
          </div>
        </div>
        {/* end div for button content */}
      </div>
    </>
  );
};
// export ContentLists functional components
export default ContentLists;
