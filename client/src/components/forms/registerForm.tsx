// Consume to the importing some modules
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Label } from "../ui/label.tsx";
import { Input } from "../ui/input.tsx";
import { Button } from "../ui/button.tsx";
import { signupFormProps } from "../models/signupModel.ts";
import { useToggleUserPasswordContext } from "../hooks/contexts/userSignupContext.ts";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// define registrationform component
const RegisterForm: React.FC<signupFormProps> = ({
  signupState,
  signupFormAction,
  signupIsPending,
}) => {
  // here destruct custom hooks values
  const { isRegisterPassword, toggleRegisterPassword }: any =
    useToggleUserPasswordContext();
  const { errors }: any = signupState;

  // declare state manage of phone number with country code
  const [phone, setPhone] = useState<any>(signupState.data.phone || "");
  const [countryCode, setCountryCode] = useState<string>("us");

  // destructure validations error
  const getRegisterValidation = (fieldName: any) => errors?.[fieldName] || "";

  // declare registration form field array
  const registerFormfield: any = [
    {
      fieldLabel: "Phone",
      fieldType: "phone",
      fieldName: "phone",
    },

    {
      fieldLabel: "Password",
      fieldType: isRegisterPassword ? "text" : "password",
      fieldName: "password",
    },

    {
      fieldLabel: "Confirm Password",
      fieldType: isRegisterPassword ? "text" : "password",
      fieldName: "confirmPassword",
    },
  ];

  return (
    <>
      <form
        action={(formData: FormData) => {
          formData.set("phone", phone);
          signupFormAction(formData);
          setPhone(
            `+${phone.startsWith("+") ? phone.split("+")[1].slice(0, 2) : ""}`
          );
        }}
        className="space-y-6 px-2 sm:px-6 md:px-8 pt-2 pb-4"
      >
        {registerFormfield.map((field: any, index: any) => {
          const { fieldLabel, fieldType, fieldName } = field;

          return (
            <div key={index} className="relative mb-4">
              <Label
                className="block text-gray-700 text-base md:text-lg 
              font-semibold mb-2"
              >
                {fieldLabel}
              </Label>

              <div className="relative">
                {fieldName === "phone" ? (
                  <PhoneInput
                    country={countryCode}
                    value={phone}
                    onChange={(value: any, data: any) => {
                      setPhone(`+${value}`);
                      setCountryCode(data.countryCode);
                    }}
                    inputProps={{
                      name: [fieldName],
                      type: [fieldType],
                      required: true,
                    }}
                    containerClass="!w-full"
                    inputClass={`!w-full !h-10 !sm:h-11 !md:h-12 !pl-12 !pr-4 !rounded-lg
                      !text-gray-900 !text-base !md:text-lg
                      !appearance-none !border-[1.5px] ${
                        getRegisterValidation(fieldName)
                          ? "!border-red-300 !focus:ring-red-700"
                          : "!border-indigo-300 !focus:ring-indigo-400"
                      } !bg-white !focus:outline-none !focus:ring !transition-all !duration-200`}
                  />
                ) : (
                  <Input
                    type={fieldType}
                    name={fieldName}
                    placeholder={fieldLabel}
                    className={`appearance-none border-[1.5px] w-full h-10 sm:h-11 md:h-12 py-2 px-3 md:px-4 rounded-lg ${
                      getRegisterValidation(fieldName)
                        ? "border-red-300 focus:ring-red-700"
                        : "border-indigo-300 focus:ring-indigo-400"
                    } text-gray-900 leading-tight focus:outline-none focus:ring transition-all duration-200 bg-white text-base md:text-lg pr-10`}
                  />
                )}

                {fieldName !== "phone" && (
                  <button
                    type="button"
                    onClick={toggleRegisterPassword}
                    className="absolute top-1/2 right-3 -translate-y-1/2 flex items-center text-indigo-400 hover:text-indigo-600 
                  transition-all duration-200"
                  >
                    {isRegisterPassword ? (
                      <FaEye className="w-5 h-5" />
                    ) : (
                      <FaEyeSlash className="w-5 h-5" />
                    )}
                  </button>
                )}
              </div>

              {/* error message */}
              {getRegisterValidation(fieldName) && (
                <p className="text-red-500 text-xs sm:text-sm md:text-base mt-1">
                  {getRegisterValidation(fieldName)}
                </p>
              )}
            </div>
          );
        })}

        {/* submit button */}
        <div className="flex items-center justify-between mt-4">
          <Button
            type="submit"
            disabled={signupIsPending}
            className={`w-full h-10 sm:h-11 md:h-12 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 text-base md:text-lg font-semibold 
          text-white py-2 px-4 rounded-full focus:outline-none transition-all duration-200`}
          >
            {signupIsPending ? "Loading..." : "Create"}
          </Button>
        </div>
      </form>
    </>
  );
};

// exporting registration form component
export default RegisterForm;
