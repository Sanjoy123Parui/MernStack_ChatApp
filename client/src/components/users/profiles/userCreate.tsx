// here import many more functional components and libraries
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import ProfileCreateForm from '../../forms/profileCreateForm.tsx';
import { profileFormdata } from '../../models/profileModel.ts';
import { createProfileValidatorSchema } from '../../validations/profileValidator.ts';

// here define User profile functional component
const UserCreate: React.FC = () => {

    // here declare useEffect hook
    useEffect(() => {
        return () => { }
    }, []);

    // declare useForm hook for handle with input data of form with validation
    const form: any = useForm<profileFormdata>({
        resolver: zodResolver(createProfileValidatorSchema),
        defaultValues: {
            full_name: '',
            avatar: '',
            gender: '',
            dob: '',
            abouts: ''
        }

    });


    // declare function of handle user profile form submit with submitHandler hook
    const userhandleProfileSubmit: SubmitHandler<profileFormdata> = (data: any) => {
        console.log(data);
        form.reset();
    }

    return (
        <>

            {/* start section content for user create profile */}
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-7 mx-auto">
                    <div className="flex flex-wrap -m-12">
                        <div className="p-8 md:p-4 md:mb-12 w-full flex flex-col items-center">
                            <div className="w-full max-w-md mx-auto">

                                {/* here was PorfileCreateForm component */}
                                <ProfileCreateForm
                                    form={form}
                                    onSubmit={form.handleSubmit(userhandleProfileSubmit)}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end section */}

        </>
    );

}

// export UserProfile functional component
export default UserCreate;