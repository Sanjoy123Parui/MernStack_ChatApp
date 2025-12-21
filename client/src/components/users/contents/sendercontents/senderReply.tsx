import { useEffect } from "react";
import {
  // BiCheck,
  BiCheckDouble,
} from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  AiFillLike,
  // AiFillHeart
} from "react-icons/ai";
// import { FaLaughSquint, FaSmileBeam } from "react-icons/fa";
// import { FaRegFaceKissWinkHeart, FaFaceAngry } from "react-icons/fa6";
import { senderChatdropDownMenuItems } from "../../../models/senderModel.ts";
import { useSenderMenu } from "../../../hooks/senderhooks.ts";

// defining SenderReply functional component
const SenderReply: React.FC<senderChatdropDownMenuItems> = ({
  senderchatMenu,
}) => {
  // declare custom hooks for manage this component state variables
  const { senderReplyMenu, showSenderReplyMenu, hideSenderReplyMenu }: any =
    useSenderMenu();

  // declare varibles of reply
  const repliedTo: any = {
    userName: "Seimens",
    snippet: `Hey, here's the link to the doc we discussed earlier. Please review and comment.`,
  };

  const replyText: string = `Thanks — I've reviewed the doc and left a few comments. Looks good overall.`;

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
      <div className="flex items-start gap-2.5">
        {/* sender avatar content */}
        <div className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100 rounded-full dark:bg-gray-700">
          <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
        </div>

        {/* start div for wraper */}
        <div className="relative flex-shrink-0">
          <div
            className="relative bg-indigo-500 text-white p-4 border
          shadow-md rounded-lg max-w-72 sm:max-w-80 md:max-w-72 w-full"
          >
            {/* sender phone or name, drop-down option button */}
            <div className="flex items-center justify-between">
              <h2 className="text-sm md:text-base font-medium">You</h2>
              <button
                type="button"
                onClick={showSenderReplyMenu}
                className="p-1 rounded-full hover:bg-indigo-600"
              >
                <BsThreeDotsVertical className="w-5 h-5" />
              </button>
            </div>

            {/* sender replied preview content */}
            <div className="mt-2 bg-white/10 p-2 rounded-md">
              <h4 className="text-sm font-medium">{repliedTo.userName}</h4>
              <p className="text-xs font-normal">{repliedTo.snippet}</p>
            </div>

            {/* actual reply content */}
            <p className="font-normal text-sm md:text-base py-1">{replyText}</p>

            {/* sender delivery time & status */}
            <div className="flex items-center justify-end w-full sace-x-2 rtl:space-x-reverse">
              <span className="text-xs md:text-sm font-medium">11:45 AM</span>
              <span className="text-base font-medium">
                <BiCheckDouble className="w-5 h-5" />
              </span>
            </div>

            {/* sender drop-down menu options */}
            {senderReplyMenu && (
              <div className="absolute top-12 right-4 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {senderchatMenu.map((item: any, index: any) => (
                    <li key={index}>
                      <a
                        onClick={hideSenderReplyMenu}
                        className="block px-4 py-2 hover:bg-gray-100
                    dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* sender likes content */}
          <span className="absolute -bottom-0.5 -left-0.5 w-5 h-5 rounded-full bg-slate-50 ring-2 shadow-md ring-slate-50">
            <AiFillLike className="w-4 h-4 text-blue-700 my-[2px] mx-auto" />
            {/* <AiFillHeart className="w-4 h-4 text-pink-700 my-[2px] mx-auto" /> */}
            {/* <FaLaughSquint className="w-4 h-4 text-yellow-300 bg-black rounded-full my-[2px] mx-auto" /> */}
            {/* <FaSmileBeam className="w-4 h-4 text-yellow-300 bg-black rounded-full my-[2px] mx-auto" /> */}
            {/* <FaRegFaceKissWinkHeart className="w-4 h-4 text-red-600 bg-yellow-300 rounded-full my-[2px] mx-auto" /> */}
            {/* <FaFaceAngry className="w-4 h-4 text-red-600 bg-black rounded-full my-[2px] mx-auto" /> */}
          </span>
        </div>
        {/* end div */}
      </div>
    </>
  );
};

// exporting SenderReply component
export default SenderReply;
