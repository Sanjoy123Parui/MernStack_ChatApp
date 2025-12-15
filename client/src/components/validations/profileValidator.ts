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
export const createProfileuserValidation = z.object({
  first_name: z.string().trim().min(1, `First name field is required`),
  last_name: z.string().trim().min(1, `Last name field is required`),
  avatar: z
    .any()
    .refine((file: any) => file instanceof File, {
      message: `Profile image field is required`,
    })
    .refine(
      (fileType: any) =>
        ["image/jpeg", "image/jpg", "image/png"].includes(fileType?.type),
      { message: `Profile image must be JPEG, JPG or PNG File` }
    ),
  dob: z.string().trim().min(1, `Please select your date of birth`),
  gender: z.enum(["Male", "Female", "Other"], {
    errorMap: () => ({
      message: `Select to the gender`,
    }),
  }),
  abouts: z.string().trim().min(1, `Abouts field is required`),
});
