// Consuming to the importing for all module in this component use
import { useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Label } from "../ui/label.tsx";
import { Input } from "../ui/input.tsx";
import { Button } from "../ui/button.tsx";
import { useToggleUserPasswordContext } from "../hooks/contexts/userSignupContext.ts";
import { forgotPasswordFormProps } from "../models/signupModel.ts";

// here define change password form functional component
const PasswordChangeForm: React.FC<forgotPasswordFormProps> = ({
  forgotPasswordState,
  forgotPasswordFormAction,
  forgotPasswordIsPending,
}) => {
  // here was destruct custom hooks of toggle password
  const { isForgotPassword, toggleForgotPassword }: any =
    useToggleUserPasswordContext();

  const { success, errors }: any = forgotPasswordState;

  // defined here function was handled getErrorsfield
  const getUserforgotPassword = (fieldName: any) => errors?.[fieldName] || "";

  // declare forgotPasswordFormfield as dynamic input field
  const forgotPasswordFormfield: any = [
    {
      fieldLabel: "Password",
      fieldType: isForgotPassword ? "text" : "password",
      fieldName: "old_password",
    },

    {
      fieldLabel: "New Password",
      fieldType: isForgotPassword ? "text" : "password",
      fieldName: "new_password",
    },

    {
      fieldLabel: "Confirm Password",
      fieldType: isForgotPassword ? "text" : "password",
      fieldName: "confirmPassword",
    },
  ];

  useEffect(() => {
    if (success) console.log(forgotPasswordState);
  }, [success, forgotPasswordState]);

  return (
    <>
      <form
        action={(formData: FormData) => {
          forgotPasswordFormAction(formData);
        }}
        className="space-y-6 px-2 sm:px-6 md:px-8 pt-2 pb-4"
      >
        {forgotPasswordFormfield.map((field: any, index: any) => {
          const { fieldLabel, fieldType, fieldName }: any = field;
          return (
            <div key={index} className="relative mb-4">
              <Label
                className={`block text-gray-700 text-base md:text-lg font-semibold mb-2`}
              >
                {fieldLabel}
              </Label>
              <div className="relative">
                <Input
                  type={fieldType}
                  name={fieldName}
                  className={`appearance-none border-[1.5px] w-full h-10 sm:h-11 md:h-12 py-2 px-3 md:px-4 rounded-lg ${
                    getUserforgotPassword(fieldName)
                      ? `border-red-300 focus:ring-red-700`
                      : `border-indigo-300 focus:ring-indigo-400`
                  } text-gray-900 leading-tight focus:outline-none focus:ring transition-all duration-200 bg-white text-base md:text-lg pr-10`}
                  placeholder={fieldLabel}
                />
                <button
                  type="button"
                  onClick={toggleForgotPassword}
                  className={`absolute top-1/2 right-3 -translate-y-1/2 flex items-center text-indigo-400 hover:text-indigo-600 
                  transition-all duration-200`}
                >
                  {isForgotPassword ? (
                    <FaEye className="w-5 h-5" />
                  ) : (
                    <FaEyeSlash className="w-5 h-5" />
                  )}
                </button>
              </div>
              {getUserforgotPassword(fieldName) && (
                <p className="text-red-500 text-xs sm:text-sm md:text-base mt-1">
                  {getUserforgotPassword(fieldName)}
                </p>
              )}
            </div>
          );
        })}

        {/* Save button content */}
        <div className="flex items-center justify-between mt-4">
          <Button
            type="submit"
            disabled={forgotPasswordIsPending}
            className={`w-full h-10 sm:h-11 md:h-12 bg-gradient-to-br from-emerald-600 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 text-base md:text-lg font-semibold text-white py-2 px-4 rounded-full focus:outline-none transition-all duration-200`}
          >
            {forgotPasswordIsPending ? "Loading..." : "Save"}
          </Button>
        </div>
      </form>
    </>
  );
};

// export Change password form functional component
export default PasswordChangeForm;
