// here import all library og packeges which are using in login form
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Label } from "../ui/label.tsx";
import { Input } from "../ui/input.tsx";
import { Button } from "../ui/button.tsx";
import { signinFormprops } from "../models/signupModel.ts";
import { useUserTogglePassword } from "../hooks/signuphooks.ts";

// here define LoginForm functional component
const LoginForm: React.FC<signinFormprops> = ({ stateValues, formAction, isPending }) => {

  // here declare useNavigate hook
  const navigate: any = useNavigate();

  // here was declare custom hooks of toggle password
  const { isTogglePassword, togglePasswordVisiblity }: any =
    useUserTogglePassword(false);


  const { phone, password, errors }: any = stateValues;


  // define function for getLoginValidateError
  const getLoginValidateFieldErrors = (fieldName: any) => stateValues.errors[fieldName] || "";

  // here declare useEffect hook
  useEffect(() => {
    if (phone !== "" && password !== "") {
      console.log(stateValues);
      navigate("/user/create-profile");
    }
  }, [phone, password, navigate, stateValues]);


  return (
    <>
      {/* start login form */}
      <form action={(formData: FormData) => {
        formAction(formData);
      }} className="space-y-8 px-8 pt-6 pb-8 mb-4">
        {/* start login form phone input */}
        <div className="mb-4">
          <Label className="block text-gray-700 sm:text-md md:text-base lg:text-lg font-bold mb-2">
            Phone
          </Label>
          <Input
            type="number"
            name="phone"
            className={`shadow appearance-none border-[1px] rounded w-full h-10 py-2 px-3
            ${errors?.phone ? `border-red-300 focus:ring-red-700` : `border-gray-300 focus:ring-gray-700`}
          text-gray-900 leading-tight focus:outline-none focus:ring`}
            placeholder="Phone"
          />
          {getLoginValidateFieldErrors("phone") && (
            <p className="text-red-500 text-sm lg:text-base">{errors?.phone}</p>
          )}
        </div>
        {/* end phone */}

        {/* start login form password input */}
        <div className="relative mb-4">
          <Label className="block text-gray-700 sm:text-md md:text-base lg:text-lg font-bold mb-2">
            Password
          </Label>
          <Input
            type={isTogglePassword ? "text" : "password"}
            name="password"
            className={`shadow appearance-none border-[1px] rounded w-full h-10 py-2 px-3
              ${errors?.password ? `border-red-300 focus:ring-red-700` : `border-gray-300 focus:ring-gray-700`}
              text-gray-900 leading-tight focus:outline-none focus:ring`}
            placeholder="Password"
          />
          <button
            type="button"
            onClick={togglePasswordVisiblity}
            className="absolute top-6 md:top-10 right-3 mt-4 transform -translate-y-1/2 text-gray-500"
          >
            {isTogglePassword ? <FaEye /> : <FaEyeSlash />}
          </button>

          {getLoginValidateFieldErrors("password") && (
            <p className="text-red-500 text-sm lg:text-base">{errors?.password}</p>
          )}
        </div>
        {/* end password */}

        {/* start login form button */}
        <div className="flex items-center justify-between">
          <Button
            type="submit"
            disabled={isPending}
            className="w-full h-10 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4  
            focus:ring-blue-300 dark:focus:ring-blue-800 text-sm md:text-lg font-medium  
            text-white py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
          >
            {isPending ? "...Loading" : "Login"}
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
