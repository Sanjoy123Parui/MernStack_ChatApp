import { useState } from "react";
import {
  // BiCheck,
  BiCheckDouble,
} from "react-icons/bi";

import {
  FaUser,
  // FaFilePdf,
  // FaFileWord,
  // FaFileAlt,
  // FaFileExcel,
  // FaFilePowerpoint,
  // FaFileCode,
  // FaFileCsv,
  // FaFileArchive,
} from "react-icons/fa";
// import { FaRegCirclePlay } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
// import { MdAudioFile } from "react-icons/md";
// import { BsPlayFill } from "react-icons/bs";
// import { LuAudioLines } from "react-icons/lu";

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
//           </div>
//           {/* delivery content end */}

//           {/* start sender voice content dropdown menu */}
//           {senderVoiceMenu && (
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
//           {/* end sender voice content dropdown menu */}
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

/* SenderAudiosPlayer component */
// const SenderAudiosPlayer: React.FC<any> = ({ senderdropDownMenu }) => {
//   const [senderAudioMenu, setSenderAudioMenu] = useState<boolean>(false);
//   const handleSenderAudioMenu = (): any =>
//     setSenderAudioMenu((prev: any) => !prev);

//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         <div className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100 rounded-full dark:bg-gray-700">
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>

//         <div
//           className="relative bg-indigo-500 text-white p-4 border shadow-md
//         rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
//         >
//           {/* sender phone or name, drop-down menu button */}
//           <div className="flex items-center justify-between">
//             <h2 className="text-sm md:text-base font-medium">You</h2>
//             <button
//               type="button"
//               onClick={handleSenderAudioMenu}
//               className="p-1 rounded-full hover:bg-indigo-600"
//             >
//               <BsThreeDotsVertical className="w-5 h-5" />
//             </button>
//           </div>

//           {/* audio content of sender  */}
//           <div className="flex items-center space-x-2 py-1">
//             {/* styled audio file icon */}
//             <div
//               className="w-10 h-10 flex items-center justify-center bg-white/40
//             rounded-lg text-red-600 flex-shrink-0"
//             >
//               <MdAudioFile className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
//             </div>
//             {/* audio play or pause button option */}
//             <button
//               type="button"
//               className="inline-flex self-center items-center p-2"
//             >
//               <BsPlayFill className="text-lg md:text-3xl font-normal" />
//             </button>

//             {/*audio effect wave line */}
//             <div className="flex items-center space-x-[-4px]">
//               {Array.from({ length: 5 }).map((_: any, i: any) => (
//                 <LuAudioLines
//                   key={i}
//                   className="text-lg md:text-3xl font-normal"
//                 />
//               ))}
//             </div>
//             {/* duration */}
//             <span className="text-xs md:text-sm font-normal">5:00</span>
//           </div>

//           <p className="py-[2px] text-sm md:text-base font-normal">
//             This is a caption for the audio.
//           </p>

//           {/* sender delivery time zone */}
//           <div className="flex items-center justify-end w-full space-x-2 rtl:space-x-reverse">
//             <span className="text-xs md:text-sm font-normal">11:45 AM</span>
//             <span className="text-base font-normal">
//               <BiCheckDouble />
//             </span>
//           </div>

//           {/* drop-down menu options */}
//           {senderAudioMenu && (
//             <div
//               className="absolute top-12 right-4 z-10 bg-white divide-y
//             divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
//             >
//               <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                 {senderdropDownMenu.map((item: any, index: any) => (
//                   <li key={index}>
//                     <a
//                       className="block px-4 py-2 hover:bg-gray-100
//                     dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
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
//           className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold
//           bg-gray-100
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
//           <div className="py-1 relative">
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
//                   <div
//                     className="absolute inset-0 bg-black bg-opacity-50 flex items-center
//                   justify-center rounded-lg"
//                   >
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
//           {/* end dropdown menu sender image gallery */}
//         </div>
//         {/* end image gallery */}
//       </div>
//     </>
//   );
// };

