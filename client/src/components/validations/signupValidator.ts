// Consuming to the importng some modules
import { signupFormValues, signinFormValues } from "../models/signupModel.ts";

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
  let errors: any = {
    /* phone: !defaultValues.phone
      ? "Phone number field is required"
      : !/^\+?[0-9]\d{4,15}$/.test(defaultValues.phone)
      ? "Phone number must be selected country according for 10 to 15 digit number"
      : "", */

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
  let errors: any = {
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
