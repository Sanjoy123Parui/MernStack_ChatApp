import { BsPlayFill } from "react-icons/bs";
import { LuAudioLines } from "react-icons/lu";

// RecieverTextMessage component
// const RecieverTextMessage: React.FC = () => {
//   return (
//     <>
//       <div className="bg-white text-black p-3 border shadow-md rounded-lg max-w-60 md:max-w-96">
//         <h2 className="text-sm font-normal">You</h2>
//         {/* reciever text messages messages */}
//         <p className="font-medium py-1">Hello</p>
//         <div className="flex items-center space-x-2 rtl:space-x-reverse">
//           <span className="text-xs font-normal">11:46 PM</span>
//         </div>
//       </div>
//     </>
//   );
// };

// RecieverVoiceMessage component
const RecieverVoiceMessage: React.FC = () => {
  return (
    <>
      <div className="bg-white text-black p-2 border shadow-md rounded-lg max-w-60 lg:max-w-96">
        <h1 className="text-xs md:text-sm font-medium">You</h1>
        {/* start voice message content */}
        <div className="flex items-center space-x-2 py-1">
          {/* voice message button start */}
          <button className="inline-flex self-center items-center p-2">
            <BsPlayFill className="text-sm md:text-xl font-normal" />
          </button>
          {/* voice message button end */}

          {/* start voice effect wave */}
          <div className="flex items-center space-x-[-4px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <LuAudioLines key={i} className="text-sm md:text-xl" />
            ))}
          </div>
          {/* end voice effect wave */}

          {/* duration */}
          <span className="text-xs md:text-sm font-normal">3:02</span>
        </div>
        {/* end voice message content */}

        {/* delivery content start */}
        <div className="flex items-center justify-end w-full space-x-2 rtl:space-x-reverse mt-2">
          <span className="text-xs md:text-sm font-normal">07:35 PM</span>
        </div>
        {/* delivery content end */}
      </div>
    </>
  );
};

// Reciever component here for content of reciever content
const Reciever: React.FC = () => {
  return (
    <>
      <div className="flex items-start justify-start">
        {/* <RecieverTextMessage /> */}
        <RecieverVoiceMessage />
      </div>
    </>
  );
};

// export Reciever component
export default Reciever;
