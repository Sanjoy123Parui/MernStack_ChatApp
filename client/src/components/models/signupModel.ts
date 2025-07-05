// here was declare instance of link interface model
export interface routeSignupNavigateList {
  desc: string;
  links: string;
  linkName: string;
}

// here was declare and export instance of signupFormErrors interface model
export interface signupFormErrors {
  phone: string;
  password: string;
  confirmPassword: string;
}

// here was declare and export instance of  signupFormdata interface model
export interface signupFormdata {
  phone: string;
  password: string;
  confirmPassword: string;
  errors?: signupFormErrors;
  success?: boolean;
  error?: string;
  message?: string;
}

// here was declare and export instance of signupFormprops interface model
export interface signupFormprops {
  stateValues: any;
  formAction: (formData: FormData) => unknown;
  isPending: boolean;
}

// here was declare and export instance of signinFormErrors interface model
export interface signinFormErrors {
  phone: string;
  password: string;
}

// here was declare and export instance of  signinFormdata interface model
export interface signinFormdata {
  phone: string;
  password: string;
  errors?: signinFormErrors;
  success?: boolean;
  error: string;
  message?: string;
}

// here was declare and export instance of signinFormprops interface model
export interface signinFormprops {
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
