// here import all libraries and functional components
import { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Form, FormField, FormItem, FormControl } from "../ui/form.tsx";

import { Label } from "../ui/label.tsx";
import { Input } from "../ui/input.tsx";
import { Button } from "../ui/button.tsx";
import { changePasswordFormProps } from "../models/signupModel.ts";

// here define change paasrd form functional component
const PasswordChangeForm: React.FC<changePasswordFormProps> = ({
  form,
  onSubmit,
}) => {
  // declare useState hook for show/hide password
  const [toggleShowPassword, setToggleShowPassword] = useState<boolean>(false);

  // define function for toggle show/hide password
  const visibilityChangepassword = () => {
    setToggleShowPassword(!toggleShowPassword);
  };

  return (
    <>
      {/* start change password form content */}
      <Form {...form}>
        {/* start change password form */}
        <form onSubmit={onSubmit} className="space-y-8 px-8 pt-6 pb-8 mb-4">
          {/* here declare phone input content */}
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
                                            rounded w-full py-2 px-3 text-gray-900 leading-tight 
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

          {/* here declare password input content */}
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
                      type={toggleShowPassword ? "text" : "password"}
                      {...field}
                      className={`shadow appearance-none border-[1px]
                                        ${
                                          fieldState.error
                                            ? "border-red-500"
                                            : "border-gray-300"
                                        }
                                        rounded w-full py-2 px-3 text-gray-900 leading-tight
                                        focus:outline-none focus:ring focus:ring-gray-700`}
                      placeholder="Password"
                    />
                  </FormControl>
                  <button
                    type="button"
                    onClick={visibilityChangepassword}
                    className="absolute top-8 md:top-11 lg:top-12 right-3 mt-4 transform -translate-y-1/2 text-gray-500"
                  >
                    {toggleShowPassword ? <FaEye /> : <FaEyeSlash />}
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

          {/* here declare confirmPassword input content */}
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
                      type={toggleShowPassword ? "text" : "password"}
                      {...field}
                      className={`shadow appearance-none border-[1px]
                                                ${
                                                  fieldState.error
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                                }
                                                rounded w-full py-2 px-3 text-gray-900 leading-tight
                                                focus:outline-none focus:ring focus:ring-gray-700`}
                      placeholder="confirmPassword"
                    />
                  </FormControl>
                  <button
                    type="button"
                    onClick={visibilityChangepassword}
                    className="absolute top-8 md:top-11 lg:top-12 right-3 mt-4 transform -translate-y-1/2 text-gray-500"
                  >
                    {toggleShowPassword ? <FaEye /> : <FaEyeSlash />}
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

          {/* here declare save button content */}
          <div className="flex items-center justify-between">
            <Button className="w-full bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline">
              Save
            </Button>
          </div>
        </form>
        {/* end form */}
      </Form>
      {/* end form content */}
    </>
  );
};

// export Change password form functional component
export default PasswordChangeForm;
