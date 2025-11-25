// Consuing to the import some modules and lib for validator
import { z } from "../config/app.js";

// here define and exporting also all user signup validation schema
// userRegister form validator schema
export const userRegisterValidator = z.object({
  phone: z
    .string({ required_error: "Phone is required type string" })
    .trim()
    .min(1, { message: "Phone number is required" })
    .pipe(
      z.string().regex(/^\+?[1-9]\d{1,14}$/, {
        message: `Invalid phone number, please enter the correct phone number`,
      })
    ),

  password: z
    .string({ required_error: "Password is required type string" })
    .trim()
    .min(1, { message: "Password is required" })
    .pipe(
      z
        .string()
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/, {
          message: `Password must be 8 to 15 chars, include upper, lower, number, and special character`,
        })
    ),

  confirmPassword: z
    .string({ required_error: "Confirm Password is required type string" })
    .trim()
    .min(1, { message: "Confirm password is required" }),

  country_code: z
    .string({ required_error: "Country code is required type string" })
    .trim()
    .min(1, { message: "Please select your country" }),
});

// userChangePass form validator schema
export const userChangePassValidator = z.object({
  phone: z
    .string({ required_error: "Phone number is required type string" })
    .trim()
    .min(1, { message: "Phone number is required" })
    .pipe(
      z.string().regex(/^\+?[1-9]\d{1,14}$/, {
        message: `Invalid phone number, please enter the correct phone number`,
      })
    ),

  password: z
    .string({ required_error: "Password is required type string" })
    .trim()
    .min(1, { message: "Password is required" })
    .pipe(
      z
        .string()
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/, {
          message: `Password must be 8 to 15 chars, include upper, lower, number, and special character`,
        })
    ),

  confirmPassword: z
    .string({ required_error: "Confirm password is required type string" })
    .trim()
    .min(1, { message: "Confirm password is required" }),

  country_code: z
    .string({ required_error: "Country code is required type string" })
    .trim()
    .min(1, { message: "Please select your country" }),
});

// userLogin form validator schema
export const userLoginValidator = z.object({
  phone: z
    .string({ required_error: "Phone number is required type string" })
    .trim()
    .min(1, { message: "Phone number is required" })
    .pipe(
      z.string().regex(/^\+?[1-9]\d{1,14}$/, {
        message: `Invalid phone number, please enter the correct phone number`,
      })
    ),

  password: z
    .string({ required_error: "Password is required type string" })
    .trim()
    .min(1, { message: "Password is required" })
    .pipe(
      z
        .string()
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/, {
          message: `Password must be 8 to 15 chars, include upper, lower, number, and special character`,
        })
    ),

  country_code: z
    .string({ required_error: "Country code is required type string" })
    .trim()
    .min(1, { message: "Please select your country" }),
});
