// here was declare with exporting togglePassword interface model
export interface togglePasswordprops {
  isRegisterPassword: boolean;
  isLoginPassword: boolean;
  isForgotPassword: boolean;
  toggleRegisterPassword: () => void;
  toggleLoginPassword: () => void;
  toggleForgotPassword: () => void;
}

// here userLogout modal popup modal props
export interface userLogoutModalProps {
  userLogoutAlertMessage: string;
  isLogoutModal: boolean;
  openLogoutModal: () => void;
  closeLogoutModal: () => void;
}

// here declare and also exporting registration related interface model
interface signupFormValues {
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

interface signupFormErrors {
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

export interface signupFormState {
  data: signupFormValues;
  errors?: signupFormErrors;
  success: boolean;
  message: string;
}

export interface signupFormProps {
  signupState: signupFormState;
  signupFormAction: (formData: FormData) => unknown;
  signupIsPending: boolean;
}

// here declare and also exporting login related interface model
interface signinFormValues {
  phone?: string;
  password?: string;
}

interface signinFormErrors {
  phone?: string;
  password?: string;
}

export interface signinFormState {
  data: signinFormValues;
  errors?: signinFormErrors;
  success: boolean;
}

export interface signinFormProps {
  signinState: signinFormState;
  signinFormAction: (formData: FormData) => unknown;
  signinIsPending: boolean;
}

// here declare and also exporting forgotPassword related interface model
interface forgotPasswordFormValues {
  old_password?: string;
  new_password?: string;
  confirmPassword?: string;
}

interface forgotPasswordFormErrors {
  old_password?: string;
  new_password?: string;
  confirmPassword?: string;
}

export interface forgotPasswordFormState {
  data: forgotPasswordFormValues;
  errors?: forgotPasswordFormErrors;
  success: boolean;
  message: string;
}

export interface forgotPasswordFormProps {
  forgotPasswordState: forgotPasswordFormState;
  forgotPasswordFormAction: (formData: FormData) => unknown;
  forgotPasswordIsPending: boolean;
}
