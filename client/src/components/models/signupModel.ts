// here was declare instance of link interface model
export interface routeSignupNavigateList {
  desc: string;
  links: string;
  linkName: string;
}

// here was declare and export instance of userSignupFormErrors interface model
export interface userSignupFormErrors {
  phone: string;
  password: string;
  confirmPassword: string;
}

// here was declare and export instance of  userSignupFormdata interface model
export interface userSignupFormdata {
  phone: string;
  password: string;
  confirmPassword: string;
  errors?: userSignupFormErrors;
  success?: boolean;
  error?: string;
  message?: string;
}

// here was declare and export instance of userSignupFormprops interface model
export interface userSignupFormprops {
  stateValues: any;
  formAction: (formData: FormData) => unknown;
  isPending: boolean;
}

// here was declare and export instance of userSigninFormErrors interface model
export interface userSigninFormErrors {
  phone: string;
  password: string;
}

// here was declare and export instance of  userSigninFormdata interface model
export interface userSigninFormdata {
  phone: string;
  password: string;
  errors?: userSigninFormErrors;
  success?: boolean;
  error: string;
  message?: string;
}

// here was declare and export instance of userSigninFormprops interface model
export interface userSigninFormprops {
  stateValues: any;
  formAction: (formData: FormData) => unknown;
  isPending: boolean;
}

// here userLogout modal popup modal props
export interface userLogoutModalProps {
  userLogoutAlertMessage: string;
  isLogoutModal: boolean;
  openLogoutModal: () => void;
  closeLogoutModal: () => void;
}
