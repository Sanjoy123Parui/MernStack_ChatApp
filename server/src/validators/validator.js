// import zod library
import { z } from "zod";

// here was defaine all validation schema

// adminSignup validation

// adminRegisterValidator
const adminRegisterValidator = z.object({

    country: z
        .string({ required_error: "Country is required" })
        .trim()
        .min(1, { message: "Atleast 7 charracter of country" })
        .max(10, { message: "Maximum 10 charracter of country" }),

    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Atleast 10 digits of phone" })
        .max(13, { message: "Maximum 13 digits of phone" }),

    password: z
        .string({ required_error: "Password is required" })
        .min(6, { message: "Password must be total charracters, small charractors, number of 6" })
        .max(8, { message: "Password must be total charracters, small charractors, number of 8" }),

    confirmPassword: z
        .string({ required_error: "Confirm password is required" })
        .min(6, { message: "Confirm password must be total charracters, small charractors, number of 6" })
        .max(8, { message: "Confirm password must be total charracters, small charractors, number of 8" })

});

// adminLoginValidator
const adminLoginValidator = z.object({

    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Atleast 10 digits of phone" })
        .max(13, { message: "Maximum 13 digits of phone" }),

    password: z
        .string({required_error:"Password is required"})
        .min(6, { message: "Password must be total charracters, small charractors, number of 6" })
        .max(8, { message: "Password must be total charracters, small charractors, number of 8" })
        

});


// here export all validation schema
export {

    adminRegisterValidator,
    adminLoginValidator

};