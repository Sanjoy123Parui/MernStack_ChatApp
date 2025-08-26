import {
  signupFormValues,
  signinFormValues,
  forgetPasswordFormValues,
  createProfileFormValues,
} from "../models/accountsModel.ts";

// here define with exporting function of users accounts and auth validations

export const userRegisterValidation = (
  defaultValues: any
): signupFormValues => {
  let errors: any = {
    phone: !defaultValues.phone
      ? "Phone number field is required"
      : !/^((\\+91-?)|0)?[0-9]{10}$/.test(defaultValues.phone)
      ? "Phone number must be a valid 10 digit number"
      : "",
    password: !defaultValues.password
      ? "Password field is required"
      : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,15}$/.test(
          defaultValues.password
        )
      ? "Password must be 8-15 chars, include upper, lower, number, and special character"
      : "",
    confirmPassword: !defaultValues.confirmPassword
      ? "Confirm password field is required"
      : defaultValues.password !== defaultValues.confirmPassword
      ? "Passwords do not match"
      : "",
  };
  return { ...errors };
};

export const userLoginValidation = (defaultValues: any): signinFormValues => {
  let errors: any = {
    phone: !defaultValues.phone
      ? "Phone number field is required"
      : !/^((\\+91-?)|0)?[0-9]{10}$/.test(defaultValues.phone)
      ? "Phone number must be a valid 10 digit number"
      : "",
    password: !defaultValues.password
      ? "Password field is required"
      : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,15}$/.test(
          defaultValues.password
        )
      ? "Password must be 8-15 chars, include upper, lower, number, and special character"
      : "",
  };

  return { ...errors };
};

export const userForgetPasswordValidation = (
  defaultValues: any
): forgetPasswordFormValues => {
  let errors: any = {
    phone: !defaultValues.phone
      ? "Phone number field is required"
      : !/^((\\+91-?)|0)?[0-9]{10}$/.test(defaultValues.phone)
      ? "Phone number must be a valid 10 digit number"
      : "",
    password: !defaultValues.password
      ? "Password field is required"
      : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,15}$/.test(
          defaultValues.password
        )
      ? "Password must be 8-15 chars, include upper, lower, number, and special character"
      : "",
    confirmPassword: !defaultValues.confirmPassword
      ? "Confirm password field is required"
      : defaultValues.password !== defaultValues.confirmPassword
      ? "Passwords do not match"
      : "",
  };
  return { ...errors };
};

export const userCreateProfileValidation = (
  defaultValues: any
): createProfileFormValues => {
  let errors: any = {
    first_name: !defaultValues.first_name ? "First name field is required" : "",

    last_name: !defaultValues.last_name ? "Last name field is required" : "",

    avatar:
      !defaultValues.avatar && defaultValues.avatar.size >= 5 * 1024 * 1024
        ? "Avatar must be 5 MB"
        : !["image/jpeg", "image/png", "image/webp", "image/gif"].includes(
            defaultValues.avatar.type
          )
        ? "Avatar must be a JPG, PNG, WEBP, or GIF file"
        : "",

    gender:
      !defaultValues.gender &&
      !["Male", "Femal", "Other"].includes(defaultValues.gender)
        ? "Gender must be Male, Female, or Other"
        : "",

    dob: !defaultValues.dob ? "Please choose your date of birth" : "",

    abouts: !defaultValues.abouts ? "Abouts field is required" : "",
  };

  return { ...errors };
};
