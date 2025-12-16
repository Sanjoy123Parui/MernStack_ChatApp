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

// here was declare and exporting editprofile related interface model with exporting
interface editProfileFormValues {
  first_name?: string;
  last_name?: string;
  dob?: string;
  gender?: string;
  abouts?: string;
}

interface editProfileFormErrors {
  first_name?: string;
  last_name?: string;
  dob?: string;
  gender?: string;
  abouts?: string;
}

export interface editProfileFormState {
  data: editProfileFormValues;
  errors?: editProfileFormErrors;
  success: boolean;
  message: string;
}

export interface editProfileFormProps {
  editState: editProfileFormState;
  editFormAction: (formData: FormData) => void;
  editIsPending: boolean;
}
