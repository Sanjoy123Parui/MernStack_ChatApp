import { MdOutlineEmojiEmotions } from "react-icons/md";
import { MdAttachFile } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";
import { Input } from "../../ui/input.tsx";
import { Button } from "../../ui/button.tsx";
// define conversations component
const Conversations: React.FC = () => {
  return (
    <>
      {/* start div for chating conversation */}
      <div className="flex p-4 items-center bg-slate-200">
        <div className="mr-2 flex">
          <a className="text-[21px] md:text-[25px] text-gray-500 font-medium truncate">
            <MdOutlineEmojiEmotions />
          </a>
          <a className="text-[21px] md:text-[25px] text-gray-500 font-medium truncate">
            <MdAttachFile />
          </a>
        </div>
        <form className="flex-grow flex items-center">
          <Input
            className="bg-gray-50 border-gray-300 text-gray-900 text-sm md:text-base 
            rounded-lg h-1/4 w-full p-2 border focus:ring-gray-500 focus:border-gray-500 block 
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
            dark:focus:ring-gray-500 dark:focus:border-gray-500"
            placeholder="Type a message..."
          />
          <Button className="ml-2 bg-blue-500 hover:bg-blue-800 text-[21px] md:text-[25px] text-white p-2 rounded-full">
            <IoSendSharp />
          </Button>
        </form>
      </div>
    </>
  );
};
// export Conversations component
export default Conversations;
