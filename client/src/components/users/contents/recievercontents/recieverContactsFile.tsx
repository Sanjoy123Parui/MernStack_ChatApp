import { FaUser, FaUserPlus } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { recieverChatdropDownMenuItems } from "../../../models/recieverModel.ts";
import { useRecieverMenu } from "../../../hooks/recieverhooks.ts";

// defining RecieverContactsFile functional component
const RecieverContactsFile: React.FC<recieverChatdropDownMenuItems> = ({
  recieverchatMenu,
}) => {
  const contactInfo: any = {
    userName: "Devid Willsons",
    userPhone: "9277764011",
  };

  // declare custom hooks for manage this component state variables
  const {
    recieverContactfileMenu,
    showRecieverContactfileMenu,
    hideRecieverContactfileMenu,
  }: any = useRecieverMenu();

  return (
    <>
      <div className="flex items-start gap-2.5">
        {/* start div for wrapper */}
        <div className="relative flex-shrink-0">
          <div
            className="relative bg-white text-black p-4 border
          shadow-md rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
          >
            {/* reciever contact phone or name, drop-down menu button */}
            <div className="flex items-center justify-between">
              <h2 className="text-sm md:text-base font-medium">Neil</h2>
              <button
                type="button"
                onClick={showRecieverContactfileMenu}
                className="p-1 rounded-full hover:bg-gray-300"
              >
                <BsThreeDotsVertical className="w-5 h-5" />
              </button>
            </div>

            {/* reciever addtocontact content */}
            <div className="mt-1">
              <div className="flex flex-row items-center bg-black/10 p-2 rounded-lg gap-1">
                {/* contact avatar (compact) */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 overflow-hidden rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 dark:bg-gray-700">
                  <FaUser className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400" />
                </div>

                {/* contact phone and name */}
                <div className="flex-1 min-w-0 ml-3 py-2">
                  <h4 className="text-sm sm:text-lg font-semibold truncate">
                    {contactInfo.userName}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium truncate">
                    {contactInfo.userPhone}
                  </p>
                </div>

                {/* contact add button content (compact, not full-width) */}
                <div className="ml-4 flex items-center gap-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-blue-400 text-white
                  font-semibold text-sm hover:bg-blue-600
                  focus:outline-none focus:ring-2 focus:ring-blue-700"
                  >
                    <FaUserPlus className="w-4 h-4" />
                    <span className="text-sm">Add</span>
                  </button>
                </div>
              </div>
            </div>

            {/* reciever delivery time zone */}
            <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse mt-3">
              <span className="text-xs md:text-sm font-medium">11:45 AM</span>
            </div>

            {/* reciever drop-down menu */}
            {recieverContactfileMenu && (
              <div
                className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
              rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700
              dark:text-gray-200"
                >
                  {recieverchatMenu.map((item: any, index: any) => (
                    <li key={index}>
                      <a
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={hideRecieverContactfileMenu}
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
// exporting RecieverContactsFile component
export default RecieverContactsFile;
