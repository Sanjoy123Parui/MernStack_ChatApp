// import { BsPlayFill } from "react-icons/bs";
// import { LuAudioLines } from "react-icons/lu";
// import { MdOutlineFileDownload } from "react-icons/md";

// RecieverTextMessage component
const RecieverTextMessage: React.FC = () => {
  return (
    <>
      <div className="bg-white text-black p-4 border shadow-md rounded-lg max-w-60 md:max-w-96">
        {/* reciever text-message name or phone */}
        <h2 className="text-sm md:text-lg font-medium">You</h2>

        {/* reciever text messages messages */}
        <p className="font-normal text-sm md:text-base py-1">Hi</p>

        {/* start reciever text message dilivery time */}
        <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
          <span className="text-xs md:text-sm font-medium">11:46 PM</span>
        </div>
        {/* end reciever text message dilivery time */}
      </div>
    </>
  );
};

// RecieverVoiceMessage component
// const RecieverVoiceMessage: React.FC = () => {
//   return (
//     <>
//       {/* <div className="bg-white text-black p-2 border shadow-md rounded-lg max-w-60 lg:max-w-96"> */}
//       <div className="bg-white text-black p-4 border shadow-md rounded-lg max-w-60 lg:max-w-96">

//         {/* reciever name or phone */}
//         {/* <h1 className="text-xs md:text-sm font-medium">You</h1> */}
//         <h1 className="text-sm md:text-lg font-medium">You</h1>
//         {/* start voice message content */}
//         <div className="flex items-center space-x-2 py-1">
//           {/* voice message button start */}
//           <button className="inline-flex self-center items-center p-2">
//             <BsPlayFill className="text-base md:text-3xl font-normal" />
//           </button>
//           {/* voice message button end */}

//           {/* start voice effect wave */}
//           <div className="flex items-center space-x-[-4px]">
//             {Array.from({ length: 5 }).map((_, i) => (
//               <LuAudioLines key={i} className="text-base md:text-3xl font-normal" />
//             ))}
//           </div>
//           {/* end voice effect wave */}

//           {/* duration */}
//           <span className="text-xs md:text-sm font-normal">3:02</span>
//         </div>
//         {/* end voice message content */}

//         {/* delivery content start */}
//         <div className="flex items-center justify-end w-full space-x-2 rtl:space-x-reverse">
//           <span className="text-xs md:text-sm font-normal">07:35 PM</span>
//         </div>
//         {/* delivery content end */}
//       </div>
//     </>
//   );
// };


// RecieverImage component
// const RecieverImage: React.FC = () => {
//   return (
//     <>
//       <div className="bg-white text-black p-4 border shadow-md rounded-lg max-w-60 md:max-w-96">
//         {/* sender phone or name */}
//         <h2 className="text-sm md:text-lg font-medium">You</h2>

//         {/* start preview image content */}
//         <div className="group relative my-2.5">

//           {/* start download button content */}
//           <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
//           rounded-lg flex items-center justify-center">
//             <a
//               aria-label="Download image"
//               className="inline-flex items-center justify-center rounded-full h-8 w-8 md:h-10 md:w-10 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none focus:ring-gray-50"
//             >
//               <MdOutlineFileDownload className="w-4 h-4 md:w-5 md:h-5 text-white" />
//             </a>
//           </div>
//           {/* end download button content */}

//           <img src="" alt="Reciever images" className="w-full h-auto max-h-80 sm:max-h-72 object-contain " />
//         </div>
//         {/* end preview image content */}

//         {/*  reciever caption  */}
//         <p className="mt-2 text-xs md:text-sm font-normal break-words">Hii friends how are look like from me</p>

//         {/* start reciever text message dilivery time */}
//         <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
//           <span className="text-xs md:text-sm font-medium">11:46 PM</span>
//         </div>
//         {/* end reciever text message dilivery time */}
//       </div>
//     </>
//   );
// };



// Reciever component here for content of reciever content
const Reciever: React.FC = () => {
  return (
    <>
      <div className="flex items-start justify-start">
        {/* <RecieverImage /> */}
        <RecieverTextMessage />
        {/* <RecieverVoiceMessage /> */}
      </div>
    </>
  );
};

// export Reciever component
export default Reciever;
