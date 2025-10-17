import { useState } from "react";

import {
  // BiCheck,
  BiCheckDouble,
} from "react-icons/bi";

import { FaUser } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsPlayFill } from "react-icons/bs";
import { LuAudioLines } from "react-icons/lu";

/*SenderTextMessage component*/
const SenderTextMessage: React.FC<any> = ({ senderdropDownMenu }) => {
  const [senderTextMenu, setSenderTextMenu] = useState<boolean>(false);
  const handleSenderTextMenu = (): void => setSenderTextMenu((prev) => !prev);

  return (
    <>
      <div className="flex items-start gap-2.5">
        <div
          className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100
        rounded-full dark:bg-gray-700"
        >
          <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
        </div>

        {/* start sender text-message content */}
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
              onClick={handleSenderTextMenu}
            >
              <BsThreeDotsVertical className="w-5 h-5" />
            </button>
          </div>
          {/* text messages */}
          <p className="font-normal text-sm md:text-base py-1">
            {/* Hi Everyone today I will go to the NJP, So Have you any can meet me
            in Station */}
            Hi
          </p>

          {/* start sender text message dilivery time */}
          <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
            <span className="text-xs md:text-sm font-medium">11:46 PM</span>
            <span className="text-base font-medium">
              <BiCheckDouble />
            </span>
          </div>
          {/* end sender text message dilivery time */}

          {/* start dropdown menu of sender text message content */}
          {senderTextMenu && (
            <div className="absolute top-12 right-4 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                {senderdropDownMenu.map((item: any, index: any) => (
                  <li key={index}>
                    <a
                      onClick={() => console.log(item)}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* end dropdown menu sender text message */}
        </div>
        {/* end text-message */}
      </div>
    </>
  );
};

/* SenderVoiceMessage component*/
// const SenderVoiceMessage: React.FC<any> = ({ senderdropDownMenu }) => {
//   const [senderVoiceMenu, setSenderVoiceMenu] = useState<boolean>(false);
//   const handleSenderVoiceMenu = (): any =>
//     setSenderVoiceMenu((prev: any) => !prev);

//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         <div
//           className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100
//         rounded-full dark:bg-gray-700"
//         >
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>

//         {/* start sender voice message content */}
//         <div
//           className="relative bg-indigo-500 text-white p-4 border shadow-md
//         rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
//         >
//           {/*Sender phone or name */}
//           <div className="flex items-center justify-between">
//             <h2 className="text-sm md:text-lg font-medium">You</h2>
//             <button
//               type="button"
//               onClick={handleSenderVoiceMenu}
//               className="p-1 rounded-full hover:bg-indigo-600"
//             >
//               <BsThreeDotsVertical className="w-5 h-5" />
//             </button>
//           </div>
//           {/* <h1 className="text-sm md:text-lg font-medium">You</h1> */}
//           {/* start voice message content */}
//           <div className="flex items-center space-x-2 py-1">
//             {/* voice message button start */}
//             <button className="inline-flex self-center items-center p-2">
//               <BsPlayFill className="text-base md:text-3xl font-normal" />
//             </button>
//             {/* voice message button end */}

//             {/* start voice effect wave */}
//             <div className="flex items-center space-x-[-4px]">
//               {Array.from({ length: 5 }).map((_, i) => (
//                 <LuAudioLines
//                   key={i}
//                   className="text-base md:text-3xl font-normal"
//                 />
//               ))}
//             </div>
//             {/* end voice effect wave */}

//             {/* duration */}
//             <span className="text-xs md:text-sm font-normal">3:02</span>
//           </div>
//           {/* end voice message content */}

//           {/* delivery content start */}
//           <div className="flex items-center justify-end w-full space-x-2 rtl:space-x-reverse">
//             <span className="text-xs md:text-sm font-normal">07:35 PM</span>
//             {/* <span className="text-sm font-normal"><BiCheck /></span> */}
//             <span className="text-base font-normal">
//               <BiCheckDouble />
//             </span>

//             {/* start sender voice content dropdown menu */}
//             {senderVoiceMenu && (
//               <div className="absolute top-12 right-4 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
//                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                   {senderdropDownMenu.map((item: any, index: any) => (
//                     <li key={index}>
//                       <a
//                         onClick={() => console.log(item)}
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             {/* end sender voice content dropdown menu */}
//           </div>
//           {/* delivery content end */}
//         </div>
//         {/* end voice */}
//       </div>
//     </>
//   );
// };

/* SenderImages component*/
// const SenderImages: React.FC<any> = ({ senderdropDownMenu }) => {
//   const [senderImageMenu, setSenderImageMenu] = useState<boolean>(false);
//   const handleSenderImageMenu = (): any =>
//     setSenderImageMenu((prev: any) => !prev);
//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         <div
//           className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold
//           bg-gray-100 rounded-full dark:bg-gray-700"
//         >
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>

//         {/* start sender image content */}
//         <div
//           className="relative bg-indigo-500 text-white p-4 border shadow-md
//         rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
//         >
//           {/*Sender phone or name */}
//           <div className="flex items-center justify-between">
//             <h2 className="text-sm md:text-base font-medium">You</h2>
//             <button
//               type="button"
//               className="p-1 rounded-full hover:bg-indigo-600"
//               onClick={handleSenderImageMenu}
//             >
//               <BsThreeDotsVertical className="w-5 h-5" />
//             </button>
//           </div>

//           {/* image content */}
//           <div className="py-1 relative">
//             <img
//               src={"../../src/assets/images/human1.jpg"}
//               alt="image"
//               className="w-full h-auto object-cover max-h-72 min-h-72 rounded-lg"
//             />
//             <p className="py-1 text-sm md:text-base font-normal">
//               This is a caption for the image.
//             </p>
//           </div>

//           {/* start sender image dilivery time */}
//           <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
//             <span className="text-xs md:text-sm font-medium">11:46 PM</span>
//             <span className="text-base font-medium">
//               <BiCheckDouble />
//             </span>
//           </div>
//           {/* end sender image dilivery time */}

//           {/* start dropdown menu of sender image content */}
//           {senderImageMenu && (
//             <div
//               className="absolute top-12 right-4 z-10 bg-white divide-y
//             divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
//             >
//               <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                 {senderdropDownMenu.map((item: any, index: any) => (
//                   <li key={index}>
//                     <a
//                       onClick={() => console.log(item)}
//                       className="block px-4 py-2 hover:bg-gray-100
//                       dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {/* end dropdown menu sender image */}
//         </div>
//         {/* end image */}
//       </div>
//     </>
//   );
// };

/* SenderVideosPlayer component */
// const SenderVideosPlayer: React.FC<any> = ({ senderdropDownMenu }) => {
//   const [senderVideoPlayMenu, setSenderVideoPlay] = useState<boolean>(false);

//   const handleSenderVideoMenu = (): any =>
//     setSenderVideoPlay((prev: any) => !prev);

//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         <div
//           className="w-10 h-10 overflow-hidden border-white border-[2px]
//         font-bold bg-gray-100 rounded-full dark:bg-gray-700"
//         >
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>

//         {/* start sender video player content */}
//         <div
//           className="relative bg-indigo-500 text-white p-4 border shadow-md
//         rounded-lg max-w-72 sm:max-w-80 md:max-w-72 w-full"
//         >
//           <div className="flex items-center justify-between">
//             <h2 className="text-sm md:text-base font-medium">You</h2>
//             <button
//               type="button"
//               onClick={handleSenderVideoMenu}
//               className="p-1 rounded-full hover:bg-indigo-600"
//             >
//               <BsThreeDotsVertical className="w-5 h-5" />
//             </button>
//           </div>

//           {/* sender video player content */}
//           <div className="py-1 relative flex flex-col items-center">
//             <div className="relative w-full flex justify-center">
//               <video
//                 src={"../../src/assets/videos/nature.mp4"}
//                 className="w-full h-auto object-cover max-h-72 min-h-72
//                 rounded-lg border border-white"
//                 controls={false}
//                 tabIndex={-1}
//               />
//               <button
//                 type="button"
//                 className="absolute inset-0 flex items-center
//               justify-center focus:outline-none pointer-events-auto"
//               >
//                 <FaRegCirclePlay
//                   className="w-16 h-16 text-white bg-black
//                 bg-opacity-40 rounded-full p-2 transition-opacity duration-200 opacity-100"
//                 />
//               </button>
//             </div>
//             <p className="py-1 text-sm md:text-base font-normal mr-14 sm:mr-14 md:mr-8">
//               This is a caption for the video
//             </p>
//           </div>

//           {/* start sender video delivery time zone */}
//           <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
//             <span className="text-xs md:text-sm font-medium">10:51 AM</span>
//             <span className="text-base font-medium">
//               <BiCheckDouble />
//             </span>
//           </div>
//           {/* end sender video delivery time zone */}

//           {/* start drop down menu of sender video content */}
//           {senderVideoPlayMenu && (
//             <div
//               className="absolute top-12 right-4 z-10 bg-white divide-y
//             divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
//             >
//               <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                 {senderdropDownMenu.map((item: any, index: any) => (
//                   <li key={index}>
//                     <a
//                       onClick={() => console.log(item)}
//                       className="block px-4 py-2 hover:bg-gray-100
//                       dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {/* end drop down menu of sender video content */}
//         </div>
//         {/* end sender video player content */}
//       </div>
//     </>
//   );
// };

/*SenderImagesGallery component*/
// const SenderImagesGallery: React.FC<any> = ({ senderdropDownMenu }) => {
//   const [senderImageGalleryMenu, setSenderImageGalleryMenu] =
//     useState<boolean>(false);
//   const handleSenderImageGalleryMenu = (): any =>
//     setSenderImageGalleryMenu((prev: any) => !prev);

//   // here declare images array of object
//   const images: any = [
//     {
//       id: 1,
//       src: "../../src/assets/images/human1.jpg",
//       alt: "image 1",
//     },
//     {
//       id: 2,
//       src: "../../src/assets/images/women2.jpg",
//       alt: "image 2",
//     },
//     {
//       id: 3,
//       src: "../../src/assets/images/human1.jpg",
//       alt: "image 3",
//     },
//     {
//       id: 4,
//       src: "../../src/assets/images/women2.jpg",
//       alt: "image 4",
//     },
//     // {
//     //   id: 5,
//     //   src: "../../src/assets/images/human1.jpg",
//     //   alt: "image 5",
//     // },
//     // {
//     //   id: 6,
//     //   src: "../../src/assets/images/women2.jpg",
//     //   alt: "image 6",
//     // },
//   ];
//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         <div
//           className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100
//         rounded-full dark:bg-gray-700"
//         >
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>

//         {/* start sender image gallery content */}
//         <div
//           className="relative bg-indigo-500 text-white p-4 border shadow-md
//         rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
//         >
//           {/*Sender phone or name */}
//           <div className="flex items-center justify-between">
//             <h2 className="text-sm md:text-base font-medium">You</h2>
//             <button
//               type="button"
//               className="p-1 rounded-full hover:bg-indigo-600"
//               onClick={handleSenderImageGalleryMenu}
//             >
//               <BsThreeDotsVertical className="w-5 h-5" />
//             </button>
//           </div>

//           {/* image gallery content */}
//           <div className="py-1">
//             <div className="grid grid-cols-2 gap-1 rounded-lg">
//               {images.slice(0, 3).map((image: any, index: any) => (
//                 <img
//                   key={index}
//                   src={image.src}
//                   alt={image.alt}
//                   // className="w-28 h-28 object-cover rounded-lg"
//                   className="w-full h-28 object-cover rounded-lg"
//                 />
//               ))}
//               {images.length > 3 && (
//                 <div className="relative">
//                   <img
//                     src={images[3].src}
//                     alt={images[3].alt}
//                     // className="w-28 h-28 object-cover rounded-lg"
//                     className="w-full h-28 object-cover rounded-lg"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
//                     <p className="text-white text-lg font-medium">
//                       +{images.length - 3}
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>
//             <p className="py-1 text-sm md:text-base font-normal">
//               This is a caption for the image gallery.
//             </p>
//           </div>

//           {/* start sender image gallery dilivery time */}
//           <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
//             <span className="text-xs md:text-sm font-medium">11:46 PM</span>
//             <span className="text-base font-medium">
//               <BiCheckDouble />
//             </span>
//           </div>
//           {/* end sender image gallery dilivery time */}

//           {/* start dropdown menu of sender image gallery content */}
//           {senderImageGalleryMenu && (
//             <div className="absolute top-12 right-4 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
//               <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                 {senderdropDownMenu.map((item: any, index: any) => (
//                   <li key={index}>
//                     <a
//                       onClick={() => console.log(item)}
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {/* end dropdown menu sender image gallery */}
//         </div>
//         {/* end image gallery */}
//       </div>
//     </>
//   );
// };

/* here define Sender component for content of sender*/
const Sender: React.FC = () => {
  // here declare variables of dropdown menu list of sender
  const senderdropDownMenu: any = [
    "Reply",
    "Forward",
    "Copy",
    "Paste",
    "Edit",
    "Delete",
  ];

  return (
    <>
      {/* start div flex for sender all chat content */}
      <div className="flex flex-col items-end justify-end gap-y-2">
        <SenderTextMessage senderdropDownMenu={senderdropDownMenu} />
        {/* <SenderVoiceMessage senderdropDownMenu={senderdropDownMenu} /> */}
        {/* <SenderImages senderdropDownMenu={senderdropDownMenu} /> */}
        {/* <SenderVideosPlayer senderdropDownMenu={senderdropDownMenu} /> */}
        {/* <SenderImagesGallery senderdropDownMenu={senderdropDownMenu} /> */}
      </div>
      {/* end div */}
    </>
  );
};

// export Sender component
export default Sender;
