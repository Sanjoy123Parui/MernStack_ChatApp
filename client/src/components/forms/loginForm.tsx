// here import all library or packeges which are using in login form
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Label } from "../ui/label.tsx";
import { Input } from "../ui/input.tsx";
import { Button } from "../ui/button.tsx";
import { signinFormProps } from "../models/signupModel.ts";
import { useToggleUserPasswordContext } from "../hooks/contexts/userSignupContext.ts";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// here define LoginForm functional component
const LoginForm: React.FC<signinFormProps> = ({
  signinState,
  signinFormAction,
  signinIsPending,
}) => {
  // here was declare custom hooks of toggle password
  const { isLoginPassword, toggleLoginPassword }: any =
    useToggleUserPasswordContext();

  // const { phone, password, errors }: any = stateValues;
  const { success, errors }: any = signinState;

  // declare state manage of phone number with country code
  const [phone, setPhone] = useState<any>(signinState.data.phone || "");
  const [countryCode, setCountryCode] = useState<string>("us");

  // define function for getLoginValidateError
  const getUserLogin = (fieldName: any) => errors?.[fieldName] || "";

  // declare login form input field as dynamic
  const loginFormfield: any = [
    {
      fieldLabel: "Phone",
      fieldType: "phone",
      fieldName: "phone",
    },
    {
      fieldLabel: "Password",
      fieldType: isLoginPassword ? "text" : "password",
      fieldName: "password",
    },
  ];

  const navigate: any = useNavigate();

  useEffect(() => {
    if (success) {
      console.log(signinState);
      navigate("/user/create-profile");
    }
  }, [success, signinState]);

  return (
    <>
      {/* start login form */}
      <form
        action={(formData: FormData) => {
          formData.set("phone", phone);
          signinFormAction(formData);
          setPhone(
            `+${phone.startsWith("+") ? phone.split("+")[1].slice(0, 2) : ""}`
          );
        }}
        className="space-y-6 px-2 sm:px-6 md:px-8 pt-2 pb-4"
      >
        {/* login forn input start */}
        {loginFormfield.map((field: any, i: any) => {
          let { fieldLabel, fieldType, fieldName }: any = field;
          return (
            <div key={i} className="relative mb-4">
              <Label className="block text-gray-700 text-base md:text-lg font-semibold mb-2">
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
                      name: fieldName,
                      type: fieldType,
                      required: true,
                    }}
                    containerClass="!w-full"
                    inputClass={`!w-full !h-10 !sm:h-11 !md:h-12 !pl-12 !pr-4 !rounded-lg
                      !text-gray-900 !text-base !md:text-lg
                      !appearance-none !border-[1.5px] ${
                        getUserLogin(fieldName)
                          ? "!border-red-300 !focus:ring-red-700"
                          : "!border-indigo-300 !focus:ring-indigo-400"
                      } !bg-white !focus:outline-none !focus:ring !transition-all !duration-200`}
                  />
                ) : (
                  <Input
                    type={fieldType}
                    name={fieldName}
                    className={`appearance-none border-[1.5px] w-full h-10 sm:h-11 md:h-12 py-2 px-3 md:px-4 rounded-lg 
                  ${
                    getUserLogin(fieldName)
                      ? `border-red-300 focus:ring-red-700`
                      : `border-indigo-300 focus:ring-indigo-400`
                  } text-gray-900 leading-tight focus:outline-none focus:ring transition-all duration-200 bg-white text-base md:text-lg pr-10`}
                    placeholder={fieldLabel}
                  />
                )}
                {fieldName === "password" && (
                  <button
                    type="button"
                    onClick={toggleLoginPassword}
                    className="absolute top-1/2 right-3 -translate-y-1/2 flex items-center text-indigo-400 hover:text-indigo-600 
                  transition-all duration-200"
                  >
                    {isLoginPassword ? (
                      <FaEye className="w-5 h-5" />
                    ) : (
                      <FaEyeSlash className="w-5 h-5" />
                    )}
                  </button>
                )}
              </div>
              {getUserLogin(fieldName) && (
                <p className="text-red-500 text-xs sm:text-sm md:text-base mt-1">
                  {getUserLogin(fieldName)}
                </p>
              )}
            </div>
          );
        })}
        {/* login form input content end */}

        {/* start login form button */}
        <div className="flex items-center justify-between mt-4">
          <Button
            type="submit"
            disabled={signinIsPending}
            className="w-full h-10 sm:h-11 md:h-12 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 text-base md:text-lg font-semibold text-white py-2 px-4 rounded-full focus:outline-none transition-all duration-200"
          >
            {signinIsPending ? "Loading..." : "Login"}
          </Button>
        </div>
        {/* end Login button */}
      </form>
      {/* end form */}
    </>
  );
};

// export LoginForm component
export default LoginForm;
