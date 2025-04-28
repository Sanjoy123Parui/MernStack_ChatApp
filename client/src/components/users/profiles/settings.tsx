import { useState } from 'react';
import { MdBrightness6 } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { BiSolidConversation } from "react-icons/bi";
import { AiFillSound } from "react-icons/ai";
import { Switch } from "../../ui/switch.tsx";
import { userAccessbilityItems } from "../../models/accessModel.ts";

// here was define user Settings functional component
const Settings: React.FC = () => {

    // here was declare useState hook
    const [userAccessfierItem] = useState<userAccessbilityItems[]>([
        {
            itemIcon: <MdBrightness6 className="w-8 h-12 text-sm text-gray-400 p-[2px] mx-1" />,
            itemName: "Themes",
            itemDesc: "System themes background color changes"
        },
        {
            itemIcon: <IoMdNotifications className="w-8 h-12 text-sm text-gray-400 p-[2px] mx-1" />,
            itemName: "Incomming notification",
            itemDesc: "Incomming notification sound changes"
        },
        {
            itemIcon: <BiSolidConversation className="w-8 h-12 text-sm text-gray-400 p-[2px] mx-1" />,
            itemName: "Converation notification",
            itemDesc: "Conversation notification sound changes"
        },
        {
            itemIcon: <AiFillSound className="w-8 h-12 text-sm text-gray-400 p-[2px] mx-1" />,
            itemName: "Typing Sound",
            itemDesc: "Text typing sound into the chats"
        },
    ]);

    return (
        <>
            {/* here was start list content */}
            <ul className="max-w-lg ">
                {userAccessfierItem.map((items, i) => (
                    <li key={i} className="py-4 lg:py-6">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="shrink-0">
                                <div className="w-10 h-10 overflow-hidden">
                                    {items.itemIcon}
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm md:text-base font-medium truncate text-gray-800 dark:text-black">
                                    {items.itemName}
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {items.itemDesc}
                                </p>
                            </div>
                            <div>
                                <Switch className="data-[state=checked]:bg-emerald-400 data-[state=unchecked]:bg-gray-400" />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {/* end list content */}
        </>
    );
}

// here export Settings component
export default Settings;
