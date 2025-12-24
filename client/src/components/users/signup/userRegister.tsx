// import many more functional components and libraries of packages
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import UserLanding from "./userLanding.tsx";
import RegisterForm from "../../forms/registerForm.tsx";
import { useUserRegister } from "../../../hooks/signuphooks.ts";

const UserRegister: React.FC = () => {
  // here was declare register heading
  const registerHeading: string = "User Account";

  // here destruct data from custom hooks
  const { signupState, signupFormAction, signupIsPending }: any =
    useUserRegister();

  // declare some specific hooks of routes regarding
  const location: any = useLocation();

  // here will be appear useEffect hook
  useEffect(() => {
    // here was component mount
    const intervalId: any = setInterval(() => {
      location;
    }, 1000);

    // here was component unmount with cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, [location]);

  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center bg-gradient-to-br from-zinc-100 via-white to-indigo-50 px-2 md:px-8 py-8 md:pb-96 lg:py-8">
        <div
          className="w-full max-w-5xl bg-white border-[1.5px] border-zinc-200 rounded-3xl shadow-2xl p-0 md:p-0 flex 
        flex-col lg:flex-row overflow-hidden"
        >
          {/* start section for user register content*/}
          <section className="w-full flex flex-col lg:flex-row">
            {/* left: landing */}
            <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center bg-zinc-50 p-8 md:p-12">
              <UserLanding />
            </div>

            {/* right: register form */}
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
                  {registerHeading}
                </h1>

                {/* here register  Form component */}

                <RegisterForm
                  signupState={signupState}
                  signupFormAction={signupFormAction}
                  signupIsPending={signupIsPending}
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

export default UserRegister;
