import { useState, useActionState } from "react";

import {
  userLogoutModalProps,
  signupFormdata,
  signupFormprops,
  signinFormdata,
  signinFormprops,
} from "../models/signupModel.ts";
import {
  userRegisterValidation,
  userLoginValidation,
} from "../validations/signupValidator.ts";
/* import {
  userValidateSignup,
  userValidateSignin,
} from "../validations/signupValidator.ts"; */

// here was declare user toggle password custom hook
/* export const useUserTogglePassword = (defaultValue: any): any => {
  const [isTogglePassword, setIsTogglePassword] =
    useState<boolean>(defaultValue);
  const togglePasswordVisiblity = () => setIsTogglePassword(!isTogglePassword);
  return { isTogglePassword, togglePasswordVisiblity };
}; */

// here was declare and export user logout modal popup custom hook
/* export const useUserLogoutModal = (): userLogoutModalProps => {
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
}; */

// declare and export useSignupUser custom hook
/* export const useSignupUser = (): signupFormprops => {
  // here define function where as userSignup form handling operation
  const userActionSignup = async (
    prevData: signupFormdata,
    formData: FormData
  ): Promise<signupFormdata> => {
    try {
      // here was get formData
      let formValues: any = {
        phone: formData.get("phone")?.toString()?.trim() || "",
        password: formData.get("password")?.toString()?.trim() || "",
        confirmPassword:
          formData.get("confirmPassword")?.toString()?.trim() || "",
      };

      // declare and call validationfunction
      let errors = await userValidateSignup({
        phone: formValues.phone,
        password: formValues.password,
        confirmPassword: formValues.confirmPassword,
      });

      // here was preloading request and response data
      await new Promise((resolve: any) => setTimeout(resolve, 2000));

      // here was declare filtered validation errors
      let filteredValidationErrors: any = Object.entries(errors).reduce(
        (acc: any, [key, value]: any) => {
          return value ? { ...acc, [key]: value } : acc;
        },
        {}
      );

      // check condition of validation errors
      if (Object.keys(filteredValidationErrors).length > 0) {
        return {
          ...prevData,
          errors: { ...filteredValidationErrors },
          success: false,
          error: "",
          message: "",
        };
      }

      return {
        ...formValues,
        errors: { phone: "", password: "", confirmPassword: "" },
        success: true,
        error: "",
        message: "Account was created successfuly",
      };
    } catch (error) {
      return {
        ...prevData,
        errors: { phone: "", password: "", confirmPassword: "" },
        success: false,
        error: "An error occured is server are not found",
        message: "",
      };
    }
  };

  // declare initialStateValues
  const initialStateValues: signupFormdata = {
    phone: "",
    password: "",
    confirmPassword: "",
    errors: { phone: "", password: "", confirmPassword: "" },
    success: false,
    error: "",
    message: "",
  };

  // here was declare useActionState hook
  const [stateValues, formAction, isPending] = useActionState<
    signupFormdata,
    FormData
  >(userActionSignup, initialStateValues);

  return { stateValues, formAction, isPending };
}; */

// declare and export useSigninUser custom hook
/* export const useSigninUser = (): signinFormprops => {
  // here define function where as userLogin action form handling operation
  const userActionLogin = async (
    prevData: signinFormdata,
    formData: FormData
  ): Promise<signinFormdata> => {
    try {
      // here get FormData
      let formValues: any = {
        phone: formData.get("phone")?.toString()?.trim() || "",
        password: formData.get("password")?.toString()?.trim() || "",
      };

      // here declare signin validate function
      let errors: any = await userValidateSignin({
        phone: formValues.phone,
        password: formValues.password,
      });

      // here was preloading request and response data
      await new Promise((resolve: any) => setTimeout(resolve, 2000));

      // here was declare filtered validation errors
      let filteredValidationErrors: any = Object.entries(errors).reduce(
        (acc: any, [key, value]: any) => {
          return value ? { ...acc, [key]: value } : acc;
        },
        {}
      );

      // check condition for validation errors
      if (Object.keys(filteredValidationErrors).length) {
        return {
          ...prevData,
          errors: { ...filteredValidationErrors },
          success: false,
          error: "",
          message: "",
        };
      }

      // here declare userSignup dummy id
      const userSignup: any = "jifpoefief54657dwegqihdeifhaghgbjxj";
      localStorage.setItem("userSignup", userSignup);

      return {
        ...formValues,
        errors: { phone: "", password: "" },
        success: false,
        error: "",
        message: "Loggin successfully",
      };
    } catch (error) {
      return {
        ...prevData,
        errors: { phone: "", password: "" },
        success: false,
        error: "An error occured server not found",
        message: "",
      };
    }
  };

  // here declare initialStateValues
  const initialStateValues: signinFormdata = {
    phone: "",
    password: "",
    errors: { phone: "", password: "" },
    success: false,
    error: "",
    message: "",
  };

  // declare useActionState hook
  const [stateValues, formAction, isPending] = useActionState<
    signinFormdata,
    FormData
  >(userActionLogin, initialStateValues);

  return { stateValues, formAction, isPending };
}; */

