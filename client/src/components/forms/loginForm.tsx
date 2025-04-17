// here import all library og packeges which are using in login form
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Form, FormField, FormItem, FormControl } from "../ui/form.tsx";

import { Label } from "../ui/label.tsx";
import { Input } from "../ui/input.tsx";
import { Button } from "../ui/button.tsx";
import { loginFormProps } from "../models/signupModel.ts";
import { useUserTogglePassword } from "../hooks/signup.ts";

// here define LoginForm functional component
const LoginForm: React.FC<loginFormProps> = ({ form, onSubmit }) => {
  // here was declare custom hooks of toggle password
  const { isTogglePassword, togglePasswordVisiblity }: any =
    useUserTogglePassword(false);

  return (
    <>
      {/* start login Form-content */}
      <Form {...form}>
        {/* start form */}
        <form onSubmit={onSubmit} className="space-y-8 px-8 pt-6 pb-8 mb-4">
          {/* login form phone input */}
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

                  {/* here was trigger error  message of phone input */}
                  {fieldState?.error && (
                    <p className="text-red-500 text-sm lg:text-base">
                      {fieldState?.error.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
          </div>

          {/* login form password input */}
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
                                        rounded w-full py-2 px-3 text-gray-900 leading-tight
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

                  {/* error message of password input trigger */}
                  {fieldState?.error && (
                    <p className="text-red-500 text-sm lg:text-base">
                      {fieldState?.error.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
          </div>

          {/* login form button */}
          <div className="flex items-center justify-between">
            <Button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-950 
                        text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
            >
              Login
            </Button>
          </div>
        </form>
        {/* end form */}
      </Form>
      {/* end Form-content */}
    </>
  );
};

// export LoginForm component
export default LoginForm;
