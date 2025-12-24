import { useEffect } from "react";
import {
  // BiCheck,
  BiCheckDouble,
} from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
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

// defining SenderVideosGallery functional component
const SenderVideosGallery: React.FC<senderChatdropDownMenuItems> = ({
  senderchatMenu,
}) => {
  const caption: string = `This is the caption for the video`;

  const videos: any = [
    {
      id: 1,
      src: "../../../src/assets/videos/nature.mp4",
    },
    {
      id: 2,
      src: "../../../src/assets/videos/nature.mp4",
    },
    {
      id: 3,
      src: "../../../src/assets/videos/nature.mp4",
    },
    {
      id: 4,
      src: "../../../src/assets/videos/nature.mp4",
    },
  ];

  // declare custom hooks for manage this component state variables
  const {
    senderVideosGalleryMenu,
    showSenderVideosGalleryMenu,
    hideSenderVideosGalleryMenu,
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
        <div
          className="w-10 h-10 overflow-hidden border-white border-[2px]
        font-bold bg-gray-100 rounded-full dark:bg-gray-700"
        >
          <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
        </div>

        {/* start div for wrapper */}
        <div className="relative flex-shrink-0">
          <div
            className="relative bg-indigo-500 text-white p-4 border
        shadow-md rounded-lg max-w-72 sm:max-w-80 md:max-w-72 w-full"
          >
            {/* sender option button, phone or name */}
            <div className="flex items-center justify-between">
              <h2 className="text-sm md:text-base font-medium">You</h2>
              <button
                type="button"
                onClick={showSenderVideosGalleryMenu}
                className="p-1 rounded-full hover:bg-indigo-600"
              >
                <BsThreeDotsVertical className="w-5 h-5" />
              </button>
            </div>

            {/* sender videos gallery */}
            <div className="py-1 relative flex flex-col items-center">
              <div className="grid grid-cols-2 gap-1 rounded-lg">
                {videos.slice(0, 3).map((vid: any) => (
                  <div
                    key={vid.id}
                    className="relative w-full flex justify-center"
                  >
                    <video
                      src={vid.src}
                      className="w-full h-28 object-cover rounded-lg"
                      controls={false}
                      tabIndex={-1}
                    />
                    <button
                      type="button"
                      className="absolute inset-0 flex items-center justify-center focus:outline-none pointer-events-none"
                    >
                      <FaRegCirclePlay
                        className="w-12 h-12 text-white bg-black
                    bg-opacity-40 rounded-full p-2 transition-opacity
                    duration-200 opacity-100"
                      />
                    </button>
                  </div>
                ))}
                {videos.length > 3 && (
                  <div className="relative w-full flex justify-center">
                    <video
                      src={videos[3].src}
                      className="w-full h-28 object-cover rounded-lg"
                      controls={false}
                      tabIndex={-1}
                    />
                    <button
                      type="button"
                      className="absolute inset-0 flex items-center justify-center focus:outline-none pointer-events-none"
                    >
                      <FaRegCirclePlay
                        className="w-12 h-12 text-white bg-black
                    bg-opacity-40 rounded-full p-2 transition-opacity
                    duration-200 opacity-100"
                      />
                    </button>
                    <div
                      className="absolute inset-0 bg-black bg-opacity-50
                  flex items-center justify-center rounded-lg"
                    >
                      <p className="text-white text-lg font-medium">
                        +{videos.length - 3}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <p className="py-1 text-sm md:text-base font-normal mr-14 sm:mr-14 md:mr-8">
                {caption}{" "}
              </p>
            </div>

            {/* start div content of sender video gallery delivery time zone */}
            <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
              <span className="text-xs md:text-sm font-medium">11:40 AM</span>
              <span className="text-base font-medium">
                <BiCheckDouble className="w-5 h-5" />
              </span>
            </div>
            {/* end div content */}

            {/* sender video gallery dropdown menu content */}
            {senderVideosGalleryMenu && (
              <div
                className="absolute top-12 right-4 z-10 bg-white divide-y
            divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {senderchatMenu.map((item: any, index: any) => (
                    <li key={index}>
                      <a
                        onClick={hideSenderVideosGalleryMenu}
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

// exporting SenderVideosGallery component
export default SenderVideosGallery;
