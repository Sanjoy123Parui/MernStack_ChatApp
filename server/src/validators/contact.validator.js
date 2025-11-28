// Consuming to the importing some modules & lib of validations
import { z } from "../config/app.js";

// here define and exporting also all user profile validation schema
// saveContactValidator schema
export const saveContactValidator = z.object({
  contact_userphone: z
    .string({ required_error: "Phone is required type string" })
    .trim()
    .min(1, { message: "Phone number is required" })
    .pipe(
      z.string().regex(/^\+?[1-9]\d{1,14}$/, {
        message: `Invalid phone number, please enter the correct phone number`,
      })
    ),

  contact_username: z
    .string({ required_error: "User name required type string" })
    .trim()
    .min(1, { message: "User name is required" }),

  contact_countrycode: z
    .string({ required_error: "Country code is required type string" })
    .trim()
    .min(1, { message: "Please select your country" }),
});

// editContactValidator schema
export const editContactValidator = z.object({
  contact_userphone: z
    .string({ required_error: "Phone is required type string" })
    .trim()
    .min(1, { message: "Phone number is required" })
    .pipe(
      z.string().regex(/^\+?[1-9]\d{1,14}$/, {
        message: `Invalid phone number, please enter the correct phone number`,
      })
    ),

  contact_username: z
    .string({ required_error: "User name required type string" })
    .trim()
    .min(1, { message: "User name is required" }),

  country_code: z
    .string({ required_error: "Country code is required type string" })
    .trim()
    .min(1, { message: "Please select your country" }),
});
