// here import all libraries and functional components
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Label } from "../ui/label.tsx";
import { Input } from "../ui/input.tsx";
import { Button } from "../ui/button.tsx";
import { useUserTogglePassword } from "../hooks/signuphooks.ts";
import { signinFormprops } from "../models/signupModel.ts";

// here define change paasrd form functional component
const PasswordChangeForm: React.FC<signinFormprops> = ({
  stateValues,
  formAction,
  isPending,
}) => {
  // here was declare custom hooks of toggle password
  const { isTogglePassword, togglePasswordVisiblity }: any =
    useUserTogglePassword(false);

  const { phone, password, confirmPassword, errors }: any = stateValues;

  // defined here function was handled getErrorsfield
  const getChangePasswordValidateFieldErrors = (fieldName: any) =>
    stateValues.errors[fieldName] || "";

  if (phone !== "" && password !== "" && confirmPassword !== "") {
    console.log(stateValues);
  }

  // declare changePasswordFormfield as dynamic input field
  const changePasswordFormfield: any = [
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
      {/* start change password form */}
      <form
        action={(formData: FormData) => {
          formAction(formData);
        }}
        className="space-y-6 px-2 sm:px-6 md:px-8 pt-2 pb-4"
      >
        {changePasswordFormfield.map((field: any, i: any) => {
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
              {getChangePasswordValidateFieldErrors(fieldName) && (
                <p className="text-red-500 text-xs sm:text-sm md:text-base mt-1">
                  {errors?.[fieldName]}
                </p>
              )}
            </div>
          );
        })}

        {/*start change password form  button content */}
        <div className="flex items-center justify-between mt-4">
          <Button
            type="submit"
            disabled={isPending}
            className="w-full h-10 sm:h-11 md:h-12 bg-gradient-to-br from-emerald-600 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 text-base md:text-lg font-semibold text-white py-2 px-4 rounded-full focus:outline-none transition-all duration-200"
          >
            {isPending ? "Loading..." : "Save"}
          </Button>
        </div>
        {/*end change password form  button content */}
      </form>
      {/* end form */}
    </>
  );
};

// export Change password form functional component
export default PasswordChangeForm;
