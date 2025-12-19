import { Link } from "react-router-dom";
import UserLanding from "./userLanding.tsx";
import PasswordChangeForm from "../../forms/passwordChangeForm.tsx";
import { useUserForgotPassword } from "../../hooks/signuphooks.ts";

// here define use changepassword functional component
const UserChangePassword: React.FC = () => {
  // here was declare heading
  const changeHeading: string = "Forgot User";

  // here destruct custom hooks data
  /*  const { forgetStateValues, forgetFormAction, forgetIsPending }: any =
    useUserforgetPassword(); */
  const {
    forgotPasswordState,
    forgotPasswordFormAction,
    forgotPasswordIsPending,
  }: any = useUserForgotPassword();

  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center bg-gradient-to-br from-zinc-100 via-white to-indigo-50 px-2 md:px-8 py-8 md:pb-96 lg:py-8">
        <div
          className="w-full max-w-5xl bg-white border-[1.5px] border-zinc-200 rounded-3xl shadow-2xl p-0 md:p-0 flex 
        flex-col lg:flex-row overflow-hidden"
        >
          {/* start section for user change password content*/}
          <section className="w-full flex flex-col lg:flex-row">
            {/* left: landing */}
            <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center bg-zinc-50 p-8 md:p-12">
              <UserLanding />
            </div>

            {/* right: changePassword form */}
            <div
              className="w-full lg:w-1/2 flex items-center bg-slate-100 justify-center p-6 md:p-12 min-h-[60vh] 
            md:min-h-[70vh]"
            >
              <div
                className="w-full max-w-md md:max-w-lg bg-white rounded-2xl shadow-lg p-6 md:p-12 flex flex-col 
              justify-center mx-auto"
              >
                {/* heading of login form */}
                <h1 className="text-3xl text-center font-extrabold text-indigo-700 mb-8 tracking-tight drop-shadow-sm transition-all duration-300">
                  {changeHeading}
                </h1>

                {/*  here define password change functional component */}
                {/* <PasswordChangeForm
                  forgetStateValues={forgetStateValues}
                  forgetFormAction={forgetFormAction}
                  forgetIsPending={forgetIsPending}
                /> */}
                <PasswordChangeForm
                  forgotPasswordState={forgotPasswordState}
                  forgotPasswordFormAction={forgotPasswordFormAction}
                  forgotPasswordIsPending={forgotPasswordIsPending}
                />

                {/* start div for links route */}
                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 p-1">
                    <span className="text-base text-gray-700 font-medium">
                      Please click here to?{" "}
                    </span>
                    <Link
                      to="/"
                      className="text-indigo-600 font-semibold px-3 py-1 rounded focus:outline-none focus:underline hover:text-indigo-800 transition-all duration-200"
                    >
                      Login
                    </Link>{" "}
                  </div>
                </div>
                {/* end div */}
              </div>
            </div>
          </section>
          {/* end section */}
        </div>
      </div>
    </>
  );
};

export default UserChangePassword;
