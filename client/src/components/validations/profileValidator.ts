// Consume to importing some modules and lib
import { z } from "zod";

// define and exporting function of userCreateProfileValidation with zod
export const createProfileuserValidation = z.object({
  first_name: z.string().trim().min(1, `First name field is required`),
  last_name: z.string().trim().min(1, `Last name field is required`),
  avatar: z
    .any()
    .refine((file: any) => file instanceof File, {
      message: `Profile image field is required`,
    })
    .refine(
      (fileType: any) =>
        ["image/jpeg", "image/jpg", "image/png"].includes(fileType?.type),
      { message: `Profile image must be JPEG, JPG or PNG File` }
    ),
  dob: z.string().trim().min(1, `Please select your date of birth`),
  gender: z.enum(["Male", "Female", "Other"], {
    errorMap: () => ({
      message: `Select to the gender`,
    }),
  }),
  abouts: z.string().trim().min(1, `Abouts field is required`),
});

// define and exporting function of userEditProfileValidation with zod
export const editProfileuserValidation = z.object({
  first_name: z.string().trim().min(1, `First name field is required`),
  last_name: z.string().trim().min(1, `Last name field is required`),
  dob: z.string().trim().min(1, `Please select your date of birth`),
  gender: z.enum(["Male", "Female", "Other"], {
    errorMap: () => ({
      message: `Select to the gender`,
    }),
  }),
  abouts: z.string().trim().min(1, `Abouts field is required`),
});
