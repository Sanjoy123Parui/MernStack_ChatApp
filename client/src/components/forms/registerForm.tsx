// here import all form packages of libraries
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Label } from "../ui/label.tsx";
import { Input } from "../ui/input.tsx";
import { Button } from "../ui/button.tsx";
import { signupFormprops } from "../models/signupModel.ts";
import { useUserTogglePassword } from "../hooks/signuphooks.ts";

// here was define register form functional component
const RegisterForm: React.FC<signupFormprops> = ({
  stateValues,
  formAction,
  isPending,
}) => {
  // here was declare custom hooks of toggle password
  const { isTogglePassword, togglePasswordVisiblity }: any =
    useUserTogglePassword(false);

  const { phone, password, confirmPassword, errors }: any = stateValues;

  // defined here function was handled getErrorsfield
  const getRegisterValidateFieldErrors = (fieldName: any) =>
    stateValues.errors[fieldName] || "";

  if (phone !== "" && password !== "" && confirmPassword !== "") {
    console.log(stateValues);
  }

  return (
    <>
      {/* start register form */}
      <form
        action={(formData: FormData) => {
          formAction(formData);
        }}
        className="space-y-8 px-8 pt-6 pb-8 mb-4"
      >
        {[
          {
            fieldLabel: "Phone",
            fieldType: "number",
            fieldName: "phone",
          },
          {
            fieldLabel: "Password",
            fieldType: isTogglePassword ? "text" : "password",
            fieldName: "password",
          },
          {
            fieldLabel: "Confirm Password",
            fieldType: isTogglePassword ? "text" : "password",
            fieldName: "confirmPassword",
          },
        ].map((field: any, i: any) => {
          let { fieldLabel, fieldType, fieldName }: any = field;
          return (
            <div key={i} className="relative mb-4">
              <Label className="block text-gray-700 sm:text-md md:text-base lg:text-lg font-bold mb-2">
                {fieldLabel}
              </Label>
              <Input
                type={fieldType}
                name={fieldName}
                className={`shadow appearance-none border-[1px] rounded w-full h-10 py-2 px-3
                  ${
                    errors?.[fieldName]
                      ? `border-red-300 focus:ring-red-700`
                      : `border-gray-300 focus:ring-gray-700`
                  }
                text-gray-900 leading-tight focus:outline-none focus:ring`}
                placeholder={fieldLabel}
              />
              {fieldLabel !== "Phone" && (
                <button
                  type="button"
                  onClick={togglePasswordVisiblity}
                  className="absolute top-6 md:top-10 right-3 mt-4 transform -translate-y-1/2 text-gray-500"
                >
                  {isTogglePassword ? (
                    <FaEye className="w-4 h-4" />
                  ) : (
                    <FaEyeSlash className="w-4 h-4" />
                  )}
                </button>
              )}
              {getRegisterValidateFieldErrors(fieldName) && (
                <p className="text-red-500 text-sm lg:text-base">
                  {errors?.[fieldName]}
                </p>
              )}
            </div>
          );
        })}

        {/*start register form register button content */}
        <div className="flex items-center justify-between">
          <Button
            type="submit"
            disabled={isPending}
            className="w-full h-10 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 
            focus:ring-blue-300 dark:focus:ring-blue-800 text-sm md:text-lg font-medium text-white py-2 px-4 rounded-3xl 
            focus:outline-none focus:shadow-outline"
          >
            {isPending ? "...Loading" : "Register"}
          </Button>
        </div>
        {/*end register form register button content */}
      </form>
      {/* end form */}
    </>
  );
};

// export register form functional component
export default RegisterForm;
