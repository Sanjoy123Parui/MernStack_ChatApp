// here declare instance of profileformErrors interface model
/* export interface profileFormErrors {
  // full_name: string;
  first_name: string;
  last_name: string;
  avatar: string;
  gender: string;
  dob: string;
  abouts: string;
} */

// here declare instance of profile form data interface model
/* export interface profileFormdata {
  // full_name: string;
  first_name: string;
  last_name: string;
  avatar: string;
  gender: string;
  dob: string;
  abouts: string;
  errors?: profileFormErrors;
} */

// declare interface for instance of passing props of profile form data
/* export interface profileFormProps {
  stateValues: any;
  formAction: (formData: FormData) => unknown;
  isPending: boolean;
} */

// define interface for instance of passing props of profile form data
export interface imageCropProps {
  imageSrc: string;
  onCropComplete: (croppedArea: any) => void;
  onClose: () => void;
}

// define and export instance of interface model editProfileFormErrors
export interface editProfileFormErrors {
  first_name: string;
  last_name: string;
  gender: string;
  dob: string;
  abouts: string;
}

// define and export instance of interface model editProfileFormdata
export interface editProfileFormdata {
  first_name: string;
  last_name: string;
  gender: string;
  dob: string;
  abouts: string;
  errors?: editProfileFormErrors;
}

// define and export instance of interface model editProfileFormprops
export interface editProfileFormprops {
  stateValues: any;
  formAction: (formData: FormData) => unknown;
  isPending: boolean;
}

// here was define and export interface model of profile content
export interface profilesContents {
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

// here was declare and exporting createprofile related interface model with exporting
interface createProfileFormValues {
  first_name?: string;
  last_name?: string;
  avatar?: string;
  dob?: string;
  gender?: string;
  abouts?: string;
}

interface createProfileFormErrors {
  first_name?: string;
  last_name?: string;
  avatar?: string;
  dob?: string;
  gender?: string;
  abouts?: string;
}

export interface createProfileFormState {
  stepper: number;
  data: createProfileFormValues;
  errors?: createProfileFormErrors;
  success: boolean;
}

export interface createProfileFormProps {
  createState: createProfileFormState;
  createFormAction: (formData: FormData) => void;
  createIsPending: boolean;
}
