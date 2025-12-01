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

// defining SenderWebUrl functional component
const SenderWebUrl: React.FC<senderChatdropDownMenuItems> = ({
  senderchatMenu,
}) => {
  const url: any = `http://localhost:5173/user/content/story`;

  // declare custom hooks for manage this component state variables
  const { senderWebUrlMenu, showSenderWebUrlMenu, hideSenderWebUrlMenu }: any =
    useSenderMenu();

  return (
    <>
      <div className="flex items-start gap-2.5">
        <div
          className="w-10 h-10 overflow-hidden border-white border-[2px]
        font-bold bg-gray-100 rounded-full dark:bg-gray-700"
        >
          <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
        </div>

        {/* start div for wrapper */}
        <div className="relative flex-shrink-0">
          <div className="relative bg-indigo-500 text-white p-4 border shadow-md rounded-lg max-w-xs sm:max-w-screen-sm md:max-w-md">
            {/* sender phone or name */}
            <div className="flex items-center justify-between">
              <h2 className="text-sm md:text-base font-medium">You</h2>
              <button
                type="button"
                onClick={showSenderWebUrlMenu}
                className="p-1 rounded-full hover:bg-indigo-600"
              >
                <BsThreeDotsVertical className="w-5 h-5" />
              </button>
            </div>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal text-sm md:text-base py-1"
            >
              {url}
            </a>

            {/* sender delivery time zone */}
            <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
              <span className="text-xs md:text-sm font-medium">12:00 PM</span>
              <span className="text-base font-medium">
                <BiCheckDouble className="w-5 h-5" />
              </span>
            </div>

            {/* sender weburl dropdown menu */}
            {senderWebUrlMenu && (
              <div className="absolute top-12 right-4 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {senderchatMenu.map((item: any, index: any) => (
                    <li key={index}>
                      <a
                        onClick={hideSenderWebUrlMenu}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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

// exporting SenderWebUrl component
export default SenderWebUrl;
