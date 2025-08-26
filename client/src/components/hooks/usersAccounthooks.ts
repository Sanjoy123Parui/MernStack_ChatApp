import { useActionState } from "react";

import {
  signupFormdata,
  signupFormprops,
  signinFormdata,
  signinFormprops,
  forgetPasswordFormdata,
  forgetPasswordFormprops,
  createProfileFormdata,
  createProfilesFormprops,
} from "../models/accountsModel.ts";

import {
  userRegisterValidation,
  userLoginValidation,
  userForgetPasswordValidation,
  userCreateProfileValidation,
} from "../validations/usersAccountValidator.ts";

// here declare for all user accounts and auth related custom hooks with exporting

export const useUserRegister = (): signupFormprops => {
  // define function for handle userSignupAction
  const userSignupAction = async (
    prevData: signupFormdata,
    formData: FormData
  ): Promise<signupFormdata> => {
    try {
      let formValues: any = {
        phone: formData.get("phone")?.toString().trim() || "",
        password: formData.get("password")?.toString().trim() || "",
        confirmPassword:
          formData.get("confirmPassword")?.toString().trim() || "",
      };

      let errors: any = await userRegisterValidation({
        phone: formValues.phone,
        password: formValues.password,
        confirmPassword: formValues.confirmPassword,
      });

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
        errors: {
          phone: "",
          password: "",
          confirmPassword: "",
        },
        success: true,
        message: "Account was created Successfully",
      };
    } catch (error: any) {
      error = "An error occured is server are not found";
      return {
        ...prevData,
        errors: {
          phone: "",
          password: "",
          confirmPassword: "",
        },
        success: false,
        message: error,
      };
    }
  };

  // declare userSignupInital
  const userSignupInital: signupFormdata = {
    phone: "",
    password: "",
    confirmPassword: "",
    errors: {
      phone: "",
      password: "",
      confirmPassword: "",
    },
    success: false,
    message: "",
  };

  // declare useActionState hook for handle user register form
  const [signupStateValues, singupFormAction, signupIsPending] = useActionState<
    signupFormdata,
    FormData
  >(userSignupAction, userSignupInital);

  return { signupStateValues, singupFormAction, signupIsPending };
};

export const useUserLogin = (): signinFormprops => {
  // define userSigninAction function
  const userSigninAction = async (
    prevData: signinFormdata,
    formData: FormData
  ): Promise<signinFormdata> => {
    try {
      let formValues: any = {
        phone: formData.get("phone")?.toString().trim() || "",
        password: formData.get("password")?.toString().trim() || "",
      };

      let errors: any = await userLoginValidation({
        phone: formValues.phone,
        password: formValues.password,
      });

      await new Promise((resolve: any) => setTimeout(resolve, 2000));

      let userLoginfiltered: any = Object.entries(errors).reduce(
        (acc: any, [key, value]: any) => {
          return value ? { ...acc, [key]: value } : acc;
        },
        {}
      );

      if (Object.keys(userLoginfiltered).length > 0) {
        return {
          ...prevData,
          errors: { ...userLoginfiltered },
        };
      }

      const userSignup: any = "jifpoefief54657dwegqihdeifhaghgbjxj";
      localStorage.setItem("userSignup", userSignup);

      return {
        ...formValues,
        errors: {
          phone: "",
          password: "",
        },
      };
    } catch (error: any) {
      error = "An error occured is server are not found";
      return {
        ...prevData,
        errors: {
          phone: "",
          password: "",
        },
      };
    }
  };

  // declare userSigninInitial
  const userSigninInitial: signinFormdata = {
    phone: "",
    password: "",
    errors: {
      phone: "",
      password: "",
    },
  };

  // declare useActionState hook for handle userlogin form
  const [signinStateValues, singinFormAction, signinIsPending] = useActionState<
    signinFormdata,
    FormData
  >(userSigninAction, userSigninInitial);

  return { signinStateValues, singinFormAction, signinIsPending };
};

