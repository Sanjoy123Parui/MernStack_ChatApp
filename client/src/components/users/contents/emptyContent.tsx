// here was define emptyContent
import { useEffect } from "react";
import HiChatLogo from "../../../assets/hichat_brand_logo.svg";
import { useUserSettingToggleContext } from "../../hooks/contexts/userSettingContexts.ts";

const EmptyContent: React.FC = () => {
  // declare variable for title and descriptions
  let title: string = `Welcome to the HiChat web application`;
  let desc: string = `Here is HiChat webservice are market place into the browser. So please click the user and start the conversation.`;

  // declare custom hook for manage state
  const { isThemes }: any = useUserSettingToggleContext();

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
      <div className="w-full flex flex-col justify-center items-center px-4 py-8 md:px-8 md:py-12">
        {/* brand logo */}
        <div className="mb-6">
          <img
            src={HiChatLogo}
            alt="HiChat logo"
            className="w-64 h-64 object-contain"
          />
        </div>
        {/* title */}
        <h2
          className={`text-3xl md:text-4xl text-center font-extrabold 
            text-indigo-700 mb-6 tracking-tight drop-shadow-sm`}
        >
          {title}
        </h2>
        {/* description */}
        <p
          className={`leading-relaxed font-bold text-lg md:text-xl ${
            !isThemes ? `text-gray-700` : `text-slate-100`
          } mb-8 text-center`}
        >
          {desc}
        </p>
      </div>
    </>
  );
};

export default EmptyContent;
