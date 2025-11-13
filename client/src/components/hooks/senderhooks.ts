import { useState } from "react";
import { senderChatMenuProps } from "../models/senderModel.ts";

// declare with exporting custom hooks for sender all content

export const useSenderMenu = (): senderChatMenuProps => {
  // declare all states
  const [senderTextMenu, setSenderTextMenu] = useState<boolean>(false);
  const [senderVoiceMenu, setSenderVoiceMenu] = useState<boolean>(false);
  const [senderImagesMenu, setSenderImagesMenu] = useState<boolean>(false);
  const [senderVideosPlayerMenu, setSenderVideosPlayerMenu] =
    useState<boolean>(false);
  const [senderAudioMenu, setSenderAudioMenu] = useState<boolean>(false);
  const [senderImagesGalleryMenu, setSenderImagesGalleryMenu] =
    useState<boolean>(false);
  const [senderVideosGalleryMenu, setSenderVideosGalleryMenu] =
    useState<boolean>(false);
  const [senderWebUrlMenu, setSenderWebUrlMenu] = useState<boolean>(false);
  const [senderSocialMediaMenu, setSenderSocialMediaMenu] =
    useState<boolean>(false);
  const [senderGeoLocMenu, setSenderGeoLocMenu] = useState<boolean>(false);
  const [senderFilesMenu, setSenderFilesMenu] = useState<boolean>(false);
  const [senderReplyMenu, setSenderReplyMenu] = useState<boolean>(false);
  const [senderContactfileMenu, setSenderContactfileMenu] =
    useState<boolean>(false);

  // define all function
  const showSenderTextMenu = (): any => setSenderTextMenu(true);
  const hideSenderTextMenu = (): any => setSenderTextMenu(false);
  const showSenderVoiceMenu = (): any => setSenderVoiceMenu(true);
  const hideSenderVoiceMenu = (): any => setSenderVoiceMenu(false);
  const showSenderImagesMenu = (): any => setSenderImagesMenu(true);
  const hideSenderImagesMenu = (): any => setSenderImagesMenu(false);
  const showSenderVideosPlayerMenu = (): any => setSenderVideosPlayerMenu(true);
  const hideSenderVideosPlayerMenu = (): any =>
    setSenderVideosPlayerMenu(false);
  const showSenderAudioMenu = (): any => setSenderAudioMenu(true);
  const hideSenderAudioMenu = (): any => setSenderAudioMenu(false);
  const showSenderImagesGalleryMenu = (): any =>
    setSenderImagesGalleryMenu(true);
  const hideSenderImagesGalleryMenu = (): any =>
    setSenderImagesGalleryMenu(false);
  const showSenderVideosGalleryMenu = (): any =>
    setSenderVideosGalleryMenu(true);
  const hideSenderVideosGalleryMenu = (): any =>
    setSenderVideosGalleryMenu(false);
  const showSenderWebUrlMenu = (): any => setSenderWebUrlMenu(true);
  const hideSenderWebUrlMenu = (): any => setSenderWebUrlMenu(false);
  const showSenderSocialMediaMenu = (): any => setSenderSocialMediaMenu(true);
  const hideSenderSocialMediaMenu = (): any => setSenderSocialMediaMenu(false);
  const showSenderGeoLocMenu = (): any => setSenderGeoLocMenu(true);
  const hideSenderGeoLocMenu = (): any => setSenderGeoLocMenu(false);
  const showSenderFilesMenu = (): any => setSenderFilesMenu(true);
  const hideSenderFilesMenu = (): any => setSenderFilesMenu(false);
  const showSenderReplyMenu = (): any => setSenderReplyMenu(true);
  const hideSenderReplyMenu = (): any => setSenderReplyMenu(false);
  const showSenderContactfileMenu = (): any => setSenderContactfileMenu(true);
  const hideSenderContactfileMenu = (): any => setSenderContactfileMenu(false);

  // here return all data
  return {
    senderTextMenu,
    senderVoiceMenu,
    senderImagesMenu,
    senderVideosPlayerMenu,
    senderAudioMenu,
    senderImagesGalleryMenu,
    senderVideosGalleryMenu,
    senderWebUrlMenu,
    senderSocialMediaMenu,
    senderGeoLocMenu,
    senderFilesMenu,
    senderReplyMenu,
    senderContactfileMenu,
    showSenderTextMenu,
    hideSenderTextMenu,
    showSenderVoiceMenu,
    hideSenderVoiceMenu,
    showSenderImagesMenu,
    hideSenderImagesMenu,
    showSenderVideosPlayerMenu,
    hideSenderVideosPlayerMenu,
    showSenderAudioMenu,
    hideSenderAudioMenu,
    showSenderImagesGalleryMenu,
    hideSenderImagesGalleryMenu,
    showSenderVideosGalleryMenu,
    hideSenderVideosGalleryMenu,
    showSenderWebUrlMenu,
    hideSenderWebUrlMenu,
    showSenderSocialMediaMenu,
    hideSenderSocialMediaMenu,
    showSenderGeoLocMenu,
    hideSenderGeoLocMenu,
    showSenderFilesMenu,
    hideSenderFilesMenu,
    showSenderReplyMenu,
    hideSenderReplyMenu,
    showSenderContactfileMenu,
    hideSenderContactfileMenu,
  };
};
