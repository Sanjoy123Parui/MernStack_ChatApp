import { FaUser } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { recieverChatdropDownMenuItems } from "../../../models/recieverModel.ts";
import { useRecieverMenu } from "../../../hooks/recieverhooks.ts";

// defining RecieverWebUrl functional component
const RecieverWebUrl: React.FC<recieverChatdropDownMenuItems> = ({
  recieverchatMenu,
}) => {
  const url: any = "http://localhost:5173/user/content/story";

  // declare custom hooks for manage this component state variables
  const {
    recieverWebUrlMenu,
    showRecieverWebUrlMenu,
    hideRecieverWebUrlMenu,
  }: any = useRecieverMenu();

  return (
    <>
      <div></div>
      <div className="flex items-start gap-2.5">
        {/* start div for wrapper */}
        <div className="relative flex-shrink-0">
          <div className="relative bg-white text-black p-4 border shadow-md rounded-lg max-w-xs sm:max-w-sm md:max-w-md">
            {/* reciever phone or name heading  */}
            <div className="flex items-center justify-between">
              <h2 className="text-sm md:text-base font-medium">You</h2>
              <button
                type="button"
                onClick={showRecieverWebUrlMenu}
                className="p-1 rounded-full hover:bg-gray-300"
              >
                <BsThreeDotsVertical className="h-5 w-5" />
              </button>
            </div>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal text-blue-400 hover:text-blue-600 text-sm md:text-base py-1"
            >
              {url}
            </a>

            {/* reciever delivery time zone */}
            <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
              <span className="text-xs md:text-sm font-medium">11:46 AM</span>
            </div>

            {/* reciever web url dropdown menu options */}
            {recieverWebUrlMenu && (
              <div
                className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
              rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {recieverchatMenu.map((item: any, index: any) => (
                    <li key={index}>
                      <a
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={hideRecieverWebUrlMenu}
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
          <span className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-slate-300 ring-2 shadow-md ring-black/5">
            <AiFillLike className="w-4 h-4 text-blue-700  mx-auto" />
          </span>
        </div>
        {/* end div */}

        {/* reciever avatar content */}
        <div className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100 rounded-full dark:bg-gray-700">
          <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
        </div>
      </div>
    </>
  );
};
// exporting RecieverWebUrl component
export default RecieverWebUrl;
