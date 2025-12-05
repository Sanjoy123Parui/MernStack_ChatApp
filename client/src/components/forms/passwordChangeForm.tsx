// Consuming to the importing for all module in this component use
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Label } from "../ui/label.tsx";
import { Input } from "../ui/input.tsx";
import { Button } from "../ui/button.tsx";
import { useToggleUserPasswordContext } from "../hooks/contexts/userSignupContext.ts";
import { forgotPasswordFormprops } from "../models/signupModel.ts";

// here import all libraries and functional components
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Label } from "../ui/label.tsx";
// import { Input } from "../ui/input.tsx";
// import { Button } from "../ui/button.tsx";
// import { useTogglePasswordContext } from "../hooks/contexts/userContentContext.ts";
// import { forgetPasswordFormprops } from "../models/accountsModel.ts";

/* here define change paasrd form functional component */
// const PasswordChangeForm: React.FC<forgetPasswordFormprops> = ({
//   forgetStateValues,
//   forgetFormAction,
//   forgetIsPending,
// }) => {
//   // here was declare custom hooks of toggle password
//   /*  const { isTogglePassword, togglePasswordVisiblity }: any =
//     useTogglePasswordContext(); */

//   // const { phone, password, confirmPassword, errors }: any = stateValues;
//   const { phone, password, confirmPassword, errors }: any = forgetStateValues;

//   // defined here function was handled getErrorsfield
//   const getUserforgetPassword = (fieldName: any) => errors[fieldName] || "";

//   if (phone !== "" && password !== "" && confirmPassword !== "") {
//     console.log(forgetStateValues);
//   }

//   // declare changePasswordFormfield as dynamic input field
//   const changePasswordFormfield: any = [
//     {
//       fieldLabel: "Phone",
//       fieldType: "number",
//       fieldName: "phone",
//     },
//     {
//       fieldLabel: "Password",
//       // fieldType: isTogglePassword ? "text" : "password",
//       fieldName: "password",
//     },
//     {
//       fieldLabel: "Confirm Password",
//       // fieldType: isTogglePassword ? "text" : "password",
//       fieldName: "confirmPassword",
//     },
//   ];

//   return (
//     <>
//       {/* start change password form */}
//       <form
//         action={(formData: FormData) => {
//           forgetFormAction(formData);
//         }}
//         className="space-y-6 px-2 sm:px-6 md:px-8 pt-2 pb-4"
//       >
//         {changePasswordFormfield.map((field: any, i: any) => {
//           let { fieldLabel, fieldType, fieldName }: any = field;
//           return (
//             <div key={i} className="relative mb-4">
//               <Label className="block text-gray-700 text-base md:text-lg font-semibold mb-2">
//                 {fieldLabel}
//               </Label>
//               <div className="relative">
//                 <Input
//                   type={fieldType}
//                   name={fieldName}
//                   className={`appearance-none border-[1.5px] w-full h-10 sm:h-11 md:h-12 py-2 px-3 md:px-4 rounded-lg
//                   ${
//                     errors?.[fieldName]
//                       ? `border-red-300 focus:ring-red-700`
//                       : `border-indigo-300 focus:ring-indigo-400`
//                   }
//                 text-gray-900 leading-tight focus:outline-none focus:ring transition-all duration-200 bg-white text-base md:text-lg pr-10`}
//                   placeholder={fieldLabel}
//                 />

//                 {fieldLabel !== "Phone" && (
//                   <button
//                     type="button"
//                     // onClick={togglePasswordVisiblity}
//                     className="absolute top-1/2 right-3 -translate-y-1/2 flex items-center text-indigo-400
//                     hover:text-indigo-600 transition-all duration-200"
//                   >
//                     {/* {isTogglePassword ? (
//                       <FaEye className="w-5 h-5" />
//                     ) : (
//                       <FaEyeSlash className="w-5 h-5" />
//                     )} */}
//                   </button>
//                 )}
//               </div>
//               {getUserforgetPassword(fieldName) && (
//                 <p className="text-red-500 text-xs sm:text-sm md:text-base mt-1">
//                   {errors?.[fieldName]}
//                 </p>
//               )}
//             </div>
//           );
//         })}

//         {/*start change password form  button content */}
//         <div className="flex items-center justify-between mt-4">
//           <Button
//             type="submit"
//             disabled={forgetIsPending}
//             className="w-full h-10 sm:h-11 md:h-12 bg-gradient-to-br from-emerald-600 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 text-base md:text-lg font-semibold text-white py-2 px-4 rounded-full focus:outline-none transition-all duration-200"
//           >
//             {forgetIsPending ? "Loading..." : "Save"}
//           </Button>
//         </div>
//         {/*end change password form  button content */}
//       </form>
//       {/* end form */}
//     </>
//   );
// };

/* export Change password form functional component */
// export default PasswordChangeForm;

// here define change password form functional component
const PasswordChangeForm: React.FC<forgotPasswordFormprops> = ({
  forgotPasswordStateValues,
  forgotPasswordFormAction,
  forgotPasswordIsPending,
}) => {
  // here was destruct custom hooks of toggle password
  const { isForgotPassword, toggleForgotPassword }: any =
    useToggleUserPasswordContext();

  const { old_password, new_password, confirmPassword, errors }: any =
    forgotPasswordStateValues;

  // defined here function was handled getErrorsfield
  const getUserforgotPassword = (fieldName: any) => errors[fieldName] || "";

  if (old_password !== "" && new_password !== "" && confirmPassword !== "") {
    console.log(forgotPasswordStateValues);
  }

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
                    errors?.[fieldName]
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
                  {errors?.[fieldName]}
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
