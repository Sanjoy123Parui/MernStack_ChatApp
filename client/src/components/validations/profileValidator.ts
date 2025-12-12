// Consume to importing some modules and lib
import { z } from "zod";
import { editProfileFormErrors } from "../models/profileModel.ts";

// export and define function of userCreateProfileValidations
/* export const userCreateProfileValidator = (values: any): profileFormErrors => {
  // declare variables of error validations
  let errors: any = {
    // full_name: !values.full_name ? "Full name field is required" : "",
    first_name: !values.first_name ? "First name field is required" : "",
    last_name: !values.last_name ? "Last name field is required" : "",

    avatar:
      !values.avatar && values.avatar.size >= 5 * 1024 * 1024
        ? "Avatar must be less than 2MB"
        : !["image/jpeg", "image/png", "image/webp", "image/gif"].includes(
            values.avatar.type
          )
        ? "Avatar must be a JPG, PNG, WEBP, or GIF file"
        : "",

    gender:
      !values.gender && !["Male", "Female", "Other"].includes(values.gender)
        ? "Gender must be Male, Female, or Other"
        : "",

    dob: !values.dob ? "Please choose your date of birth" : "",

    abouts: !values.abouts ? "Abouts field is required" : "",
  };

  return { ...errors };
}; */

// export and define updateProfileUserValidator function
export const updateProfileUserValidator = (
  values: any
): editProfileFormErrors => {
  // declare variables of validation errors
  let errors: any = {
    // full_name: !values.full_name ? "Full name field is required" : "",
    first_name: !values.first_name ? "First name field is required" : "",
    last_name: !values.last_name ? "Last name field is required" : "",
    gender:
      !values.gender && !["Male", "Female", "Other"].includes(values.gender)
        ? "Gender must be Male, Female, or Other"
        : "",
    dob: !values.dob ? "Please choose your date of birth" : "",
    abouts: !values.abouts ? "Abouts field is required" : "",
  };

  return { ...errors };
};

// define and exporting function of userCreateProfileValidation
export const createProfileUserValidation = z
  .object({
    first_name: z.string().trim().min(1, `First name field is required`),
    last_name: z.string().trim().min(1, "Last name field is required"),
    avatar: z
      .string()
      .refine(
        (values: any) =>
          ["image/jpeg", "image/png", "image/jpg"].includes(values),
        {
          message: `Profile picture image must be JPEG, JPG or PNG`,
        }
      )
      .optional(),
    dob: z.string().trim().min(1, `Date of birth field is required`),
    gender: z
      .string()
      .refine((values: any) => ["Male", "Female", "Other"].includes(values), {
        message: `Please choose your gender`,
      }),
    abouts: z.string().trim().min(1, `Abouts field is required`),
  })
  .refine((data: any) => !!data.avatar, {
    message: `Profile pic is required`,
    path: ["avatar"],
  });
