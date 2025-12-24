// declare with exporting interfce model for all sender content

export interface senderChatdropDownMenuItems {
  senderchatMenu: any;
}

export interface senderChatMenuProps {
  senderTextMenu: boolean;
  senderVoiceMenu: boolean;
  senderImagesMenu: boolean;
  senderVideosPlayerMenu: boolean;
  senderAudioMenu: boolean;
  senderImagesGalleryMenu: boolean;
  senderVideosGalleryMenu: boolean;
  senderWebUrlMenu: boolean;
  senderSocialMediaMenu: boolean;
  senderGeoLocMenu: boolean;
  senderFilesMenu: boolean;
  senderReplyMenu: boolean;
  senderContactfileMenu: boolean;

  showSenderTextMenu: () => void;
  hideSenderTextMenu: () => void;
  showSenderVoiceMenu: () => void;
  hideSenderVoiceMenu: () => void;
  showSenderImagesMenu: () => void;
  hideSenderImagesMenu: () => void;
  showSenderVideosPlayerMenu: () => void;
  hideSenderVideosPlayerMenu: () => void;
  showSenderAudioMenu: () => void;
  hideSenderAudioMenu: () => void;
  showSenderImagesGalleryMenu: () => void;
  hideSenderImagesGalleryMenu: () => void;
  showSenderVideosGalleryMenu: () => void;
  hideSenderVideosGalleryMenu: () => void;
  showSenderWebUrlMenu: () => void;
  hideSenderWebUrlMenu: () => void;
  showSenderSocialMediaMenu: () => void;
  hideSenderSocialMediaMenu: () => void;
  showSenderGeoLocMenu: () => void;
  hideSenderGeoLocMenu: () => void;
  showSenderFilesMenu: () => void;
  hideSenderFilesMenu: () => void;
  showSenderReplyMenu: () => void;
  hideSenderReplyMenu: () => void;
  showSenderContactfileMenu: () => void;
  hideSenderContactfileMenu: () => void;
}
