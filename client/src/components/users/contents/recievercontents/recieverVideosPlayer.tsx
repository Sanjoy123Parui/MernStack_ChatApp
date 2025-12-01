import { FaUser } from "react-icons/fa";
import { AiFillLike, AiFillHeart } from "react-icons/ai";
import { FaLaughSquint, FaSmileBeam } from "react-icons/fa";
import { FaRegFaceKissWinkHeart, FaFaceAngry } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { recieverChatdropDownMenuItems } from "../../../models/recieverModel.ts";
import { useRecieverMenu } from "../../../hooks/recieverhooks.ts";

// defining RecieverVideosPlayer functional component
const RecieverVideosPlayer: React.FC<recieverChatdropDownMenuItems> = ({
  recieverchatMenu,
}) => {
  const caption: string = `This is the caption for video`;
  const src: any = `../../../src/assets/videos/nature.mp4`;

  // declare custom hooks for manage this component state variables
  const {
    recieverVideosPlayerMenu,
    showRecieverVideosPlayerMenu,
    hideRecieverVideosPlayerMenu,
  }: any = useRecieverMenu();

  return (
    <>
      <div className="flex items-start gap-2.5">
        {/* start div for wrapper */}
        <div className="relative flex-shrink-0">
          {/* start reciever video player content */}
          <div
            className="relative bg-white text-black p-4 border shadow-md
        rounded-lg max-w-72 sm:max-w-80 md:max-w-72 w-full"
          >
            {/* reciever name or phone */}
            <div className="flex items-center justify-between">
              <h2 className="text-sm md:text-base font-medium">You</h2>
              <button
                type="button"
                onClick={showRecieverVideosPlayerMenu}
                className="p-1 rounded-full hover:bg-gray-300"
              >
                <BsThreeDotsVertical className="w-5 h-5" />
              </button>
            </div>

            {/* reciver video player content */}
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
                  className="absolute inset-0 flex items-center
              justify-center focus:outline-none pointer-events-auto"
                >
                  <FaRegCirclePlay
                    className="w-16 h-16 text-white bg-black
                bg-opacity-40 rounded-full p-2 transition-opacity duration-200 opacity-100"
                  />
                </button>
              </div>
              <p
                className="py-1 text-sm md:text-base font-normal mr-20
            sm:mr-20 md:mr-14"
              >
                {caption}
              </p>
            </div>

            {/* reciever time zone */}
            <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
              <span className="text-xs md:text-sm font-medium">11:50 PM</span>
            </div>

            {/* reciever video player drop-down menu options */}
            {recieverVideosPlayerMenu && (
              <div
                className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
              rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {recieverchatMenu.map((item: any, index: any) => (
                    <li key={index}>
                      <a
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={hideRecieverVideosPlayerMenu}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* end reciever video player content */}

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
          className="w-10 h-10 overflow-hidden border-white
        border-[2px] font-bold bg-gray-100 rounded-full dark:bg-gray-700"
        >
          <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
        </div>
      </div>
    </>
  );
};
// exporting RecieverVideosPlayer component
export default RecieverVideosPlayer;
