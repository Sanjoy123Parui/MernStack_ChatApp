import { useEffect } from "react";
import SenderTextMessage from "./sendercontents/senderTextMessage.tsx";
// import SenderVoiceMessage from "./sendercontents/SenderVoiceMessage.tsx";
// import SenderImages from "./sendercontents/senderImages.tsx";
// import SenderVideosPlayer from "./sendercontents/senderVideosPlayer.tsx";
// import SenderAudioPlayer from "./sendercontents/senderAudioPlayer.tsx";
// import SenderImagesGallery from "./sendercontents/senderImagesGallery.tsx";
// import SenderVideosGallery from "./sendercontents/senderVideosGallery.tsx";
// import SenderWebUrl from "./sendercontents/senderWebUrl.tsx";
// import SenderSocialMedia from "./sendercontents/senderSocialMedia.tsx";
// import SenderGeolocations from "./sendercontents/senderGeolocations.tsx";
// import SenderFilesUpload from "./sendercontents/senderFilesUpload.tsx";
// import SenderReply from "./sendercontents/senderReply.tsx";
// import SenderContactsFile from "./sendercontents/senderContactsFile.tsx";

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
    "Like",
    "Close",
  ];

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
      {/* start div flex for sender all chat content */}
      <div className="flex flex-col items-end justify-end gap-y-2">
        <SenderTextMessage senderchatMenu={senderdropDownMenu} />
        {/* <SenderVoiceMessage senderchatMenu={senderdropDownMenu} /> */}
        {/* <SenderImages senderchatMenu={senderdropDownMenu} /> */}
        {/* <SenderVideosPlayer senderchatMenu={senderdropDownMenu} /> */}
        {/* <SenderAudioPlayer senderchatMenu={senderdropDownMenu} /> */}
        {/* <SenderImagesGallery senderchatMenu={senderdropDownMenu} /> */}
        {/* <SenderVideosGallery senderchatMenu={senderdropDownMenu} /> */}
        {/* <SenderWebUrl senderchatMenu={senderdropDownMenu} /> */}
        {/* <SenderSocialMedia senderchatMenu={senderdropDownMenu} /> */}
        {/* <SenderGeolocations senderchatMenu={senderdropDownMenu} /> */}
        {/* <SenderFilesUpload senderchatMenu={senderdropDownMenu} /> */}
        {/* <SenderReply senderchatMenu={senderdropDownMenu} /> */}
        {/* <SenderContactsFile senderchatMenu={senderdropDownMenu} /> */}
      </div>
      {/* end div */}
    </>
  );
};

// export Sender component
export default Sender;
