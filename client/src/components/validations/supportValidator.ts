// Consuming to the importng some modules
import { z } from "zod";

// here define and exporting userSupport validation function with zod
export const userSupportValidation = z.object({
  phone: z
    .string()
    .trim()
    .min(1, `Phone number field is required`)
    .pipe(
      z
        .string()
        .regex(
          /^\+\d{7,15}$/,
          `Phone number must included country code and be 7-15 digits`
        )
    ),
  first_name: z.string().trim().min(1, `First name field is required`),
  last_name: z.string().trim().min(1, `Last name field is required`),
  messages: z
    .string()
    .trim()
    .min(1, `Please describe your feedback or technical issues`),
});
