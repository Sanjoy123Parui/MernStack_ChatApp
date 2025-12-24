import { useEffect } from "react";
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

// import { senderChatdropDownMenuItems } from "../../../models/senderModel.ts";
// import { useSenderMenu } from "../../../hooks/senderhooks.ts";
import { senderChatdropDownMenuItems } from "../../../../models/senderModel.ts";
import { useSenderMenu } from "../../../../hooks/senderhooks.ts";

// defining SenderSocialMedia functional component
const SenderSocialMedia: React.FC<senderChatdropDownMenuItems> = ({
  senderchatMenu,
}) => {
  const url: string = `https://youtu.be/asG7cwxi1sA?si=CK0Iigc857TEu9FF`;
  const srcUrl: string = `https://www.youtube.com/embed/asG7cwxi1sA?si=ao_gsCihSGRw6LsN`;
  const title: string = `Saiyaara Reprise - Female | Full Song | Ahaan, Aneet | Tanishk, Faheem, Arslan | Shreya | Irshad`;
  const desc: string = `#yrfnewreleases #saiyaarareprise #yrf #yashrajfilms #yrfmovies #yrfmusic #mohitsuri #akshayewidhani #ahaanpanday #aneetpadda #tanishkbagchi #faheemabdullah #arslannizami #shreyaghoshal #irshadkamil #newsong #bollywoodsong #saiyaara #femaleversion #hindisong #bollywoodsong #romanticsong`;

  // declare custom hooks for manage this component state variables
  const {
    senderSocialMediaMenu,
    showSenderSocialMediaMenu,
    hideSenderSocialMediaMenu,
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
        <div className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100 rounded-full dark:bg-gray-700">
          <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
        </div>

        {/* start div for wrapper */}
        <div className="relative flex-shrink-0">
          <div className="relative bg-indigo-500 text-white p-4 border shadow-md rounded-lg max-w-72 sm:max-w-80 md:max-w-72 w-full">
            {/* sender socialmedia phone or name, menu button content */}
            <div className="flex items-center justify-between">
              <h2 className="text-sm md:text-base font-medium">You</h2>
              <button
                type="button"
                onClick={showSenderSocialMediaMenu}
                className="p-1 rounded-full hover:bg-indigo-600"
              >
                <BsThreeDotsVertical className="w-5 h-5" />
              </button>
            </div>

            {/* sender socialmedia thumbnail content */}
            <div className="py-1">
              <div className=" bg-white/10 p-1 rounded-md">
                <div className="relative w-full flex justify-center">
                  <iframe
                    src={srcUrl}
                    title="YouTube video player"
                    className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg border border-white"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>

                {/* sender social media description, title and channel name content */}
                <div className="p-2">
                  <p className="text-sm font-medium line-clamp-2">{title}</p>
                  <p className="text-sm text-indigo-100  line-clamp-1">
                    {desc}
                  </p>
                </div>
              </div>
              {/* url content */}
              <a
                href={url}
                rel="_blank"
                target="noopener noreferrer"
                className="block mt-2 text-xs sm:text-sm md:text-base
            text-indigo-100 break-words"
              >
                {url}
              </a>
            </div>

            {/* sender delivery time zone */}
            <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
              <span className="text-xs md:text-sm font-medium">10:51 AM</span>
              <span className="text-base font-medium">
                <BiCheckDouble className="w-5 h-5" />
              </span>
            </div>

            {/* sender social media dropdown menu */}
            {senderSocialMediaMenu && (
              <div className="absolute top-12 right-4 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {senderchatMenu.map((item: any, index: any) => (
                    <li key={index}>
                      <a
                        onClick={hideSenderSocialMediaMenu}
                        className="block px-4 py-2 hover:bg-gray-100 
                        dark:bg-gray-600 
                      dark:hover:text-white"
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
// exporting SenderSocialMedia component
export default SenderSocialMedia;
