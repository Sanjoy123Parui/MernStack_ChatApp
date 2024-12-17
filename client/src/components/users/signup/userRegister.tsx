// import many more functional components and libraries of packages
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RegisterForm from '../../forms/registerForm.tsx';
import { registerFormdata } from '../../models/signupModel.ts';
import { registerValidatorSchema } from '../../validations/signupValidator.ts';


const UserRegister: React.FC = () => {

    // declare useForm hook for user register data model handle
    let form = useForm<registerFormdata>({
        resolver: zodResolver(registerValidatorSchema),
        defaultValues: {
            phone: '',
            password: '',
            confirmPassword: ''
        }
    });


    // declare function of handle register form submit
    const userhandleRegisterSubmit: SubmitHandler<registerFormdata> = (data: any) => {
        console.log(data);
        form.reset();
    }

    return (
        <>
            {/* start div flex for user register content */}
            <div className="flex gap-3 flex-col md:mx-11 mb-8">
                <div className="bg-gray-50 border-[2px] rounded-2xl shadow-lg md:p-8 mx-2 md:mx-0 mt-8 p-6">

                    {/* start section content for user Register form and brand,logo */}
                    <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 py-7 mx-auto">
                            <div className="flex flex-wrap -m-12">

                                {/* start div for brand and logo */}
                                <div className="p-12 md:w-1/2 hidden md:flex flex-col items-start">
                                    <h2 className="text-2xl title-font font-medium text-gray-900 mt-4 mb-4">hiChat is a chat application of web services</h2>
                                    <p className="leading-relaxed text-lg text-gray-700 mb-8">Here is you can messages on you freinds and join the group of communitties</p>
                                </div>
                                {/* end div */}

                                {/* start div content of user Register form  */}
                                <div className="p-8 md:p-4 md:mb-12 w-full md:w-1/2 flex flex-col items-start">
                                    <div className="w-full max-w-md mx-auto">

                                        {/* here is declare user Register form heading */}
                                        <h1 className="text-2xl text-center font-bold text-blue-950 mb-6">Register</h1>

                                        {/* RegisterForm component */}
                                        <RegisterForm
                                            form={form}
                                            onSubmit={form.handleSubmit(userhandleRegisterSubmit)}
                                        />

                                        {/* start div are content for navigate route in user login form component */}
                                        <div className="flex items-center justify-center bg-gray-100 p-1">
                                            <p>Please click here to <Link to="/" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Login</Link> </p>
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

}

export default UserRegister;