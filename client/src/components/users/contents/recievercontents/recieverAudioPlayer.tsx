import { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import {
  AiFillLike,
  // AiFillHeart
} from "react-icons/ai";
// import { FaLaughSquint, FaSmileBeam } from "react-icons/fa";
// import { FaRegFaceKissWinkHeart, FaFaceAngry } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdAudioFile } from "react-icons/md";
import { BsPlayFill } from "react-icons/bs";
import { LuAudioLines } from "react-icons/lu";
import { recieverChatdropDownMenuItems } from "../../../models/recieverModel.ts";
import { useRecieverMenu } from "../../../hooks/recieverhooks.ts";

// defining RecieverAudioPlayer functional component
const RecieverAudioPlayer: React.FC<recieverChatdropDownMenuItems> = ({
  recieverchatMenu,
}) => {
  const caption: string = `This is a caption for the audio.`;

  // declare custom hooks for manage this component state variables
  const {
    recieverAudioMenu,
    showRecieverAudioMenu,
    hideRecieverAudioMenu,
  }: any = useRecieverMenu();

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
          <div
            className="relative bg-white text-black p-4 border shadow-md
        rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
          >
            {/* reciever phone or name, drop-down option button */}
            <div className="flex items-center justify-between">
              <h2 className="text-sm md:text-base font-medium">You</h2>
              <button
                type="button"
                onClick={showRecieverAudioMenu}
                className="p-1 rounded-full hover:bg-gray-300"
              >
                <BsThreeDotsVertical className="w-5 h-5" />
              </button>
            </div>

            {/* audio content of reciever */}
            <div className="flex items-center space-x-2 py-1">
              {/* audio songs file icon */}
              <div
                className="w-10 h-10 flex items-center bg-white/40 rounded-lg
              justify-center text-red-600 flex-shrink-0"
              >
                <MdAudioFile className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
              </div>

              {/* audio play or pause button */}
              <button
                type="button"
                className="inline-flex self-center items-center p-2"
              >
                <BsPlayFill className="text-lg md:text-3xl font-normal" />
              </button>

              {/* audio effect wave line */}
              <div className="flex items-center space-x-[-4px]">
                {Array.from({ length: 5 }).map((_: any, i: any) => (
                  <LuAudioLines
                    key={i}
                    className="text-lg md:text-3xl font-normal"
                  />
                ))}
              </div>

              {/* duration */}
              <span className="text-xs md:text-sm font-normal">4:00</span>
            </div>

            <p className="py-[2px] text-sm md:text-base font-normal">
              {caption}
            </p>

            {/* reciever delivery time zone */}
            <div className="flex items-center justify-end w-full space-x-2 rtl:space-x-reverse">
              <span className="text-xs md:text-sm font-normal">11:45 AM</span>
            </div>

            {/* reciever drop-down menu */}
            {recieverAudioMenu && (
              <div
                className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
              rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {recieverchatMenu.map((item: any, index: any) => (
                    <li key={index}>
                      <a
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={hideRecieverAudioMenu}
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
// exporting RecieverAudioPlayer component
export default RecieverAudioPlayer;
