import { useState } from "react";
import { recieverChatMenuProps } from "../models/recieverModel.ts";

// declare with exporting custom hooks for reciever all contents

export const useRecieverMenu = (): recieverChatMenuProps => {
  // declare all states hooks
  const [recieverTextMenu, setRecieverTextMenu] = useState<boolean>(false);
  const [recieverVoiceMenu, setRecieverVoiceMenu] = useState<boolean>(false);
  const [recieverImagesMenu, setRecieverImagesMenu] = useState<boolean>(false);
  const [recieverVideosPlayerMenu, setRecieverVideosPlayerMenu] =
    useState<boolean>(false);
  const [recieverAudioMenu, setRecieverAudioMenu] = useState<boolean>(false);
  const [recieverImagesGalleryMenu, setRecieverImagesGalleryMenu] =
    useState<boolean>(false);
  const [recieverVideosGalleryMenu, setRecieverVideosGalleryMenu] =
    useState<boolean>(false);
  const [recieverWebUrlMenu, setRecieverWebUrlMenu] = useState<boolean>(false);
  const [recieverSocialMediaMenu, setRecieverSocialMediaMenu] =
    useState<boolean>(false);
  const [recieverGeoLocMenu, setRecieverGeoLocMenu] = useState<boolean>(false);
  const [recieverFilesMenu, setRecieverFilesMenu] = useState<boolean>(false);
  const [recieverReplyMenu, setRecieverReplyMenu] = useState<boolean>(false);
  const [recieverContactfileMenu, setRecieverContactfileMenu] =
    useState<boolean>(false);

  // defining the all functions
  const showRecieverTextMenu = (): any => setRecieverTextMenu(true);
  const hideRecieverTextMenu = (): any => setRecieverTextMenu(false);
  const showRecieverVoiceMenu = (): any => setRecieverVoiceMenu(true);
  const hideRecieverVoiceMenu = (): any => setRecieverVoiceMenu(false);
  const showRecieverImagesMenu = (): any => setRecieverImagesMenu(true);
  const hideRecieverImagesMenu = (): any => setRecieverImagesMenu(false);
  const showRecieverVideosPlayerMenu = (): any =>
    setRecieverVideosPlayerMenu(true);
  const hideRecieverVideosPlayerMenu = (): any =>
    setRecieverVideosPlayerMenu(false);
  const showRecieverAudioMenu = (): any => setRecieverAudioMenu(true);
  const hideRecieverAudioMenu = (): any => setRecieverAudioMenu(false);
  const showRecieverImagesGalleryMenu = (): any =>
    setRecieverImagesGalleryMenu(true);
  const hideRecieverImagesGalleryMenu = (): any =>
    setRecieverImagesGalleryMenu(false);
  const showRecieverVideosGalleryMenu = (): any =>
    setRecieverVideosGalleryMenu(true);
  const hideRecieverVideosGalleryMenu = (): any =>
    setRecieverVideosGalleryMenu(false);
  const showRecieverWebUrlMenu = (): any => setRecieverWebUrlMenu(true);
  const hideRecieverWebUrlMenu = (): any => setRecieverWebUrlMenu(false);
  const showRecieverSocialMediaMenu = (): any =>
    setRecieverSocialMediaMenu(true);
  const hideRecieverSocialMediaMenu = (): any =>
    setRecieverSocialMediaMenu(false);
  const showRecieverGeoLocMenu = (): any => setRecieverGeoLocMenu(true);
  const hideRecieverGeoLocMenu = (): any => setRecieverGeoLocMenu(false);
  const showRecieverFilesMenu = (): any => setRecieverFilesMenu(true);
  const hideRecieverFilesMenu = (): any => setRecieverFilesMenu(false);
  const showRecieverReplyMenu = (): any => setRecieverReplyMenu(true);
  const hideRecieverReplyMenu = (): any => setRecieverReplyMenu(false);
  const showRecieverContactfileMenu = (): any =>
    setRecieverContactfileMenu(true);
  const hideRecieverContactfileMenu = (): any =>
    setRecieverContactfileMenu(false);

  // returning for all data
  return {
    recieverTextMenu,
    recieverVoiceMenu,
    recieverImagesMenu,
    recieverVideosPlayerMenu,
    recieverAudioMenu,
    recieverImagesGalleryMenu,
    recieverVideosGalleryMenu,
    recieverWebUrlMenu,
    recieverSocialMediaMenu,
    recieverGeoLocMenu,
    recieverFilesMenu,
    recieverReplyMenu,
    recieverContactfileMenu,

    showRecieverTextMenu,
    hideRecieverTextMenu,
    showRecieverVoiceMenu,
    hideRecieverVoiceMenu,
    showRecieverImagesMenu,
    hideRecieverImagesMenu,
    showRecieverVideosPlayerMenu,
    hideRecieverVideosPlayerMenu,
    showRecieverAudioMenu,
    hideRecieverAudioMenu,
    showRecieverImagesGalleryMenu,
    hideRecieverImagesGalleryMenu,
    showRecieverVideosGalleryMenu,
    hideRecieverVideosGalleryMenu,
    showRecieverWebUrlMenu,
    hideRecieverWebUrlMenu,
    showRecieverSocialMediaMenu,
    hideRecieverSocialMediaMenu,
    showRecieverGeoLocMenu,
    hideRecieverGeoLocMenu,
    showRecieverFilesMenu,
    hideRecieverFilesMenu,
    showRecieverReplyMenu,
    hideRecieverReplyMenu,
    showRecieverContactfileMenu,
    hideRecieverContactfileMenu,
  };
};
