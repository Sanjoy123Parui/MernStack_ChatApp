// here import zod library
import * as z from "zod";

// define create profiel input field validation wth zod
export const createProfileValidatorSchema = z.object({

    full_name: z.string()
        .min(1, { message: "Full name is required" })
        .max(100, { message: "Full name cannot exceed 100 characters" }),

    avatar: z.any()
        .optional()
        .refine((file: any) => file === undefined || file instanceof File, {
            message: "Avatar must be a file"
        }),

    gender: z.enum(["Male", "Female"], {
        errorMap: () => ({ message: "Please select a valid gender" })
    }),

    dob: z.string()
        .min(1, { message: "DateOfBirth is required" })
        .refine((value: any) => !isNaN(Date.parse(value)), {
            message: "Please enter a valid date"
        }),

    abouts: z.string()
        .min(1, { message: "Abouts is required" })
        .max(50, { message: "About cannot exceed 50 characters" })

});