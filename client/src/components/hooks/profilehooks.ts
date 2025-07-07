import { useState, useActionState } from "react";
import {
  profilesContents,
  profileFormdata,
  profileFormProps,
  editProfileFormdata,
  editProfileFormprops,
} from "../models/profileModel.ts";
import {
  userCreateProfileValidator,
  updateProfileUserValidator,
} from "../validations/profileValidator.ts";

// here was declare custom hooks with export of display profiles contents
export const useUserProfileContents = (): profilesContents => {
  // here declare alert message varibales of user profile modal
  const userRemoveAlertMessage: string = `Please confirmation to remove User Profile & Accounts ?`;
  // declare variable of update user profile heading
  const userProfileHeading: string = `Edit User Profiles`;

  // useState hooks are declare
  const [isUserProfileView, setIsUserProfileView] = useState<boolean>(false);
  const [isUserProfileEdit, setIsUserProfileEdit] = useState<boolean>(false);
  const [isUserRemove, setIsUserRemove] = useState<boolean>(false);

  // define close and open profile data view
  const openUserProfile = () => setIsUserProfileView(true);
  const closeUserProfile = () => setIsUserProfileView(false);

  // define function here open and close modal for edit user profile modal
  const openUserEdit = () => setIsUserProfileEdit(true);
  const closeUserEdit = () => setIsUserProfileEdit(false);

  // define function here open and close modal for remove user profile modal
  const openUserRemove = () => setIsUserRemove(true);
  const closeUserRemove = () => setIsUserRemove(false);

  return {
    userRemoveAlertMessage,
    userProfileHeading,
    isUserProfileView,
    isUserProfileEdit,
    isUserRemove,
    openUserProfile,
    closeUserProfile,
    openUserEdit,
    closeUserEdit,
    openUserRemove,
    closeUserRemove,
  };
};

// here was export and declare custom hook of useCreateuserprofile
export const useCreateuserprofile = (): profileFormProps => {
  // here define function of user create profile operation
  const userCreateprofileAction = async (
    prevData: profileFormdata,
    formData: FormData
  ): Promise<profileFormdata> => {
    try {
      // declare variables of formValues
      let formValues: any = {
        full_name: formData.get("full_name")?.toString()?.trim() || "",
        avatar: (formData.get("avatar") as File) || "",
        gender: formData.get("gender")?.toString()?.trim() || "",
        dob: formData.get("dob")?.toString()?.trim() || "",
        abouts: formData.get("abouts")?.toString()?.trim() || "",
      };

      // declare validation error
      let errors: any = await userCreateProfileValidator({
        full_name: formValues.full_name,
        avatar: formValues.avatar,
        gender: formValues.gender,
        dob: formValues.dob,
        abouts: formValues.abouts,
      });

      // here was preloading request and response data
      await new Promise((resolve: any) => setTimeout(resolve, 2000));

      // here was declare filtered validation errors
      let fileteredCreateuserprofileValidation: any = Object.entries(
        errors
      ).reduce((acc: any, [key, values]: any) => {
        return values ? { ...acc, [key]: values } : acc;
      }, {});

      // check condition of validation errors
      if (Object.keys(fileteredCreateuserprofileValidation).length > 0) {
        return {
          ...prevData,
          errors: { ...fileteredCreateuserprofileValidation },
        };
      }

      // here declare userProfile dummy id
      const userProfile: any = "fhgepweporiuf448866332ifuhwipefie";
      localStorage.setItem("userProfile", userProfile);

      return {
        ...formValues,
        errors: { full_name: "", avatar: "", gender: "", dob: "", abouts: "" },
      };
    } catch (error) {
      return {
        ...prevData,
        errors: { full_name: "", avatar: "", gender: "", dob: "", abouts: "" },
      };
    }
  };

  // here declare initialStateValues
  const initialStateValues: profileFormdata = {
    full_name: "",
    avatar: "",
    gender: "",
    dob: "",
    abouts: "",
    errors: { full_name: "", avatar: "", gender: "", dob: "", abouts: "" },
  };

  // declare useActionState hook
  const [stateValues, formAction, isPending] = useActionState<
    profileFormdata,
    FormData
  >(userCreateprofileAction, initialStateValues);

  return { stateValues, formAction, isPending };
};

// here was declare and export custom hooks of useEditUserProfile contents
export const useEditUserProfile = (): editProfileFormprops => {
  // define function of updateUserProfile
  const updateUserProfile = async (
    prevData: editProfileFormdata,
    formData: FormData
  ): Promise<editProfileFormdata> => {
    try {
      // get formData
      let formValues: any = {
        full_name: formData.get("full_name")?.toString()?.trim() || "",
        gender: formData.get("gender")?.toString()?.trim() || "",
        dob: formData.get("dob")?.toString()?.trim() || "",
        abouts: formData.get("abouts")?.toString()?.trim() || "",
      };

      // declare variables of validation errors
      let errors: any = await updateProfileUserValidator({
        full_name: formValues.full_name,
        gender: formValues.gender,
        dob: formValues.dob,
        abouts: formValues.abouts,
      });

      // here was preloading request and response
      await new Promise((resolve: any) => setTimeout(resolve, 2000));

      // declare instance object of filterdError
      const filterdErrors: any = Object.entries(errors).reduce(
        (acc: any, [key, value]: any) => {
          return value ? { ...acc, [key]: value } : acc;
        },
        {}
      );

      // here check condition of object key values
      if (Object.keys(filterdErrors).length > 0) {
        return {
          ...prevData,
          errors: { ...filterdErrors },
        };
      }

      return {
        ...formValues,
        errors: {
          full_name: "",
          gender: "",
          dob: "",
          abouts: "",
        },
      };
    } catch (error) {
      return {
        ...prevData,
        errors: {
          full_name: "",
          gender: "",
          dob: "",
          abouts: "",
        },
      };
    }
  };

  // declare initialStateValues
  const initialStateValues: editProfileFormdata = {
    full_name: "",
    gender: "",
    dob: "",
    abouts: "",
    errors: {
      full_name: "",
      gender: "",
      dob: "",
      abouts: "",
    },
  };

  // declare useActionState hook for update user profile formdata
  const [stateValues, formAction, isPending] = useActionState<
    editProfileFormdata,
    FormData
  >(updateUserProfile, initialStateValues);

  return { stateValues, formAction, isPending };
};
