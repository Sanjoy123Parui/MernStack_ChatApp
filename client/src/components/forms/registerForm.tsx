// here import all form packages of libraries
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Label } from "../ui/label.tsx";
import { Input } from "../ui/input.tsx";
import { Button } from "../ui/button.tsx";
import { signupFormprops } from "../models/accountsModel.ts";
import { useTogglePasswordContext } from "../hooks/contexts/userContentContext.ts";

// here was define register form functional component
const RegisterForm: React.FC<signupFormprops> = ({
  signupStateValues,
  singupFormAction,
  signupIsPending,
}) => {
  // here was declare custom hooks of toggle password
  const { isTogglePassword, togglePasswordVisiblity }: any =
    useTogglePasswordContext();

  const { phone, password, confirmPassword, errors }: any = signupStateValues;

  // defined here function was handled getErrorsfield
  const getRegisterValidation = (fieldName: any) => errors[fieldName] || "";

  if (phone !== "" && password !== "" && confirmPassword !== "") {
    console.log(signupStateValues);
  }

  // declare registerFormfield as dynamic
  const registerFormfield: any = [
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
  ];

  return (
    <>
      {/* start register form */}
      <form
        action={(formData: FormData) => {
          singupFormAction(formData);
        }}
        className="space-y-6 px-2 sm:px-6 md:px-8 pt-2 pb-4"
      >
        {registerFormfield.map((field: any, i: any) => {
          let { fieldLabel, fieldType, fieldName }: any = field;
          return (
            <div key={i} className="relative mb-4">
              <Label className="block text-gray-700 text-base md:text-lg font-semibold mb-2">
                {fieldLabel}
              </Label>
              <div className="relative">
                <Input
                  type={fieldType}
                  name={fieldName}
                  className={`appearance-none border-[1.5px] w-full h-10 sm:h-11 md:h-12 py-2 px-3 md:px-4 rounded-lg
                  ${
                    errors?.[fieldName]
                      ? `border-red-300 focus:ring-red-700`
                      : `border-indigo-300 focus:ring-indigo-400`
                  }
                text-gray-900 leading-tight focus:outline-none focus:ring transition-all duration-200 bg-white text-base md:text-lg pr-10`}
                  placeholder={fieldLabel}
                />

                {fieldLabel !== "Phone" && (
                  <button
                    type="button"
                    onClick={togglePasswordVisiblity}
                    className="absolute top-1/2 right-3 -translate-y-1/2 flex items-center text-indigo-400 
                    hover:text-indigo-600 transition-all duration-200"
                  >
                    {isTogglePassword ? (
                      <FaEye className="w-5 h-5" />
                    ) : (
                      <FaEyeSlash className="w-5 h-5" />
                    )}
                  </button>
                )}
              </div>
              {getRegisterValidation(fieldName) && (
                <p className="text-red-500 text-xs sm:text-sm md:text-base mt-1">
                  {errors?.[fieldName]}
                </p>
              )}
            </div>
          );
        })}

        {/*start register form register button content */}
        <div className="flex items-center justify-between mt-4">
          <Button
            type="submit"
            disabled={signupIsPending}
            className="w-full h-10 sm:h-11 md:h-12 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 text-base md:text-lg font-semibold text-white py-2 px-4 rounded-full focus:outline-none transition-all duration-200"
          >
            {signupIsPending ? "Loading..." : "Register"}
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
