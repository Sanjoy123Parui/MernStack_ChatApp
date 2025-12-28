import { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useUserSettingToggleContext } from "../../../hooks/contexts/userSettingContexts.ts";

// dedine Groupsmemebers component
const Groupsmembers: React.FC = () => {
  // destruct data from custom hooks
  const { isThemes }: any = useUserSettingToggleContext();

  // declare variables for groupmembers
  const groupsMemberList: any = [
    {
      avatar: (
        <FaUser
          className="w-8 h-12 sm:w-10 sm:h-16 text-gray-400 
                  p-[2px] mx-[5px]"
        />
      ),
      userName: `John Doe`,
      abouts: `I like singing`,
    },

    {
      avatar: (
        <FaUser
          className="w-8 h-12 sm:w-10 sm:h-16 text-gray-400 
                  p-[2px] mx-[5px]"
        />
      ),
      userName: `Adrina tennims`,
      abouts: `Everyday is good and postive`,
    },

    {
      avatar: (
        <FaUser
          className="w-8 h-12 sm:w-10 sm:h-16 text-gray-400 
                  p-[2px] mx-[5px]"
        />
      ),
      userName: `Ajay`,
      abouts: `Kaha pe kho jaye`,
    },

    {
      avatar: (
        <FaUser
          className="w-8 h-12 sm:w-10 sm:h-16 text-gray-400 
                  p-[2px] mx-[5px]"
        />
      ),
      userName: `Anjali`,
      abouts: `Ek cup chai ho jaye`,
    },

    {
      avatar: (
        <FaUser
          className="w-8 h-12 sm:w-10 sm:h-16 text-gray-400 
                  p-[2px] mx-[5px]"
        />
      ),
      userName: `Suhansu`,
      abouts: `Life is part of game and I am a player`,
    },
  ];

  // here can appear useEffect hook
  useEffect(() => {
    // here was component mount
    const intervalId: any = setInterval(() => {}, 1000);

    // here component will unmount with cleanup
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <ul className="max-w-lg mx-auto space-y-6">
        {groupsMemberList.map((member: any, i: any) => (
          <li
            key={i}
            className={`py-4 lg:py-3 px-6 lg:px-4 cursor-pointer ${
              !isThemes
                ? `hover:bg-gray-100 dark:hover:bg-gray-700`
                : `hover:bg-gray-400 dark:hover:bg-black/5`
            } rounded-lg transition-all`}
          >
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              {/* start div for avatar content */}
              <div className="shrink-0">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 overflow-hidden 
                bg-gray-100 rounded-full dark:bg-gray-600"
                >
                  {member.avatar}
                </div>
              </div>
              {/* end div */}

              {/* start div for usersName and abouts */}
              <div className="flex-1 min-w-0">
                <h4
                  className={`text-sm md:text-base ${
                    !isThemes
                      ? `text-gray-700 dark:text-black`
                      : `text-slate-100 dark:text-white`
                  } font-medium truncate`}
                >
                  {member.userName}
                </h4>
                <p
                  className={`text-xs sm:text-sm ${
                    !isThemes
                      ? `text-gray-500 dark:text-gray-400`
                      : `text-slate-200 dark:text-white/10`
                  } truncate`}
                >
                  {member.abouts}
                </p>
              </div>
              {/* end div */}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

// exporting Groupsmembers component
export default Groupsmembers;
