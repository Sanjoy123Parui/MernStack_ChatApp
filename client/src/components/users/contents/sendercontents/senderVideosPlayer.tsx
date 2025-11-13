import {
  // BiCheck,
  BiCheckDouble,
} from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { senderChatdropDownMenuItems } from "../../../models/senderModel.ts";
import { useSenderMenu } from "../../../hooks/senderhooks.ts";

// defining SenderVideosPlayer functional component
const SenderVideosPlayer: React.FC<senderChatdropDownMenuItems> = ({
  senderchatMenu,
}) => {
  const src: any = `../../../src/assets/videos/nature.mp4`;
  const caption: string = `This is a caption for the video`;

  // declare custom hooks for manage this component state variables
  const {
    senderVideosPlayerMenu,
    showSenderVideosPlayerMenu,
    hideSenderVideosPlayerMenu,
  }: any = useSenderMenu();

  return (
    <>
      <div className="flex items-start gap-2.5">
        {/* sender avatar content */}
        <div
          className="w-10 h-10 overflow-hidden border-white border-[2px]
        font-bold bg-gray-100 rounded-full dark:bg-gray-700"
        >
          <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
        </div>

        {/* start div wrapper */}
        <div className="relative flex-shrink-0">
          {/* start sender video player content */}
          <div
            className="relative bg-indigo-500 text-white p-4 border shadow-md
        rounded-lg max-w-72 sm:max-w-80 md:max-w-72 w-full"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-sm md:text-base font-medium">You</h2>
              <button
                type="button"
                onClick={showSenderVideosPlayerMenu}
                className="p-1 rounded-full hover:bg-indigo-600"
              >
                <BsThreeDotsVertical className="w-5 h-5" />
              </button>
            </div>

            {/* sender video player content */}
            <div className="py-1 relative flex flex-col items-center">
              <div className="relative w-full flex justify-center">
                <video
                  src={src}
                  className="w-full h-auto object-cover max-h-72 min-h-72
                rounded-lg border border-white"
                  controls={false}
                  tabIndex={-1}
                />
                <button
                  type="button"
                  className="absolute inset-0 flex items-center
              justify-center focus:outline-none pointer-events-auto"
                >
                  <FaRegCirclePlay
                    className="w-16 h-16 text-white bg-black
                bg-opacity-40 rounded-full p-2 transition-opacity duration-200 opacity-100"
                  />
                </button>
              </div>
              <p className="py-1 text-sm md:text-base font-normal mr-14 sm:mr-14 md:mr-8">
                {caption}
              </p>
            </div>

            {/* start sender video delivery time zone */}
            <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
              <span className="text-xs md:text-sm font-medium">10:51 AM</span>
              <span className="text-base font-medium">
                <BiCheckDouble className="w-5 h-5" />
              </span>
            </div>
            {/* end sender video delivery time zone */}

            {/* start drop down menu of sender video content */}
            {senderVideosPlayerMenu && (
              <div
                className="absolute top-12 right-4 z-10 bg-white divide-y
            divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {senderchatMenu.map((item: any, index: any) => (
                    <li key={index}>
                      <a
                        onClick={hideSenderVideosPlayerMenu}
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
            {/* end drop down menu of sender video content */}
          </div>
          {/* end sender video player content */}

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

// exporting SenderVideosPlayer component
export default SenderVideosPlayer;
