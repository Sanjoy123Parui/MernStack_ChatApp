import { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import {
  AiFillLike,
  // AiFillHeart
} from "react-icons/ai";
// import { FaLaughSquint, FaSmileBeam } from "react-icons/fa";
// import { FaRegFaceKissWinkHeart, FaFaceAngry } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";

// import { recieverChatdropDownMenuItems } from "../../../models/recieverModel.ts";
// import { useRecieverMenu } from "../../../hooks/recieverhooks.ts";
import { recieverChatdropDownMenuItems } from "../../../../models/recieverModel.ts";
import { useRecieverMenu } from "../../../../hooks/recieverhooks.ts";

// defining RecieverSocialMedia functional component
const RecieverSocialMedia: React.FC<recieverChatdropDownMenuItems> = ({
  recieverchatMenu,
}) => {
  const url: string = `https://youtu.be/asG7cwxi1sA?si=CK0Iigc857TEu9FF`;
  const srcUrl: string = `https://www.youtube.com/embed/asG7cwxi1sA?si=ao_gsCihSGRw6LsN`;
  const title: string = `Saiyaara Reprise - Female | Full Song | Ahaan, Aneet | Tanishk, Faheem, Arslan | Shreya | Irshad`;
  const desc: string = `#yrfnewreleases #saiyaarareprise #yrf #yashrajfilms #yrfmovies #yrfmusic #mohitsuri #akshayewidhani #ahaanpanday #aneetpadda #tanishkbagchi #faheemabdullah #arslannizami #shreyaghoshal #irshadkamil #newsong #bollywoodsong #saiyaara #femaleversion #hindisong #bollywoodsong #romanticsong`;

  // declare custom hooks for manage this component state variables
  const {
    recieverSocialMediaMenu,
    showRecieverSocialMediaMenu,
    hideRecieverSocialMediaMenu,
  }: any = useRecieverMenu();

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
        {/* start div for wrapper */}
        <div className="relative flex-shrink-0">
          <div
            className="relative bg-white text-black p-4 border shadow-md
        rounded-lg max-w-72 sm:max-w-80 md:max-w-72 w-full"
          >
            {/* reciever phone or name, menu option button */}
            <div className="flex items-center justify-between">
              <h2 className="text-sm md:text-base font-medium">You</h2>
              <button
                type="button"
                onClick={showRecieverSocialMediaMenu}
                className="p-1 rounded-full hover:bg-gray-300"
              >
                <BsThreeDotsVertical className="w-5 h-5" />
              </button>
            </div>

            {/* reciever social media thumbnail */}
            <div className="py-1">
              <div className=" bg-black/5 p-1 rounded-md">
                <div className="relative w-full flex justify-center">
                  <iframe
                    src={srcUrl}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg border border-white"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>

                {/* reciever social media description, title and menu */}
                <div className="p-2">
                  <p className="text-sm font-medium line-clamp-2">{title}</p>
                  <p className="text-sm text-gray-600  line-clamp-1">{desc}</p>
                </div>
              </div>

              {/* reciever social media url content */}
              <a
                href={url}
                rel="_blank"
                target="noopener noreferrer"
                className="block mt-2 text-xs sm:text-sm md:text-base text-blue-400 hover:text-blue-600 break-words"
              >
                {url}
              </a>
            </div>

            {/* reciever time-zone */}
            <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
              <span className="text-xs md:text-sm font-medium">11:50 AM</span>
            </div>

            {/* reciever drop-down menu */}
            {recieverSocialMediaMenu && (
              <div
                className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
              rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {recieverchatMenu.map((item: any, index: any) => (
                    <li key={index}>
                      <a
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={hideRecieverSocialMediaMenu}
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
        <div className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100 rounded-full dark:bg-gray-700">
          <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
        </div>
      </div>
    </>
  );
};
// exporting RecieverSocialMedia component
export default RecieverSocialMedia;
