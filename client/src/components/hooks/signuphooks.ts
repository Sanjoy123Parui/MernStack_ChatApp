import { useState, useActionState } from "react";
import {
  togglePasswordprops,
  userLogoutModalProps,
  signupFormState,
  signupFormProps,
  signinFormState,
  signinFormProps,
  forgotPasswordFormState,
  forgotPasswordFormProps,
} from "../models/signupModel.ts";
import {
  userRegisterValidation,
  userLoginValidation,
  userForgotPasswordValidation,
} from "../validations/signupValidator.ts";

// define custom hook for user forms show-hide password
export const useUserTogglePassword = (): togglePasswordprops => {
  // declare hooks for manage states variables
  const [isRegisterPassword, setIsRegisterPassword] = useState<boolean>(false);
  const [isLoginPassword, setIsLoginPassword] = useState<boolean>(false);
  const [isForgotPassword, setIsForgotPassword] = useState<boolean>(false);

  // define function for handle states
  const toggleRegisterPassword = () =>
    setIsRegisterPassword((prev: any) => !prev);
  const toggleLoginPassword = () => setIsLoginPassword((prev: any) => !prev);
  const toggleForgotPassword = () => setIsForgotPassword((prev: any) => !prev);

  return {
    isRegisterPassword,
    isLoginPassword,
    isForgotPassword,
    toggleRegisterPassword,
    toggleLoginPassword,
    toggleForgotPassword,
  };
};

// define custom hook for user logout popup modal open and close
export const useUserLogoutModal = (): userLogoutModalProps => {
  // here declare alert message varibales of user account modal
  let userLogoutAlertMessage: string = `Are you sure you want to log out?`;

  // here declare useState hooks
  const [isLogoutModal, setIsLogoutModal] = useState<boolean>(false);

  // define function for logout modal open
  const openLogoutModal = () => setIsLogoutModal(true);
  // define function for logout modal close
  const closeLogoutModal = () => setIsLogoutModal(false);

  return {
    userLogoutAlertMessage,
    isLogoutModal,
    openLogoutModal,
    closeLogoutModal,
  };
};

// define custom hook for user registration form
export const useUserRegister = (): signupFormProps => {
  // declare userSignupInitial
  const userSignupInitial: signupFormState = {
    data: {},
    errors: {},
    success: false,
    message: "",
  };

  // define function for handle userSignupActions
  const userSignupAction = async (
    prevState: signupFormState,
    formData: FormData
  ): Promise<signupFormState> => {
    try {
      // here was wrapped formValues
      const formValues: any = {
        phone: formData.get("phone")?.toString()?.trim() || "",
        password: formData.get("password")?.toString()?.trim() || "",
        confirmPassword:
          formData.get("confirmPassword")?.toString()?.trim() || "",
      };

      // declare instance Object of errors zod validations
      const signupValidator: any = userRegisterValidation.safeParse(formValues);

      // here was manage promis
      await new Promise((resolve: any) => setTimeout(resolve, 2000));

      // here was check field errors validation
      if (!signupValidator.success) {
        const fieldErrors: any = {};
        signupValidator.error.errors.forEach((err: any) => {
          fieldErrors[err.path[0]] = err.message;
        });

        return { ...prevState, errors: fieldErrors };
      }

      return {
        data: { ...prevState.data, ...formValues },
        errors: {},
        success: true,
        message: "Account has been created succesfully",
      };
    } catch (error: any) {
      throw error;
    }
  };

  // declare useActionState hooks for handle userRegistration form.
  const [signupState, signupFormAction, signupIsPending] = useActionState<
    signupFormState,
    FormData
  >(userSignupAction, userSignupInitial);

  return { signupState, signupFormAction, signupIsPending };
};

// define custom hook for user login form
export const useUserLogin = (): signinFormProps => {
  // declare userSigninInitial
  const userSigninInitial: signinFormState = {
    data: {},
    errors: {},
    success: false,
  };

  // define function for handle userSigninAction
  const userSigninAction = async (
    prevState: signinFormState,
    formData: FormData
  ): Promise<signinFormState> => {
    try {
      // declare formValues
      const formValues: any = {
        phone: formData.get("phone")?.toString()?.trim() || "",
        password: formData.get("password")?.toString()?.trim() || "",
      };

      // declare instance Object of errors validation
      const signinValidator: any = userLoginValidation.safeParse(formValues);

      // here was handle Promise
      await new Promise((resolve: any) => setTimeout(resolve, 2000));

      // here was handle validation errors are filteredError
      if (!signinValidator.success) {
        const fieldErrors: any = {};
        signinValidator.error.errors.forEach((err: any) => {
          fieldErrors[err.path[0]] = err.message;
        });
        return { ...prevState, errors: fieldErrors };
      }
      // here was stored token or Id on localstorage
      const userSignup: any = "jifpoefief54657dwegqihdeifhaghgbjxj";
      localStorage.setItem("userSignup", userSignup);

      return {
        data: { ...prevState.data, ...formValues },
        errors: {},
        success: true,
      };
    } catch (error: any) {
      throw error;
    }
  };

  // declare useActionState hook for handle user login form
  const [signinState, signinFormAction, signinIsPending] = useActionState<
    signinFormState,
    FormData
  >(userSigninAction, userSigninInitial);

  return { signinState, signinFormAction, signinIsPending };
};

// define custom hook for user forgotPassword form
export const useUserForgotPassword = (): forgotPasswordFormProps => {
  // declare userforgotPasswordInitial
  const userforgotPasswordInitial: forgotPasswordFormState = {
    data: {},
    errors: {},
    success: false,
    message: "",
  };

  // define function for handle userforgotPasswordAction
  const userforgotPasswordAction = async (
    prevState: forgotPasswordFormState,
    formData: FormData
  ): Promise<forgotPasswordFormState> => {
    try {
      // declare formValues
      const formValues: any = {
        old_password: formData.get("old_password")?.toString()?.trim() || "",
        new_password: formData.get("new_password")?.toString()?.trim() || "",
        confirmPassword:
          formData.get("confirmPassword")?.toString()?.trim() || "",
      };

      // declare error instance object of validation
      const forgotValidator: any =
        userForgotPasswordValidation.safeParse(formValues);

      // here was handle promise
      await new Promise((resolve: any) => setTimeout(resolve, 2000));

      // declare userfilterPassword of validation errors
      if (!forgotValidator.success) {
        const fieldErrors: any = {};
        forgotValidator.error.errors.forEach((err: any) => {
          if (err.path.length > 0) {
            fieldErrors[err.path[0]] = err.message;
          }
        });

        return { ...prevState, errors: fieldErrors };
      }

      return {
        data: { ...prevState.data, ...formValues },
        errors: {},
        success: true,
        message: "Password has been changed successfully",
      };
    } catch (error) {
      throw error;
    }
  };

  // declare useActionState hook for handle forgotPassword form states
  const [
    forgotPasswordState,
    forgotPasswordFormAction,
    forgotPasswordIsPending,
  ] = useActionState<forgotPasswordFormState, FormData>(
    userforgotPasswordAction,
    userforgotPasswordInitial
  );

  return {
    forgotPasswordState,
    forgotPasswordFormAction,
    forgotPasswordIsPending,
  };
};
