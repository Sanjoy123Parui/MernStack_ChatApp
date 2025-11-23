// Consuming to the importing some modules & lib of validations
import { z } from "../config/app.js";

// here define and exporting also all user profile validation schema
// userNewProfileValidators form validator schema
export const userNewProfileValidators = z
  .object({
    first_name: z
      .string({ required_error: "First name is required type string" })
      .trim()
      .min(1, { message: "First name is required" }),

    last_name: z
      .string({ required_error: "Last name is required type string" })
      .trim()
      .min(1, { message: "Last name is required" }),

    avatar: z
      .object({
        mimetype: z
          .string({ required_error: "Avatar is required type file" })
          .refine(
            (type) => ["image/jpeg", "image/jpg", "image/png"].includes(type),
            {
              message: `Invalid file type. Only JPG, JPEG, PNG are allowed`,
            }
          ),
      })
      .optional(),
    //   .required({ message: "Avatar file is required" }),

    gender: z
      .string({ required_error: "Gender is required type string" })
      .trim()
      .min(1, { message: "Gender is required" }),

    dob: z
      .string({ required_error: "Date of birth is required type string" })
      .trim()
      .min(1, { message: "Date of birth is required" }),

    abouts: z
      .string({ required_error: "Abouts is required type string" })
      .trim()
      .min(1, { message: "Abouts is required" }),
  })
  .refine((data) => !!data.avatar, {
    message: "Avatar file is required",
    path: ["avatar"],
  });

// userprofileUpdateValidators form validator schema
export const userprofileUpdateValidators = z.object({
  first_name: z
    .string({ required_error: "First name is required type string" })
    .trim()
    .min(1, { message: "First name is required" }),

  last_name: z
    .string({ required_error: "Last name is required type string" })
    .trim()
    .min(1, { message: "Last name is required" }),

  gender: z
    .string({ required_error: "Gender is required type string" })
    .trim()
    .min(1, { message: "Gender is required" }),

  dob: z
    .string({ required_error: "Date of birth is required type string" })
    .trim()
    .min(1, { message: "Date of birth is required" }),

  abouts: z
    .string({ required_error: "Abouts is required type string" })
    .trim()
    .min(1, { message: "Abouts is required" }),
});
