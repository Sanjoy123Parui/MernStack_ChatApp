import {
  // BiCheck,
  BiCheckDouble,
} from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { senderChatdropDownMenuItems } from "../../../models/senderModel.ts";
import { useSenderMenu } from "../../../hooks/senderhooks.ts";

// defining SenderTextMessage functional component
const SenderTextMessage: React.FC<senderChatdropDownMenuItems> = ({
  senderchatMenu,
}) => {
  const messages: string = `Hi`;

  // declare custom hooks for manage this component state variables
  const { senderTextMenu, showSenderTextMenu, hideSenderTextMenu }: any =
    useSenderMenu();

  return (
    <>
      <div className="flex items-start gap-2.5">
        {/* sender avatar content */}
        <div
          className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold 
          bg-gray-100 rounded-full dark:bg-gray-700"
        >
          <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
        </div>

        {/* start div for wrapper */}
        <div className="relative flex-shrink-0">
          {/* start sender text-message content */}
          <div
            className="relative bg-indigo-500 text-white p-4 border
          shadow-md rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
          >
            {/*Sender phone or name */}
            <div className="flex items-center justify-between">
              <h2 className="text-sm md:text-base font-medium">You</h2>
              <button
                type="button"
                className="p-1 rounded-full hover:bg-indigo-600"
                onClick={showSenderTextMenu}
              >
                <BsThreeDotsVertical className="w-5 h-5" />
              </button>
            </div>
            {/* text messages */}
            <p className="font-normal text-sm md:text-base py-1">{messages}</p>

            {/* start sender text message dilivery time */}
            <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
              <span className="text-xs md:text-sm font-medium">11:46 PM</span>
              <span className="text-base font-medium">
                <BiCheckDouble className="w-5 h-5" />
              </span>
            </div>
            {/* end sender text message dilivery time */}

            {/* start dropdown menu of sender text message content */}
            {senderTextMenu && (
              <div className="absolute top-12 right-4 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {senderchatMenu.map((item: any, index: any) => (
                    <li key={index}>
                      <a
                        onClick={hideSenderTextMenu}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* end dropdown menu sender text message */}
          </div>
          {/* end text-message */}

          {/* sender like content */}
          <span className="absolute -bottom-0.5 -left-0.5 w-5 h-5 rounded-full bg-white ring-2 shadow-md ring-white">
            <AiFillLike className="w-4 h-4 text-blue-700 mx-auto" />
          </span>
        </div>
        {/* end div for wrapper */}
      </div>
    </>
  );
};

// exporting SenderTextMessage component
export default SenderTextMessage;