export const useUserforgetPassword = (): forgetPasswordFormprops => {
  // define function for handle userforgetPasswordAction
  const userforgetPasswordAction = async (
    prevData: forgetPasswordFormdata,
    formData: FormData
  ): Promise<forgetPasswordFormdata> => {
    try {
      let formValues: any = {
        phone: formData.get("phone")?.toString().trim() || "",
        password: formData.get("password")?.toString().trim() || "",
        confirmPassword:
          formData.get("confirmPassword")?.toString().trim() || "",
      };

      let errors: any = await userForgetPasswordValidation({
        phone: formValues.phone,
        password: formValues.password,
        confirmPassword: formValues.confirmPassword,
      });

      await new Promise((resolve: any) => setTimeout(resolve, 2000));

      let userForgetfiltered: any = Object.entries(errors).reduce(
        (acc: any, [key, value]: any) => {
          return value ? { ...acc, [key]: value } : acc;
        },
        {}
      );

      if (Object.keys(userForgetfiltered).length > 0) {
        return {
          ...prevData,
          errors: { ...userForgetfiltered },
          success: false,
          message: "",
        };
      }

      return {
        ...formValues,
        errors: {
          phone: "",
          password: "",
          confirmPassword: "",
        },
        success: true,
        message: "Password are changed successfully",
      };
    } catch (error: any) {
      error = "An error occured is server are not found";
      return {
        ...prevData,
        errors: {
          phone: "",
          password: "",
          confirmPassword: "",
        },
        success: false,
        message: error,
      };
    }
  };

  // declare userforgetPasswordInitial
  const userforgetPasswordInitial: forgetPasswordFormdata = {
    phone: "",
    password: "",
    confirmPassword: "",
    errors: {
      phone: "",
      password: "",
      confirmPassword: "",
    },
    success: false,
    message: "",
  };

  // declare useActionState hook for handle userforgetPassword form operations
  const [forgetStateValues, forgetFormAction, forgetIsPending] = useActionState<
    forgetPasswordFormdata,
    FormData
  >(userforgetPasswordAction, userforgetPasswordInitial);

  return { forgetStateValues, forgetFormAction, forgetIsPending };
};

export const useUserCreateProfile = (): createProfilesFormprops => {
  // define function for userNewprofileAction
  const userNewprofileAction = async (
    prevData: createProfileFormdata,
    formData: FormData
  ): Promise<createProfileFormdata> => {
    try {
      let formValues: any = {
        first_name: formData.get("first_name")?.toString()?.trim() || "",
        last_name: formData.get("last_name")?.toString()?.trim() || "",
        avatar: (formData.get("avatar") as File) || "",
        gender: formData.get("gender")?.toString()?.trim() || "",
        dob: formData.get("dob")?.toString()?.trim() || "",
        abouts: formData.get("abouts")?.toString()?.trim() || "",
      };

      let errors: any = await userCreateProfileValidation({
        first_name: formValues.first_name,
        last_name: formValues.last_name,
        avatar: formValues.avatar,
        gender: formValues.gender,
        dob: formValues.dob,
        abouts: formValues.abouts,
      });

      await new Promise((resolve: any) => setTimeout(resolve, 2000));

      let newUserProfilefiltered: any = Object.entries(errors).reduce(
        (acc: any, [key, value]: any) => {
          return value ? { ...acc, [key]: value } : acc;
        },
        {}
      );

      if (Object.keys(newUserProfilefiltered).length > 0) {
        return {
          ...prevData,
          errors: { ...newUserProfilefiltered },
        };
      }

      // here declare userProfile dummy id
      const userProfile: any = "fhgepweporiuf448866332ifuhwipefie";
      localStorage.setItem("userProfile", userProfile);

      return {
        ...formValues,
        errors: {
          first_name: "",
          last_name: "",
          avatar: "",
          gender: "",
          dob: "",
          abouts: "",
        },
      };
    } catch (error: any) {
      return {
        ...prevData,
        errors: {
          first_name: "",
          last_name: "",
          avatar: "",
          gender: "",
          dob: "",
          abouts: "",
        },
      };
    }
  };

  // declare userCreateProfileInitial variables
  const userCreateProfileInitial: createProfileFormdata = {
    first_name: "",
    last_name: "",
    avatar: "",
    gender: "",
    dob: "",
    abouts: "",
    errors: {
      first_name: "",
      last_name: "",
      avatar: "",
      gender: "",
      dob: "",
      abouts: "",
    },
  };

  // declare useActionState hooks for manage createProfileForm
  const [
    createProfileStateValues,
    createProfileFormAction,
    createProfileIsPending,
  ] = useActionState<createProfileFormdata, FormData>(
    userNewprofileAction,
    userCreateProfileInitial
  );

  return {
    createProfileStateValues,
    createProfileFormAction,
    createProfileIsPending,
  };
};