// declare and export useChangePasswordUser custom hook
/* export const useChangePasswordUser = (): signupFormprops => {
  // here define function where as userSignup form handling operation
  const userChangePassword = async (
    prevData: signupFormdata,
    formData: FormData
  ): Promise<signupFormdata> => {
    try {
      // here was get formData
      let formValues: any = {
        phone: formData.get("phone")?.toString()?.trim() || "",
        password: formData.get("password")?.toString()?.trim() || "",
        confirmPassword:
          formData.get("confirmPassword")?.toString()?.trim() || "",
      };

      // declare and call validationfunction
      let errors: any = await userValidateSignup({
        phone: formValues.phone,
        password: formValues.password,
        confirmPassword: formValues.confirmPassword,
      });

      // here was preloading request and response data
      await new Promise((resolve: any) => setTimeout(resolve, 2000));

      // here was declare filtered validation errors
      let filteredValidationErrors: any = Object.entries(errors).reduce(
        (acc: any, [key, value]: any) => {
          return value ? { ...acc, [key]: value } : acc;
        },
        {}
      );

      // check condition of validation errors
      if (Object.keys(filteredValidationErrors).length > 0) {
        return {
          ...prevData,
          errors: { ...filteredValidationErrors },
          success: false,
          error: "",
          message: "",
        };
      }

      return {
        ...formValues,
        errors: { phone: "", password: "", confirmPassword: "" },
        success: true,
        error: "",
        message: "Password can changed successfully",
      };
    } catch (error) {
      return {
        ...prevData,
        errors: { phone: "", password: "", confirmPassword: "" },
        success: false,
        error: "An error occured is server are not found",
        message: "",
      };
    }
  };

  // declare initialStateValues
  const initialStateValues: signupFormdata = {
    phone: "",
    password: "",
    confirmPassword: "",
    errors: { phone: "", password: "", confirmPassword: "" },
    success: false,
    error: "",
    message: "",
  };

  // here was declare useActionState hook
  const [stateValues, formAction, isPending] = useActionState<
    signupFormdata,
    FormData
  >(userChangePassword, initialStateValues);

  return { stateValues, formAction, isPending };
}; */

// define and exporting custom hook of userSignup related all operations

// define custom hook for user forms show-hide password
export const useUserTogglePassword = (defaultValue: any): any => {
  const [isTogglePassword, setIsTogglePassword] =
    useState<boolean>(defaultValue);
  const togglePasswordVisiblity = () => setIsTogglePassword(!isTogglePassword);
  return { isTogglePassword, togglePasswordVisiblity };
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
export const useUserRegister = (): signupFormprops => {
  // define function for handle userSignupActions
  const userSignupAction = async (
    prevData: signupFormdata,
    formData: FormData
  ): Promise<signupFormdata> => {
    try {
      // here was wrapped formValues
      const formValues: any = {
        phone: formData.get("phone")?.toString()?.trim() || "",
        password: formData.get("password")?.toString()?.trim() || "",
        confirmPassword:
          formData.get("confirmPassword")?.toString()?.trim() || "",
      };

      // declare instance Object of errors
      let errors: any = userRegisterValidation({
        phone: formValues.phone,
        password: formValues.password,
        confirmPassword: formValues.confirmPassword,
      });

      // here was manage promis
      await new Promise((resolve: any) => setTimeout(resolve, 2000));

      // here was userfilteredRegister for validations
      const userfilteredRegister: any = Object.entries(errors).reduce(
        (acc: any, [key, value]: any) => {
          return value ? { ...acc, [key]: value } : acc;
        },
        {}
      );

      if (Object.keys(userfilteredRegister).length > 0) {
        return {
          ...prevData,
          errors: { ...userfilteredRegister },
          success: false,
          message: "",
        };
      }

      return {
        ...formValues,
        errors: { phone: "", password: "", confirmPassword: "" },
        success: true,
        message: "Account has been created succesfully",
      };
    } catch (error: any) {
      throw error;
    }
  };

  // declare userSignupInitial
  const userSignupInitial: signupFormdata = {
    phone: "",
    password: "",
    confirmPassword: "",
    errors: { phone: "", password: "", confirmPassword: "" },
    success: false,
    message: "",
  };

  // declare useActionState hooks for handle userRegistration form.
  const [signupStateValues, signupFormAction, signupIsPending] = useActionState<
    signupFormdata,
    FormData
  >(userSignupAction, userSignupInitial);

  return { signupStateValues, signupFormAction, signupIsPending };
};

// define custom hook for user login form
export const useUserLogin = (): signinFormprops => {
  // define function for handle userSigninAction
  const userSigninAction = async (
    prevData: signinFormdata,
    formData: FormData
  ): Promise<signinFormdata> => {
    try {
      // declare formValues
      const formValues: any = {
        phone: formData.get("phone")?.toString()?.trim() || "",
        password: formData.get("password")?.toString()?.trim() || "",
      };

      // declare instance Object of errors
      let errors: any = userLoginValidation({
        phone: formValues.phone,
        password: formValues.password,
      });

      // here was handle Promise
      await new Promise((resolve: any) => setTimeout(resolve, 2000));

      // here was handle validation errors are filteredError
      const userfilteredLogin: any = Object.entries(errors).reduce(
        (acc: any, [key, value]: any) => {
          return value ? { ...acc, [key]: value } : acc;
        },
        {}
      );

      if (Object.keys(userfilteredLogin).length > 0) {
        return {
          ...prevData,
          errors: { ...userfilteredLogin },
          success: false,
        };
      }

      // here was stored token or Id on localstorage
      const userSignup: any = "jifpoefief54657dwegqihdeifhaghgbjxj";
      localStorage.setItem("userSignup", userSignup);

      return {
        ...formValues,
        errors: { phone: "", password: "" },
        success: true,
      };
    } catch (error: any) {
      throw error;
    }
  };

  // declare userSigninInitial
  const userSigninInitial: signinFormdata = {
    phone: "",
    password: "",
    errors: { phone: "", password: "" },
    success: false,
  };

  // declare useActionState hook for handle user login form
  const [signinStateValues, signinFormAction, signinIsPending] = useActionState<
    signinFormdata,
    FormData
  >(userSigninAction, userSigninInitial);

  return { signinStateValues, signinFormAction, signinIsPending };
};
