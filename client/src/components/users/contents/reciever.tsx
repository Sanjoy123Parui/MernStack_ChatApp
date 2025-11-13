import { useState } from "react";
import {
  FaUser,
  // FaUserPlus,
  // FaFilePdf,
  // FaFileWord,
  // FaFileAlt,
  // FaFileExcel,
  // FaFilePowerpoint,
  // FaFileCode,
  // FaFileCsv,
  // FaFileArchive,
} from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
// import { FaRegCirclePlay } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
// import { MdAudioFile } from "react-icons/md";
// import { BsPlayFill } from "react-icons/bs";
// import { LuAudioLines } from "react-icons/lu";
// import { MdOutlineFileDownload } from "react-icons/md";

/* RecieverTextMessage component*/
// const RecieverTextMessage: React.FC<any> = ({ recieverdropDownMenu }) => {
//   const messages: string = `Hi`;

//   const [recieverTextMenu, setRecieverTextMenu] = useState<boolean>(false);
//   const handleRecieverTextMenu = (): void =>
//     setRecieverTextMenu((prev) => !prev);

//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         {/* start div for wrapper */}
//         <div className="relative flex-shrink-0">
//           {/* start reciever text-message content */}
//           <div
//             className="relative bg-white text-black p-4 border
//           shadow-md rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
//           >
//             {/* reciever text-message name or phone */}
//             <div className="flex items-center justify-between">
//               <h2 className="text-sm md:text-base font-medium">You</h2>
//               <button
//                 type="button"
//                 onClick={handleRecieverTextMenu}
//                 className="p-1 ml-4 rounded-full hover:bg-gray-300"
//               >
//                 <BsThreeDotsVertical className="w-5 h-5" />
//               </button>
//             </div>

//             {/* reciever text messages messages */}
//             <p className="font-normal text-sm md:text-base py-1">{messages}</p>

//             {/* start reciever text message dilivery time */}
//             <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
//               <span className="text-xs md:text-sm font-medium">11:46 PM</span>
//             </div>
//             {/* end reciever text message dilivery time */}

//             {/* reciever dropdown menu */}
//             {recieverTextMenu && (
//               <div
//                 className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
//               rounded-lg shadow w-44 dark:bg-gray-700"
//               >
//                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                   {recieverdropDownMenu.map((item: any, index: any) => (
//                     <li key={index}>
//                       <a
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                         onClick={() => console.log(item)}
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//           {/* end text-message */}

//           {/* reciever like content */}
//           <span className="absolute -bottom-0.5 -left-0.5 w-5 h-5 rounded-full bg-slate-300 ring-2 shadow-md ring-black/5">
//             <AiFillLike className="w-4 h-4 text-blue-700  mx-auto" />
//           </span>
//         </div>
//         {/* end div */}

//         {/* reciever avatar content */}
//         <div
//           className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100
//         rounded-full dark:bg-gray-700"
//         >
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>
//       </div>
//     </>
//   );
// };

/* RecieverVoiceMessage component*/
// const RecieverVoiceMessage: React.FC<any> = ({ recieverdropDownMenu }) => {
//   const [recieverVoiceMenu, setRecieverVoiceMenu] = useState<boolean>(false);
//   const handleRecieverVoiceMenu = (): any =>
//     setRecieverVoiceMenu((prev: any) => !prev);

//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         {/* start div for wrapper */}
//         <div className="relative flex-shrink-0">
//           {/* start reciever voice-message content */}
//           <div
//             className="relative bg-white text-black p-4 border shadow-md
//         rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
//           >
//             {/* reciever name or phone */}
//             <div className="flex items-center justify-between">
//               <h2 className="text-sm md:text-base font-medium">You</h2>
//               <button
//                 type="button"
//                 onClick={handleRecieverVoiceMenu}
//                 className="p-1 rounded-full hover:bg-gray-300"
//               >
//                 <BsThreeDotsVertical className="w-5 h-5" />
//               </button>
//             </div>

//             {/* start voice message content */}
//             <div className="flex items-center space-x-2 py-1">
//               {/* voice message button start */}
//               <button className="inline-flex self-center items-center p-2">
//                 <BsPlayFill className="text-base md:text-3xl font-normal" />
//               </button>
//               {/* voice message button end */}

//               {/* start voice effect wave */}
//               <div className="flex items-center space-x-[-4px]">
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <LuAudioLines
//                     key={i}
//                     className="text-base md:text-3xl font-normal"
//                   />
//                 ))}
//               </div>
//               {/* end voice effect wave */}

//               {/* duration */}
//               <span className="text-xs md:text-sm font-normal">3:02</span>
//             </div>
//             {/* end voice message content */}

//             {/* delivery content start */}
//             <div className="flex items-center justify-end w-full space-x-2 rtl:space-x-reverse">
//               <span className="text-xs md:text-sm font-normal">07:35 PM</span>
//             </div>
//             {/* delivery content end */}

//             {/* reciever voice drop-down menu */}
//             {recieverVoiceMenu && (
//               <div
//                 className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
//               rounded-lg shadow w-44 dark:bg-gray-700"
//               >
//                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                   {recieverdropDownMenu.map((item: any, index: any) => (
//                     <li key={index}>
//                       <a
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                         onClick={() => console.log(item)}
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             {/* end reciever voice dropdown menu */}
//           </div>
//           {/* end voice message */}

//           {/* reciever like content */}
//           <span className="absolute -bottom-0.5 -left-0.5 w-5 h-5 rounded-full bg-slate-300 ring-2 shadow-md ring-black/5">
//             <AiFillLike className="w-4 h-4 text-blue-700  mx-auto" />
//           </span>
//         </div>
//         {/* end div */}

