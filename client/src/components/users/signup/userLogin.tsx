import { useState } from "react";
import { Link } from "react-router-dom";
import UserLanding from "./userLanding.tsx";
import LoginForm from "../../forms/loginForm.tsx";
import { routeSignupNavigateList } from "../../models/signupModel.ts";
import { useSigninUserContext } from "../../hooks/contexts/userSignupContext.ts";


// here define UserLogin component
const UserLogin: React.FC = () => {

  // here was declare useState hooks
  const [routeList] = useState<routeSignupNavigateList[]>([
    {
      desc: "Please click here to?",
      links: "/user/change-password",
      linkName: "Forgot Password",
    },
    {
      desc: "Don't have any account?",
      links: "/user/register",
      linkName: "Register",
    },
  ]);

  // here declare login form headin variable
  const loginHeading: string = " Login";

  // destruct data from custom hook
  const { stateValues, formAction, isPending }: any = useSigninUserContext();


  return (
    <>
      {/* start div flex for container of landing page with signup */}
      <div className="flex gap-3 flex-col mx-auto md:mx-11 mb-8">
        <div className="bg-gray-50 border-[2px] rounded-2xl shadow-lg mx-2 md:mx-0 p-6 md:p-8 mt-8">
          {/* start section for user login content*/}
          <section className="body-font overflow-hidden">
            <div className="container px-5 py-7 mx-auto">
              <div className="flex flex-wrap -m-12">
                {/* here was load User landing component */}
                <UserLanding />

                {/* start div for user login form content */}
                <div className="p-8 lg:p-4 mb-0 lg:mb-12 w-full lg:w-1/2 flex flex-col items-start">
                  <div className="w-full max-w-[30rem] mx-auto">
                    {/* heading of login form */}
                    <h1 className="text-2xl text-center font-bold text-blue-950 mb-6">
                      {loginHeading}
                    </h1>

                    {/* here login Login Form component */}
                    <LoginForm stateValues={stateValues} formAction={formAction} isPending={isPending} />

                    {/* start div for links route */}
                    <div>
                      {routeList.map((listItem: any, i: any) => (
                        <div
                          key={i}
                          className="flex items-center justify-center p-1"
                        >
                          <p className="text-base">
                            {listItem.desc}
                            <Link
                              to={listItem.links}
                              className="text-indigo-500 px-2 py-1 transition duration-100 
                          hover:text-indigo-600 active:text-indigo-700"
                            >
                              {listItem.linkName}
                            </Link>
                          </p>
                        </div>
                      ))}
                    </div>
                    {/* end div */}
                  </div>
                </div>
                {/* end div */}
              </div>
            </div>
          </section>
          {/* end section */}
        </div>
      </div>
      {/* end div */}
    </>
  );
};

export default UserLogin;
