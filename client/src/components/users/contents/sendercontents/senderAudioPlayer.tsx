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
import { MdAudioFile } from "react-icons/md";
import { BsPlayFill } from "react-icons/bs";
import { LuAudioLines } from "react-icons/lu";

// import { senderChatdropDownMenuItems } from "../../../models/senderModel.ts";
// import { useSenderMenu } from "../../../hooks/senderhooks.ts";
import { senderChatdropDownMenuItems } from "../../../../models/senderModel.ts";
import { useSenderMenu } from "../../../../hooks/senderhooks.ts";

// defining SenderAudioPlayer functional component
const SenderAudioPlayer: React.FC<senderChatdropDownMenuItems> = ({
  senderchatMenu,
}) => {
  const caption: string = `This is a caption for the audio.`;

  // declare custom hooks for manage this component state variables
  const { senderAudioMenu, showSenderAudioMenu, hideSenderAudioMenu }: any =
    useSenderMenu();

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

        {/* start div wrapper */}
        <div className="relative flex-shrink-0">
          <div
            className="relative bg-indigo-500 text-white p-4 border shadow-md
        rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
          >
            {/* sender phone or name, drop-down menu button */}
            <div className="flex items-center justify-between">
              <h2 className="text-sm md:text-base font-medium">You</h2>
              <button
                type="button"
                onClick={showSenderAudioMenu}
                className="p-1 rounded-full hover:bg-indigo-600"
              >
                <BsThreeDotsVertical className="w-5 h-5" />
              </button>
            </div>

            {/* audio content of sender  */}
            <div className="flex items-center space-x-2 py-1">
              {/* styled audio file icon */}
              <div
                className="w-10 h-10 flex items-center justify-center bg-white
            rounded-lg text-red-600 flex-shrink-0"
              >
                <MdAudioFile className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
              </div>
              {/* audio play or pause button option */}
              <button
                type="button"
                className="inline-flex self-center items-center p-2"
              >
                <BsPlayFill className="text-lg md:text-3xl font-normal" />
              </button>

              {/*audio effect wave line */}
              <div className="flex items-center space-x-[-4px]">
                {Array.from({ length: 5 }).map((_: any, i: any) => (
                  <LuAudioLines
                    key={i}
                    className="text-lg md:text-3xl font-normal"
                  />
                ))}
              </div>
              {/* duration */}
              <span className="text-xs md:text-sm font-normal">5:00</span>
            </div>

            <p className="py-[2px] text-sm md:text-base font-normal">
              {caption}
            </p>

            {/* sender delivery time zone */}
            <div className="flex items-center justify-end w-full space-x-2 rtl:space-x-reverse">
              <span className="text-xs md:text-sm font-normal">11:45 AM</span>
              <span className="text-base font-normal">
                <BiCheckDouble className="w-5 h-5" />
              </span>
            </div>

            {/* drop-down menu options */}
            {senderAudioMenu && (
              <div
                className="absolute top-12 right-4 z-10 bg-white divide-y
            divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {senderchatMenu.map((item: any, index: any) => (
                    <li key={index}>
                      <a
                        onClick={hideSenderAudioMenu}
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
// exporting SenderAudioPlayer component
export default SenderAudioPlayer;
