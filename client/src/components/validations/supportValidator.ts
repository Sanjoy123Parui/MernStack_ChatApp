// here import zod library modules for validations are required in support form
import * as z from "zod";

// here was define and define support schema with zod validation function
export const userSupportValidatorSchema = z.object({
  full_name: z.string().min(1, { message: "Full name is required" }),
  from_Phone: z
    .string()
    .min(1, { message: "Your phone is required" })
    .max(10, { message: "Your phone is at least 10 digits" })
    .regex(/^((\\+91-?)|0)?[0-9]{10}$/, {
      message: "Your phone is must be 10 digits",
    }),

  to_Phone: z
    .string()
    .min(1, { message: "To phone is required" })
    .max(10, { message: "To phone is at least 10 digits" })
    .regex(/^((\\+91-?)|0)?[0-9]{10}$/, {
      message: "To phone is must be 10 digits",
    }),

  report_Feedback: z.string().min(1, { message: "Feedback is required" }),
});
