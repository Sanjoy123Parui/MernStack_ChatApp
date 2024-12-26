import { useNavigate } from "react-router-dom";
import { Button } from '../ui/button.tsx';

// here declare not found functional component
const Notfound: React.FC = () => {

    // here declare useNavigate hook for back to home component
    const navigate: any = useNavigate();

    // here define redirectPage function
    const redirectPage = () => {
        navigate('/');
    }

    return (
        <>
            {/* start div flex */}
            <div className="flex gap-3 flex-col md:mx-11 my-16">
                <div className="bg-gray-50 border-[2px] rounded-2xl shadow-lg md:p-8 mx-2 md:mx-0 mt-4 p-6">

                    {/* start div for page-not-found */}
                    <div className="bg-white border-[2px] rounded-2xl shadow-lg py-6 sm:py-8 lg:py-12">
                        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                            <div className="flex flex-col items-center">
                                <h1 className="my-4 text-center text-2xl font-bold text-gray-800 md:text-8xl">404</h1>
                                <h2 className="text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Page not found</h2>
                                <p className="mb-12 max-w-screen-md text-center text-gray-600 md:text-lg">
                                    The page you’re looking for doesn’t exist.
                                </p>
                                <Button type="button" onClick={redirectPage} className="w-1/2 bg-gray-700 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded-xl shadow-lg focus:outline-none focus:shadow-outline">Back</Button>
                            </div>
                        </div>
                    </div>
                    {/* end div */}

                </div>
            </div>
            {/* end div */}
        </>
    )
}

// export Notfound functional component
export default Notfound;