/* SenderVideosGallery component */
// const SenderVideosGallery: React.FC<any> = ({ senderdropDownMenu }) => {
//   const [senderVideosGalleryMenu, setSenderVideosGalleryMenu] =
//     useState<boolean>(false);
//   const handleSenderVideoGalleryMenu = (): any =>
//     setSenderVideosGalleryMenu((prev: any) => !prev);

//   const videos: any = [
//     {
//       id: 1,
//       src: "../../src/assets/videos/nature.mp4",
//     },
//     {
//       id: 2,
//       src: "../../src/assets/videos/nature.mp4",
//     },
//     {
//       id: 3,
//       src: "../../src/assets/videos/nature.mp4",
//     },
//     {
//       id: 4,
//       src: "../../src/assets/videos/nature.mp4",
//     },
//   ];

//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         <div
//           className="w-10 h-10 overflow-hidden border-white border-[2px]
//         font-bold bg-gray-100 rounded-full dark:bg-gray-700"
//         >
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>

//         <div
//           className="relative bg-indigo-500 text-white p-4 border
//         shadow-md rounded-lg max-w-72 sm:max-w-80 md:max-w-72 w-full"
//         >
//           {/* sender option button, phone or name */}
//           <div className="flex items-center justify-between">
//             <h2 className="text-sm md:text-base font-medium">You</h2>
//             <button
//               type="button"
//               onClick={handleSenderVideoGalleryMenu}
//               className="p-1 rounded-full hover:bg-indigo-600"
//             >
//               <BsThreeDotsVertical className="w-5 h-5" />
//             </button>
//           </div>

//           {/* sender videos gallery */}
//           <div className="py-1 relative flex flex-col items-center">
//             <div className="grid grid-cols-2 gap-1 rounded-lg">
//               {videos.slice(0, 3).map((vid: any) => (
//                 <div
//                   key={vid.id}
//                   className="relative w-full flex justify-center"
//                 >
//                   <video
//                     src={vid.src}
//                     className="w-full h-28 object-cover rounded-lg"
//                     controls={false}
//                     tabIndex={-1}
//                   />
//                   <button
//                     type="button"
//                     className="absolute inset-0 flex items-center justify-center focus:outline-none pointer-events-none"
//                   >
//                     <FaRegCirclePlay
//                       className="w-12 h-12 text-white bg-black
//                     bg-opacity-40 rounded-full p-2 transition-opacity
//                     duration-200 opacity-100"
//                     />
//                   </button>
//                 </div>
//               ))}
//               {videos.length > 3 && (
//                 <div className="relative w-full flex justify-center">
//                   <video
//                     src={videos[3].src}
//                     className="w-full h-28 object-cover rounded-lg"
//                     controls={false}
//                     tabIndex={-1}
//                   />
//                   <button
//                     type="button"
//                     className="absolute inset-0 flex items-center justify-center focus:outline-none pointer-events-none"
//                   >
//                     <FaRegCirclePlay
//                       className="w-12 h-12 text-white bg-black
//                     bg-opacity-40 rounded-full p-2 transition-opacity
//                     duration-200 opacity-100"
//                     />
//                   </button>
//                   <div
//                     className="absolute inset-0 bg-black bg-opacity-50
//                   flex items-center justify-center rounded-lg"
//                   >
//                     <p className="text-white text-lg font-medium">
//                       +{videos.length - 3}
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>
//             <p className="py-1 text-sm md:text-base font-normal mr-14 sm:mr-14 md:mr-8">
//               This is the caption for the video{" "}
//             </p>
//           </div>

//           {/* start div content of sender video gallery delivery time zone */}
//           <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
//             <span className="text-xs md:text-sm font-medium">11:40 AM</span>
//             <span className="text-base font-medium">
//               <BiCheckDouble />
//             </span>
//           </div>
//           {/* end div content */}

