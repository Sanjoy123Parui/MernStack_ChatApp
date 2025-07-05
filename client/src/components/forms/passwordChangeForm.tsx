// here import all libraries and functional components
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Label } from "../ui/label.tsx";
import { Input } from "../ui/input.tsx";
import { Button } from "../ui/button.tsx";
import { useUserTogglePassword } from "../hooks/signuphooks.ts";
import { useSignupUserContext } from "../hooks/contexts/userSignupContext.ts";

// here define change paasrd form functional component
const PasswordChangeForm: React.FC = () => {
  // here was declare custom hooks of toggle password
  const { isTogglePassword, togglePasswordVisiblity }: any =
    useUserTogglePassword(false);

  const { stateValues, formAction, isPending }: any = useSignupUserContext();

  const { phone, password, confirmPassword, errors }: any = stateValues;

  // defined here function was handled getErrorsfield
  const getValidateFieldErrors = (fieldName: any) => stateValues.errors[fieldName] || "";

  if (phone !== "" && password !== "" && confirmPassword !== "") {

    console.log(stateValues);
  }

  return (
    <>

      {/* start change password form */}
      <form action={formAction} className="space-y-8 px-8 pt-6 pb-8 mb-4">
        {/* here declare phone input content */}
        <div className="mb-4">
          <Label className="block text-gray-700 sm:text-md md:text-base lg:text-lg font-bold mb-2">
            Phone
          </Label>
          <Input
            type="number"
            name="phone"
            className={`shadow appearance-none border-[1px] rounded w-full h-10 py-2 px-3
            ${errors?.phone ? "border-red-300 focus:ring-red-700" : "border-gray-300 focus:ring-gray-700"}
            text-gray-900 leading-tight focus:outline-none focus:ring`}
            placeholder="Phone"
          />
          {getValidateFieldErrors("phone") && (
            <p className="text-red-500 text-sm lg:text-base">{errors?.phone}</p>
          )}
        </div>

        {/* here declare password input content */}
        <div className="relative mb-4">
          <Label className="block text-gray-700 sm:text-md md:text-base lg:text-lg font-bold mb-2">
            Password
          </Label>
          <Input
            type={isTogglePassword ? "text" : "password"}
            name="password"
            className={`shadow appearance-none border-[1px] border-gray-300 rounded w-full h-10 py-2 px-3 
            ${errors?.password ? "border-red-300 focus:ring-red-700" : "border-gray-300 focus:ring-gray-700"}
            text-gray-900 leading-tight focus:outline-none focus:ring focus:ring-gray-700`}
            placeholder="Password"
          />
          <button
            type="button"
            onClick={togglePasswordVisiblity}
            className="absolute top-6 md:top-10 right-3 mt-4 transform -translate-y-1/2 text-gray-500"
          >
            {isTogglePassword ? <FaEye /> : <FaEyeSlash />}
          </button>
          {getValidateFieldErrors("password") && (
            <p className="text-red-500 text-sm lg:text-base">{errors?.password}</p>
          )}
        </div>

        {/* here declare confirmPassword input content */}
        <div className="relative mb-4">
          <Label className="block text-gray-700 sm:text-md md:text-base lg:text-lg font-bold mb-2">
            Confirm Password
          </Label>
          <Input
            type={isTogglePassword ? "text" : "password"}
            name="confirmPassword"
            className={`shadow appearance-none border-[1px] border-gray-300 rounded w-full h-10 py-2 px-3
            ${errors?.confirmPassword ? "border-red-300 focus:ring-red-700" : "border-gray-300 focus:ring-gray-700"} 
          text-gray-900 leading-tight focus:outline-none focus:ring focus:ring-gray-700`}
            placeholder="confirmPassword"
          />
          <button
            type="button"
            onClick={togglePasswordVisiblity}
            className="absolute top-6 md:top-10 right-3 mt-4 transform -translate-y-1/2 text-gray-500"
          >
            {isTogglePassword ? <FaEye /> : <FaEyeSlash />}
          </button>
          {getValidateFieldErrors("confirmPassword") && (
            <p className="text-red-500 text-sm lg:text-base">{errors?.confirmPassword}</p>
          )}
        </div>

        {/* here declare save button content */}
        <div className="flex items-center justify-between">
          <Button
            className="w-full h-10 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br 
              focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 text-sm md:text-lg 
             text-white font-medium py-2 px-4 rounded-3xl focus:shadow-outline"
          >
            {isPending ? "...Loading" : "Save"}
          </Button>
        </div>
      </form>
      {/* end form */}
    </>
  );
};

// export Change password form functional component
export default PasswordChangeForm;
