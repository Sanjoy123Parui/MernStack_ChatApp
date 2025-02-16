// import zod library
import { z } from "zod";

// here was define all validation schema

// adminSignup validation

// adminRegisterValidator
const adminRegisterValidator = z.object({
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

// adminLoginValidator
const adminLoginValidator = z.object({
  phone: z
    .string({ required_error: "Phone is required type string" })
    .trim()
    .min(1, { message: "Phone is required" }),

  password: z
    .string({ required_error: "Password is required type string" })
    .min(1, { message: "Password is required" }),
});

// adminRegisterValidator
const adminChangePassValidator = z.object({
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

// adminProfile validations

// adminNewProfileValidator schema
const adminNewProfileValidator = z
  .object({
    full_name: z
      .string({ required_error: "Admin name is required type string" })
      .trim()
      .min(1, { message: "Admin name is required" }),

    avatar: z
      .object({
        mimetype: z.string({ required_error: "Avatar is required type file" }),
        size: z.number().refine((size) => size <= 5 * 1024 * 1024, {
          message: "File size must not exceed 5MB.",
        }),
      })
      .required({ message: "Avatar file is required" }),

    gender: z
      .string({ required_error: "Gender is required type string" })
      .trim()
      .min(1, { message: "Gender is required" }),

    dob: z
      .string({ required_error: "DateOfBirth is required type string" })
      .trim()
      .min(1, { message: "DateOfBirth is required" }),

    abouts: z
      .string({ required_error: "Abouts is required type string" })
      .trim()
      .min(1, { message: "Abouts is required" }),
  })
  .refine((data) => !!data.avatar, {
    message: "Avatar are not required",
    path: ["avatar"],
  });

// adminProfileImageValidator schema
const adminProfileImageValidator = z
  .object({
    avatar: z
      .object({
        mimetype: z.string({ required_error: "Avatar is type file" }),
        size: z.number().refine((size) => size <= 5 * 1024 * 1024, {
          message: "File size must not exceed 5MB.",
        }),
      })
      .required({ message: "Avatar file is required" }),
  })
  .refine((data) => !!data.avatar, {
    message: "Avatar are not required",
    path: ["avatar"],
  });

// adminProfileUpdateValidator schema
const adminProfileUpdateValidator = z.object({
  full_name: z
    .string({ required_error: "Admin name is required type string" })
    .trim()
    .min(1, { message: "Admin name is required" }),

  dob: z
    .string({ required_error: "DateOdBirth is required type string" })
    .trim()
    .min(1, { message: "DateOfBirth is required" }),

  gender: z
    .string({ required_error: "Gender is required type string" })
    .trim()
    .min(1, { message: "Gender is required" }),

  abouts: z
    .string({ required_error: "Abouts is required type string" })
    .trim()
    .min(1, { message: "Abouts is required" }),
});

// userSignup validations

// userRegisterValidator schema
const userRegisterValidator = z.object({
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

// userLoginValidator schema
const userLoginValidator = z.object({
  phone: z
    .string({ required_error: "Phone is required type string" })
    .trim()
    .min(1, { message: "Phone is required" }),

  password: z
    .string({ required_error: "Password is required type string" })
    .min(1, { message: "Password is required" }),
});

// userChangePassValidator schema
const userChangePassValidator = z.object({
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

// userProfiles validations

// userNewProfileValidators schema
const userNewProfileValidators = z
  .object({
    full_name: z
      .string({ required_error: "User name is required type string" })
      .trim()
      .min(1, { message: "User name is required" }),

    avatar: z
      .object({
        mimetype: z.string({ required_error: "Avatar is required type file" }),
        size: z.number().refine((size) => size <= 5 * 1024 * 1024, {
          message: "File size must not exceed 5MB.",
        }),
      })
      .required({ message: "Avatar file is required" }),

    gender: z
      .string({ required_error: "Gender is required type string" })
      .trim()
      .min(1, { message: "Gender is required" }),

    dob: z
      .string({ required_error: "DateOfBirth is required string" })
      .trim()
      .min(1, { message: "DateOfBirth is required" }),

    abouts: z
      .string({ required_error: "Abouts is required type string" })
      .trim()
      .min(1, { message: "Abouts is required" }),
  })
  .refine((data) => !!data.avatar, {
    message: "Avatar file are not required",
    path: ["avatar"],
  });

// userProfileImageValidator schema
const userProfileImageValidator = z
  .object({
    avatar: z
      .object({
        mimetype: z.string({ required_error: "Avatar is required type file" }),
        size: z.number().refine((size) => size <= 5 * 1024 * 1024, {
          message: "File size must not exceed 5MB.",
        }),
      })
      .required({ message: "Avatar file is required" }),
  })
  .refine((data) => !!data.avatar, {
    message: "Avatar file are not required",
    path: ["avatar"],
  });

// userProfileUpdateValidator schema
const userProfileUpdateValidator = z.object({
  full_name: z
    .string({ required_error: "User name is required type string" })
    .trim()
    .min(1, { message: "User name is required" }),

  gender: z
    .string({ required_error: "Gender is required type string" })
    .trim()
    .min(1, { message: "Gender is required string" }),

  dob: z
    .string({ required_error: "DateOfBirth is required type string" })
    .trim()
    .min(1, { message: "DateOfBirth is required" }),

  abouts: z
    .string({ required_error: "Abouts is required type string" })
    .trim()
    .min(1, { message: "Abouts is required" }),
});

// contact validations

// constactAddValidator schema
const contactAddValidator = z.object({
  contact_phone: z
    .string({ required_error: "Contact phone is required type string" })
    .trim()
    .min(1, { message: "Contact phone is required" }),

  contact_name: z
    .string({ required_error: "Contact name is required type string" })
    .trim()
    .min(1, { message: "Contact name is required" }),
});

// contactUpdateValidator schema
const contactUpdateValidator = z.object({
  contact_phone: z
    .string({ required_error: "Contact phone is required type string" })
    .trim()
    .min(1, { message: "Contact phone is required" }),

  contact_name: z
    .string({ required_error: "Contact name is required type string" })
    .trim()
    .min(1, { message: "Contact name is required type string" }),
});

// here export all validation schema
export {
  adminRegisterValidator,
  adminLoginValidator,
  adminChangePassValidator,
  adminNewProfileValidator,
  adminProfileImageValidator,
  adminProfileUpdateValidator,
  userRegisterValidator,
  userLoginValidator,
  userChangePassValidator,
  userNewProfileValidators,
  userProfileImageValidator,
  userProfileUpdateValidator,
  contactAddValidator,
  contactUpdateValidator,
};
