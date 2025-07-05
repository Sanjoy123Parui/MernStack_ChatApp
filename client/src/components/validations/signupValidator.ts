import {
  userSignupFormErrors,
  userSigninFormErrors,
} from "../models/signupModel.ts";

// here define and export of userSignupForms validation function
export const userValidateSignup = (values: {
  phone: string;
  password: string;
  confirmPassword: string;
}): userSignupFormErrors => {
  // declae variables of Validation errors
  let errors: any = {
    phone: !values.phone
      ? "Phone number field is required"
      : !/^((\\+91-?)|0)?[0-9]{10}$/.test(values.phone)
      ? "Phone number must be a valid 10 digit number"
      : "",

    password: !values.password
      ? "Password field is required"
      : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,15}$/.test(
          values.password
        )
      ? "Password must be 8-15 chars, include upper, lower, number, and special character"
      : "",

    confirmPassword: !values.confirmPassword
      ? "Confirm password field is required"
      : values.password !== values.confirmPassword
      ? "Passwords do not match"
      : "",
  };

  return { ...errors };
};

// here define and export of userSigninForms validation function
export const userValidateSignin = (values: {
  phone: string;
  password: string;
}): userSigninFormErrors => {
  // declae variables of Validation errors
  let errors: any = {
    phone: !values.phone
      ? "Phone number field is required"
      : !/^((\\+91-?)|0)?[0-9]{10}$/.test(values.phone)
      ? "Phone number must be a valid 10 digit number"
      : "",

    password: !values.password
      ? "Password field is required"
      : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,15}$/.test(
          values.password
        )
      ? "Password must be 8-15 chars, include upper, lower, number, and special character"
      : "",
  };

  return { ...errors };
};
