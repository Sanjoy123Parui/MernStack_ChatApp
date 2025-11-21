// Consuing to the import some modules and lib for validator
import { z } from "../config/app.js";

// here define and exporting also all user signup validation schema
// userRegister form validator schema
export const userRegisterValidator = z.object({
  email: z
    .string({ required_error: "Email is required type string" })
    .trim()
    .email({ message: "Email is required" })
    .pipe(
      z.string().regex(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, {
        message: `Invalid email pattern, please required the correct email`,
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
});

// userChangePass form validator schema
export const userChangePassValidator = z.object({
  email: z
    .string({ required_error: "Email is required type string" })
    .trim()
    .email({ message: "Email is required" })
    .pipe(
      z.string().regex(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, {
        message: `Invalid email pattern, please required the correct email`,
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
    .min(1, { message: "Confirm password is required" }),
});

// userLogin form validator schema
export const userLoginValidator = z.object({
  email: z
    .string({ required_error: "Email is required type string" })
    .trim()
    .email({ message: "Email is required" })
    .pipe(
      z.string().regex(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, {
        message: `Invalid email pattern, please required the correct email`,
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
});