//         {/* reciever avatar content */}
//         <div
//           className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold
//           bg-gray-100 rounded-full dark:bg-gray-700"
//         >
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>
//       </div>
//     </>
//   );
// };

/*RecieverImages component*/
// const RecieverImages: React.FC<any> = ({ recieverdropDownMenu }) => {
//   const caption: string = `This is a caption for the image.`;
//   const src: any = `../../src/assets/images/women2.jpg`;

//   const [recieverImagesMenu, setRecieverImagesMenu] = useState<boolean>(false);
//   const handleRecieverImagesMenu = (): any =>
//     setRecieverImagesMenu((prev: any) => !prev);

//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         {/* start div for wrapper */}
//         <div className="relative flex-shrink-0">
//           {/* start reciever image content */}
//           <div
//             className="relative bg-white text-black p-4 border shadow-md
//         rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
//           >
//             {/* reciever text-message name or phone */}
//             <div className="flex items-center justify-between">
//               <h2 className="text-sm md:text-base font-medium">You</h2>
//               <button
//                 type="button"
//                 onClick={handleRecieverImagesMenu}
//                 className="p-1 rounded-full hover:bg-gray-300"
//               >
//                 <BsThreeDotsVertical className="w-5 h-5" />
//               </button>
//             </div>

//             {/* image content */}

//             <div className="py-1 relative">
//               <img
//                 src={src}
//                 alt="image"
//                 className="w-full h-auto object-cover max-h-72 min-h-72 rounded-lg"
//               />
//               <p className="py-1 text-sm md:text-base font-normal">{caption}</p>
//             </div>

//             {/* start reciever text message dilivery time */}
//             <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
//               <span className="text-xs md:text-sm font-medium">11:46 PM</span>
//             </div>
//             {/* end reciever text message dilivery time */}

//             {/* reciever image content drop down */}
//             {recieverImagesMenu && (
//               <div
//                 className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
//               rounded-lg shadow w-44 dark:bg-gray-700"
//               >
//                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                   {recieverdropDownMenu.map((item: any, index: any) => (
//                     <li key={index}>
//                       <a
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                         onClick={() => console.log(item)}
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//           {/* end reciever image content */}

//           {/* reciever like content */}
//           <span className="absolute -bottom-0.5 -left-0.5 w-5 h-5 rounded-full bg-slate-300 ring-2 shadow-md ring-black/5">
//             <AiFillLike className="w-4 h-4 text-blue-700  mx-auto" />
//           </span>
//         </div>
//         {/* end div */}

//         {/* reciever avatar content */}
//         <div
//           className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100
//         rounded-full dark:bg-gray-700"
//         >
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>
//       </div>
//     </>
//   );
// };

/*RecieverVideosPlayer component*/
// const RecieverVideosPlayer: React.FC<any> = ({ recieverdropDownMenu }) => {
//   const caption: string = `This is the caption for video`;
//   const src: any = `../../src/assets/videos/nature.mp4`;

//   const [recieverVideoPlayMenu, setRecieverVideoPlayMenu] =
//     useState<boolean>(false);
//   const handleRecieverVideoMenu = (): any =>
//     setRecieverVideoPlayMenu((prev: any) => !prev);

//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         {/* start div for wrapper */}
//         <div className="relative flex-shrink-0">
//           {/* start reciever video player content */}
//           <div
//             className="relative bg-white text-black p-4 border shadow-md
//         rounded-lg max-w-72 sm:max-w-80 md:max-w-72 w-full"
//           >
//             {/* reciever name or phone */}
//             <div className="flex items-center justify-between">
//               <h2 className="text-sm md:text-base font-medium">You</h2>
//               <button
//                 type="button"
//                 onClick={handleRecieverVideoMenu}
//                 className="p-1 rounded-full hover:bg-gray-300"
//               >
//                 <BsThreeDotsVertical className="w-5 h-5" />
//               </button>
//             </div>

//             {/* reciver video player content */}
//             <div className="py-1 relative flex flex-col items-center">
//               <div className="relative w-full flex justify-center">
//                 <video
//                   src={src}
//                   className="w-full h-auto object-cover max-h-72 min-h-72
//                 rounded-lg border border-white"
//                   controls={false}
//                   tabIndex={-1}
//                 />
//                 <button
//                   className="absolute inset-0 flex items-center
//               justify-center focus:outline-none pointer-events-auto"
//                 >
//                   <FaRegCirclePlay
//                     className="w-16 h-16 text-white bg-black
//                 bg-opacity-40 rounded-full p-2 transition-opacity duration-200 opacity-100"
//                   />
//                 </button>
//               </div>
//               <p
//                 className="py-1 text-sm md:text-base font-normal mr-20
//             sm:mr-20 md:mr-14"
//               >
//                 {caption}
//               </p>
//             </div>

//             {/* reciever time zone */}
//             <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
//               <span className="text-xs md:text-sm font-medium">11:50 PM</span>
//             </div>

//             {/* reciever video player drop-down menu options */}
//             {recieverVideoPlayMenu && (
//               <div
//                 className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
//               rounded-lg shadow w-44 dark:bg-gray-700"
//               >
//                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                   {recieverdropDownMenu.map((item: any, index: any) => (
//                     <li key={index}>
//                       <a
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                         onClick={() => console.log(item)}
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//           {/* end reciever video player content */}

