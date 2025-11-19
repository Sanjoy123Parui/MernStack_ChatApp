// Consuing to the import some modules and lib for validator
import { z } from "../config/app.js";

// here define and exporting also all user signup validation schema
// userRegister form validator schema
export const userRegisterValidator = z.object({
  phone: z
    .string({ required_error: "Phone is required type string" })
    .trim()
    .min(1, { message: "Phone is required" }),

  password: z
    .string({ required_error: "Password is required type string" })
    .min(1, { message: "Password is required" }),

  confirmPassword: z
    .string({ required_error: "Confirm Password is required type string" })
    .min(1, { message: "Confirm password is required" }),
});

// userChangePass form validator schema
export const userChangePassValidator = z.object({
  phone: z
    .string({ required_error: "Phone is required type string" })
    .trim()
    .min(1, { message: "Phone is required" }),

  password: z
    .string({ required_error: "Password is required type string" })
    .min(1, { message: "Password is required" }),

  confirmPassword: z
    .string({ required_error: "Confirm password is required type string" })
    .min(1, { message: "Confirm password is required" }),
});

// userLogin form validator schema
export const userLoginValidator = z.object({
  phone: z
    .string({ required_error: "Phone is required type string" })
    .trim()
    .min(1, { message: "Phone is required" }),

  password: z
    .string({ required_error: "Password is required type string" })
    .min(1, { message: "Password is required" }),
});
