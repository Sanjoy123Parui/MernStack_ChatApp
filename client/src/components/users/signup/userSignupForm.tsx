// import many more functional components and libraries of packages
import UserLogin from './userLogin.tsx';

// here are user signup form functional component
const UserSignupForm: React.FC = () => {

    return (
        <>
            {/* start div-flex for user signup content */}
            <div className="flex gap-3 flex-col md:mx-11 mb-8">
                <div className="bg-gray-100 border-[2px] rounded-2xl shadow-lg md:p-8 mx-2 md:mx-0 mt-8 p-6">

                    {/* start section content for user signup form and brand,logo */}
                    <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 py-7 mx-auto">
                            <div className="flex flex-wrap -m-12">

                                {/* start div for brand and logo */}
                                <div className="p-12 md:w-1/2 hidden md:flex flex-col items-start">
                                    <h2 className="text-2xl title-font font-medium text-gray-900 mt-4 mb-4">hiChat is a chat application of web services</h2>
                                    <p className="leading-relaxed text-lg text-gray-700 mb-8">Here is you can messages on you freinds and join the group of communitties</p>
                                </div>
                                {/* end div */}

                                {/* start div content of user signup form  */}
                                <div className="p-8 md:p-12 w-full md:w-1/2 flex flex-col items-start">
                                    <UserLogin />
                                </div>
                                {/* end div */}

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

// export UserSignupForm functional component
export default UserSignupForm;