//           {/* sender video gallery dropdown menu content */}
//           {senderVideosGalleryMenu && (
//             <div
//               className="absolute top-12 right-4 z-10 bg-white divide-y
//             divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
//             >
//               <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                 {senderdropDownMenu.map((item: any, index: any) => (
//                   <li key={index}>
//                     <a
//                       className="block px-4 py-2 hover:bg-gray-100
//                     dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

/* SenderWebUrl component */
// const SenderWebUrl: React.FC<any> = ({ senderdropDownMenu }) => {
//   const url: any = "http://localhost:5173/user/content/story";

//   const [senderUrlMenu, setSenderUrlMenu] = useState<boolean>(false);
//   const handleSenderUrlMenu = (): any => setSenderUrlMenu((prev: any) => !prev);

//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         <div
//           className="w-10 h-10 overflow-hidden border-white border-[2px]
//         font-bold bg-gray-100 rounded-full dark:bg-gray-700"
//         >
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>

//         <div className="relative bg-indigo-500 text-white p-4 border shadow-md rounded-lg max-w-xs sm:max-w-screen-sm md:max-w-md">
//           {/* sender phone or name */}
//           <div className="flex items-center justify-between">
//             <h2 className="text-sm md:text-base font-medium">You</h2>
//             <button
//               type="button"
//               onClick={handleSenderUrlMenu}
//               className="p-1 rounded-full hover:bg-indigo-600"
//             >
//               <BsThreeDotsVertical className="w-5 h-5" />
//             </button>
//           </div>

//           <a
//             href={url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="font-normal text-sm md:text-base py-1"
//           >
//             {url}
//           </a>

//           {/* sender delivery time zone */}
//           <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
//             <span className="text-xs md:text-sm font-medium">12:00 PM</span>
//             <span className="text-base font-medium">
//               <BiCheckDouble />
//             </span>
//           </div>

//           {/* sender weburl dropdown menu */}
//           {senderUrlMenu && (
//             <div className="absolute top-12 right-4 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
//               <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                 {senderdropDownMenu.map((item: any, index: any) => (
//                   <li key={index}>
//                     <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

/* SenderSocialMedia component */
// const SenderSocialMedia: React.FC<any> = ({ senderdropDownMenu }) => {
//   const [senderSocialMediaMenu, setSenderSocialMediaMenu] =
//     useState<boolean>(false);

//   const url: any = `http://localhost:5173/user/content/story`;
//   const title: string = `Nature Video | 2025 | London`;
//   const desc: string = `#nature #ntl #video #gimmie #youtube`;

//   const handleSenderSocialMediaMenu = (): any =>
//     setSenderSocialMediaMenu((prev: any) => !prev);

//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         <div className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100 rounded-full dark:bg-gray-700">
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>

//         <div className="relative bg-indigo-500 text-white p-4 border shadow-md rounded-lg max-w-72 sm:max-w-80 md:max-w-72 w-full">
//           {/* sender socialmedia phone or name, menu button content */}
//           <div className="flex items-center justify-between">
//             <h2 className="text-sm md:text-base font-medium">You</h2>
//             <button
//               type="button"
//               onClick={handleSenderSocialMediaMenu}
//               className="p-1 rounded-full hover:bg-indigo-600"
//             >
//               <BsThreeDotsVertical className="w-5 h-5" />
//             </button>
//           </div>

//           {/* sender socialmedia thumbnail content */}
//           <div className="py-1">
//             <div className=" bg-white/10 p-1 rounded-md">
//               <div className="relative w-full flex justify-center">
//                 <video
//                   src="../../src/assets/videos/nature.mp4"
//                   className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg border border-white"
//                   controls={false}
//                   muted
//                   tabIndex={-1}
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-0 flex items-center
//               justify-center focus:outline-none pointer-events-auto"
//                 >
//                   <FaRegCirclePlay className="text-white w-16 h-16 bg-black bg-opacity-40 rounded-full p-2 transition-opacity duration-200 opacity-100" />
//                 </button>
//               </div>