//           {/* reciever like content */}
//           <span className="absolute -bottom-0.5 -left-0.5 w-5 h-5 rounded-full bg-slate-300 ring-2 shadow-md ring-black/5">
//             <AiFillLike className="w-4 h-4 text-blue-700  mx-auto" />
//           </span>
//         </div>
//         {/* end div */}

//         {/* reciever avatar content */}
//         <div
//           className="w-10 h-10 overflow-hidden border-white
//         border-[2px] font-bold bg-gray-100 rounded-full dark:bg-gray-700"
//         >
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>
//       </div>
//     </>
//   );
// };

/* RecieverAudiosPlayer component */
// const RecieverAudiosPlayer: React.FC<any> = ({ recieverdropDownMenu }) => {
//   const caption: string = `This is a caption for the audio.`;
//   const [recieverAudioMenu, setRecieverAudioMenu] = useState<boolean>(false);
//   const handleRecieverAudioMenu = (): any =>
//     setRecieverAudioMenu((prev: any) => !prev);
//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         {/* start div for wrapper */}
//         <div className="relative flex-shrink-0">
//           <div
//             className="relative bg-white text-black p-4 border shadow-md
//         rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
//           >
//             {/* reciever phone or name, drop-down option button */}
//             <div className="flex items-center justify-between">
//               <h2 className="text-sm md:text-base font-medium">You</h2>
//               <button
//                 type="button"
//                 onClick={handleRecieverAudioMenu}
//                 className="p-1 rounded-full hover:bg-gray-300"
//               >
//                 <BsThreeDotsVertical className="w-5 h-5" />
//               </button>
//             </div>

//             {/* audio content of reciever */}
//             <div className="flex items-center space-x-2 py-1">
//               {/* audio songs file icon */}
//               <div
//                 className="w-10 h-10 flex items-center bg-white/40 rounded-lg
//               justify-center text-red-600 flex-shrink-0"
//               >
//                 <MdAudioFile className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
//               </div>

//               {/* audio play or pause button */}
//               <button
//                 type="button"
//                 className="inline-flex self-center items-center p-2"
//               >
//                 <BsPlayFill className="text-lg md:text-3xl font-normal" />
//               </button>

//               {/* audio effect wave line */}
//               <div className="flex items-center space-x-[-4px]">
//                 {Array.from({ length: 5 }).map((_: any, i: any) => (
//                   <LuAudioLines
//                     key={i}
//                     className="text-lg md:text-3xl font-normal"
//                   />
//                 ))}
//               </div>

//               {/* duration */}
//               <span className="text-xs md:text-sm font-normal">4:00</span>
//             </div>

//             <p className="py-[2px] text-sm md:text-base font-normal">
//               {caption}
//             </p>

//             {/* reciever delivery time zone */}
//             <div className="flex items-center justify-end w-full space-x-2 rtl:space-x-reverse">
//               <span className="text-xs md:text-sm font-normal">11:45 AM</span>
//             </div>

//             {/* reciever drop-down menu */}
//             {recieverAudioMenu && (
//               <div
//                 className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
//               rounded-lg shadow w-44 dark:bg-gray-700"
//               >
//                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                   {recieverdropDownMenu.map((item: any, index: any) => (
//                     <li key={index}>
//                       <a
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                         onClick={() => console.log(item)}
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* reciever like content */}
//           <span className="absolute -bottom-0.5 -left-0.5 w-5 h-5 rounded-full bg-slate-300 ring-2 shadow-md ring-black/5">
//             <AiFillLike className="w-4 h-4 text-blue-700  mx-auto" />
//           </span>
//         </div>
//         {/* end div */}

//         {/* reciever avatar content */}
//         <div
//           className="w-10 h-10 overflow-hidden border-white border-[2px]
//         font-bold bg-gray-100 rounded-full dark:bg-gray-700"
//         >
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>
//       </div>
//     </>
//   );
// };

/*RecieverImagesGallery component*/
// const RecieverImagesGallery: React.FC<any> = ({ recieverdropDownMenu }) => {
//   const [recieverImageGalleryMenu, setRecieverImageGalleryMenu] =
//     useState<boolean>(false);
//   const handleRecieverImageGalleryMenu = (): any =>
//     setRecieverImageGalleryMenu((prev: any) => !prev);

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
//   ];

//   const caption: string = `This is a caption for the image gallery.`;

//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         {/* start div for wrapper */}
//         <div className="relative flex-shrink-0">
//           {/* start reciever image gallery content */}
//           <div
//             className="relative bg-white text-black p-4 border shadow-md
//         rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
//           >
//             {/*Reciever phone or name */}
//             <div className="flex items-center justify-between">
//               <h2 className="text-sm md:text-base font-medium">You</h2>
//               <button
//                 type="button"
//                 className="p-1 rounded-full hover:bg-gray-300"
//                 onClick={handleRecieverImageGalleryMenu}
//               >
//                 <BsThreeDotsVertical className="w-5 h-5" />
//               </button>
//             </div>

//             {/* image gallery content */}
//             <div className="py-1">
//               <div className="grid grid-cols-2 gap-1 rounded-lg">
//                 {images.slice(0, 3).map((image: any, index: any) => (
//                   <img
//                     key={index}
//                     src={image.src}
//                     alt={image.alt}
//                     // className="w-28 h-28 object-cover rounded-lg"
//                     className="w-full h-28 object-cover rounded-lg"
//                   />
//                 ))}
//                 {images.length > 3 && (
//                   <div className="relative">
//                     <img
//                       src={images[3].src}
//                       alt={images[3].alt}
//                       // className="w-28 h-28 object-cover rounded-lg"
//                       className="w-full h-28 object-cover rounded-lg"
//                     />
//                     <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
//                       <p className="text-white text-lg font-medium">
//                         +{images.length - 3}
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <p className="py-1 text-sm md:text-base font-normal">{caption}</p>
//             </div>

