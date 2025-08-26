// declare instance with exporting for all acounts and auth interface model

// declare Register models
export interface signupFormValues {
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface signupFormdata {
  phone: string;
  password: string;
  confirmPassword: string;
  errors?: signupFormValues;
  success: boolean;
  message: string;
}

export interface signupFormprops {
  signupStateValues: any;
  singupFormAction: (formData: FormData) => unknown;
  signupIsPending: boolean;
}

// declare Login models

export interface signinFormValues {
  phone: string;
  password: string;
}

export interface signinFormdata {
  phone: string;
  password: string;
  errors?: signinFormValues;
}

export interface signinFormprops {
  signinStateValues: any;
  singinFormAction: (formData: FormData) => unknown;
  signinIsPending: boolean;
}

// declare forgetPassword models
export interface forgetPasswordFormValues {
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface forgetPasswordFormdata {
  phone: string;
  password: string;
  confirmPassword: string;
  errors?: forgetPasswordFormValues;
  success: boolean;
  message: string;
}

export interface forgetPasswordFormprops {
  forgetStateValues: any;
  forgetFormAction: (formData: FormData) => unknown;
  forgetIsPending: boolean;
}

// declare createProfiles models
export interface createProfileFormValues {
  first_name: string;
  last_name: string;
  avatar: string;
  gender: string;
  dob: string;
  abouts: string;
}

export interface createProfileFormdata {
  first_name: string;
  last_name: string;
  avatar: string;
  gender: string;
  dob: string;
  abouts: string;
  errors?: createProfileFormValues;
}

export interface createProfilesFormprops {
  createProfileStateValues: any;
  createProfileFormAction: (formData: FormData) => unknown;
  createProfileIsPending: boolean;
}
