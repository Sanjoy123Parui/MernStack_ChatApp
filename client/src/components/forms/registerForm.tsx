// here import all form packages of libraries
// import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Form, FormField, FormItem, FormControl } from "../ui/form.tsx";

import { Label } from "../ui/label.tsx";
import { Input } from "../ui/input.tsx";
import { Button } from "../ui/button.tsx";
import { registerFormProps } from "../models/signupModel.ts";
import { useUserTogglePassword } from "../hooks/signuphooks.ts";

// here was define register form functional component
const RegisterForm: React.FC<registerFormProps> = ({ form, onSubmit }) => {
  // here was declare custom hooks of toggle password
  const { isTogglePassword, togglePasswordVisiblity }: any =
    useUserTogglePassword(false);

  return (
    <>
      {/* start register form content */}
      <Form {...form}>
        {/* start register form */}
        <form onSubmit={onSubmit} className="space-y-8 px-8 pt-6 pb-8 mb-4">
          {/* register form phone input content */}
          <div className="mb-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field, fieldState }) => (
                <FormItem>
                  <Label
                    className="block text-gray-700 sm:text-md md:text-base 
                                    lg:text-lg font-bold mb-2"
                  >
                    Phone
                  </Label>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      className={`shadow appearance-none border-[1px]
                                            ${
                                              fieldState.error
                                                ? "border-red-500"
                                                : "border-gray-300"
                                            }  
                                            rounded w-full h-10 py-2 px-3 text-gray-900 leading-tight 
                                            focus:outline-none focus:ring focus:ring-gray-700`}
                      placeholder="Phone"
                    />
                  </FormControl>
                  {fieldState?.error && (
                    <p className="text-red-500 text-sm lg:text-base">
                      {fieldState?.error.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
          </div>

          {/* register form password input content */}
          <div className="relative mb-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <FormItem>
                  <Label
                    className="block text-gray-700 sm:text-md md:text-base 
                                lg:text-lg font-bold mb-2"
                  >
                    Password
                  </Label>
                  <FormControl>
                    <Input
                      type={isTogglePassword ? "text" : "password"}
                      {...field}
                      className={`shadow appearance-none border-[1px]
                                        ${
                                          fieldState.error
                                            ? "border-red-500"
                                            : "border-gray-300"
                                        }
                                        rounded w-full h-10 py-2 px-3 text-gray-900 leading-tight
                                        focus:outline-none focus:ring focus:ring-gray-700`}
                      placeholder="Password"
                    />
                  </FormControl>
                  <button
                    type="button"
                    onClick={togglePasswordVisiblity}
                    className="absolute top-8 md:top-11 lg:top-12 right-3 mt-4 transform -translate-y-1/2 text-gray-500"
                  >
                    {isTogglePassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                  {fieldState?.error && (
                    <p className="text-red-500 text-sm lg:text-base">
                      {fieldState?.error.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
          </div>

          {/* register form confirm password input content */}
          <div className="relative mb-4">
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field, fieldState }) => (
                <FormItem>
                  <Label
                    className="block text-gray-700 sm:text-md md:text-base 
                                lg:text-lg font-bold mb-2"
                  >
                    Confirm Password
                  </Label>
                  <FormControl>
                    <Input
                      type={isTogglePassword ? "text" : "password"}
                      {...field}
                      className={`shadow appearance-none border-[1px]
                                                ${
                                                  fieldState.error
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                                }
                                                rounded w-full h-10 py-2 px-3 text-gray-900 leading-tight
                                                focus:outline-none focus:ring focus:ring-gray-700`}
                      placeholder="Confirm Password"
                    />
                  </FormControl>
                  <button
                    type="button"
                    onClick={togglePasswordVisiblity}
                    className="absolute top-8 md:top-11 lg:top-12 right-3 mt-4 transform -translate-y-1/2 text-gray-500"
                  >
                    {isTogglePassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                  {fieldState?.error && (
                    <p className="text-red-500 text-sm lg:text-base">
                      {fieldState?.error.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
          </div>

          {/* register form register button content */}
          <div className="flex items-center justify-between">
            <Button
              type="submit"
              className="w-full h-10 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4  focus:ring-blue-300 dark:focus:ring-blue-800 text-sm md:text-lg font-medium  
                        text-white py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
            >
              Register
            </Button>
          </div>
        </form>
        {/* start register form */}
      </Form>
      {/* end register form content */}
    </>
  );
};

// export register form functional component
export default RegisterForm;
