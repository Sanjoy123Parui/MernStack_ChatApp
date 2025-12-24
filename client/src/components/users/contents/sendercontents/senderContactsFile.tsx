import { useEffect } from "react";
import {
  // BiCheck,
  BiCheckDouble,
} from "react-icons/bi";
import { FaUser, FaUserPlus } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  AiFillLike,
  // AiFillHeart
} from "react-icons/ai";
// import { FaLaughSquint, FaSmileBeam } from "react-icons/fa";
// import { FaRegFaceKissWinkHeart, FaFaceAngry } from "react-icons/fa6";

// import { senderChatdropDownMenuItems } from "../../../models/senderModel.ts";
// import { useSenderMenu } from "../../../hooks/senderhooks.ts";
import { senderChatdropDownMenuItems } from "../../../../models/senderModel.ts";
import { useSenderMenu } from "../../../../hooks/senderhooks.ts";

// defining senderContactsFile functional component
const SenderContactsFile: React.FC<senderChatdropDownMenuItems> = ({
  senderchatMenu,
}) => {
  const contactInfo: any = {
    userName: "Neil Sims",
    userPhone: "9277764011",
  };

  // declare custom hooks for manage this component state variables
  const {
    senderContactfileMenu,
    showSenderContactfileMenu,
    hideSenderContactfileMenu,
  }: any = useSenderMenu();

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

        {/* start div for wrapper */}
        <div className="relative flex-shrink-0">
          <div
            className="relative bg-indigo-500 text-white p-4 border
          shadow-md rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
          >
            {/* sender contact phone or name, drop-down menu button */}
            <div className="flex items-center justify-between">
              <h2 className="text-sm md:text-base font-medium">You</h2>
              <button
                type="button"
                onClick={showSenderContactfileMenu}
                className="p-1 rounded-full hover:bg-indigo-600"
              >
                <BsThreeDotsVertical className="w-5 h-5" />
              </button>
            </div>

            {/* sender addtocontact content */}
            <div className="mt-1">
              <div className="flex flex-row items-center bg-white/10 p-3 rounded-lg gap-3">
                {/* contact avatar (compact) */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 overflow-hidden rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 dark:bg-gray-700">
                  <FaUser className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400" />
                </div>

                {/* contact phone and name */}
                <div className="flex-1 min-w-0 ml-3">
                  <h4 className="text-sm md:text-lg font-semibold truncate">
                    {contactInfo.userName}
                  </h4>
                  <p className="text-xs md:text-sm font-medium truncate">
                    {contactInfo.userPhone}
                  </p>
                </div>

                {/* contact add button content (compact, not full-width) */}
                <div className="ml-4 flex items-center gap-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-white text-indigo-600 font-semibold text-sm hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    <FaUserPlus className="w-4 h-4" />
                    <span className="text-sm">Add</span>
                  </button>
                </div>
              </div>
            </div>

            {/* sender delivery time zone */}
            <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse mt-3">
              <span className="text-xs md:text-sm font-medium">11:45 AM</span>
              <span className="text-base font-medium">
                <BiCheckDouble className="w-5 h-5" />
              </span>
            </div>

            {/* sender drop-down menu */}
            {senderContactfileMenu && (
              <div className="absolute top-12 right-4 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {senderchatMenu.map((item: any, index: any) => (
                    <li key={index}>
                      <a
                        onClick={hideSenderContactfileMenu}
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
// exporting senderContactsFile component
export default SenderContactsFile;
