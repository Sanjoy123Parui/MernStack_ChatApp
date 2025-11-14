import {
  FaUser,
  // FaUserPlus,
  // FaFilePdf,
  // FaFileWord,
  // FaFileAlt,
  // FaFileExcel,
  // FaFilePowerpoint,
  // FaFileCode,
  // FaFileCsv,
  FaFileArchive,
} from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { recieverChatdropDownMenuItems } from "../../../models/recieverModel.ts";
import { useRecieverMenu } from "../../../hooks/recieverhooks.ts";

// defining RecieverFilesUpload functional component
const RecieverFilesUpload: React.FC<recieverChatdropDownMenuItems> = ({
  recieverchatMenu,
}) => {
  const caption: string = `This is the caption of file uploads`;

  // declare custom hooks for manage this component state variables
  const {
    recieverFilesMenu,
    showRecieverFilesMenu,
    hideRecieverFilesMenu,
  }: any = useRecieverMenu();

  return (
    <>
      <div className="flex items-start gap-2.5">
        {/* start div for wrapper content */}
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
                onClick={showRecieverFilesMenu}
                className="p-1 rounded-full hover:bg-gray-300"
              >
                <BsThreeDotsVertical className="w-5 h-5" />
              </button>
            </div>

            {/* reciever file upload content */}
            <div className="flex items-center space-x-2 py-1">
              {/* upload file icons and file names */}
              <div className="w-10 h-10 flex items-center justify-center bg-white/40 rounded-lg flex-shrink-0">
                {/* <FaFilePdf className="w-6 h-6 md:w-8 md:h-8 text-red-600" /> */}
                {/* <FaFileWord className="w-6 h-6 md:w-8 md:h-8 text-blue-600" /> */}
                {/* <FaFileAlt className="w-6 h-6 md:w-8 md:h-8 text-blue-600" /> */}
                {/* <FaFileExcel className="w-6 h-6 md:w-8 md:h-8 text-green-600" /> */}
                {/* <FaFilePowerpoint className="w-6 h-6 md:w-8 md:h-8 text-red-600" /> */}
                {/* <FaFileCode className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" /> */}
                {/* <FaFileCsv className="w-6 h-6 md:w-8 md:h-8 text-green-600" /> */}
                <FaFileArchive className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" />
              </div>
              <div className="flex items-center space-x-[-4px]">
                {/* <p className="text-sm md:text-lg font-normal">text.pdf</p> */}
                {/* <p className="text-sm md:text-lg font-normal">text.docx</p> */}
                {/* <p className="text-sm md:text-lg font-normal">text.txt</p> */}
                {/* <p className="text-sm md:text-lg font-normal">text.excel</p> */}
                {/* <p className="text-sm md:text-lg font-normal">text.ppt</p> */}
                {/* <p className="text-sm md:text-lg font-normal">text.html</p> */}
                {/* <p className="text-sm md:text-lg font-normal">text.csv</p> */}
                <p className="text-sm md:text-lg font-normal">text.zip</p>
              </div>
            </div>

            {/* text for caption of reciever */}
            <p className="py-[2px] text-sm md:text-base font-normal">
              {" "}
              {caption}
            </p>

            {/* reciever delivery time zone */}
            <div className="flex items-center justify-end w-full space-x-2 rtl:space-x-reverse">
              <span className="text-xs md:text-sm font-normal">11:40 AM</span>
            </div>

            {/* reciever drop-down menu */}
            {recieverFilesMenu && (
              <div
                className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
              rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {recieverchatMenu.map((item: any, index: any) => (
                    <li key={index}>
                      <a
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={hideRecieverFilesMenu}
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
// exporting RecieverFilesUpload component
export default RecieverFilesUpload;
