import {
  profileFormErrors,
  editProfileFormErrors,
} from "../models/profileModel.ts";

// export and define function of userCreateProfileValidations
export const userCreateProfileValidator = (values: any): profileFormErrors => {
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
};

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
