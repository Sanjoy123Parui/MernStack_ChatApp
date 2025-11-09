import { MdBrightness6 } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { BiSolidConversation } from "react-icons/bi";
import { AiFillSound } from "react-icons/ai";
import { Switch } from "../../ui/switch.tsx";
import { userAccessoriesItems } from "../../models/settingsModel.ts";
import { useUserSettingToggleContext } from "../../hooks/contexts/userSettingContexts.ts";

// here was define user Settings functional component
const Settings: React.FC = () => {
  const { isThemes, handleThemes }: any = useUserSettingToggleContext();

  // here was declare list Items of user settings
  const userAccessfierItems: userAccessoriesItems[] = [
    {
      itemIcon: (
        // <MdBrightness6
        //   className="w-8 h-12 text-sm text-gray-400
        // p-[2px] mx-1"
        // />
        <MdBrightness6
          className={`w-8 h-12 text-sm ${
            !isThemes ? `text-gray-400` : `text-white`
          } 
        p-[2px] mx-1`}
        />
      ),
      itemName: "Themes",
      itemDesc: "Background theme color",
      itemEventOptions: (
        // <Switch
        //   onClick={handleThemes}
        //   className="data-[state=checked]:bg-emerald-400
        //         data-[state=unchecked]:bg-gray-400"
        // />
        <Switch
          onClick={handleThemes}
          className={`${
            !isThemes
              ? `data-[state=unchecked]:bg-gray-400`
              : `data-[state=checked]:bg-emerald-400`
          }`}
        />
      ),
    },

    {
      itemIcon: (
        // <IoMdNotifications
        //   className="w-8 h-12 text-sm text-gray-400
        // p-[2px] mx-1"
        // />
        <IoMdNotifications
          className={`w-8 h-12 text-sm ${
            !isThemes ? `text-gray-400` : `text-white`
          } 
        p-[2px] mx-1`}
        />
      ),
      itemName: "Incomming notification",
      itemDesc: "Incomming notification sound",
      itemEventOptions: (
        // <Switch
        //   className="data-[state=checked]:bg-emerald-400
        //         data-[state=unchecked]:bg-gray-400"
        // />
        <Switch
          className={`${
            !isThemes
              ? `data-[state=unchecked]:bg-gray-400`
              : `data-[state=checked]:bg-emerald-400`
          }`}
        />
      ),
    },

    {
      itemIcon: (
        // <BiSolidConversation
        //   className="w-8 h-12 text-sm text-gray-400
        // p-[2px] mx-1"
        // />
        <BiSolidConversation
          className={`w-8 h-12 text-sm ${
            !isThemes ? `text-gray-400` : `text-white`
          } 
        p-[2px] mx-1`}
        />
      ),
      itemName: "Converation notification",
      itemDesc: "Conversation notification sound",
      itemEventOptions: (
        // <Switch
        //   className="data-[state=checked]:bg-emerald-400
        //         data-[state=unchecked]:bg-gray-400"
        // />
        <Switch
          className={`${
            !isThemes
              ? `data-[state=unchecked]:bg-gray-400`
              : `data-[state=checked]:bg-emerald-400`
          }`}
        />
      ),
    },

    {
      itemIcon: (
        // <AiFillSound
        //   className="w-8 h-12 text-sm text-gray-400
        // p-[2px] mx-1"
        // />
        <AiFillSound
          className={`w-8 h-12 text-sm ${
            !isThemes ? `text-gray-400` : `text-white`
          } 
        p-[2px] mx-1`}
        />
      ),
      itemName: "Typing Sound",
      itemDesc: "Text typing sound into the chats",
      itemEventOptions: (
        // <Switch
        //   className="data-[state=checked]:bg-emerald-400
        //         data-[state=unchecked]:bg-gray-400"
        // />
        <Switch
          className={`${
            !isThemes
              ? `data-[state=unchecked]:bg-gray-400`
              : `data-[state=checked]:bg-emerald-400`
          }`}
        />
      ),
    },
  ];

  return (
    <>
      {userAccessfierItems.map((items, i) => (
        <li key={i} className="py-4 lg:py-3 mt-8">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* start this div for icons */}
            <div className="shrink-0">
              <div className="w-10 h-10 overflow-hidden">{items.itemIcon}</div>
            </div>
            {/* end div for icons */}

            {/* start div for settings content name and abouts */}
            <div className="flex-1 min-w-0">
              {/* <h4 className="text-sm md:text-base font-medium truncate dark:text-black"> */}
              <h4
                className={`text-sm md:text-base ${
                  !isThemes
                    ? `text-gray-700 dark:text-black`
                    : `text-slate-100 dark:text-white`
                } font-medium truncate`}
              >
                {items.itemName}
              </h4>
              <p
                className={`text-sm ${
                  !isThemes
                    ? `text-gray-500 dark:text-gray-400`
                    : `text-slate-200 dark:text-white/10`
                } truncate`}
              >
                {items.itemDesc}
              </p>
            </div>
            {/* start div for settings content name and abouts */}

            {/* start div for toggle buttons */}
            <div className="inline-flex px-4">{items.itemEventOptions}</div>
            {/* end div for toggle buttons */}
          </div>
        </li>
      ))}
    </>
  );
};

// here export Settings component
export default Settings;
