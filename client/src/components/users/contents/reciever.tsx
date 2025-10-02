// import { useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { BsPlayFill } from "react-icons/bs";
// import { LuAudioLines } from "react-icons/lu";
// import { MdOutlineFileDownload } from "react-icons/md";

/* RecieverTextMessage component*/
// const RecieverTextMessage: React.FC<any> = ({ recieverdropDownMenu }) => {
//   const [recieverTextMenu, setRecieverTextMenu] = useState<boolean>(false);
//   const handleRecieverTextMenu = (): void =>
//     setRecieverTextMenu((prev) => !prev);

//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         <div
//           className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100
//         rounded-full dark:bg-gray-700"
//         >
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>

//         {/* start reciever text-message content */}
//         <div className="relative bg-white text-black p-4 border shadow-md rounded-lg max-w-xs sm:max-w-sm md:max-w-md">
//           {/* reciever text-message name or phone */}
//           <div className="flex items-center justify-between">
//             <h2 className="text-sm md:text-base font-medium">You</h2>
//             <button
//               type="button"
//               onClick={handleRecieverTextMenu}
//               className="p-1 rounded-full hover:bg-gray-300"
//             >
//               <BsThreeDotsVertical className="w-5 h-5" />
//             </button>
//           </div>

//           {/* reciever text messages messages */}
//           <p className="font-normal text-sm md:text-base py-1">Hi</p>

//           {/* start reciever text message dilivery time */}
//           <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
//             <span className="text-xs md:text-sm font-medium">11:46 PM</span>
//           </div>
//           {/* end reciever text message dilivery time */}

//           {/* start dropdown menu */}
//           {recieverTextMenu && (
//             <div
//               className="absolute top-12 left-0 z-10 bg-white divide-y divide-gray-100
//               rounded-lg shadow w-44 dark:bg-gray-700"
//             >
//               <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                 {recieverdropDownMenu.map((item: any, index: any) => (
//                   <li key={index}>
//                     <a
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       onClick={() => console.log(item)}
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {/* end dropdown menu */}
//         </div>
//         {/* end text-message */}
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
//         <div
//           className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100
//         rounded-full dark:bg-gray-700"
//         >
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>

//         {/* start reciever voice-message content */}
//         <div
//           className="relative bg-white text-black p-4 border shadow-md
//         rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
//         >
//           {/* reciever name or phone */}
//           <div className="flex items-center justify-between">
//             <h2 className="text-sm md:text-lg font-medium">You</h2>
//             <button
//               type="button"
//               onClick={handleRecieverVoiceMenu}
//               className="p-1 rounded-full hover:bg-gray-300"
//             >
//               <BsThreeDotsVertical className="w-5 h-5" />
//             </button>
//           </div>

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
//           </div>
//           {/* delivery content end */}

//           {recieverVoiceMenu && (
//             <div className="absolute top-12 right-4 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
//               <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                 {recieverdropDownMenu.map((item: any, index: any) => (
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
//           {/* end reciever voice dropdown menu */}
//         </div>
//         {/* end voice message */}
//       </div>
//     </>
//   );
// };

/*RecieverImages component*/
// const RecieverImages: React.FC<any> = ({ recieverdropDownMenu }) => {
//   const [recieverImagesMenu, setRecieverImagesMenu] = useState<boolean>(false);
//   const handleRecieverImagesMenu = (): any =>
//     setRecieverImagesMenu((prev: any) => !prev);

//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         <div
//           className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100
//         rounded-full dark:bg-gray-700"
//         >
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>

//         {/* start reciever image content */}
//         <div
//           className="relative bg-white text-black p-4 border shadow-md
//         rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
//         >
//           {/* reciever text-message name or phone */}
//           <div className="flex items-center justify-between">
//             <h2 className="text-sm md:text-base font-medium">You</h2>
//             <button
//               type="button"
//               onClick={handleRecieverImagesMenu}
//               className="p-1 rounded-full hover:bg-gray-300"
//             >
//               <BsThreeDotsVertical className="w-5 h-5" />
//             </button>
//           </div>

//           {/* image content */}

//           <div className="py-1 relative">
//             <img
//               src={"../../src/assets/images/women2.jpg"}
//               alt="image"
//               className="w-full h-auto object-cover max-h-72 min-h-72 rounded-lg"
//             />
//             <p className="py-1 text-sm md:text-base font-normal">
//               This is a caption for the image.
//             </p>
//           </div>

