// here import many more functional components and libraries
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import ProfileCreateForm from '../../forms/profileCreateForm.tsx';
import { profileFormdata } from '../../models/profileModel.ts';
import { createProfileValidatorSchema } from '../../validations/profileValidator.ts';

// here define User profile functional component
const UserCreate: React.FC = () => {

    // declare useForm hook for handle with input data of form with validation
    let form: any = useForm<profileFormdata>({
        resolver:zodResolver(createProfileValidatorSchema),
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
            {/* start div-flex for user profile create content */}
            <div className="flex gap-3 flex-col md:mx-11 mb-8">
                <div className="bg-gray-50 border-[2px] rounded-2xl shadow-lg md:p-8 mx-2 md:mx-0 mt-4 p-6">

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

                </div>
            </div>
            {/* end div-flex */}

        </>
    );

}

// export UserProfile functional component
export default UserCreate;