// here was declare and export instance of signupFormErrors interface model
/* export interface signupFormErrors {
  phone: string;
  password: string;
  confirmPassword: string;
} */

// here was declare and export instance of  signupFormdata interface model
/* export interface signupFormdata {
  phone: string;
  password: string;
  confirmPassword: string;
  errors?: signupFormErrors;
  success?: boolean;
  error?: string;
  message?: string;
} */

// here was declare and export instance of signupFormprops interface model
/* export interface signupFormprops {
  stateValues: any;
  formAction: (formData: FormData) => unknown;
  isPending: boolean;
} */

// here was declare and export instance of signinFormErrors interface model
/* export interface signinFormErrors {
  phone: string;
  password: string;
} */

// here was declare and export instance of  signinFormdata interface model
/* export interface signinFormdata {
  phone: string;
  password: string;
  errors?: signinFormErrors;
  success?: boolean;
  error: string;
  message?: string;
} */

// here was declare and export instance of signinFormprops interface model
/* export interface signinFormprops {
  stateValues: any;
  formAction: (formData: FormData) => unknown;
  isPending: boolean;
} */

// here userLogout modal popup modal props
export interface userLogoutModalProps {
  userLogoutAlertMessage: string;
  isLogoutModal: boolean;
  openLogoutModal: () => void;
  closeLogoutModal: () => void;
}

// here declare and also exporting registration related interface model
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
  signupFormAction: (formData: FormData) => unknown;
  signupIsPending: boolean;
}

// here declare and also exporting login related interface model
export interface signinFormValues {
  phone: string;
  password: string;
}

export interface signinFormdata {
  phone: string;
  password: string;
  errors?: signinFormValues;
  success: boolean;
}

export interface signinFormprops {
  signinStateValues: any;
  signinFormAction: (formData: FormData) => unknown;
  signinIsPending: boolean;
}
