import {
  // BiCheck,
  BiCheckDouble,
} from "react-icons/bi";
// import { BsPlayFill } from "react-icons/bs";
// import { LuAudioLines } from "react-icons/lu";

// SenderTextMessage component
// const SenderTextMessage: React.FC = () => {
//   return (
//     <>
//       <div className="bg-indigo-500 text-white p-4 border shadow-md rounded-lg max-w-60 md:max-w-96">
//         <h2 className="text-sm md:text-lg font-medium">You</h2>
//         {/* text messages */}
//         <p className="font-normal text-sm md:text-base py-1">
//           Hi Everyone today I will go to the NJP, So Have you any can meet me in
//           Station
//         </p>

//         {/* start sender text message dilivery time */}
//         <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse">
//           <span className="text-xs md:text-sm font-medium">11:46 PM</span>
//           {/* <span className="text-sm font-normal"><BiCheck /></span> */}
//           <span className="text-sm md:text-lg font-medium">
//             <BiCheckDouble />
//           </span>
//         </div>
//         {/* end sender text message dilivery time */}
//       </div>
//     </>
//   );
// };



// SenderVoiceMessage component
// const SenderVoiceMessage: React.FC = () => {
//   return (
//     <>
//       <div className="bg-indigo-500 text-white p-4 border shadow-md rounded-lg max-w-60 lg:max-w-96">
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
//           <span className="text-sm md:text-lg font-normal">
//             <BiCheckDouble />
//           </span>
//         </div>
//         {/* delivery content end */}
//       </div>
//     </>
//   );
// };



//SenderImage component
const SenderImage: React.FC = () => {
  return (
    <>
      <h1>Hello Image</h1>
    </>
  );
}

// here define Sender component for content of sender
const Sender: React.FC = () => {
  return (
    <>
      {/* start div flex for sender all chat content */}
      <div className="flex items-end justify-end">
        <SenderImage />
        {/* <SenderTextMessage /> */}
        {/* <SenderVoiceMessage /> */}
      </div>
      {/* end div */}
    </>
  );
};

// export Sender component
export default Sender;
