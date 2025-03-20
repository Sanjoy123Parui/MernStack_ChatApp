import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import UserLanding from "./userLanding.tsx";
import LoginForm from "../../forms/loginForm.tsx";
import { loginFormdata } from "../../models/signupModel.ts";
import { loginValidatorSchema } from "../../validations/signupValidator.ts";

// here define UserLogin component
const UserLogin: React.FC = () => {
  // here was declare useNaviagte hook
  const navigate: any = useNavigate();

  // here declare login form headin variable
  const loginHeading: string = " Login";

  // here declae useForm hook for login form handling
  const form: any = useForm<loginFormdata>({
    resolver: zodResolver(loginValidatorSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  // here was declare action of event trigger after form fillup
  const userhandleLoginSubmit: SubmitHandler<loginFormdata> = (data: any) => {
    console.log(data);
    navigate("/user/create-profile");
    form.reset();
  };

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
                    <LoginForm
                      form={form}
                      onSubmit={form.handleSubmit(userhandleLoginSubmit)}
                    />

                    {/* start div are content for navigate route in user register form component */}
                    <div className="flex items-center justify-center p-1">
                      <p className="text-base">
                        Don't have any account?
                        <Link
                          to="/user/register"
                          className="text-indigo-500 transition duration-100 
                                                hover:text-indigo-600 active:text-indigo-700"
                        >
                          Register
                        </Link>
                      </p>
                    </div>
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
