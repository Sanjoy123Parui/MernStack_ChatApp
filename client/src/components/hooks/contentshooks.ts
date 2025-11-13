import { useState, useCallback } from "react";
import {
  togglePasswordprops,
  profileImagesCropItems,
  userChatsHeadingToggle,
} from "../models/contentModel.ts";

// declare custom hook of useTogglePassword with export
export const useTogglePassword = (defaultValue: any): togglePasswordprops => {
  const [isTogglePassword, setIsTogglePassword] =
    useState<boolean>(defaultValue);
  // define function was togglePassword
  const togglePasswordVisiblity = () => setIsTogglePassword(!isTogglePassword);
  return { isTogglePassword, togglePasswordVisiblity };
};

// declare custom hook of useProfileAvtar with export
export const useProfileAvtar = (): profileImagesCropItems => {
  const [imageSrc, setImageSrc] = useState<any>(null);
  const [showCropDialog, setShowCropDialog] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>("");
  const [crop, setCrop] = useState<any>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [croppedArea, setCroppedArea] = useState<any>(null);

  // define function  of select profile image file
  const handleFileChange = (e: any) => {
    let file: any = e.currentTarget.files?.[0];
    if (file) {
      setFileName(file.name);
      let reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
        setShowCropDialog(true);
      };
      reader.readAsDataURL(file);
    }
  };

  // define crop image function
  const handleCropComplete = (croppedArea: any) => {
    setShowCropDialog(false);
    return croppedArea;
  };

  // close modal for profile crop images
  const handleClose = () => setShowCropDialog(false);

  // here declare change crop file
  const handleCropChange = (crop: any) => {
    setCrop(crop);
  };

  // declare function zoom of picture
  const handleZoomChange = (zoom: any) => {
    setZoom(zoom);
  };

  // here declare images crop pixels with useCallback hook
  const handleCropCompleteHandler = useCallback((croppedAreaPixels: any) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  return {
    imageSrc,
    showCropDialog,
    fileName,
    handleFileChange,
    handleCropComplete,
    handleClose,
    crop,
    zoom,
    croppedArea,
    handleCropChange,
    handleZoomChange,
    handleCropCompleteHandler,
  };
};

// declare custom hook of chath heading toggle with export
export const useUserContentHeadingOption = (): userChatsHeadingToggle => {
  const [isChatOptions, setIsChatOptions] = useState<boolean>(false);
  const [isGroupsOptions, setIsGroupsOptions] = useState<boolean>(false);
  const showChatContentOptions = (): any => setIsChatOptions(true);
  const hideChatContentOptions = (): any => setIsChatOptions(false);
  const showGroupsContentOptions = (): any => setIsGroupsOptions(true);
  const hideGroupsContentOptions = (): any => setIsGroupsOptions(false);
  return {
    isChatOptions,
    isGroupsOptions,
    showChatContentOptions,
    hideChatContentOptions,
    showGroupsContentOptions,
    hideGroupsContentOptions,
  };
};
