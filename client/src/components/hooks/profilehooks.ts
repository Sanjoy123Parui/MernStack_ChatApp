import { useState, useActionState } from "react";

import {
  profilesContents,
  createProfileFormState,
  createProfileFormProps,
  editProfileFormState,
  editProfileFormProps,
} from "../models/profileModel.ts";
import {
  createProfileuserValidation,
  editProfileuserValidation,
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

/* define and exporting user create profile custom hook */
export const useNewUserProfile = (): createProfileFormProps => {
  // declare userProfileInitial
  const userProfileInitial: createProfileFormState = {
    stepper: 1,
    data: {},
    errors: {},
    success: false,
  };

  // define function for userProfileAction form
  const userProfileAction = async (
    prevState: createProfileFormState,
    formData: FormData
  ): Promise<createProfileFormState> => {
    try {
      // Simulate for API delay
      await new Promise((resolve: any) => setTimeout(resolve, 3000));
      // first step field records of user profile form
      if (prevState.stepper === 1) {
        // declare firstStepValues
        const firstStepValues: any = {
          first_name: formData.get("first_name")?.toString()?.trim() || "",
          last_name: formData.get("last_name")?.toString()?.trim() || "",
          avatar: (formData.get("avatar") as File) || "",
        };

        // firstValidator declaration
        const firstValidator = createProfileuserValidation
          .pick({
            first_name: true,
            last_name: true,
            avatar: true,
          })
          .safeParse(firstStepValues);

        if (!firstValidator.success) {
          const fieldErrors: any = {};
          firstValidator.error.errors.forEach((err: any) => {
            fieldErrors[err.path[0]] = err.message;
          });
          return { ...prevState, errors: fieldErrors };
        }
        return {
          stepper: 2,
          data: { ...prevState.data, ...firstStepValues },
          errors: {},
          success: false,
        };
      }

      // second step field records of user profile form
      if (prevState.stepper === 2) {
        // declare secondStepValues
        const secondStepValues: any = {
          dob: formData.get("dob")?.toString()?.trim() || "",
          gender: formData.get("gender")?.toString()?.trim() || "",
          abouts: formData.get("abouts")?.toString()?.trim() || "",
        };

        // secondValidator declaration
        const secondValidator = createProfileuserValidation
          .pick({
            dob: true,
            gender: true,
            abouts: true,
          })
          .safeParse(secondStepValues);

        if (!secondValidator.success) {
          const fieldErrors: any = {};
          secondValidator.error.errors.forEach((err: any) => {
            fieldErrors[err.path[0]] = err.message;
          });
          return { ...prevState, errors: fieldErrors };
        }

        // here declare userProfile dummy id
        const userProfile: any = "fhgepweporiuf448866332ifuhwipefie";
        localStorage.setItem("userProfile", userProfile);

        return {
          stepper: 2,
          data: { ...prevState.data, ...secondStepValues },
          errors: {},
          success: true,
        };
      }

      return prevState;
    } catch (error: any) {
      throw error;
    }
  };

  // declare useActionState hook
  const [createState, createFormAction, createIsPending] = useActionState<
    createProfileFormState,
    FormData
  >(userProfileAction, userProfileInitial);

  return { createState, createFormAction, createIsPending };
};

/* define and exporting user edit profile custom hook */
export const useUpdateUserProfile = (): editProfileFormProps => {
  // declare userEditInitial
  const userEditInitial: editProfileFormState = {
    data: {},
    errors: {},
    success: false,
    message: "",
  };

  // define function for handle userEditAction
  const userEditAction = async (
    prevState: editProfileFormState,
    formData: FormData
  ): Promise<editProfileFormState> => {
    try {
      // declare formValues which are getting formData
      const formValues: any = {
        first_name: formData.get("first_name")?.toString()?.trim() || "",
        last_name: formData.get("last_name")?.toString()?.trim() || "",
        dob: formData.get("dob")?.toString()?.trim() || "",
        gender: formData.get("gender")?.toString()?.trim() || "",
        abouts: formData.get("abouts")?.toString()?.trim() || "",
      };

      // declare variable assign for editProfileValidation
      const profileUpdateValidator =
        editProfileuserValidation.safeParse(formValues);

      // here was delay simulate api
      await new Promise((resolve: any) => setTimeout(resolve, 3000));

      if (!profileUpdateValidator.success) {
        const fieldErrors: any = {};
        profileUpdateValidator.error.errors.forEach((err: any) => {
          fieldErrors[err.path[0]] = err.message;
        });
        return { ...prevState, errors: fieldErrors };
      }

      return {
        data: { ...prevState.data, ...formValues },
        errors: {},
        success: true,
        message: "Profile has been updated successfully",
      };
    } catch (error: any) {
      throw error;
    }
  };

  // declare useActionState for handle user update profile form
  const [editState, editFormAction, editIsPending] = useActionState<
    editProfileFormState,
    FormData
  >(userEditAction, userEditInitial);

  return { editState, editFormAction, editIsPending };
};
