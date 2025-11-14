// declare with exporting interface model for all reciever content

export interface recieverChatdropDownMenuItems {
  recieverchatMenu: any;
}

export interface recieverChatMenuProps {
  recieverTextMenu: boolean;
  recieverVoiceMenu: boolean;
  recieverImagesMenu: boolean;
  recieverVideosPlayerMenu: boolean;
  recieverAudioMenu: boolean;
  recieverImagesGalleryMenu: boolean;
  recieverVideosGalleryMenu: boolean;
  recieverWebUrlMenu: boolean;
  recieverSocialMediaMenu: boolean;
  recieverGeoLocMenu: boolean;
  recieverFilesMenu: boolean;
  recieverReplyMenu: boolean;
  recieverContactfileMenu: boolean;

  showRecieverTextMenu: () => void;
  hideRecieverTextMenu: () => void;
  showRecieverVoiceMenu: () => void;
  hideRecieverVoiceMenu: () => void;
  showRecieverImagesMenu: () => void;
  hideRecieverImagesMenu: () => void;
  showRecieverVideosPlayerMenu: () => void;
  hideRecieverVideosPlayerMenu: () => void;
  showRecieverAudioMenu: () => void;
  hideRecieverAudioMenu: () => void;
  showRecieverImagesGalleryMenu: () => void;
  hideRecieverImagesGalleryMenu: () => void;
  showRecieverVideosGalleryMenu: () => void;
  hideRecieverVideosGalleryMenu: () => void;
  showRecieverWebUrlMenu: () => void;
  hideRecieverWebUrlMenu: () => void;
  showRecieverSocialMediaMenu: () => void;
  hideRecieverSocialMediaMenu: () => void;
  showRecieverGeoLocMenu: () => void;
  hideRecieverGeoLocMenu: () => void;
  showRecieverFilesMenu: () => void;
  hideRecieverFilesMenu: () => void;
  showRecieverReplyMenu: () => void;
  hideRecieverReplyMenu: () => void;
  showRecieverContactfileMenu: () => void;
  hideRecieverContactfileMenu: () => void;
}
