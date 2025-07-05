import { Link } from "react-router-dom";
import UserLanding from "./userLanding.tsx";
import PasswordChangeForm from "../../forms/passwordChangeForm.tsx";


// here define use changepassword functional component
const UserChangePassword: React.FC = () => {
  // here was declare heading
  const changeHeading: string = "Change Password";

  return (
    <>
      {/* start div flex */}
      <div className="flex gap-3 flex-col mx-auto md:mx-11 mb-8">
        <div className="bg-gray-50 border-[2px] rounded-2xl shadow-lg mx-2 md:mx-0 p-6 md:p-8 mt-8">
          {/* start section content for user change passowrd form and brand,logo */}
          <section className="body-font overflow-hidden">
            <div className="container px-5 py-7 mx-auto">
              <div className="flex flex-wrap -m-12">
                {/* here was load user landing component */}
                <UserLanding />

                {/* start div content of user change password form  */}
                <div className="p-8 lg:p-4 mb-0 lg:mb-12 w-full lg:w-1/2 flex flex-col items-start">
                  <div className="w-full max-w-[30rem] mx-auto">
                    {/* here is declare user change password form heading */}
                    <h1 className="text-2xl text-center font-bold text-blue-950 mb-6">
                      {changeHeading}
                    </h1>

                    {/*  here define password change functional component */}
                    <PasswordChangeForm />

                    {/* start div are content for navigate route in user login form component */}
                    <div className="flex items-center justify-center p-1">
                      <p className="text-base">
                        Please click here to?{" "}
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
      {/* end div */}
    </>
  );
};

export default UserChangePassword;