//             {/* reciever time zone content */}
//             <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
//               <span className="text-xs md:text-sm font-medium">11:50 AM</span>
//             </div>

//             {/* start dropdown menu of reciever image gallery content */}
//             {recieverImageGalleryMenu && (
//               <div
//                 className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
//               rounded-lg shadow w-44 dark:bg-gray-700"
//               >
//                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                   {recieverdropDownMenu.map((item: any, index: any) => (
//                     <li key={index}>
//                       <a
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                         onClick={() => console.log(item)}
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             {/* end dropdown menu reciver image gallery */}
//           </div>
//           {/* end image gallery */}

//           {/* reciever like content */}
//           <span className="absolute -bottom-0.5 -left-0.5 w-5 h-5 rounded-full bg-slate-300 ring-2 shadow-md ring-black/5">
//             <AiFillLike className="w-4 h-4 text-blue-700  mx-auto" />
//           </span>
//         </div>
//         {/* end div */}

//         {/* reciever avatar content */}
//         <div
//           className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100
//         rounded-full dark:bg-gray-700"
//         >
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>
//       </div>
//     </>
//   );
// };

/* RecieverVideosGallery component */
// const RecieverVideosGallery: React.FC<any> = ({ recieverdropDownMenu }) => {
//   const [recieverVideosGalleryMenu, setRecieverVideosGalleryMenu] =
//     useState<boolean>(false);
//   const handleRecieverVideosGalleryMenu = (): any =>
//     setRecieverVideosGalleryMenu((prev: any) => !prev);

//   const caption: string = `This is the caption for video`;

//   const videos: any = [
//     { id: 1, src: "../../src/assets/videos/nature.mp4" },
//     { id: 2, src: "../../src/assets/videos/nature.mp4" },
//     { id: 3, src: "../../src/assets/videos/nature.mp4" },
//     { id: 4, src: "../../src/assets/videos/nature.mp4" },
//   ];
//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         {/* start div for wrapper */}
//         <div className="relative flex-shrink-0">
//           <div
//             className="relative bg-white text-black p-4 border shadow-md
//         rounded-lg max-w-72 sm:max-w-80 md:max-w-72 w-full"
//           >
//             {/* reciever phone or name and option menu button */}
//             <div className="flex items-center justify-between">
//               <h2 className="text-sm md:text-base font-medium">You</h2>
//               <button
//                 type="button"
//                 onClick={handleRecieverVideosGalleryMenu}
//                 className="p-1 rounded-full hover:bg-gray-300"
//               >
//                 <BsThreeDotsVertical className="w-5 h-5" />
//               </button>
//             </div>

//             {/* start reciver video player gallery content */}
//             <div className="py-1 relative flex flex-col items-center">
//               <div className="grid grid-cols-2 gap-1 rounded-lg">
//                 {videos.slice(0, 3).map((vid: any) => (
//                   <div
//                     key={vid.id}
//                     className="relative w-full flex justify-center"
//                   >
//                     <video
//                       src={vid.src}
//                       className="w-full h-28 object-cover rounded-lg"
//                       controls={false}
//                       tabIndex={-1}
//                     />
//                     <button
//                       type="button"
//                       className="absolute inset-0 flex items-center justify-center focus:outline-none pointer-events-auto"
//                     >
//                       <FaRegCirclePlay
//                         className="w-12 h-12 text-white bg-black
//                     bg-opacity-40 rounded-full p-2 transition-opacity
//                     duration-200 opacity-100"
//                       />
//                     </button>
//                   </div>
//                 ))}
//                 {videos.length > 3 && (
//                   <div className="relative w-full flex justify-center">
//                     <video
//                       src={videos[3].src}
//                       className="w-full h-28 object-cover rounded-lg"
//                       controls={false}
//                       tabIndex={-1}
//                     />
//                     <button
//                       type="button"
//                       className="absolute inset-0 flex items-center justify-center focus:outline-none pointer-events-auto"
//                     >
//                       <FaRegCirclePlay
//                         className="w-12 h-12 text-white bg-black
//                     bg-opacity-40 rounded-full p-2 transition-opacity
//                     duration-200 opacity-100"
//                       />
//                     </button>
//                     <div
//                       className="absolute inset-0 bg-black bg-opacity-50 flex
//                   items-center justify-center rounded-lg"
//                     >
//                       <p className="text-white text-lg font-medium">
//                         +{videos.length - 3}
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <p
//                 className="py-1 text-sm md:text-base font-normal
//             mr-20 sm:mr-20 md:mr-14"
//               >
//                 {caption}
//               </p>
//             </div>
//             {/* end reciver video player gallery content */}

//             {/* reciever time zone content */}
//             <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
//               <span className="text-xs md:text-sm font-medium">11:50 AM</span>
//             </div>

//             {/* reciever video gallery menu options */}
//             {recieverVideosGalleryMenu && (
//               <div
//                 className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
//               rounded-lg shadow w-44 dark:bg-gray-700"
//               >
//                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                   {recieverdropDownMenu.map((item: any, index: any) => (
//                     <li key={index}>
//                       <a
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                         onClick={() => console.log(item)}
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* reciever like content */}
//           <span className="absolute -bottom-0.5 -left-0.5 w-5 h-5 rounded-full bg-slate-300 ring-2 shadow-md ring-black/5">
//             <AiFillLike className="w-4 h-4 text-blue-700  mx-auto" />
//           </span>
//         </div>
//         {/* end div */}

