import { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import {
  AiFillLike,
  // AiFillHeart
} from "react-icons/ai";
// import { FaLaughSquint, FaSmileBeam } from "react-icons/fa";
// import { FaRegFaceKissWinkHeart, FaFaceAngry } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsPlayFill } from "react-icons/bs";
import { LuAudioLines } from "react-icons/lu";

// import { recieverChatdropDownMenuItems } from "../../../models/recieverModel.ts";
// import { useRecieverMenu } from "../../../hooks/recieverhooks.ts";
import { recieverChatdropDownMenuItems } from "../../../../models/recieverModel.ts";
import { useRecieverMenu } from "../../../../hooks/recieverhooks.ts";

// defining RecieverVoiceMessage functional component
const RecieverVoiceMessage: React.FC<recieverChatdropDownMenuItems> = ({
  recieverchatMenu,
}) => {
  // declare custom hooks for manage this component state variables
  const {
    recieverVoiceMenu,
    showRecieverVoiceMenu,
    hideRecieverVoiceMenu,
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
          {/* start reciever voice-message content */}
          <div
            className="relative bg-white text-black p-4 border shadow-md
        rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
          >
            {/* reciever name or phone */}
            <div className="flex items-center justify-between">
              <h2 className="text-sm md:text-base font-medium">You</h2>
              <button
                type="button"
                onClick={showRecieverVoiceMenu}
                className="p-1 rounded-full hover:bg-gray-300"
              >
                <BsThreeDotsVertical className="w-5 h-5" />
              </button>
            </div>

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
            </div>
            {/* delivery content end */}

            {/* reciever voice drop-down menu */}
            {recieverVoiceMenu && (
              <div
                className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
              rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {recieverchatMenu.map((item: any, index: any) => (
                    <li key={index}>
                      <a
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={hideRecieverVoiceMenu}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* end reciever voice dropdown menu */}
          </div>
          {/* end voice message */}

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
          className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold
          bg-gray-100 rounded-full dark:bg-gray-700"
        >
          <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
        </div>
      </div>
    </>
  );
};
// exporting RecieverVoiceMessage component
export default RecieverVoiceMessage;
