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
import { senderChatdropDownMenuItems } from "../../../models/senderModel.ts";
import { useSenderMenu } from "../../../hooks/senderhooks.ts";

// defining SenderImagesGallery functional component
const SenderImagesGallery: React.FC<senderChatdropDownMenuItems> = ({
  senderchatMenu,
}) => {
  const caption: string = `This is a caption for the image gallery.`;

  // here declare images array of object
  const images: any = [
    {
      id: 1,
      src: "../../../src/assets/images/human1.jpg",
      alt: "image 1",
    },
    {
      id: 2,
      src: "../../../src/assets/images/women2.jpg",
      alt: "image 2",
    },
    {
      id: 3,
      src: "../../../src/assets/images/human1.jpg",
      alt: "image 3",
    },
    {
      id: 4,
      src: "../../../src/assets/images/women2.jpg",
      alt: "image 4",
    },
  ];

  // declare custom hooks for manage this component state variables
  const {
    senderImagesGalleryMenu,
    showSenderImagesGalleryMenu,
    hideSenderImagesGalleryMenu,
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
        <div
          className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold
          bg-gray-100
        rounded-full dark:bg-gray-700"
        >
          <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
        </div>

        {/* start div for wrapper */}
        <div className="relative flex-shrink-0">
          {/* start sender image gallery content */}
          <div
            className="relative bg-indigo-500 text-white p-4 border shadow-md
        rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
          >
            {/*Sender phone or name */}
            <div className="flex items-center justify-between">
              <h2 className="text-sm md:text-base font-medium">You</h2>
              <button
                type="button"
                className="p-1 rounded-full hover:bg-indigo-600"
                onClick={showSenderImagesGalleryMenu}
              >
                <BsThreeDotsVertical className="w-5 h-5" />
              </button>
            </div>

            {/* image gallery content */}
            <div className="py-1 relative">
              <div className="grid grid-cols-2 gap-1 rounded-lg">
                {images.slice(0, 3).map((image: any, index: any) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    // className="w-28 h-28 object-cover rounded-lg"
                    className="w-full h-28 object-cover rounded-lg"
                  />
                ))}
                {images.length > 3 && (
                  <div className="relative">
                    <img
                      src={images[3].src}
                      alt={images[3].alt}
                      // className="w-28 h-28 object-cover rounded-lg"
                      className="w-full h-28 object-cover rounded-lg"
                    />
                    <div
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center
                  justify-center rounded-lg"
                    >
                      <p className="text-white text-lg font-medium">
                        +{images.length - 3}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <p className="py-1 text-sm md:text-base font-normal">{caption}</p>
            </div>

            {/* start sender image gallery dilivery time */}
            <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
              <span className="text-xs md:text-sm font-medium">11:46 PM</span>
              <span className="text-base font-medium">
                <BiCheckDouble className="w-5 h-5" />
              </span>
            </div>
            {/* end sender image gallery dilivery time */}

            {/* start dropdown menu of sender image gallery content */}
            {senderImagesGalleryMenu && (
              <div
                className="absolute top-12 right-4 z-10 bg-white divide-y
            divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {senderchatMenu.map((item: any, index: any) => (
                    <li key={index}>
                      <a
                        onClick={hideSenderImagesGalleryMenu}
                        className="block px-4 py-2 hover:bg-gray-100
                      dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* end dropdown menu sender image gallery */}
          </div>
          {/* end image gallery */}

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

// exporting SenderImagesGallery component
export default SenderImagesGallery;
