import LoginForm from '../../forms/loginForm.tsx';

// define UserLogin functional component
const UserLogin: React.FC = () => {

    return (

        <>
            <div className="w-full max-w-sm mx-auto">

                {/* here is declare user login form heading */}
                <h1 className="text-2xl text-center font-bold text-blue-950 mb-6">Login</h1>

                {/* loginForm component */}
                <LoginForm />

                {/* start div are content for navigate route in user register form component */}
                <div className="flex items-center justify-center bg-gray-100 p-1">
                    <p>Don't have an account? <a href="#" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Register</a> </p>
                </div>
                {/* end div */}

            </div>
        </>

    );

}

// export user login functional component
export default UserLogin;