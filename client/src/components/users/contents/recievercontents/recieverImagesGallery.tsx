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

// defining RecieverImagesGallery functional component
const RecieverImagesGallery: React.FC<recieverChatdropDownMenuItems> = ({
  recieverchatMenu,
}) => {
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

  const caption: string = `This is a caption for the image gallery.`;

  // declare custom hooks for manage this component state variables
  const {
    recieverImagesGalleryMenu,
    showRecieverImagesGalleryMenu,
    hideRecieverImagesGalleryMenu,
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
          {/* start reciever image gallery content */}
          <div
            className="relative bg-white text-black p-4 border shadow-md
        rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
          >
            {/*Reciever phone or name */}
            <div className="flex items-center justify-between">
              <h2 className="text-sm md:text-base font-medium">You</h2>
              <button
                type="button"
                className="p-1 rounded-full hover:bg-gray-300"
                onClick={showRecieverImagesGalleryMenu}
              >
                <BsThreeDotsVertical className="w-5 h-5" />
              </button>
            </div>

            {/* image gallery content */}
            <div className="py-1">
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
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                      <p className="text-white text-lg font-medium">
                        +{images.length - 3}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <p className="py-1 text-sm md:text-base font-normal">{caption}</p>
            </div>

            {/* reciever time zone content */}
            <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
              <span className="text-xs md:text-sm font-medium">11:50 AM</span>
            </div>

            {/* start dropdown menu of reciever image gallery content */}
            {recieverImagesGalleryMenu && (
              <div
                className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
              rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {recieverchatMenu.map((item: any, index: any) => (
                    <li key={index}>
                      <a
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={hideRecieverImagesGalleryMenu}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* end dropdown menu reciver image gallery */}
          </div>
          {/* end image gallery */}

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
        <div
          className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100
        rounded-full dark:bg-gray-700"
        >
          <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
        </div>
      </div>
    </>
  );
};
// exporting RecieverImagesGallery component
export default RecieverImagesGallery;
