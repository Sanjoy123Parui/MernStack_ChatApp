import { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import {
  AiFillLike,
  // AiFillHeart
} from "react-icons/ai";
// import { FaLaughSquint, FaSmileBeam } from "react-icons/fa";
// import { FaRegFaceKissWinkHeart, FaFaceAngry } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { recieverChatdropDownMenuItems } from "../../../models/recieverModel.ts";
import { useRecieverMenu } from "../../../hooks/recieverhooks.ts";

// defining RecieverGeolocations functional component
const RecieverGeolocations: React.FC<recieverChatdropDownMenuItems> = ({
  recieverchatMenu,
}) => {
  const url: string = `https://maps.app.goo.gl/mADPKC6tC2eExGtT9`;
  const locationUrl: string = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.570070406127!2d88.09444907429992!3d22.966055518436782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f861004bc3a8eb%3A0xdaff3c39e52cdf6c!2sDhaniakhali%20bus%20stand!5e0!3m2!1sen!2sin!4v1762235974012!5m2!1sen!2sin`;
  const locationAddress: string = `X38W+CRC, Dhaniakhali, West Bengal 712302`;

  // declare custom hooks for manage this component state variables
  const {
    recieverGeoLocMenu,
    showRecieverGeoLocMenu,
    hideRecieverGeoLocMenu,
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
          <div className="relative bg-white text-black p-4 border shadow-md rounded-lg max-w-72 sm:max-w-80 md:max-w-72 w-full">
            {/* reciever contact phone or name, drop-down menu button */}
            <div className="flex items-center justify-between">
              <h2 className="text-sm md:text-base font-medium">Neil Sims</h2>
              <button
                type="button"
                onClick={showRecieverGeoLocMenu}
                className="p-1 rounded-full hover:bg-gray-300"
              >
                <BsThreeDotsVertical className="w-5 h-5" />
              </button>
            </div>

            {/* reciever geolocation content */}
            <div className="py-1">
              <div className="bg-black/5 p-1 rounded-md">
                <div className="relative w-full flex justify-center">
                  <iframe
                    src={locationUrl}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg border border-white"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* reciever geolocation address */}
                <div className="p-2">
                  <p className="text-sm font-medium line-clamp-2">
                    {locationAddress}
                  </p>
                </div>
              </div>

              {/* url content */}
              <a
                href={url}
                rel="_blank"
                target="noopener noreferrer"
                className="block mt-2 text-xs sm:text-sm md:text-base text-blue-400 hover:text-blue-600 break-words"
              >
                {url}
              </a>
            </div>

            {/* reciever time zone */}
            <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
              <span className="text-xs md:text-sm font-medium">11:45 AM</span>
            </div>

            {/* reciever drop-down menu options */}
            {recieverGeoLocMenu && (
              <div
                className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
              rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {recieverchatMenu.map((item: any, index: any) => (
                    <li key={index}>
                      <a
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={hideRecieverGeoLocMenu}
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
// exporting RecieverGeolocations component
export default RecieverGeolocations;