//         {/* reciever avatar content */}
//         <div
//           className="w-10 h-10 overflow-hidden border-white
//          border-[2px] font-bold bg-gray-100 rounded-full dark:bg-gray-700"
//         >
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>
//       </div>
//     </>
//   );
// };

/* RecieverWebUrl component */
// const RecieverWebUrl: React.FC<any> = ({ recieverdropDownMenu }) => {
//   const url: any = "http://localhost:5173/user/content/story";
//   const [recieverWebUrlMenu, setRecieverWebUrlMenu] = useState<boolean>(false);
//   const handleRecieverUrlMenu = (): any =>
//     setRecieverWebUrlMenu((prev: any) => !prev);
//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         {/* start div for wrapper */}
//         <div className="relative flex-shrink-0">
//           <div className="relative bg-white text-black p-4 border shadow-md rounded-lg max-w-xs sm:max-w-sm md:max-w-md">
//             {/* reciever phone or name heading  */}
//             <div className="flex items-center justify-between">
//               <h2 className="text-sm md:text-base font-medium">You</h2>
//               <button
//                 type="button"
//                 onClick={handleRecieverUrlMenu}
//                 className="p-1 rounded-full hover:bg-gray-300"
//               >
//                 <BsThreeDotsVertical className="h-5 w-5" />
//               </button>
//             </div>

//             <a
//               href={url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="font-normal text-blue-400 hover:text-blue-600 text-sm md:text-base py-1"
//             >
//               {url}
//             </a>

//             {/* reciever delivery time zone */}
//             <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
//               <span className="text-xs md:text-sm font-medium">11:46 AM</span>
//             </div>

//             {/* reciever web url dropdown menu options */}
//             {recieverWebUrlMenu && (
//               <div
//                 className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
//               rounded-lg shadow w-44 dark:bg-gray-700"
//               >
//                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                   {recieverdropDownMenu.map((item: any, index: any) => (
//                     <li key={index}>
//                       <a
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                         onClick={() => console.log(item)}
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* reciever like content */}
//           <span className="absolute -bottom-0.5 -left-0.5 w-5 h-5 rounded-full bg-slate-300 ring-2 shadow-md ring-black/5">
//             <AiFillLike className="w-4 h-4 text-blue-700  mx-auto" />
//           </span>
//         </div>
//         {/* end div */}

//         {/* reciever avatar content */}
//         <div className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100 rounded-full dark:bg-gray-700">
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>
//       </div>
//     </>
//   );
// };

/* RecieverSocialMedia component */
// const RecieverSocialMedia: React.FC<any> = ({ recieverdropDownMenu }) => {
//   const [recieverSocialMediaMenu, setReciverSocialMediaMenu] =
//     useState<boolean>(false);

//   const url: string = `https://youtu.be/asG7cwxi1sA?si=CK0Iigc857TEu9FF`;
//   const srcUrl: string = `https://www.youtube.com/embed/asG7cwxi1sA?si=ao_gsCihSGRw6LsN`;
//   const title: string = `Saiyaara Reprise - Female | Full Song | Ahaan, Aneet | Tanishk, Faheem, Arslan | Shreya | Irshad`;
//   const desc: string = `#yrfnewreleases #saiyaarareprise #yrf #yashrajfilms #yrfmovies #yrfmusic #mohitsuri #akshayewidhani #ahaanpanday #aneetpadda #tanishkbagchi #faheemabdullah #arslannizami #shreyaghoshal #irshadkamil #newsong #bollywoodsong #saiyaara #femaleversion #hindisong #bollywoodsong #romanticsong`;

//   const handleRecieverSocialMediaMenu = (): any =>
//     setReciverSocialMediaMenu((prev: any) => !prev);
//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         {/* start div for wrapper */}
//         <div className="relative flex-shrink-0">
//           <div
//             className="relative bg-white text-black p-4 border shadow-md
//         rounded-lg max-w-72 sm:max-w-80 md:max-w-72 w-full"
//           >
//             {/* reciever phone or name, menu option button */}
//             <div className="flex items-center justify-between">
//               <h2 className="text-sm md:text-base font-medium">You</h2>
//               <button
//                 type="button"
//                 onClick={handleRecieverSocialMediaMenu}
//                 className="p-1 rounded-full hover:bg-gray-300"
//               >
//                 <BsThreeDotsVertical className="w-5 h-5" />
//               </button>
//             </div>

//             {/* reciever social media thumbnail */}
//             <div className="py-1">
//               <div className=" bg-black/5 p-1 rounded-md">
//                 <div className="relative w-full flex justify-center">
//                   <iframe
//                     src={srcUrl}
//                     className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg border border-white"
//                     title="YouTube video player"
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     referrerPolicy="strict-origin-when-cross-origin"
//                     allowFullScreen
//                   />
//                 </div>

//                 {/* reciever social media description, title and menu */}
//                 <div className="p-2">
//                   <p className="text-sm font-medium line-clamp-2">{title}</p>
//                   <p className="text-sm text-gray-600  line-clamp-1">{desc}</p>
//                 </div>
//               </div>

//               {/* reciever social media url content */}
//               <a
//                 href={url}
//                 rel="_blank"
//                 target="noopener noreferrer"
//                 className="block mt-2 text-xs sm:text-sm md:text-base text-blue-400 hover:text-blue-600 break-words"
//               >
//                 {url}
//               </a>
//             </div>

