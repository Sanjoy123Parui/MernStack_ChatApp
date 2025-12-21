import { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import {
  AiFillLike,
  // AiFillHeart
} from "react-icons/ai";
// import { FaLaughSquint, FaSmileBeam } from "react-icons/fa";
// import { FaRegFaceKissWinkHeart, FaFaceAngry } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { recieverChatdropDownMenuItems } from "../../../models/recieverModel.ts";
import { useRecieverMenu } from "../../../hooks/recieverhooks.ts";

// defining RecieverReply functional component
const RecieverReply: React.FC<recieverChatdropDownMenuItems> = ({
  recieverchatMenu,
}) => {
  // declare variable for reply reciever
  const repliedTo: any = {
    userName: "You",
    snippet: `Hey, here's the link to the doc we discussed earlier. Please review and comment.`,
  };
  const replyText: string = `Thanks — I've reviewed the doc and left a few comments. Looks good overall.`;

  // declare custom hooks for manage this component state variables
  const {
    recieverReplyMenu,
    showRecieverReplyMenu,
    hideRecieverReplyMenu,
  }: any = useRecieverMenu();

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
        {/* start div for wrapper */}
        <div className="relative flex-shrink-0">
          {/* reciever phone or name, drop-down menu button */}
          <div
            className="relative bg-white text-black p-4 border shadow-md
        rounded-lg max-w-72 sm:max-w-80 md:max-w-72 w-full"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-sm md:text-base font-medium">Neil Sims</h2>
              <button
                type="button"
                onClick={showRecieverReplyMenu}
                className="p-1 rounded-full hover:bg-gray-300"
              >
                <BsThreeDotsVertical className="w-5 h-5" />
              </button>
            </div>

            {/* reciever reply preview content*/}
            <div className="mt-2 bg-black/5 p-2 rounded-md">
              <h4 className="text-sm font-medium">{repliedTo.userName}</h4>
              <p className="text-xs font-normal">{repliedTo.snippet}</p>
            </div>

            {/* actual reply content */}
            <p className="font-normal text-sm md:text-base py-1">{replyText}</p>

            {/* reciever delivery time zone */}
            <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
              <span className="text-xs md:text-sm font-medium">11:45 AM</span>
            </div>

            {/* reciever drop-down menu */}
            {recieverReplyMenu && (
              <div
                className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
              rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {recieverchatMenu.map((item: any, index: any) => (
                    <li key={index}>
                      <a
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={hideRecieverReplyMenu}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* reciever like content */}
          <span className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-slate-50 ring-2 shadow-md ring-slate-50">
            <AiFillLike className="w-4 h-4 text-blue-700 my-[2px]  mx-auto" />
            {/* <AiFillHeart className="w-4 h-4 text-pink-700 my-[2px] mx-auto" /> */}
            {/* <FaLaughSquint className="w-4 h-4 text-yellow-300 bg-black rounded-full my-[2px] mx-auto" /> */}
            {/* <FaSmileBeam className="w-4 h-4 text-yellow-300 bg-black rounded-full my-[2px] mx-auto" /> */}
            {/* <FaRegFaceKissWinkHeart className="w-4 h-4 text-red-600 bg-yellow-300 rounded-full my-[2px] mx-auto" /> */}
            {/* <FaFaceAngry className="w-4 h-4 text-red-600 bg-black rounded-full my-[2px] mx-auto" /> */}
          </span>
        </div>
        {/* end div */}

        {/* reciever avatar content */}
        <div
          className="w-10 h-10 overflow-hidden border-white border-[2px]
        font-bold bg-gray-100 rounded-full dark:bg-gray-700"
        >
          <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
        </div>
      </div>
    </>
  );
};
// exporting RecieverReply component
export default RecieverReply;
