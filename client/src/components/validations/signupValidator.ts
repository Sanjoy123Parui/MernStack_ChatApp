// Consuming to the importng some modules
import { z } from "zod";

// here define and exporting userRegister validation function with zod
export const userRegisterValidation: any = z
  .object({
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
    password: z
      .string()
      .trim()
      .min(1, `Password field is required`)
      .pipe(
        z
          .string()
          .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,15}$/,
            `Password must be 8-15 chars, include upper, lower, number, and special character`
          )
      ),
    confirmPassword: z
      .string()
      .trim()
      .min(1, `Confirm password field is required`),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: `Do not match password and confirmPassword`,
    path: ["confirmPassword"],
  });

// here define and exporting userLogin validation function with zod
export const userLoginValidation: any = z.object({
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
  password: z
    .string()
    .trim()
    .min(1, `Password field is required`)
    .pipe(
      z
        .string()
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,15}$/,
          `Password must be 8-15 chars, include upper, lower, number, and special character`
        )
    ),
});
// here define and exporting userForgotPassword validation function with zod
export const userForgotPasswordValidation: any = z
  .object({
    old_password: z
      .string()
      .trim()
      .min(1, `Password field is required`)
      .pipe(
        z
          .string()
          .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,15}$/,
            `Password must be 8-15 chars, include upper, lower, number, and special character`
          )
      ),
    new_password: z
      .string()
      .trim()
      .min(1, `New password field is required`)
      .pipe(
        z
          .string()
          .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,15}$/,
            `New password must be 8-15 chars, include upper, lower, number, and special character`
          )
      ),
    confirmPassword: z
      .string()
      .trim()
      .min(1, `Confirm password field is required`),
  })
  .refine((data: any) => data.new_password === data.confirmPassword, {
    message: `Do not match New password and confirmPassword`,
    path: ["confirmPassword"],
  });
