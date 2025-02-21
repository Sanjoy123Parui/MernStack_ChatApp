// import many more functional components and libraries of packages
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RegisterForm from "../../forms/registerForm.tsx";
import { registerFormdata } from "../../models/signupModel.ts";
import { registerValidatorSchema } from "../../validations/signupValidator.ts";

const UserRegister: React.FC = () => {
  // here declare useEffect hook
  useEffect(() => {
    return () => {};
  }, []);

  // declare useForm hook for user register data model handle
  const form = useForm<registerFormdata>({
    resolver: zodResolver(registerValidatorSchema),
    defaultValues: {
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  // declare function of handle register form submit
  const userhandleRegisterSubmit: SubmitHandler<registerFormdata> = (
    res: any
  ) => {
    console.log(res);
    form.reset();
  };

  return (
    <>
      {/* start div flex for user register content */}
      <div className="flex gap-3 flex-col mx-auto md:mx-11 mb-8">
        <div className="bg-gray-50 border-[2px] rounded-2xl shadow-lg mx-2 md:mx-0 p-6 md:p-8 mt-8">
          {/* start section content for user Register form and brand,logo */}
          <section className="body-font overflow-hidden">
            <div className="container px-5 py-7 mx-auto">
              <div className="flex flex-wrap -m-12">
                {/* start div for brand and logo */}
                <div className="p-12 w-full lg:w-1/2 hidden lg:flex flex-col items-start">
                  <h2
                    className="text-2xl title-font font-medium 
                                    text-gray-900 my-4"
                  >
                    hiChat is a Chat Web Application
                  </h2>
                  <p
                    className="leading-relaxed text-lg 
                                    text-gray-700 mb-8"
                  >
                    Here is you can messages on your friends and join the group
                    of communities
                  </p>
                </div>
                {/* end div */}

                {/* start div content of user Register form  */}
                <div className="p-8 lg:p-4 mb-0 lg:mb-12 w-full lg:w-1/2 flex flex-col items-start">
                  <div className="w-full max-w-[30rem] mx-auto">
                    {/* here is declare user Register form heading */}
                    <h1 className="text-2xl text-center font-bold text-blue-950 mb-6">
                      Register
                    </h1>

                    {/* RegisterForm component */}
                    <RegisterForm
                      form={form}
                      onSubmit={form.handleSubmit(userhandleRegisterSubmit)}
                    />

                    {/* start div are content for navigate route in user login form component */}
                    <div className="flex items-center justify-center p-1">
                      <p className="text-base">
                        Please click here to{" "}
                        <Link
                          to="/"
                          className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                        >
                          Login
                        </Link>{" "}
                      </p>
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
      {/* start div flex for user register content */}
    </>
  );
};

export default UserRegister;