//             {/* reciever time-zone */}
//             <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
//               <span className="text-xs md:text-sm font-medium">11:50 AM</span>
//             </div>

//             {/* reciever drop-down menu */}
//             {recieverSocialMediaMenu && (
//               <div
//                 className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
//               rounded-lg shadow w-44 dark:bg-gray-700"
//               >
//                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                   {recieverdropDownMenu.map((item: any, index: any) => (
//                     <li key={index}>
//                       <a
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                         onClick={() => console.log(item)}
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* reciever like content */}
//           <span className="absolute -bottom-0.5 -left-0.5 w-5 h-5 rounded-full bg-slate-300 ring-2 shadow-md ring-black/5">
//             <AiFillLike className="w-4 h-4 text-blue-700  mx-auto" />
//           </span>
//         </div>
//         {/* end div */}

//         {/* reciever avatar content */}
//         <div className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100 rounded-full dark:bg-gray-700">
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>
//       </div>
//     </>
//   );
// };

/* RecieverGeolocations component */
// const RecieverGeolocations: React.FC<any> = ({ recieverdropDownMenu }) => {
//   const [recieverGeolocMenu, setRecieverGeolocMenu] = useState<boolean>(false);

//   const url: string = `https://maps.app.goo.gl/mADPKC6tC2eExGtT9`;
//   const locationUrl: string = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.570070406127!2d88.09444907429992!3d22.966055518436782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f861004bc3a8eb%3A0xdaff3c39e52cdf6c!2sDhaniakhali%20bus%20stand!5e0!3m2!1sen!2sin!4v1762235974012!5m2!1sen!2sin`;
//   const locationAddress: string = `X38W+CRC, Dhaniakhali, West Bengal 712302`;

//   const handleRecieverGeolocMenu = (): any =>
//     setRecieverGeolocMenu((prev: any) => !prev);

//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         {/* start div for wrapper */}
//         <div className="relative flex-shrink-0">
//           <div className="relative bg-white text-black p-4 border shadow-md rounded-lg max-w-72 sm:max-w-80 md:max-w-72 w-full">
//             {/* reciever contact phone or name, drop-down menu button */}
//             <div className="flex items-center justify-between">
//               <h2 className="text-sm md:text-base font-medium">Neil Sims</h2>
//               <button
//                 type="button"
//                 onClick={handleRecieverGeolocMenu}
//                 className="p-1 rounded-full hover:bg-gray-300"
//               >
//                 <BsThreeDotsVertical className="w-5 h-5" />
//               </button>
//             </div>

//             {/* reciever geolocation content */}
//             <div className="py-1">
//               <div className="bg-black/5 p-1 rounded-md">
//                 <div className="relative w-full flex justify-center">
//                   <iframe
//                     src={locationUrl}
//                     className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg border border-white"
//                     allowFullScreen
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                   />
//                 </div>

//                 {/* reciever geolocation address */}
//                 <div className="p-2">
//                   <p className="text-sm font-medium line-clamp-2">
//                     {locationAddress}
//                   </p>
//                 </div>
//               </div>

//               {/* url content */}
//               <a
//                 href={url}
//                 rel="_blank"
//                 target="noopener noreferrer"
//                 className="block mt-2 text-xs sm:text-sm md:text-base text-blue-400 hover:text-blue-600 break-words"
//               >
//                 {url}
//               </a>
//             </div>

//             {/* reciever time zone */}
//             <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
//               <span className="text-xs md:text-sm font-medium">11:45 AM</span>
//             </div>

//             {/* reciever drop-down menu options */}
//             {recieverGeolocMenu && (
//               <div
//                 className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
//               rounded-lg shadow w-44 dark:bg-gray-700"
//               >
//                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                   {recieverdropDownMenu.map((item: any, index: any) => (
//                     <li key={index}>
//                       <a
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                         onClick={() => console.log(item)}
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* reciever like content */}
//           <span className="absolute -bottom-0.5 -left-0.5 w-5 h-5 rounded-full bg-slate-300 ring-2 shadow-md ring-black/5">
//             <AiFillLike className="w-4 h-4 text-blue-700  mx-auto" />
//           </span>
//         </div>
//         {/* end div */}

//         {/* reciever avatar content */}
//         <div className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100 rounded-full dark:bg-gray-700">
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>
//       </div>
//     </>
//   );
// };

/* RecieverFilesUpload component */
// const RecieverFilesUpload: React.FC<any> = ({ recieverdropDownMenu }) => {
//   const [recieverFileMenu, setRecieverFileMenu] = useState<boolean>(false);
//   const handleRecieverFileMenu = (): any =>
//     setRecieverFileMenu((prev: any) => !prev);

//   const caption: string = `This is the caption of file uploads`;

//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         {/* start div for wrapper content */}
//         <div className="relative flex-shrink-0">
//           <div
//             className="relative bg-white text-black p-4 border shadow-md
//         rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
//           >
//             {/* reciever phone or name, drop-down option button */}
//             <div className="flex items-center justify-between">
//               <h2 className="text-sm md:text-base font-medium">You</h2>
//               <button
//                 type="button"
//                 onClick={handleRecieverFileMenu}
//                 className="p-1 rounded-full hover:bg-gray-300"
//               >
//                 <BsThreeDotsVertical className="w-5 h-5" />
//               </button>
//             </div>

