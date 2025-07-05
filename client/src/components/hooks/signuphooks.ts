import { useState, useActionState } from "react";

import {
  userLogoutModalProps,
  signupFormdata,
  signupFormprops,
  signinFormdata,
  signinFormprops,
} from "../models/signupModel.ts";
import {
  userValidateSignup,
  userValidateSignin,
} from "../validations/signupValidator.ts";

// here was declare user toggle password custom hook
export const useUserTogglePassword = (defaultValue: any): any => {
  const [isTogglePassword, setIsTogglePassword] =
    useState<boolean>(defaultValue);
  const togglePasswordVisiblity = () => setIsTogglePassword(!isTogglePassword);
  return { isTogglePassword, togglePasswordVisiblity };
};

// here was declare and export user logout modal popup custom hook
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

// declare and export useSignupUser custom hook
export const useSignupUser = (): signupFormprops => {
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
};

// declare and export useSigninUser custom hook
export const useSigninUser = (): signinFormprops => {
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
};

// declare and export useChangePasswordUser custom hook
export const useChangePasswordUser = (): signupFormprops => {
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
};
