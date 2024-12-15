// here import zod  library
import * as z from "zod";

// define login input field validation wth zod
export const loginValidatorSchema = z.object({
    phone: z.string()
        .min(1, { message: 'Phone number is required' })
        .max(10, { message: 'Phone number atleast 10 digits' })
        .regex(/^((\\+91-?)|0)?[0-9]{10}$/, { message: 'Phone must be 10 digits' }),

    password: z.string()
        .min(1, { message: 'Password is required' })
        .max(15, { message: 'Password atleast 8 to 15 words' })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,15}$/, { message: 'Password must be letters, special charracters and numbers' })
});



// define register input field validation wth zod
export const registerValidatorSchema = z.object({
    phone: z.string()
        .min(1, { message: 'Phone number is required' })
        .max(10, { message: 'Phone number atleast 10 digits' })
        .regex(/^((\\+91-?)|0)?[0-9]{10}$/, { message: 'Phone must be 10 digits' }),

    password: z.string()
        .min(1, { message: 'Password is required' })
        .max(15, { message: 'Password atleast 8 to 15 words' })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,15}$/, { message: 'Password must be letters, special charracters and numbers' }),

    confirmPassword: z.string()
        .min(1, { message: 'Confirm Password is required' })
}).refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Confirm password are not matching with password'
})