//               {/* sender social media description, title and channel name content */}
//               <div className="mt-3 p-2">
//                 <p className="text-sm md:text-base font-medium">{title}</p>
//                 <p className="text-sm text-indigo-100  line-clamp-3">{desc}</p>
//               </div>
//             </div>
//             {/* url content */}
//             <a
//               href={url}
//               rel="_blank"
//               target="noopener noreferrer"
//               className="block mt-2 text-xs sm:text-sm md:text-base
//             text-indigo-100 break-words"
//             >
//               {url}
//             </a>
//           </div>

//           {/* sender delivery time zone */}
//           <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
//             <span className="text-xs md:text-sm font-medium">10:51 AM</span>
//             <span className="text-base font-medium">
//               <BiCheckDouble />
//             </span>
//           </div>

//           {/* sender social media dropdown menu */}
//           {senderSocialMediaMenu && (
//             <div className="absolute top-12 right-4 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
//               <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                 {senderdropDownMenu.map((item: any, index: any) => (
//                   <li key={index}>
//                     <a className="block px-4 py-2 hover:bg-gray-100 dark:bg-gray-600 dark:hover:text-white">
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

/* SenderFilesUpload component */
// const SenderFilesUpload: React.FC<any> = ({ senderdropDownMenu }) => {
//   const [senderFileMenu, setSenderFileMenu] = useState<boolean>(false);
//   const handleSenderFileMenu = (): any =>
//     setSenderFileMenu((prev: any) => !prev);

//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         <div className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100 rounded-full dark:bg-gray-700">
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>

//         <div className="relative bg-indigo-500 text-white p-4 border shadow-md rounded-lg max-w-xs sm:max-w-sm md:max-w-md">
//           {/* sender phone or name and drop-down option button */}
//           <div className="flex items-center justify-between">
//             <h2 className="text-sm md:text-base font-medium">You</h2>
//             <button
//               type="button"
//               onClick={handleSenderFileMenu}
//               className="p-1 rounded-full hover:bg-indigo-600"
//             >
//               <BsThreeDotsVertical className="w-5 h-5" />
//             </button>
//           </div>

//           {/* sender file uploader content */}
//           <div className="flex items-center space-x-2 py-1">
//             <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg flex-shrink-0">
//               {/* <FaFilePdf className="w-6 h-6 md:w-8 md:h-8 text-red-600" /> */}
//               {/* <FaFileWord className="w-6 h-6 md:w-8 md:h-8 text-blue-600" /> */}
//               {/* <FaFileAlt className="w-6 h-6 md:w-8 md:h-8 text-blue-600" /> */}
//               {/* <FaFileExcel className="w-6 h-6 md:w-8 md:h-8 text-green-600" /> */}
//               {/* <FaFilePowerpoint className="w-6 h-6 md:w-8 md:h-8 text-red-600" /> */}
//               {/* <FaFileCode className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" /> */}
//               {/* <FaFileCsv className="w-6 h-6 md:w-8 md:h-8 text-green-600" /> */}
//               <FaFileArchive className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" />
//             </div>
//             <div className="flex items-center space-x-[-4px]">
//               {/* <p className="text-sm md:text-lg font-normal">test.pdf</p> */}
//               {/* <p className="text-sm md:text-lg font-normal">test.docx</p> */}
//               {/* <p className="text-sm md:text-lg font-normal">test.txt</p> */}
//               {/* <p className="text-sm md:text-lg font-normal">test.excel</p> */}
//               {/* <p className="text-sm md:text-lg font-normal">test.ppt</p> */}
//               {/* <p className="text-sm md:text-lg font-normal">test.html</p> */}
//               {/* <p className="text-sm md:text-lg font-normal">test.csv</p> */}
//               <p className="text-sm md:text-lg font-normal">test.zip</p>
//             </div>
//           </div>

