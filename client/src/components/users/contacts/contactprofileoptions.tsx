import { useEffect } from "react";
import { useUserSettingToggleContext } from "../../../hooks/contexts/userSettingContexts.ts";

// define Contactprofileoptions component
const Contactprofileoptions: React.FC = () => {
  // declare custom hooks to destruct data
  const { isThemes }: any = useUserSettingToggleContext();

  //  declare variables for contactOprtionLists
  const contactOptions: any = [
    {
      item_title: `Mute`,
      item_desc: `Here muted contact profile`,
    },

    {
      item_title: `Block`,
      item_desc: `Contact has been blocked here`,
    },

    {
      item_title: `Report`,
      item_desc: `If spam contact there has been reported`,
    },
  ];

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
      <ul className="max-w-lg mx-auto space-y-4 py-2">
        {contactOptions.map((option: any, i: any) => (
          <li
            key={i}
            className={`py-4 lg:py-3 px-6 lg:px-4 cursor-pointer ${
              !isThemes
                ? `text-gray-700 dark:text-black hover:bg-gray-100 
                dark:hover:bg-gray-700`
                : `text-slate-100 dark:text-white hover:bg-gray-400 
                    dark:hover:bg-black/5`
            } rounded-lg transition-all`}
          >
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-1 min-w-0">
                <h4 className="text-sm md:text-base font-medium truncate">
                  {option.item_title}
                </h4>
                <p className="text-xs sm:text-sm truncate">
                  {option.item_desc}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
// exporting Contactprofileoptions component
export default Contactprofileoptions;
