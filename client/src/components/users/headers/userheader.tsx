import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import UserSignupNav from './userSignupNav.tsx';
// import UserNav from '../../users/headers/userNav.tsx';

// here was define Header component
const Userheaders: React.FC = () => {

    const [isOpen, setIsOpen] = useState<any>(false);

    return (
        <>

            {/* start nav */}
            <nav className="bg-gradient-to-r from-pink-400 to-purple-500 sticky shadow-md font-sans top-0 z-0 p-4">

                {/* start div container */}
                <div className="container mx-auto relative flex justify-between px-0 md:px-8 items-center">

                    {/* brand name */}
                    <h1 className="text-white text-lg font-bold">hiChat</h1>

                    {/* start button for open drop-down */}
                    <button className="text-white lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                        <BsThreeDotsVertical />
                    </button>
                    {/* end button */}

                    {/* here loaded userSignupNav component */}
                    <UserSignupNav isOpen={isOpen} />

                    {/* here loaded userNav component */}
                    {/* <UserNav isOpen={isOpen} /> */}

                </div>
                {/* end div container */}
            </nav>
            {/* end nav */}
        </>
    );

}

export default Userheaders;