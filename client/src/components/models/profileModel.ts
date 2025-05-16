import { UseFormReturn } from "react-hook-form";

// here define instance of profile form data interface model
export interface profileFormdata {
  full_name: string;
  avatar: string;
  gender: string;
  dob: string;
  abouts: string;
}

// declare and export instance of edit profile form data interface model schema
export interface editProfileFormdata {
  full_name: string;
  gender: "";
  dob: "";
  abouts: "";
}

// define interface for instance of passing props of profile form data
export interface profileFormProps {
  form: UseFormReturn<any>;
  onSubmit: (data: any) => void;
}

// define interface for instance of passing props of profile form data
export interface imageCropProps {
  imageSrc: string;
  onCropComplete: (croppedArea: any) => void;
  onClose: () => void;
}

// here was define and export interface model of user profile content
export interface userProfilesContents {
  userRemoveAlertMessage: string;
  userProfileHeading: string;
  isUserProfileView: boolean;
  isUserProfileEdit: boolean;
  isUserRemove: boolean;
  openUserProfile: () => void;
  closeUserProfile: () => void;
  openUserEdit: () => void;
  closeUserEdit: () => void;
  openUserRemove: () => void;
  closeUserRemove: () => void;
}
