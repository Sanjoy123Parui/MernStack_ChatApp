import { useEffect } from "react";
import { useUserSettingToggleContext } from "../../../hooks/contexts/userSettingContexts.ts";

// define Groupsadditional component
const Groupsadditional: React.FC = () => {
  // destruct data from custom hooks
  const { isThemes }: any = useUserSettingToggleContext();

  // declare variables for groups additional items
  const groupsAddInfo: any = [
    {
      item_title: `Groups name`,
      item_desc: `Codergang`,
    },

    {
      item_title: `Abouts`,
      item_desc: `Here only discussion for coding related topic and projects related topics`,
    },
  ];

  // here will be appear useEffect hook
  useEffect(() => {
    // here was component mount
    const intervalId: any = setInterval(() => {}, 1000);

    // here was component will unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <ul
        className={`p-4 ${
          !isThemes ? `text-gray-700` : `text-slate-50`
        } space-y-4`}
      >
        {groupsAddInfo.map((info: any, i: any) => (
          <li key={i} className="py-2">
            <h4 className="font-bold text-sm lg:text-lg">{info.item_title}</h4>
            <p className="mt-1 font-medium text-sm md:text-base">
              {info.item_desc}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

// exporting the Groupsadditional component
export default Groupsadditional;
