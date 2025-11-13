import {
  // BiCheck,
  BiCheckDouble,
} from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
import { LuAudioLines } from "react-icons/lu";
import { senderChatdropDownMenuItems } from "../../../models/senderModel.ts";
import { useSenderMenu } from "../../../hooks/senderhooks.ts";

// defining SenderVoiceMessage functional component
const SenderVoiceMessage: React.FC<senderChatdropDownMenuItems> = ({
  senderchatMenu,
}) => {
  // declare custom hooks for manage this component state variables
  const { senderVoiceMenu, showSenderVoiceMenu, hideSenderVoiceMenu }: any =
    useSenderMenu();

  return (
    <>
      <div className="flex items-start gap-2.5">
        {/* sender avatar content */}
        <div
          className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100
        rounded-full dark:bg-gray-700"
        >
          <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
        </div>

        {/* start div for wrapper content */}
        <div className="relative flex-shrink-0">
          {/* start sender voice message content */}
          <div
            className="relative bg-indigo-500 text-white p-4 border shadow-md
        rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
          >
            {/*Sender phone or name */}
            <div className="flex items-center justify-between">
              <h2 className="text-sm md:text-lg font-medium">You</h2>
              <button
                type="button"
                onClick={showSenderVoiceMenu}
                className="p-1 rounded-full hover:bg-indigo-600"
              >
                <BsThreeDotsVertical className="w-5 h-5" />
              </button>
            </div>
            {/* <h1 className="text-sm md:text-lg font-medium">You</h1> */}
            {/* start voice message content */}
            <div className="flex items-center space-x-2 py-1">
              {/* voice message button start */}
              <button className="inline-flex self-center items-center p-2">
                <BsPlayFill className="text-base md:text-3xl font-normal" />
              </button>
              {/* voice message button end */}

              {/* start voice effect wave */}
              <div className="flex items-center space-x-[-4px]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <LuAudioLines
                    key={i}
                    className="text-base md:text-3xl font-normal"
                  />
                ))}
              </div>
              {/* end voice effect wave */}

              {/* duration */}
              <span className="text-xs md:text-sm font-normal">3:02</span>
            </div>
            {/* end voice message content */}

            {/* delivery content start */}
            <div className="flex items-center justify-end w-full space-x-2 rtl:space-x-reverse">
              <span className="text-xs md:text-sm font-normal">07:35 PM</span>
              {/* <span className="text-sm font-normal"><BiCheck /></span> */}
              <span className="text-base font-normal">
                <BiCheckDouble className="w-5 h-5" />
              </span>
            </div>
            {/* delivery content end */}

            {/* start sender voice content dropdown menu */}
            {senderVoiceMenu && (
              <div className="absolute top-12 right-4 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {senderchatMenu.map((item: any, index: any) => (
                    <li key={index}>
                      <a
                        onClick={hideSenderVoiceMenu}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* end sender voice content dropdown menu */}
          </div>
          {/* end voice */}

          {/* sender like content */}
          <span className="absolute -bottom-0.5 -left-0.5 w-5 h-5 rounded-full bg-white ring-2 shadow-md ring-white">
            <AiFillLike className="w-4 h-4 text-blue-700  mx-auto" />
          </span>
        </div>
        {/* end div */}
      </div>
    </>
  );
};
// exporting SenderVoiceMessage component
export default SenderVoiceMessage;
