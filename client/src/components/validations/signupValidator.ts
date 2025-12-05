// Consuming to the importng some modules
import {
  signupFormValues,
  signinFormValues,
  forgotPasswordFormValues,
} from "../models/signupModel.ts";

/* import {
  userSignupFormErrors,
  signinFormErrors,
} from "../models/signupModel.ts"; */

// here define and export of userSignupForms validation function
// export const userValidateSignup = (values: any): userSignupFormErrors => {
//   // declae variables of Validation errors
//   let errors: any = {
//     /* phone: !values.phone
//       ? "Phone number field is required"
//       : !/^((\\+91-?)|0)?[0-9]{10}$/.test(values.phone)
//       ? "Phone number must be a valid 10 digit number"
//       : "", */

//     phone: !values.phone
//       ? "Phone number is required"
//       : /^\+?[1-9]\d{1,14}$/.test(values.phone)
//       ? "Phone number must be a valid 1 to 14 digits number"
//       : "",

//     password: !values.password
//       ? "Password field is required"
//       : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,15}$/.test(
//           values.password
//         )
//       ? "Password must be 8-15 chars, include upper, lower, number, and special character"
//       : "",

//     confirmPassword: !values.confirmPassword
//       ? "Confirm password field is required"
//       : values.password !== values.confirmPassword
//       ? "Passwords do not match"
//       : "",
//   };

//   return { ...errors };
// };

// here define and export of userSigninForms validation function
// export const userValidateSignin = (values: any): signinFormErrors => {
//   // declae variables of Validation errors
//   let errors: any = {
//     /* phone: !values.phone
//       ? "Phone number field is required"
//       : !/^((\\+91-?)|0)?[0-9]{10}$/.test(values.phone)
//       ? "Phone number must be a valid 10 digit number"
//       : "", */
//     phone: !values.phone
//       ? "Phone number is required"
//       : /^\+?[1-9]\d{1,14}$/.test(values.phone)
//       ? "Phone number must be a valid 1 to 14 digits number"
//       : "",

//     password: !values.password
//       ? "Password field is required"
//       : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,15}$/.test(
//           values.password
//         )
//       ? "Password must be 8-15 chars, include upper, lower, number, and special character"
//       : "",
//   };

//   return { ...errors };
// };

// here define and exporting userRegister validation function
export const userRegisterValidation = (
  defaultValues: any
): signupFormValues => {
  const errors: any = {
    phone: !defaultValues.phone
      ? "Phone number field is required"
      : !/^\+\d{7,15}$/.test(defaultValues.phone)
      ? "Phone number must include country code and be 7-15 digits"
      : "",

    password: !defaultValues.password
      ? "Password field is required"
      : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,15}$/.test(
          defaultValues.password
        )
      ? `Password must be 8-15 chars, include upper, lower, number, and special character`
      : "",

    confirmPassword: !defaultValues.confirmPassword
      ? "Confirm password field is required"
      : defaultValues.password !== defaultValues.confirmPassword
      ? "Password do not match of confirm password"
      : "",
  };
  return { ...errors };
};

// here define and exporting userLogin validation function
export const userLoginValidation = (defaultValues: any): signinFormValues => {
  const errors: any = {
    phone: !defaultValues.phone
      ? "Phone number field is required"
      : !/^\+\d{7,15}$/.test(defaultValues.phone)
      ? "Phone number must include country code and be 7-15 digits"
      : "",

    password: !defaultValues.password
      ? "Password field is required"
      : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,15}$/.test(
          defaultValues.password
        )
      ? `Password must be 8-15 chars, include upper, lower, number, and special character`
      : "",
  };

  return { ...errors };
};

// here define and exporting userForgotPassword validation function
export const userForgotPasswordValidation = (
  defaultValues: any
): forgotPasswordFormValues => {
  const errors: any = {
    old_password: !defaultValues.old_password
      ? "Password field is required"
      : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,15}$/.test(
          defaultValues.old_password
        )
      ? `Password must be 8-15 chars, include upper, lower, number, and special character`
      : "",

    new_password: !defaultValues.new_password
      ? "New Password field is required"
      : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,15}$/.test(
          defaultValues.new_password
        )
      ? `New Password must be 8-15 chars, include upper, lower, number, and special character`
      : "",

    confirmPassword: !defaultValues.confirmPassword
      ? "Confirm password field is required"
      : defaultValues.new_password !== defaultValues.confirmPassword
      ? "New Password do not match of confirm password"
      : "",
  };

  return { ...errors };
};
