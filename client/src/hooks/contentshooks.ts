import { useState, useCallback, useActionState } from "react";
import {
  profileImagesCropItems,
  userChatsHeadingToggle,
  supportFormState,
  supportFormProps,
} from "../models/contentModel.ts";
import { groupsInfo } from "../models/userModel.ts";
import { userSupportValidation } from "../validations/supportValidator.ts";

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

// define custom hook for user support form with exporting
export const useSupportUser = (): supportFormProps => {
  // declare userSupportInitial
  const userSupportInitial: supportFormState = {
    data: {},
    errors: {},
    success: false,
    message: "",
  };

  // define function for handle userSupportAction
  const userSupportAction = async (
    prevState: supportFormState,
    formData: FormData
  ): Promise<supportFormState> => {
    try {
      // declare formValues getting formData
      const formValues: any = {
        first_name: formData.get("first_name")?.toString()?.trim() || "",
        last_name: formData.get("last_name")?.toString()?.trim() || "",
        phone: formData.get("phone")?.toString()?.trim() || "",
        messages: formData.get("messages")?.toString()?.trim() || "",
      };

      // declare instance object of handle zod validation
      const supportValidate: any = userSupportValidation.safeParse(formValues);

      // here was manage promise to delay simulate api calls
      await new Promise((resolve: any) => setTimeout(resolve, 2000));

      // here was check validation errors
      if (!supportValidate.success) {
        const fieldErrors: any = {};
        supportValidate.error.errors.forEach((err: any) => {
          fieldErrors[err.path[0]] = err.message;
        });

        return { ...prevState, errors: fieldErrors };
      }

      return {
        data: { ...prevState, ...formValues },
        errors: {},
        success: true,
        message: "Thanks to your feedback",
      };
    } catch (error: any) {
      throw error;
    }
  };

  // declare useActionState hook to the manage support form
  const [supportState, supportFormAction, supportIsPending] = useActionState<
    supportFormState,
    FormData
  >(userSupportAction, userSupportInitial);

  return { supportState, supportFormAction, supportIsPending };
};

// define custom hook for groups with exporting
export const useGroups = (): groupsInfo => {
  const [isGroupsProfile, setIsGroupsProfile] = useState<boolean>(false);
  const showGroupsProfile = () => setIsGroupsProfile(true);
  const hideGroupsProfile = () => setIsGroupsProfile(false);

  return { isGroupsProfile, showGroupsProfile, hideGroupsProfile };
};
