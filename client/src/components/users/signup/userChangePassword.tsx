import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordChangeForm from '../../forms/passwordChangeForm.tsx';
import { changePasswordFormdata } from '../../models/signupModel.ts';
import { passwordChangeValidatorSchema } from '../../validations/signupValidator.ts';

// here define use changepassword functional component
const UserChangePassword: React.FC = () => {

    // here declare useEffect hook
    useEffect(() => {
        return () => { }
    }, []);

    // declare useForm hook for user change password form data model handle
    const form = useForm<changePasswordFormdata>({
        resolver: zodResolver(passwordChangeValidatorSchema),
        defaultValues: {
            phone: '',
            password: '',
            confirmPassword: ''
        }

    });


    // declare function of handle password change form submit
    let userPasswordSave: SubmitHandler<changePasswordFormdata> = (data: any) => {
        console.log(data);
        form.reset();
    }

    return (
        <>
            {/* start div flex */}
            <div className="flex gap-3 flex-col mx-auto md:mx-11 mb-8">
                <div className="bg-gray-50 border-[2px] rounded-2xl shadow-lg mx-2 md:mx-0 p-6 md:p-8 mt-8">

                    {/* start section content for user change passowrd form and brand,logo */}
                    <section className="body-font overflow-hidden">
                        <div className="container px-5 py-7 mx-auto">
                            <div className="flex flex-wrap -m-12">

                                {/* start div for brand and logo */}
                                <div className="p-12 w-full lg:w-1/2 hidden lg:flex flex-col items-start">
                                    <h2 className="text-2xl title-font font-medium 
                                    text-gray-900 my-4">hiChat is a Chat Web Application</h2>
                                    <p className="leading-relaxed text-lg 
                                    text-gray-700 mb-8">Here is you can messages on your friends and join the group of communities</p>
                                </div>
                                {/* end div */}

                                {/* start div content of user change password form  */}
                                <div className="p-8 lg:p-4 mb-0 lg:mb-12 w-full lg:w-1/2 flex flex-col items-start">
                                    <div className="w-full max-w-[30rem] mx-auto">

                                        {/* here is declare user change password form heading */}
                                        <h1 className="text-2xl text-center font-bold text-blue-950 mb-6">Change Password</h1>

                                        {/*  here define password change functional component */}
                                        <PasswordChangeForm
                                            form={form}
                                            onSubmit={form.handleSubmit(userPasswordSave)}
                                        />

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
}

export default UserChangePassword;