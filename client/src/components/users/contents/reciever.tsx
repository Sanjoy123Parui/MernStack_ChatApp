import { useEffect } from "react";
import RecieverTextMessage from "./recievercontents/recieverTextMessage.tsx";
// import RecieverVoiceMessage from "./recievercontents/recieverVoiceMessage.tsx";
// import RecieverImages from "./recievercontents/recieverImages.tsx";
// import RecieverVideosPlayer from "./recievercontents/recieverVideosPlayer.tsx";
// import RecieverAudioPlayer from "./recievercontents/recieverAudioPlayer.tsx";
// import RecieverImagesGallery from "./recievercontents/recieverImagesGallery.tsx";
// import RecieverVideosGallery from "./recievercontents/recieverVideosGallery.tsx";
// import RecieverWebUrl from "./recievercontents/recieverWebUrl.tsx";
// import RecieverSocialMedia from "./recievercontents/recieverSocialMedia.tsx";
// import RecieverGeolocations from "./recievercontents/recieverGeolocations.tsx";
// import RecieverFilesUpload from "./recievercontents/recieverFilesUpload.tsx";
// import RecieverReply from "./recievercontents/recieverReply.tsx";
// import RecieverContactsFile from "./recievercontents/recieverContactsFile.tsx";

const Reciever: React.FC = () => {
  // reciver drop down menu declare
  const recieverdropDownMenu: any = [
    "Reply",
    "Forward",
    "Copy",
    "Paste",
    "Delete",
    "Like",
    "Close",
  ];

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
      <div className="flex items-start justify-start">
        <RecieverTextMessage recieverchatMenu={recieverdropDownMenu} />
        {/* <RecieverVoiceMessage recieverchatMenu={recieverdropDownMenu} /> */}
        {/* <RecieverImages recieverchatMenu={recieverdropDownMenu} /> */}
        {/* <RecieverVideosPlayer recieverchatMenu={recieverdropDownMenu} /> */}
        {/* <RecieverAudioPlayer recieverchatMenu={recieverdropDownMenu} /> */}
        {/* <RecieverImagesGallery recieverchatMenu={recieverdropDownMenu} /> */}
        {/* <RecieverVideosGallery recieverchatMenu={recieverdropDownMenu} /> */}
        {/* <RecieverWebUrl recieverchatMenu={recieverdropDownMenu} /> */}
        {/* <RecieverSocialMedia recieverchatMenu={recieverdropDownMenu} /> */}
        {/* <RecieverGeolocations recieverchatMenu={recieverdropDownMenu} /> */}
        {/* <RecieverFilesUpload recieverchatMenu={recieverdropDownMenu} /> */}
        {/* <RecieverReply recieverchatMenu={recieverdropDownMenu} /> */}
        {/* <RecieverContactsFile recieverchatMenu={recieverdropDownMenu} /> */}
      </div>
    </>
  );
};

// export Reciever component
export default Reciever;