//             {/* reciever file upload content */}
//             <div className="flex items-center space-x-2 py-1">
//               {/* upload file icons and file names */}
//               <div className="w-10 h-10 flex items-center justify-center bg-white/40 rounded-lg flex-shrink-0">
//                 {/* <FaFilePdf className="w-6 h-6 md:w-8 md:h-8 text-red-600" /> */}
//                 {/* <FaFileWord className="w-6 h-6 md:w-8 md:h-8 text-blue-600" /> */}
//                 {/* <FaFileAlt className="w-6 h-6 md:w-8 md:h-8 text-blue-600" /> */}
//                 {/* <FaFileExcel className="w-6 h-6 md:w-8 md:h-8 text-green-600" /> */}
//                 {/* <FaFilePowerpoint className="w-6 h-6 md:w-8 md:h-8 text-red-600" /> */}
//                 {/* <FaFileCode className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" /> */}
//                 {/* <FaFileCsv className="w-6 h-6 md:w-8 md:h-8 text-green-600" /> */}
//                 <FaFileArchive className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" />
//               </div>
//               <div className="flex items-center space-x-[-4px]">
//                 {/* <p className="text-sm md:text-lg font-normal">text.pdf</p> */}
//                 {/* <p className="text-sm md:text-lg font-normal">text.docx</p> */}
//                 {/* <p className="text-sm md:text-lg font-normal">text.txt</p> */}
//                 {/* <p className="text-sm md:text-lg font-normal">text.excel</p> */}
//                 {/* <p className="text-sm md:text-lg font-normal">text.ppt</p> */}
//                 {/* <p className="text-sm md:text-lg font-normal">text.html</p> */}
//                 {/* <p className="text-sm md:text-lg font-normal">text.csv</p> */}
//                 <p className="text-sm md:text-lg font-normal">text.zip</p>
//               </div>
//             </div>

//             {/* text for caption of reciever */}
//             <p className="py-[2px] text-sm md:text-base font-normal">
//               {" "}
//               {caption}
//             </p>

//             {/* reciever delivery time zone */}
//             <div className="flex items-center justify-end w-full space-x-2 rtl:space-x-reverse">
//               <span className="text-xs md:text-sm font-normal">11:40 AM</span>
//             </div>

//             {/* reciever drop-down menu */}
//             {recieverFileMenu && (
//               <div
//                 className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
//               rounded-lg shadow w-44 dark:bg-gray-700"
//               >
//                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                   {recieverdropDownMenu.map((item: any, index: any) => (
//                     <li key={index}>
//                       <a
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                         onClick={() => console.log(item)}
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* reciever like content */}
//           <span className="absolute -bottom-0.5 -left-0.5 w-5 h-5 rounded-full bg-slate-300 ring-2 shadow-md ring-black/5">
//             <AiFillLike className="w-4 h-4 text-blue-700  mx-auto" />
//           </span>
//         </div>
//         {/* end div */}

//         {/* reciever avatar content */}
//         <div
//           className="w-10 h-10 overflow-hidden border-white border-[2px]
//         font-bold bg-gray-100 rounded-full dark:bg-gray-700"
//         >
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>
//       </div>
//     </>
//   );
// };

/* RecieverReply component */
// const RecieverReply: React.FC<any> = ({ recieverdropDownMenu }) => {
//   const [recieverReplyMenu, setRecieverReplyMenu] = useState<boolean>(false);
//   const handleRecieverReplyMenu = (): any =>
//     setRecieverReplyMenu((prev: any) => !prev);

//   // declare variable for reply reciever
//   const repliedTo: any = {
//     userName: "You",
//     snippet: `Hey, here's the link to the doc we discussed earlier. Please review and comment.`,
//   };
//   const replyText: string = `Thanks — I've reviewed the doc and left a few comments. Looks good overall.`;
//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         {/* start div for wrapper */}
//         <div className="relative flex-shrink-0">
//           {/* reciever phone or name, drop-down menu button */}
//           <div
//             className="relative bg-white text-black p-4 border shadow-md
//         rounded-lg max-w-72 sm:max-w-80 md:max-w-72 w-full"
//           >
//             <div className="flex items-center justify-between">
//               <h2 className="text-sm md:text-base font-medium">Neil Sims</h2>
//               <button
//                 type="button"
//                 onClick={handleRecieverReplyMenu}
//                 className="p-1 rounded-full hover:bg-gray-300"
//               >
//                 <BsThreeDotsVertical className="w-5 h-5" />
//               </button>
//             </div>

//             {/* reciever reply preview content*/}
//             <div className="mt-2 bg-black/5 p-2 rounded-md">
//               <h4 className="text-sm font-medium">{repliedTo.userName}</h4>
//               <p className="text-xs font-normal">{repliedTo.snippet}</p>
//             </div>

//             {/* actual reply content */}
//             <p className="font-normal text-sm md:text-base py-1">{replyText}</p>

//             {/* reciever delivery time zone */}
//             <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
//               <span className="text-xs md:text-sm font-medium">11:45 AM</span>
//             </div>

//             {/* reciever drop-down menu */}
//             {recieverReplyMenu && (
//               <div
//                 className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
//               rounded-lg shadow w-44 dark:bg-gray-700"
//               >
//                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                   {recieverdropDownMenu.map((item: any, index: any) => (
//                     <li key={index}>
//                       <a
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                         onClick={() => console.log(item)}
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* reciever like content */}
//           <span className="absolute -bottom-0.5 -left-0.5 w-5 h-5 rounded-full bg-slate-300 ring-2 shadow-md ring-black/5">
//             <AiFillLike className="w-4 h-4 text-blue-700  mx-auto" />
//           </span>
//         </div>
//         {/* end div */}

