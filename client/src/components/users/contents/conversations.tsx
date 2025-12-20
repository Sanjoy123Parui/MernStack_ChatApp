import { useEffect } from "react";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { MdAttachFile } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";
import { Input } from "../../ui/input.tsx";
import { Button } from "../../ui/button.tsx";

// define conversations component
const Conversations: React.FC = () => {
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
      <div className="flex p-4 items-center bg-slate-100 rounded-lg shadow-md">
        {/* start div for attachments and emojis content */}
        <div className="flex mr-2 items-center">
          <a className="text-[24px] md:text-[28px] text-gray-500 font-medium hover:text-gray-700 transition duration-200">
            <MdOutlineEmojiEmotions />
          </a>
          <a className="text-[24px] md:text-[28px] text-gray-500 font-medium hover:text-gray-700 transition duration-200">
            <MdAttachFile />
          </a>
        </div>
        {/* end attachements and emojis div */}

        {/* start conversation form */}
        <form className="flex-grow flex items-center">
          <Input
            type="text"
            className="bg-gray-50 border-gray-300 text-gray-900 text-sm md:text-base 
            rounded-lg h-10 md:h-12 w-full p-2 border focus:ring-gray-500 focus:border-gray-500 block 
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
            dark:focus:ring-gray-500 dark:focus:border-gray-500"
            placeholder="Type a message..."
          />
          <Button
            type="button"
            className="ml-2 h-10 w-10 md:h-12 md:w-12 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-[24px] md:text-[28px] text-white p-2 rounded-full transition-colors"
          >
            <IoSendSharp className="mx-auto" />
          </Button>
        </form>
        {/* end conversation form */}
      </div>
    </>
  );
};
// export Conversations component
export default Conversations;