//           {/* text for caption  */}
//           <p className="py-[2px] text-sm md:text-base font-normal">
//             This is the caption of file uploads
//           </p>

//           {/* sender delivery time zone */}
//           <div className="flex items-center justify-end w-full sace-x-2 rtl:space-x-reverse">
//             <span className="text-xs md:text-sm font-normal">11:40 AM</span>
//             <span className="text-base font-normal">
//               <BiCheckDouble />
//             </span>
//           </div>

//           {/* drop-down menu options */}
//           {senderFileMenu && (
//             <div className="absolute top-12 right-4 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
//               <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                 {senderdropDownMenu.map((item: any, index: any) => (
//                   <li key={index}>
//                     <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

/* SenderReply component */
// const SenderReply: React.FC<any> = ({ senderdropDownMenu }) => {
//   const [senderReplyMenu, setSenderReplyMenu] = useState<boolean>(false);
//   const handleSenderReplyMenu = (): any =>
//     setSenderReplyMenu((prev: any) => !prev);

//   // declare varibles of reply
//   const repliedTo: any = {
//     userName: "Seimens",
//     snippet: `Hey, here's the link to the doc we discussed earlier. Please review and comment.`,
//   };

//   const replyText: string = `Thanks — I've reviewed the doc and left a few comments. Looks good overall.`;
//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         <div className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100 rounded-full dark:bg-gray-700">
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>

//         <div
//           className="relative bg-indigo-500 text-white p-4 border shadow-md
//         rounded-lg max-w-72 sm:max-w-80 md:max-w-72 w-full"
//         >
//           {/* sender phone or name, drop-down option button */}
//           <div className="flex items-center justify-between">
//             <h2 className="text-sm md:text-base font-medium">You</h2>
//             <button
//               type="button"
//               onClick={handleSenderReplyMenu}
//               className="p-1 rounded-full hover:bg-indigo-600"
//             >
//               <BsThreeDotsVertical className="w-5 h-5" />
//             </button>
//           </div>

//           {/* sender replied preview content */}
//           <div className="mt-2 bg-white/10 p-2 rounded-md">
//             <h4 className="text-sm font-medium">{repliedTo.userName}</h4>
//             <p className="text-xs font-normal">{repliedTo.snippet}</p>
//           </div>

//           {/* actual reply content */}
//           <p className="font-normal text-sm md:text-base py-1">{replyText}</p>

//           {/* sender delivery time & status */}
//           <div className="flex items-center justify-end w-full sace-x-2 rtl:space-x-reverse">
//             <span className="text-xs md:text-sm font-medium">11:45 AM</span>
//             <span className="text-base font-medium">
//               <BiCheckDouble className="w-5 h-5" />
//             </span>
//           </div>

//           {/* sender drop-down menu options */}
//           {senderReplyMenu && (
//             <div className="absolute top-12 right-4 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
//               <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                 {senderdropDownMenu.map((item: any, index: any) => (
//                   <li key={index}>
//                     <a
//                       className="block px-4 py-2 hover:bg-gray-100
//                     dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
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
        {/* <SenderAudiosPlayer senderdropDownMenu={senderdropDownMenu} /> */}
        {/* <SenderImagesGallery senderdropDownMenu={senderdropDownMenu} /> */}
        {/* <SenderVideosGallery senderdropDownMenu={senderdropDownMenu} /> */}
        {/* <SenderWebUrl senderdropDownMenu={senderdropDownMenu} /> */}
        {/* <SenderSocialMedia senderdropDownMenu={senderdropDownMenu} /> */}
        {/* <SenderFilesUpload senderdropDownMenu={senderdropDownMenu} /> */}
        {/* <SenderReply senderdropDownMenu={senderdropDownMenu} /> */}
      </div>
      {/* end div */}
    </>
  );
};

// export Sender component
export default Sender;