//         {/* reciever avatar content */}
//         <div
//           className="w-10 h-10 overflow-hidden border-white border-[2px]
//         font-bold bg-gray-100 rounded-full dark:bg-gray-700"
//         >
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>
//       </div>
//     </>
//   );
// };

/* RecieverAddToContacts component */
// const RecieverAddToContacts: React.FC<any> = ({ recieverdropDownMenu }) => {
//   const [recieverContactMenu, setRecieverContactMenu] =
//     useState<boolean>(false);

//   const contactInfo: any = {
//     userName: "Devid Willsons",
//     userPhone: "9277764011",
//   };

//   const handleRecieverContactMenu = (): any =>
//     setRecieverContactMenu((prev: any) => !prev);

//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         {/* start div for wrapper */}
//         <div className="relative flex-shrink-0">
//           <div
//             className="relative bg-white text-black p-4 border
//           shadow-md rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
//           >
//             {/* reciever contact phone or name, drop-down menu button */}
//             <div className="flex items-center justify-between">
//               <h2 className="text-sm md:text-base font-medium">Neil</h2>
//               <button
//                 type="button"
//                 onClick={handleRecieverContactMenu}
//                 className="p-1 rounded-full hover:bg-gray-300"
//               >
//                 <BsThreeDotsVertical className="w-5 h-5" />
//               </button>
//             </div>

//             {/* reciever addtocontact content */}
//             <div className="mt-1">
//               <div className="flex flex-row items-center bg-black/10 p-2 rounded-lg gap-1">
//                 {/* contact avatar (compact) */}
//                 <div className="w-12 h-12 sm:w-14 sm:h-14 overflow-hidden rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 dark:bg-gray-700">
//                   <FaUser className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400" />
//                 </div>

//                 {/* contact phone and name */}
//                 <div className="flex-1 min-w-0 ml-3 py-2">
//                   <h4 className="text-sm sm:text-lg font-semibold truncate">
//                     {contactInfo.userName}
//                   </h4>
//                   <p className="text-xs sm:text-sm font-medium truncate">
//                     {contactInfo.userPhone}
//                   </p>
//                 </div>

//                 {/* contact add button content (compact, not full-width) */}
//                 <div className="ml-4 flex items-center gap-2">
//                   <button
//                     type="button"
//                     className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-blue-400 text-white
//                   font-semibold text-sm hover:bg-blue-600
//                   focus:outline-none focus:ring-2 focus:ring-blue-700"
//                   >
//                     <FaUserPlus className="w-4 h-4" />
//                     <span className="text-sm">Add</span>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* reciever delivery time zone */}
//             <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse mt-3">
//               <span className="text-xs md:text-sm font-medium">11:45 AM</span>
//             </div>

//             {/* reciever drop-down menu */}
//             {recieverContactMenu && (
//               <div
//                 className="absolute top-12 left-4 z-10 bg-white divide-y divide-gray-100
//               rounded-lg shadow w-44 dark:bg-gray-700"
//               >
//                 <ul
//                   className="py-2 text-sm text-gray-700
//               dark:text-gray-200"
//                 >
//                   {recieverdropDownMenu.map((item: any, index: any) => (
//                     <li key={index}>
//                       <a
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                         onClick={() => console.log(item)}
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* reciever like content */}
//           <span className="absolute -bottom-0.5 -left-0.5 w-5 h-5 rounded-full bg-slate-300 ring-2 shadow-md ring-black/5">
//             <AiFillLike className="w-4 h-4 text-blue-700  mx-auto" />
//           </span>
//         </div>
//         {/* end div */}

//         {/* reciever avatar content */}
//         <div className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100 rounded-full dark:bg-gray-700">
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>
//       </div>
//     </>
//   );
// };

const Reciever: React.FC = () => {
  // reciver drop down menu declare
  const recieverdropDownMenu: any = [
    "Reply",
    "Forward",
    "Copy",
    "Paste",
    "Delete",
    "Like",
  ];

  return (
    <>
      <div className="flex items-start justify-start">
        {/* <RecieverTextMessage recieverdropDownMenu={recieverdropDownMenu} /> */}
        {/* <RecieverVoiceMessage recieverdropDownMenu={recieverdropDownMenu} /> */}
        {/* <RecieverImages recieverdropDownMenu={recieverdropDownMenu} /> */}
        {/* <RecieverVideosPlayer recieverdropDownMenu={recieverdropDownMenu} /> */}
        {/* <RecieverAudiosPlayer recieverdropDownMenu={recieverdropDownMenu} /> */}
        {/* <RecieverImagesGallery recieverdropDownMenu={recieverdropDownMenu} /> */}
        {/* <RecieverVideosGallery recieverdropDownMenu={recieverdropDownMenu} /> */}
        {/* <RecieverWebUrl recieverdropDownMenu={recieverdropDownMenu} /> */}
        {/* <RecieverSocialMedia recieverdropDownMenu={recieverdropDownMenu} /> */}
        {/* <RecieverGeolocations recieverdropDownMenu={recieverdropDownMenu} /> */}
        {/* <RecieverFilesUpload recieverdropDownMenu={recieverdropDownMenu} /> */}
        {/* <RecieverReply recieverdropDownMenu={recieverdropDownMenu} /> */}
        {/* <RecieverAddToContacts recieverdropDownMenu={recieverdropDownMenu} /> */}
      </div>
    </>
  );
};

// export Reciever component
export default Reciever;
