// here import functional components and libraries
import ProfileCreateForm from '../../forms/profileCreateForm.tsx';

// here define User profile functional component
const UserCreate: React.FC = () => {

    return (
        <>
            {/* start div-flex for user create profile content */}
            <div className="flex gap-3 flex-col md:mx-11 mb-8">
                <div className="bg-gray-50 border-[2px] rounded-2xl shadow-lg md:p-8 mx-2 md:mx-0 mt-8 p-6">

                    {/* start section for user create profile form content */}
                    <section className="text-gray-600 body-font relative">
                        <div className="container px-5 md:px-32 py-7 mx-auto">

                            {/* start div for form content */}
                            <div className="bg-white shadow-xl rounded-2xl px-8 pt-6 pb-8 mb-4">
                                {/* this div start from define heading  */}
                                <div className="flex flex-col text-center w-full mb-12">
                                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Create Profile</h1>
                                </div>
                                {/* end div from heading content */}

                                {/* this div start from define form */}
                                <div className="w-full mx-auto">
                                    <ProfileCreateForm />
                                </div>
                                {/* end div form */}
                            </div>
                            {/* end div */}


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