//           {/* start reciever text message dilivery time */}
//           <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
//             <span className="text-xs md:text-sm font-medium">11:46 PM</span>
//           </div>
//           {/* end reciever text message dilivery time */}

//           {/* reciever image content drop down */}
//           {recieverImagesMenu && (
//             <div className="absolute top-12 right-4 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
//               <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                 {recieverdropDownMenu.map((item: any, index: any) => (
//                   <li key={index}>
//                     <a
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       onClick={() => console.log(item)}
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//         {/* end reciever image content */}
//       </div>
//     </>
//   );
// };

/*RecieverVideos component*/
// const RecieverVideos: React.FC<any> = ({ recieverdropDownMenu }) => {
//   const [recieverVideosMenu, setRecieverVideosMenu] = useState<boolean>(false);
//   const handleRecieverVideosMenu = (): any =>
//     setRecieverVideosMenu((prev: any) => !prev);
//   return (
//     <>
//       <div className="flex items-start gap-2.5">
//         <div
//           className="w-10 h-10 overflow-hidden border-white border-[2px] font-bold bg-gray-100
//         rounded-full dark:bg-gray-700"
//         >
//           <FaUser className="w-8 h-8 text-gray-400 p-[2px] mt-1 mx-auto" />
//         </div>

//         {/* start reciever image content */}
//         <div
//           className="relative bg-white text-black p-4 border shadow-md
//         rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
//         >
//           {/* reciever text-message name or phone */}
//           <div className="flex items-center justify-between">
//             <h2 className="text-sm md:text-base font-medium">You</h2>
//             <button
//               type="button"
//               onClick={handleRecieverVideosMenu}
//               className="p-1 rounded-full hover:bg-gray-300"
//             >
//               <BsThreeDotsVertical className="w-5 h-5" />
//             </button>
//           </div>

//           {/* image content */}

//           <div className="py-1 relative">
//             <video
//               // src={"../../src/assets/videos/production.mp4"}
//               src={"../../src/assets/images/women2.jpg"}
//               controls
//               className="w-full h-auto object-cover max-h-72 min-h-72 rounded-lg"
//             />
//             <p className="py-1 text-sm md:text-base font-normal">
//               This is a caption for the image.
//             </p>
//           </div>

//           {/* start reciever text message dilivery time */}
//           <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
//             <span className="text-xs md:text-sm font-medium">11:46 PM</span>
//           </div>
//           {/* end reciever text message dilivery time */}

//           {/* reciever image content drop down */}
//           {recieverVideosMenu && (
//             <div className="absolute top-12 right-4 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
//               <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                 {recieverdropDownMenu.map((item: any, index: any) => (
//                   <li key={index}>
//                     <a
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       onClick={() => console.log(item)}
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//         {/* end reciever image content */}
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

//         {/* start reciever image gallery content */}
//         <div
//           className="relative bg-white text-black p-4 border shadow-md
//         rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
//         >
//           {/*Reciever phone or name */}
//           <div className="flex items-center justify-between">
//             <h2 className="text-sm md:text-base font-medium">You</h2>
//             <button
//               type="button"
//               className="p-1 rounded-full hover:bg-gray-300"
//               onClick={handleRecieverImageGalleryMenu}
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

//           {/* start dropdown menu of reciever image gallery content */}
//           {recieverImageGalleryMenu && (
//             <div className="absolute top-12 right-4 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
//               <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                 {recieverdropDownMenu.map((item: any, index: any) => (
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
//           {/* end dropdown menu reciver image gallery */}
//         </div>
//         {/* end image gallery */}
//       </div>
//     </>
//   );
// };

const Reciever: React.FC = () => {
  // const recieverdropDownMenu: any = [
  //   "Reply",
  //   "Forward",
  //   "Copy",
  //   "Paste",
  //   "Delete",
  // ];

  return (
    <>
      <div className="flex items-start justify-start">
        {/* <RecieverTextMessage recieverdropDownMenu={recieverdropDownMenu} /> */}
        {/* <RecieverVoiceMessage recieverdropDownMenu={recieverdropDownMenu} /> */}
        {/* <RecieverImages recieverdropDownMenu={recieverdropDownMenu} /> */}
        {/* <RecieverVideos recieverdropDownMenu={recieverdropDownMenu} /> */}
        {/* <RecieverImagesGallery recieverdropDownMenu={recieverdropDownMenu} /> */}
      </div>
    </>
  );
};

// export Reciever component
export default Reciever;
